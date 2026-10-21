import http from 'node:http';
import test from 'node:test';import assert from 'node:assert/strict';
import {Client} from '@modelcontextprotocol/sdk/client/index.js';
import {InMemoryTransport} from '@modelcontextprotocol/sdk/inMemory.js';
import {UponAI} from '../packages/sdk/dist/index.js';
import {createMcpServer,projectResult} from '../packages/mcp-server/dist/index.js';
import {startHttpServer} from '../packages/mcp-server/dist/http.js';
function apiRecorder(){const requests=[];const api=new UponAI({apiKey:'private-api-key',fetch:async(url,o)=>{requests.push({url,options:o});return new Response(JSON.stringify(url.endsWith('/workspaces')?{workspaces:[{id:1,name:'One',accountSid:'private'},{id:2,name:'Two'}]}:[{agent_id:'a',agent_name:'Public',api_key:'secret',response_engine:{credentials:'secret'}}]),{headers:{'content-type':'application/json'}});}});return {api,requests};}
async function connect(options){const server=await createMcpServer(options);const [a,b]=InMemoryTransport.createLinkedPair();const client=new Client({name:'test',version:'1'});await server.connect(a);await client.connect(b);return {client,close:async()=>{await client.close();await server.close();}};}
test('invalid API credential cannot initialize MCP',async()=>{const api=new UponAI({apiKey:'invalid',fetch:async()=>new Response(null,{status:401})});await assert.rejects(()=>createMcpServer({api}),e=>e.status===401);});
test('read-only default tools are scoped and return no configuration secrets',async()=>{
 const {api,requests}=apiRecorder(),{client,close}=await connect({api,workspaceIds:[1]});try{
 const {tools}=await client.listTools();assert.equal(tools.length,29);assert(tools.every(t=>t.annotations.readOnlyHint));assert(!tools.some(t=>/raw|delete|createPhoneCall/.test(t.name)));
 const result=await client.callTool({name:'getAgent',arguments:{workspaceId:1,agentId:'a'}});assert(!JSON.stringify(result).includes('secret'));assert(JSON.stringify(result).includes('Public'));
 const prior=requests.length;const denied=await client.callTool({name:'getAgent',arguments:{workspaceId:2,agentId:'a'}});assert(denied.isError);assert.equal(requests.length,prior);
 const injected=await client.callTool({name:'getAgent',arguments:{workspaceId:1,agentId:'a',headers:{'X-Actor-Type':'admin'}}});assert(injected.isError);assert.equal(requests.length,prior);
 const listed=await client.callTool({name:'list_workspaces',arguments:{}});assert(!JSON.stringify(listed).includes('Two'));assert(!JSON.stringify(listed).includes('accountSid'));
 }finally{await close();}
});
test('no configured workspaces means discovery only; inaccessible workspace fails closed',async()=>{const {api}=apiRecorder();const {client,close}=await connect({api});try{assert.equal((await client.listTools()).tools.length,1);}finally{await close();}await assert.rejects(()=>createMcpServer({api,workspaceIds:[99]}),/not accessible/);});
test('writes require explicit operation enablement and confirmation',async()=>{
 const {api,requests}=apiRecorder(),{client,close}=await connect({api,workspaceIds:[1],enabledWrites:['endLiveCall']});try{
 const {tools}=await client.listTools();assert(tools.some(t=>t.name==='endLiveCall'&&t.annotations.destructiveHint));assert(!tools.some(t=>t.name==='createPhoneCall'));
 const n=requests.length;assert((await client.callTool({name:'endLiveCall',arguments:{workspaceId:1,callId:'a'}})).isError);assert.equal(requests.length,n);
 await client.callTool({name:'endLiveCall',arguments:{workspaceId:1,callId:'a',confirm:true}});assert.equal(requests.length,n+1);assert.deepEqual(JSON.parse(requests.at(-1).options.body),{workspaceId:1});
 }finally{await close();}
});
test('recursive output allowlist discards arbitrary nested secrets',()=>{const s=JSON.stringify(projectResult({agents:[{id:'a',api_key:'CANARY',tools:[{password:'CANARY'}],name:'safe'}],credentials:{token:'CANARY'},message:'CANARY'}));assert(!s.includes('CANARY'));assert(s.includes('safe'));});
test('HTTP checks auth, Host, Origin and request size before upstream access',async()=>{
 const {api,requests}=apiRecorder(),accessToken='mcp-only-token-'.repeat(3);const server=await startHttpServer({api,workspaceIds:[1]},{accessToken,publicUrl:'https://mcp.example.com',port:0});const base=`http://127.0.0.1:${server.address().port}/mcp`;
 const call=(headers={},body='{}')=>new Promise((resolve,reject)=>{const req=http.request(base,{method:'POST',headers:{host:'mcp.example.com','content-type':'application/json',...headers}},res=>{let text='';res.on('data',c=>text+=c);res.on('end',()=>resolve({status:res.statusCode,json:async()=>JSON.parse(text)}));});req.on('error',reject);req.end(body);});
 try{
 assert.equal((await call()).status,401);assert.equal((await call({authorization:'Bearer invalid'})).status,401);
 assert.equal((await call({authorization:'Bearer '+accessToken,origin:'https://evil.example'})).status,403);
 assert.equal((await call({authorization:'Bearer '+accessToken,host:'evil.example'})).status,421);
 assert.equal((await call({authorization:'Bearer '+accessToken},'x'.repeat(65537))).status,413);assert.equal(requests.length,0);
 const r=await call({authorization:'Bearer '+accessToken,accept:'application/json, text/event-stream'},JSON.stringify({jsonrpc:'2.0',id:1,method:'initialize',params:{protocolVersion:'2025-03-26',capabilities:{},clientInfo:{name:'test',version:'1'}}}));assert.equal(r.status,200);assert((await r.json()).result.serverInfo);assert.equal(requests[0].options.headers.Authorization,'Bearer private-api-key');
 }finally{server.closeAllConnections();await new Promise(r=>server.close(r));}
});

test('simulation launch requires explicit budget, confirmation and stable key without exposing reports',async()=>{
 const {api,requests}=apiRecorder();const {client,close}=await connect({api,workspaceIds:[1],enabledWrites:['launchVoiceSimulationSession']});
 try {
  const args={workspaceId:1,projectId:'project',scenario_ids:['12345678-1234-4123-8123-123456789abc'],max_surcharge:2,idempotency_key:'repeatable-session-key',ai_model:'configured/fast'};
  const before=requests.length;assert((await client.callTool({name:'launchVoiceSimulationSession',arguments:args})).isError);assert.equal(requests.length,before);
  await client.callTool({name:'launchVoiceSimulationSession',arguments:{...args,confirm:true}});
  assert.equal(requests.length,before+1);assert(requests.at(-1).url.endsWith('/voice-simulations/projects/project/sessions?workspaceId=1'));
  assert.equal(JSON.parse(requests.at(-1).options.body).idempotency_key,args.idempotency_key);
  assert.equal(JSON.parse(requests.at(-1).options.body).ai_model,args.ai_model);
  const summary=JSON.stringify(projectResult({id:'session',runs:[{id:'run',score:90,outcome:'pass',report:{evidence:{transcript:'PRIVATE'}}}],agent_patch:{general_prompt:'PRIVATE'}}));
  assert(summary.includes('90'));assert(!summary.includes('PRIVATE'));
 } finally {await close();}
});


test('simulation summary retains voice choices and test counts without import internals', () => {
 assert.deepEqual(projectResult({voice_options:[{key:'demo',voice_id:'custom_demo',name:'Demo',provider:'cartesia',accent:'British',public_user_id:'private'}],model_options:{counterpart:['gpt-4.1-mini'],ai:['configured/model'],defaults:{counterpart:'gpt-4.1-mini'}},test_counts:{total:2,passed:1,failed:1},outcome:'fail'}),
 {voice_options:[{key:'demo',voice_id:'custom_demo',name:'Demo',provider:'cartesia',accent:'British'}],model_options:{counterpart:['gpt-4.1-mini'],ai:['configured/model'],defaults:{counterpart:'gpt-4.1-mini'}},test_counts:{total:2,passed:1,failed:1},outcome:'fail'});
});

test('improvement monitoring omits reviewed prompts and stop requires confirmation',async()=>{
 const {api,requests}=apiRecorder();const {client,close}=await connect({api,workspaceIds:[1],enabledWrites:['stopVoiceSimulationImprovementRun']});
 try {
  const {tools}=await client.listTools();assert(tools.some(t=>t.name==='getVoiceSimulationImprovementRun'));assert(!tools.some(t=>t.name==='approveVoiceSimulationImprovementRun'));
  const args={workspaceId:1,id:'11111111-1111-4111-8111-111111111111'};const before=requests.length;
  assert((await client.callTool({name:'stopVoiceSimulationImprovementRun',arguments:args})).isError);assert.equal(requests.length,before);
  await client.callTool({name:'stopVoiceSimulationImprovementRun',arguments:{...args,confirm:true}});assert(requests.at(-1).url.includes('/improvement-runs/'+args.id+'/stop'));
  const result=projectResult({calls_used:2,ai_used:4,review_fingerprint:'private-review-token',approved_scenarios:[{definition:{persona:'private prompt'}}],events:[{payload:{secret:'private'}}]});
  assert.equal(result.calls_used,2);assert(!JSON.stringify(result).includes('private'));
 } finally {await close();}
});

test('recurring schedules expose scoped summaries and explicit pause, never automatic approval',async()=>{
 const {api,requests}=apiRecorder();const {client,close}=await connect({api,workspaceIds:[1],enabledWrites:['pauseVoiceSimulationSchedule']});try{
  const {tools}=await client.listTools();assert(tools.some(t=>t.name==='getVoiceSimulationSchedule'));assert(!tools.some(t=>t.name==='saveVoiceSimulationSchedule'));
  const args={workspaceId:1,projectId:'11111111-1111-4111-8111-111111111111'};const n=requests.length;
  assert((await client.callTool({name:'pauseVoiceSimulationSchedule',arguments:args})).isError);assert.equal(requests.length,n);
  assert((await client.callTool({name:'pauseVoiceSimulationSchedule',arguments:{...args,workspaceId:2,confirm:true}})).isError);assert.equal(requests.length,n);
  await client.callTool({name:'pauseVoiceSimulationSchedule',arguments:{...args,confirm:true}});assert.match(requests.at(-1).url,/improvement-schedule\/pause\?workspaceId=1$/);
  assert.deepEqual(projectResult({schedule:{status:'enabled',max_cycles:3,notify:{webhook:{url:'secret'}},approved_scenarios:[{prompt:'private'}],config:{cadence:'daily',timezone:'UTC',api_key:'secret'}}}),{schedule:{status:'enabled',max_cycles:3,config:{cadence:'daily',timezone:'UTC'}}});
  assert.deepEqual(projectResult({config:{model:'private'}}),{});
 }finally{await close();}
});

test('project summaries show automation mode; mode changes stay outside MCP',async()=>{
 assert.deepEqual(projectResult({projects:[{id:'p',name:'Suite',automation_mode:'manual',draft:{general_prompt:'private'}}]}),{projects:[{id:'p',name:'Suite',automation_mode:'manual'}]});
 const {api}=apiRecorder();
 await assert.rejects(()=>createMcpServer({api,workspaceIds:[1],enabledWrites:['updateVoiceSimulationProject']}),/Unknown write capability/);
 await assert.rejects(()=>createMcpServer({api,workspaceIds:[1],enabledWrites:['createVoiceSimulationProject']}),/Unknown write capability/);
 const {client,close}=await connect({api,workspaceIds:[1]});try{
  const {tools}=await client.listTools();assert(tools.some(t=>t.name==='getVoiceSimulationProject'));
  assert(!tools.some(t=>['updateVoiceSimulationProject','createVoiceSimulationProject'].includes(t.name)));
 }finally{await close();}
});
test('simulation summaries expose reviewed categories and exact draft identity without handler code',()=>{
 assert.deepEqual(projectResult({draft_fingerprint:'abc',change_scope:['prompts','webhooks','untrusted'],functions:{secret:{code:'private'}},proposal:{patch:{}}}),{draft_fingerprint:'abc',change_scope:['prompts','webhooks']});
});


test('simulation model tiers expose retail display fields without wholesale prices',()=>{
 const result=projectResult({model_options:{ai_details:[{id:'configured/fast',alias:'Fast coach',label:'Fast coach',tier:'Low',per_run_price:0.4,wholesale_per_run:0.1,api_key:'PRIVATE'}]},model_prices:[{scenario_id:'s',ai_model:'configured/fast',label:'Fast coach',tier:'Low',per_run_price:0.4,per_run_cost:0.1}]});
 assert.equal(result.model_options.ai_details[0].label,'Fast coach');assert.equal(result.model_prices[0].per_run_price,0.4);
 const json=JSON.stringify(result);assert(!json.includes('wholesale'));assert(!json.includes('per_run_cost'));assert(!json.includes('PRIVATE'));
});

for (const [tool,route,event] of [['updateAgentWebhookSettings','agents','transcript_updated'],['updateChatAgentWebhookSettings','chat-agents','chat_analyzed']]) {
 test(`${tool}: opt-in, confirmed, scoped webhook-only update with exact version`,async()=>{
  const {api,requests}=apiRecorder();const {client,close}=await connect({api,workspaceIds:[1],enabledWrites:[tool]});
  try {
   const args={workspaceId:1,agentId:'agent_test',version:3,webhook_events:[event]};
   const before=requests.length;
   for(const invalid of [args,{...args,confirm:true,workspaceId:2},{...args,confirm:true,general_prompt:'hidden'},{...args,confirm:true,webhook_events:['invalid']},{workspaceId:1,agentId:'agent_test',confirm:true}])assert((await client.callTool({name:tool,arguments:invalid})).isError);
   assert.equal(requests.length,before);
   assert(!(await client.callTool({name:tool,arguments:{...args,confirm:true}})).isError);
   assert(requests.at(-1).url.endsWith(`/${route}/agent_test?version=3`));
   assert.deepEqual(JSON.parse(requests.at(-1).options.body),{workspaceId:1,webhook_events:[event]});
   await client.callTool({name:tool,arguments:{workspaceId:1,agentId:'agent_test',webhook_url:null,webhook_events:[],confirm:true}});
   assert.deepEqual(JSON.parse(requests.at(-1).options.body),{workspaceId:1,webhook_url:null,webhook_events:[]});
  } finally {await close();}
 });
}
test('webhook summaries expose selections and configured state without destinations or authentication secrets',()=>{
 assert.deepEqual(projectResult({agent_id:'agent_test',webhook_url:'https://customer.example/SECRET',webhook_auth_value:'SECRET',webhook_events:['transcript_updated','chat_ended','SECRET']}),{agent_id:'agent_test',webhook_configured:true,webhook_events:['transcript_updated','chat_ended']});
 assert.deepEqual(projectResult({webhook_url:null,webhook_events:[]}),{webhook_configured:false,webhook_events:[]});
});
