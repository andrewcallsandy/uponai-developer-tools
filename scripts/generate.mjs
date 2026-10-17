import fs from 'node:fs';
import crypto from 'node:crypto';
import openapiTS, {astToString} from 'openapi-typescript';
const spec=JSON.parse(fs.readFileSync('contract/openapi.json'));
const policy=JSON.parse(fs.readFileSync('contract/policy.json'));
const methods=['get','post','put','patch','delete','head','options'];
const actual=Object.entries(spec.paths).flatMap(([path,p])=>methods.filter(m=>p[m]).map(method=>({path,method,operationId:p[method].operationId})));
const signature=a=>a.map(x=>`${x.method} ${x.path} ${x.operationId}`).sort().join('\n');
if(signature(actual)!==signature(policy.operations))throw Error('Public operation policy mismatch');
const text=JSON.stringify(spec);
if(new RegExp(['re'+'tell','jam'+'bonz','X-Actor-Type','X-Provider-Id','X-Tenant-Id','X-Impersonation-Reason','/api/admin'].join('|'),'i').test(text))throw Error('Private or unbranded contract');
const resolve=p=>p.$ref?p.$ref.split('/').slice(1).reduce((v,k)=>v[k],spec):p;
const metadata={};
for(const {path,method,operationId} of actual){
 const item=spec.paths[path],op=item[method],params=[...(item.parameters||[]),...(op.parameters||[])].map(resolve);
 if(params.some(p=>!['path','query'].includes(p.in)))throw Error('Only reviewed customer path/query parameters allowed');
 const content=op.requestBody?.content||{},media=Object.keys(content)[0];
 metadata[operationId]={path,method,summary:op.summary,parameters:params,bodyRequired:!!op.requestBody?.required,bodyType:media||null,bodySchema:media?content[media].schema:null};
}
fs.writeFileSync('packages/sdk/src/schema.ts',astToString(await openapiTS(spec,{defaultNonNullable:false})));
fs.writeFileSync('packages/sdk/src/metadata.ts','// Generated from the approved public contract.\nexport const metadata = '+JSON.stringify(metadata,null,2)+' as const;\n');
const lines=actual.map(({operationId:id})=>`  ${id}(args: OperationInput<'${id}'>${metadata[id].parameters.some(p=>p.required)||metadata[id].bodyRequired?'':' = {}'}, options?: RequestOptions): Promise<OperationOutput<'${id}'>> { return this.execute('${id}', args, options); }`);
fs.writeFileSync('packages/sdk/src/index.ts',`// Generated; edit the generator, not this file.\nimport { ClientCore } from './client.js';\nimport type { OperationInput, OperationOutput, RequestOptions } from './types.js';\nexport * from './types.js';\nexport * from './errors.js';\nexport type { paths, components, operations } from './schema.js';\nexport { publicContractSha256 } from './version.js';\nexport class UponAI extends ClientCore {\n${lines.join('\n')}\n}\n`);
fs.writeFileSync('packages/sdk/src/version.ts',`export const publicContractSha256 = '${crypto.createHash('sha256').update(fs.readFileSync('contract/openapi.json')).digest('hex')}';\n`);
console.log(`Generated ${actual.length} public SDK methods`);
const readOperations=['listLlms','getLlm','listAgents','getAgent','listAgentVersions','listChatAgents','getChatAgent','listChatAgentVersions','listChats','getChat','listConversationFlows','getConversationFlow','listKnowledgeBases','getKnowledgeBase','listVoices','getVoice','getConcurrency','listCalls','getVoiceSimulationSettings','listVoiceSimulationSourceAgents','listVoiceSimulationProjects','getVoiceSimulationProject','listVoiceSimulationScenarios','listVoiceSimulationSessions','getVoiceSimulationSession','listVoiceSimulationImprovementRuns','getVoiceSimulationImprovementRun','getVoiceSimulationSchedule'];
const catalog=Object.fromEntries(readOperations.map(id=>{
 const entry=metadata[id];if(entry?.method!=='get'||!entry.parameters.some(p=>p.name==='workspaceId'&&p.in==='query'))throw Error('Unscoped MCP read operation');
 return [id,{summary:entry.summary,parameters:entry.parameters.map(({name,in:location,required,schema})=>({name,in:location,required,schema}))}];
}));
fs.writeFileSync('packages/mcp-server/src/catalog.ts','// Reviewed MCP operation subset; generated from public contract.\nexport const catalog: Record<string, {summary:string;parameters:Array<{name:string;in:string;required?:boolean;schema:any}>}> = '+JSON.stringify(catalog,null,2)+';\n');
