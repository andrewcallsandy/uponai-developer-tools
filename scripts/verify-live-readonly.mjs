import fs from 'node:fs';
import assert from 'node:assert/strict';
import {UponAI} from '../packages/sdk/dist/index.js';
import {Client} from '@modelcontextprotocol/sdk/client/index.js';
import {StdioClientTransport} from '@modelcontextprotocol/sdk/client/stdio.js';
const tokenFile=process.argv[2],workspaceId=Number(process.argv[3]);
if(!tokenFile||!Number.isSafeInteger(workspaceId)||workspaceId<=0)throw Error('Usage: node scripts/verify-live-readonly.mjs PROTECTED_TOKEN_FILE WORKSPACE_ID');
const apiKey=fs.readFileSync(tokenFile,'utf8').trim();
const api=new UponAI({apiKey});
let transport,client;
try{
 const workspaces=await api.listWorkspaces();assert(workspaces.workspaces.some(w=>w.id===workspaceId),'Selected workspace is not accessible');
 await api.listAgents({query:{workspaceId,limit:1}});
 await assert.rejects(()=>new UponAI({apiKey:'invalid-uponai-release-check'}).listWorkspaces(),error=>error.status===401);
 transport=new StdioClientTransport({command:process.execPath,args:['packages/mcp-server/dist/cli.js'],env:{PATH:process.env.PATH,UPONAI_API_KEY:apiKey,UPONAI_WORKSPACE_IDS:String(workspaceId)},stderr:'pipe'});
 client=new Client({name:'uponai-readonly-release-check',version:'0.1.0'});await client.connect(transport);
 const {tools}=await client.listTools();assert.equal(tools.length,19);assert(tools.every(tool=>tool.annotations.readOnlyHint));
 const result=await client.callTool({name:'listAgents',arguments:{workspaceId,limit:1}});assert(!result.isError,'MCP read failed');assert(!JSON.stringify(result).includes(apiKey),'Credential in MCP output');
 const denied=await client.callTool({name:'listAgents',arguments:{workspaceId:workspaceId===1?2:1,limit:1}});assert(denied.isError,'MCP workspace boundary failed');
 console.log(JSON.stringify({sdkWorkspaceDiscovery:'passed',sdkListAgents:'passed',invalidCredentialRejected:'passed',mcpStdioInitialization:'passed',mcpReadOnlyTools:tools.length,mcpListAgents:'passed',mcpWorkspaceRestriction:'passed',writesPerformed:0}));
}catch(error){console.error('Live verification failed:',error.status?'HTTP '+error.status:error.name);process.exitCode=1;}
finally{await client?.close();await transport?.close();}
