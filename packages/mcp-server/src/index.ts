import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { UponAI, UponAIError } from '@upon-ai/sdk';
import { catalog } from './catalog.js';
export interface McpOptions { api: UponAI; workspaceIds?: readonly number[]; enabledWrites?: readonly string[]; }
const writable=['createPhoneCall','endLiveCall','rerunCallAnalysis'];
const safeFields=new Set(['id','name','agent_id','agent_name','llm_id','model','version','is_published','chat_id','chat_status','call_id','call_type','call_status','direction','duration_ms','start_timestamp','end_timestamp','creation_timestamp','last_modification_timestamp','workspace_id','workspaceId','knowledge_base_id','knowledge_base_name','status','voice_id','voice_name','gender','accent','language','conversation_flow_id','conversation_flow_name','concurrency','current_concurrency','concurrency_limit','active_calls','max_concurrency','success','callId','total','page','limit','totalPages','has_more','pagination_key','paginationKey','paginationKeyVersion','next_cursor']);
const containers=new Set(['data','items','agents','llms','chats','calls','workspaces','knowledge_bases','voices','conversation_flows','versions','pagination']);
/** Intentional lossy projection: no prompts, transcripts, configuration blobs or credentials. */
export function projectResult(value:unknown,depth=0):unknown {
 if(depth>6)return null;
 if(Array.isArray(value))return value.slice(0,100).map(v=>projectResult(v,depth+1));
 if(value&&typeof value==='object'){
  const output:Record<string,unknown>={};
  for(const [key,v]of Object.entries(value)){
   if(containers.has(key)&&(Array.isArray(v)||(v&&typeof v==='object')))output[key]=projectResult(v,depth+1);
   else if(safeFields.has(key)&&(v===null||['string','number','boolean'].includes(typeof v)))output[key]=typeof v==='string'?v.slice(0,300):v;
  }return output;
 }return null;
}
const positive=z.number().int().positive();
const identifier=z.string().min(1).max(200).regex(/^[A-Za-z0-9_-]+$/);
function parameter(schema:any){
 let result:z.ZodTypeAny;
 if(schema.type==='integer'){let n=z.number().int();if(schema.minimum!==undefined)n=n.min(schema.minimum);if(schema.maximum!==undefined)n=n.max(Math.min(schema.maximum,100));result=n;}
 else if(schema.type==='boolean')result=z.boolean();
 else result=z.string().max(200);
 if(schema.enum)result=z.enum(schema.enum as [string,...string[]]);return result;
}
export async function createMcpServer(options:McpOptions):Promise<McpServer>{
 const requested=options.workspaceIds||[];
 if(requested.some(id=>!Number.isSafeInteger(id)||id<=0))throw Error('Invalid workspace allowlist');
 if(options.enabledWrites?.some(op=>!writable.includes(op)))throw Error('Unknown write capability');
 // Authenticate before initialize/tools/list. Dashboard cookies are never used.
 const accessible=await options.api.listWorkspaces();
 const rows=(accessible as any).workspaces;
 if(!Array.isArray(rows)||rows.some((w:any)=>!Number.isSafeInteger(w.id)))throw Error('Invalid workspace discovery response');
 const available=new Set(rows.map((w:any)=>w.id));
 if(requested.some(id=>!available.has(id)))throw Error('Configured workspace is not accessible');
 const allowed=new Set(requested);
 const server=new McpServer({name:'uponai',version:'0.1.0'},{instructions:'UponAI customer API tools. Only configured workspaces are accessible. Read tools return summaries; credentials, transcripts and configuration secrets are omitted. Write tools appear only when explicitly enabled by the operator.'});
 server.registerTool('list_workspaces',{description:'List configured workspaces accessible to this API credential. Without a workspace allowlist, lists accessible workspace names for initial setup only.',inputSchema:{},annotations:{readOnlyHint:true,destructiveHint:false,idempotentHint:true,openWorldHint:true}},async()=>({content:[{type:'text',text:JSON.stringify(projectResult({workspaces:rows.filter((w:any)=>!allowed.size||allowed.has(w.id))}))}]}));
 if(!allowed.size)return server;
 const run=async(operation:string,input:any)=>{
  const workspace=input.query?.workspaceId??input.body?.workspaceId;
  if(!allowed.has(workspace))return {isError:true,content:[{type:'text' as const,text:'Workspace is not enabled for this MCP server.'}]};
  try{const output=await (options.api as any)[operation](input);return {content:[{type:'text' as const,text:JSON.stringify(projectResult(output))}]};}
  catch(e){return {isError:true,content:[{type:'text' as const,text:e instanceof UponAIError&&e.status?`UponAI request failed (HTTP ${e.status}).`:'UponAI request failed.'}]};}
 };
 for(const [operation,meta]of Object.entries(catalog)){
  const shape:Record<string,z.ZodTypeAny>={workspaceId:positive};
  for(const p of meta.parameters){if(p.name==='workspaceId')continue;const v=p.in==='path'?identifier:parameter(p.schema);shape[p.name]=p.required?v:v.optional();}
  server.registerTool(operation,{description:meta.summary+' Returns a safe summary only.',inputSchema:z.object(shape).strict(),annotations:{readOnlyHint:true,destructiveHint:false,idempotentHint:true,openWorldHint:true}},async input=>{
   const args:{query:Record<string,unknown>;path?:Record<string,unknown>}={query:{workspaceId:input.workspaceId}};
   for(const p of meta.parameters){if(input[p.name]===undefined)continue;if(p.in==='path')(args.path||={})[p.name]=input[p.name];else args.query[p.name]=input[p.name];}
   return run(operation,args);
  });
 }
 for(const operation of options.enabledWrites||[]){
  const shape:Record<string,z.ZodTypeAny>=operation==='createPhoneCall'?{workspaceId:positive,agentId:identifier,fromNumber:z.string().regex(/^\+[1-9]\d{6,14}$/),toNumber:z.string().regex(/^\+[1-9]\d{6,14}$/),confirm:z.literal(true)}:{workspaceId:positive,callId:identifier,confirm:z.literal(true)};
  server.registerTool(operation,{description:operation==='createPhoneCall'?'Place a real outbound call. Requires explicit operator enablement and confirmation.':'Change a call: '+operation+'. Requires explicit operator enablement and confirmation.',inputSchema:z.object(shape).strict(),annotations:{readOnlyHint:false,destructiveHint:true,idempotentHint:false,openWorldHint:true}},async(input:any)=>{
   const {workspaceId,callId,confirm,...fields}=input;
   return run(operation,operation==='createPhoneCall'?{body:{workspaceId,...fields}}:{path:{callId},body:{workspaceId}});
  });
 }
 return server;
}
