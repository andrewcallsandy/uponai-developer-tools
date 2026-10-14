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
