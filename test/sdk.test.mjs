import test from 'node:test';
import assert from 'node:assert/strict';
import {UponAI,UponAIError,UponAIValidationError} from '../packages/sdk/dist/index.js';
const json=(v,status=200,headers={})=>new Response(JSON.stringify(v),{status,headers:{'Content-Type':'application/json',...headers}});
test('typed method constructs authenticated request without forwarding credentials to redirects',async()=>{
 let request;const sdk=new UponAI({apiKey:'test-token',fetch:async(url,options)=>{request={url,options};return json({agent_id:'agent_1'});}});
 assert.deepEqual(await sdk.getAgent({path:{agentId:'agent_1'},query:{workspaceId:2,version:0}}),{agent_id:'agent_1'});
 assert.equal(request.url,'https://api.upon-ai.com/api/v1/agents/agent_1?workspaceId=2&version=0');assert.equal(request.options.redirect,'error');assert.equal(request.options.credentials,'omit');assert.equal(request.options.headers.Authorization,'Bearer test-token');
});
test('path traversal, arbitrary headers and unknown query inputs never reach fetch',async()=>{
 let count=0;const sdk=new UponAI({apiKey:'test',fetch:async()=>{count++;return json({});}});
 for(const id of ['..','../admin','x/y','%2f','x?token=y','x#fragment'])await assert.rejects(()=>sdk.getAgent({path:{agentId:id},query:{workspaceId:1}}),UponAIValidationError);
 await assert.rejects(()=>sdk.getAgent({path:{agentId:'id'},query:{workspaceId:1},headers:{'X-Actor-Type':'admin'}}),UponAIValidationError);
 await assert.rejects(()=>sdk.listAgents({query:{workspaceId:1,admin:true}}),UponAIValidationError);assert.equal(count,0);
});
test('base URL requires HTTPS origin and numeric parameters are checked',async()=>{
 for(const baseUrl of ['http://api.example.com','https://x.example/path','https://user:pass@x.example','https://x.example?x=1'])assert.throws(()=>new UponAI({apiKey:'x',baseUrl}),UponAIValidationError);
 const sdk=new UponAI({apiKey:'x'});await assert.rejects(()=>sdk.listAgents({query:{workspaceId:'1'}}),UponAIValidationError);
 await assert.rejects(()=>sdk.listAgents({query:{workspaceId:1,limit:1001}}),UponAIValidationError);
});
test('retry bounded transient GET failures but never retry a call creation',async()=>{
 let count=0;const sdk=new UponAI({apiKey:'x',fetch:async()=>++count===1?json({},503,{'retry-after':'0'}):json([])});
 await sdk.listAgents({query:{workspaceId:1}});assert.equal(count,2);
 count=0;const writes=new UponAI({apiKey:'x',fetch:async()=>{count++;return json({api_key:'secret'},503);}});
 await assert.rejects(()=>writes.createPhoneCall({body:{agentId:'a',fromNumber:'+15555550100',toNumber:'+15555550101'}}),e=>e.status===503&&!e.message.includes('secret'));assert.equal(count,1);
});
test('credentials remain isolated across concurrent clients',async()=>{
 const tokens=[];const fetch=async(u,o)=>{tokens.push(o.headers.Authorization);return json({workspaces:[]});};
 await Promise.all([new UponAI({apiKey:'one',fetch}).listWorkspaces(),new UponAI({apiKey:async()=>'two',fetch}).listWorkspaces()]);assert.deepEqual(tokens.sort(),['Bearer one','Bearer two']);
});
test('cancellation, malformed JSON and oversized responses produce safe errors',async()=>{
 const abort=new AbortController();abort.abort();const sdk=new UponAI({apiKey:'x',fetch:async(u,o)=>{o.signal.throwIfAborted();return json({});}});
 await assert.rejects(()=>sdk.listWorkspaces({}, {signal:abort.signal}),/cancelled/);
 await assert.rejects(()=>new UponAI({apiKey:'x',fetch:async()=>new Response('{',{headers:{'Content-Type':'application/json'}})}).listWorkspaces(),/Invalid JSON/);
 await assert.rejects(()=>new UponAI({apiKey:'x',fetch:async()=>new Response('x',{headers:{'content-length':'6000000'}})}).listWorkspaces(),/exceeds/);
});
test('204 and binary responses have correct runtime representations',async()=>{
 const sdk=new UponAI({apiKey:'x',fetch:async()=>new Response(null,{status:204})});assert.equal(await sdk.deleteAgent({path:{agentId:'a'},query:{workspaceId:1}}),undefined);
 const binary=new UponAI({apiKey:'x',fetch:async()=>new Response(new Uint8Array([1,2]),{headers:{'content-type':'audio/mpeg'}})});assert(await binary.streamVoiceSample({path:{voiceId:'v'},query:{workspaceId:1}}) instanceof Blob);
});
test('pagination delegates documented cursor handling and stops repeated cursors',async()=>{
 const sdk=new UponAI({apiKey:'x',fetch:async()=>json([{agent_id:'a'}])});const values=[];
 for await(const x of sdk.paginate({operation:'listAgents',input:{query:{workspaceId:1}},items:p=>p,next:()=>undefined}))values.push(x);assert.equal(values.length,1);
 await assert.rejects(async()=>{for await(const x of sdk.paginate({operation:'listAgents',input:{query:{workspaceId:1}},items:p=>p,next:(p,args)=>args})){}},/cursor repeated/);
});
test('simulation audio permits larger recordings while retaining a bounded response',async()=>{
 const args={query:{workspaceId:1},path:{sessionId:'session',runId:'run'}};
 const payload=new Uint8Array(6*1024*1024);
 const sdk=new UponAI({apiKey:'x',fetch:async()=>new Response(payload,{headers:{'content-type':'audio/wav','content-length':String(payload.length)}})});
 assert.equal((await sdk.getVoiceSimulationRecording(args)).size,payload.length);
 const oversized=new UponAI({apiKey:'x',fetch:async()=>new Response('x',{headers:{'content-length':String(65*1024*1024)}})});
 await assert.rejects(()=>oversized.getVoiceSimulationRecording(args),/exceeds/);
});

test('improvement approval forwards the selected model with reviewed approval',async()=>{
 let request;const sdk=new UponAI({apiKey:'test',fetch:async(url,options)=>{request={url,options};return json({ai_model:'configured/model'});}});
 const body={confirm:true,review_fingerprint:'reviewed',max_calls:6,max_ai:12,max_surcharge:0,ai_model:'configured/model'};
 await sdk.approveVoiceSimulationImprovementRun({path:{id:'11111111-1111-4111-8111-111111111111'},query:{workspaceId:1},body});
 assert.deepEqual(JSON.parse(request.options.body),body);
});

test('recurring improvement approval sends the reviewed policy using PUT',async()=>{
 let request;const sdk=new UponAI({apiKey:'test-token',fetch:async(url,options)=>{request={url,options};return json({schedule:{status:'enabled'}});}});
 const body={confirm:true,improvement_run_id:'11111111-1111-4111-8111-111111111111',review_fingerprint:'reviewed',trigger:{cadence:'weekly',weekday:1,timezone:'America/New_York',time:'09:00',call_threshold:100,combination:'both'},max_calls:6,max_ai:12,max_surcharge:0,max_cycles:10,ai_model:'chosen',new_scenarios:1};
 await sdk.saveVoiceSimulationSchedule({path:{projectId:'11111111-1111-4111-8111-111111111111'},query:{workspaceId:1},body});assert.equal(request.options.method,'PUT');assert.deepEqual(JSON.parse(request.options.body),body);
});

test('project automation mode is sent with PATCH and creation accepts the mode',async()=>{
 const requests=[];const sdk=new UponAI({apiKey:'test-token',fetch:async(url,options)=>{requests.push({url,options});return json({id:'11111111-1111-4111-8111-111111111111',automation_mode:'manual'});}});
 const path={projectId:'11111111-1111-4111-8111-111111111111'};
 const updated=await sdk.updateVoiceSimulationProject({path,query:{workspaceId:1},body:{automation_mode:'manual'}});
 assert.equal(updated.automation_mode,'manual');assert.equal(requests[0].options.method,'PATCH');
 assert(requests[0].url.endsWith('/api/v1/voice-simulations/projects/'+path.projectId+'?workspaceId=1'));
 assert.deepEqual(JSON.parse(requests[0].options.body),{automation_mode:'manual'});
 await sdk.createVoiceSimulationProject({query:{workspaceId:1},body:{name:'Manual suite',source_agent_id:'agent',automation_mode:'manual'}});
 assert.equal(requests[1].options.method,'POST');assert.equal(JSON.parse(requests[1].options.body).automation_mode,'manual');
});
