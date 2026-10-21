import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { UponAI, UponAIError } from '@upon-ai/sdk';
import { catalog } from './catalog.js';
import { voiceWebhookEvents, chatWebhookEvents } from './webhookEvents.js';
export interface McpOptions { api: UponAI; workspaceIds?: readonly number[]; enabledWrites?: readonly string[]; }
const writable=['updateAgentWebhookSettings','updateChatAgentWebhookSettings','createPhoneCall','endLiveCall','rerunCallAnalysis','estimateVoiceSimulationSession','launchVoiceSimulationSession','cancelVoiceSimulationSession','stopVoiceSimulationImprovementRun','pauseVoiceSimulationSchedule'];
const safeFields=new Set(['id','name','agent_id','agent_name','llm_id','model','version','is_published','chat_id','chat_status','call_id','call_type','call_status','direction','duration_ms','start_timestamp','end_timestamp','creation_timestamp','last_modification_timestamp','workspace_id','workspaceId','knowledge_base_id','knowledge_base_name','status','voice_id','voice_name','gender','accent','language','conversation_flow_id','conversation_flow_name','concurrency','current_concurrency','concurrency_limit','active_calls','max_concurrency','success','callId','total','page','limit','totalPages','has_more','pagination_key','paginationKey','paginationKeyVersion','next_cursor','project_id','session_id','source_agent_id','draft_revision','draft_fingerprint','scenario_id','score','outcome','error_code','created_at','completed_at','cancel_requested_at','enabled','workspace_enabled','provider_allowed','per_run_price','monthly_price','currency','max_concurrent_runs','max_session_runs','run_count','maximum_surcharge','max_audio_seconds','revision','key','provider','passed','failed','inconclusive','errors','cancelled','pending','counterpart','ai','max_auto_calls','max_auto_ai','max_calls','max_ai','calls_used','ai_used','iteration','max_surcharge','surcharge_reserved','approval_version','phase','reason','current_session_id','max_cycles','cycles_started','pending_calls','next_run_at','last_campaign_id','new_scenarios','ai_model','cadence','timezone','time','weekday','month_day','call_threshold','combination','automation_mode','label','alias','tier']);
const containers=new Set(['data','items','agents','llms','chats','calls','workspaces','knowledge_bases','voices','conversation_flows','versions','pagination','projects','scenarios','sessions','runs','estimate','voice_options','model_options','defaults','test_counts','improvement_runs','schedule','ai_details','model_prices']);
/** Intentional lossy projection: no prompts, transcripts, configuration blobs or credentials. */
export function projectResult(value:unknown,depth=0,schedule=false):unknown {
 if(depth>6)return null;
 if(Array.isArray(value))return value.slice(0,100).map(v=>projectResult(v,depth+1));
 if(value&&typeof value==='object'){
  const output:Record<string,unknown>={};
  for(const [key,v]of Object.entries(value)){
   if(key==='webhook_url')output.webhook_configured=typeof v==='string'&&v.length>0;
   else if(key==='webhook_events'&&Array.isArray(v))output[key]=v.filter(x=>[...voiceWebhookEvents,...chatWebhookEvents].includes(x));
   else if(key==='change_scope'&&Array.isArray(v))output[key]=v.filter(x=>['prompts','tools','flow','settings','analysis','knowledge','webhooks'].includes(x));
   else if(['counterpart','ai'].includes(key)&&Array.isArray(v))output[key]=v.filter(x=>typeof x==='string').slice(0,100).map(x=>x.slice(0,200));
   else if(key==='config'&&schedule&&v&&typeof v==='object')output[key]=projectResult(v,depth+1);
   else if(containers.has(key)&&(Array.isArray(v)||(v&&typeof v==='object')))output[key]=projectResult(v,depth+1,key==='schedule');
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
 const server=new McpServer({name:'uponai',version:'0.1.3'},{instructions:'UponAI customer API tools. Only configured workspaces are accessible. Read tools return summaries; credentials, transcripts and configuration secrets are omitted. Write tools appear only when explicitly enabled by the operator.'});
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
  if(operation==='updateAgentWebhookSettings'||operation==='updateChatAgentWebhookSettings') {
   const chat=operation==='updateChatAgentWebhookSettings';
   const url=z.string().url().refine(value=>{const parsed=new URL(value);return ['http:','https:'].includes(parsed.protocol)&&!parsed.username&&!parsed.password;},'Use an HTTP(S) receiving URL without embedded credentials.').nullable();
   server.registerTool(operation,{description:'Update the customer webhook destination and event selections through the platform proxy. Omitted settings are preserved. Subscription changes require an editable version; publish it separately to activate. Requires confirmation.',inputSchema:z.object({workspaceId:positive,agentId:identifier,version:z.number().int().nonnegative().optional(),webhook_url:url.optional(),webhook_events:z.array(z.enum(chat?chatWebhookEvents:voiceWebhookEvents)).optional(),confirm:z.literal(true)}).strict(),annotations:{readOnlyHint:false,destructiveHint:true,idempotentHint:true,openWorldHint:true}},async(input:any)=>{
    const {workspaceId,agentId,version,confirm,...settings}=input;
    if(!Object.keys(settings).length)return {isError:true,content:[{type:'text' as const,text:'Provide webhook_url or webhook_events.'}]};
    return run(chat?'updateChatAgent':'updateAgent',{path:{agentId},...(version===undefined?{}:{query:{version}}),body:{workspaceId,...settings}});
   });
   continue;
  }
  if(operation==='pauseVoiceSimulationSchedule') {
   server.registerTool(operation,{description:'Pause future scheduled improvement cycles. Current work continues until explicitly stopped. Requires confirmation.',inputSchema:z.object({workspaceId:positive,projectId:z.string().uuid(),confirm:z.literal(true)}).strict(),annotations:{readOnlyHint:false,destructiveHint:false,idempotentHint:true,openWorldHint:true}},async(input:any)=>run(operation,{query:{workspaceId:input.workspaceId},path:{projectId:input.projectId}}));
   continue;
  }
  if(operation==='stopVoiceSimulationImprovementRun') {
   server.registerTool(operation,{description:'Stop automatic improvement work and request cancellation of active simulation calls. Incurred usage remains billable. Requires explicit confirmation.',inputSchema:z.object({workspaceId:positive,id:z.string().uuid(),confirm:z.literal(true)}).strict(),annotations:{readOnlyHint:false,destructiveHint:true,idempotentHint:true,openWorldHint:true}},async(input:any)=>run(operation,{query:{workspaceId:input.workspaceId},path:{id:input.id},body:{}}));
   continue;
  }
  if(operation.includes('VoiceSimulation')) {
   const cancel=operation==='cancelVoiceSimulationSession';
   const launch=operation==='launchVoiceSimulationSession';
   const shape:Record<string,z.ZodTypeAny>=cancel?{workspaceId:positive,sessionId:identifier,confirm:z.literal(true)}:{workspaceId:positive,projectId:identifier,ai_model:z.string().min(1).max(200).optional(),scenario_ids:z.array(z.string().uuid()).min(1).max(100),repetitions:z.number().int().min(1).max(10).optional(),...(launch?{max_surcharge:z.number().finite().nonnegative(),idempotency_key:z.string().min(1).max(128),confirm:z.literal(true)}:{})};
   server.registerTool(operation,{description:cancel?'Cancel an isolated voice simulation session.':launch?'Launch real voice simulations using saved scenarios. Voice usage and the accepted surcharge may be billed. Requires an estimate, explicit confirmation, and an idempotency key.':'Estimate the run surcharge for saved voice simulation scenarios. Voice usage and monthly access are billed separately.',inputSchema:z.object(shape).strict(),annotations:{readOnlyHint:!launch&&!cancel,destructiveHint:launch||cancel,idempotentHint:true,openWorldHint:true}},async(input:any)=>{
    const {workspaceId,projectId,sessionId,confirm,...body}=input;
    return run(operation,{query:{workspaceId},path:cancel?{sessionId}:{projectId},body});
   });
   continue;
  }
  const shape:Record<string,z.ZodTypeAny>=operation==='createPhoneCall'?{workspaceId:positive,agentId:identifier,fromNumber:z.string().regex(/^\+[1-9]\d{6,14}$/),toNumber:z.string().regex(/^\+[1-9]\d{6,14}$/),confirm:z.literal(true)}:{workspaceId:positive,callId:identifier,confirm:z.literal(true)};
  server.registerTool(operation,{description:operation==='createPhoneCall'?'Place a real outbound call. Requires explicit operator enablement and confirmation.':'Change a call: '+operation+'. Requires explicit operator enablement and confirmation.',inputSchema:z.object(shape).strict(),annotations:{readOnlyHint:false,destructiveHint:true,idempotentHint:false,openWorldHint:true}},async(input:any)=>{
   const {workspaceId,callId,confirm,...fields}=input;
   return run(operation,operation==='createPhoneCall'?{body:{workspaceId,...fields}}:{path:{callId},body:{workspaceId}});
  });
 }
 return server;
}
