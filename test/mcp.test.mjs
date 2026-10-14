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
 const {tools}=await client.listTools();assert.equal(tools.length,19);assert(tools.every(t=>t.annotations.readOnlyHint));assert(!tools.some(t=>/raw|delete|createPhoneCall/.test(t.name)));
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
