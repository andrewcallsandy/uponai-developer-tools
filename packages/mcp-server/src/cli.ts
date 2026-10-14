#!/usr/bin/env node
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { UponAI } from '@upon-ai/sdk';
import { createMcpServer } from './index.js';
import { startHttpServer } from './http.js';
async function main(){
 const token=process.env.UPONAI_API_KEY;if(!token)throw Error('Set UPONAI_API_KEY to a customer API token');
 const workspaceIds=(process.env.UPONAI_WORKSPACE_IDS||'').split(',').filter(Boolean).map(Number);
 const enabledWrites=(process.env.UPONAI_MCP_WRITE_OPERATIONS||'').split(',').filter(Boolean);
 const api=new UponAI({apiKey:token,baseUrl:process.env.UPONAI_API_URL});
 const config={api,workspaceIds,enabledWrites};
 const args=process.argv.slice(2);
 if(args.length===0){const server=await createMcpServer(config);await server.connect(new StdioServerTransport());}
 else if(args.length===1&&args[0]==='--http'){
  if(process.env.UPONAI_MCP_ACCESS_TOKEN===token)throw Error('MCP and API credentials must differ');
  await startHttpServer(config,{accessToken:process.env.UPONAI_MCP_ACCESS_TOKEN||'',publicUrl:process.env.UPONAI_MCP_PUBLIC_URL||'',port:Number(process.env.PORT||7093)});
 }else throw Error('Usage: uponai-mcp [--http]');
}
main().catch(()=>{console.error('UponAI MCP startup failed. Check credentials, workspace permissions, and transport configuration.');process.exitCode=1;});
