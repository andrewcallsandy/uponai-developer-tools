import {UponAI,type OperationOutput} from '../packages/sdk/dist/index.js';
const client=new UponAI({apiKey:'typecheck'});
client.getAgent({path:{agentId:'a'},query:{workspaceId:1}});
client.createPhoneCall({body:{agentId:'a',fromNumber:'+15555550100',toNumber:'+15555550101'}});
client.listWorkspaces();
// @ts-expect-error Customer methods require their workspace query.
client.getAgent({path:{agentId:'a'}});
// @ts-expect-error Workspace identifiers are numbers.
client.listAgents({query:{workspaceId:'1'}});
// @ts-expect-error There is no arbitrary path request escape hatch.
client.request('/api/admin');
// @ts-expect-error No privileged context headers are accepted.
client.getAgent({path:{agentId:'a'},query:{workspaceId:1},headers:{'X-Actor-Type':'admin'}});
const result:Promise<OperationOutput<'getAgent'>>=client.getAgent({path:{agentId:'a'},query:{workspaceId:1}});
void result;

client.launchVoiceSimulationSession({path:{projectId:'project'},query:{workspaceId:1},body:{scenario_ids:['scenario'],max_surcharge:1,idempotency_key:'session-key'}});
const recording:Promise<Blob>=client.getVoiceSimulationRecording({path:{sessionId:'session',runId:'run'},query:{workspaceId:1}});
void recording;
// @ts-expect-error A launch requires an accepted surcharge limit and idempotency key.
client.launchVoiceSimulationSession({path:{projectId:'project'},query:{workspaceId:1},body:{scenario_ids:['scenario']}});

client.createVoiceSimulationProject({query:{workspaceId:1},body:{name:"Copied suite",source_agent_id:"agent",copy_project_id:"project"}});
client.approveVoiceSimulationImprovementRun({query:{workspaceId:1},path:{id:'run'},body:{confirm:true,review_fingerprint:'reviewed',max_calls:6,max_ai:12,max_surcharge:0,ai_model:'configured/model'}});

client.createVoiceSimulationProject({query:{workspaceId:1},body:{name:'Manual suite',source_agent_id:'agent',automation_mode:'manual'}});
const mode:Promise<'automated'|'manual'>=client.updateVoiceSimulationProject({path:{projectId:'project'},query:{workspaceId:1},body:{automation_mode:'automated'}}).then(p=>p.automation_mode);
void mode;
// @ts-expect-error Automation mode must be automated or manual.
client.updateVoiceSimulationProject({path:{projectId:'project'},query:{workspaceId:1},body:{automation_mode:'paused'}});
// @ts-expect-error Updating a project requires an automation mode.
client.updateVoiceSimulationProject({path:{projectId:'project'},query:{workspaceId:1},body:{}});

client.updateAgent({path:{agentId:'a'},query:{version:3},body:{workspaceId:1,webhook_events:['call_started','call_ended','call_analyzed','transcript_updated','transfer_started','transfer_bridged','transfer_cancelled','transfer_ended']}});
client.updateChatAgent({path:{agentId:'a'},body:{workspaceId:1,webhook_url:null,webhook_events:['chat_started','chat_ended','chat_analyzed']}});
// @ts-expect-error Voice agents cannot subscribe to chat events.
client.updateAgent({path:{agentId:'a'},body:{workspaceId:1,webhook_events:['chat_started']}});
// @ts-expect-error Chat agents cannot subscribe to voice events.
client.updateChatAgent({path:{agentId:'a'},body:{workspaceId:1,webhook_events:['transcript_updated']}});

client.createCallMonitorSession({path:{callId:'call'},body:{audio:true}});
// @ts-expect-error Audio mode is a boolean.
client.createCallMonitorSession({path:{callId:'call'},body:{audio:'true'}});

// Connection metadata is additive; existing createWebCall requests remain valid.
const connection = client.createWebCall({body:{workspaceId:1,agentId:'agent'}}).then(call => {
  const transport: 'gateway' | undefined = call.transport;
  const servers = call.iceServers;
  return {transport, servers, token:call.accessToken};
});
void connection;

// Environment tags: version null unassigns; publish can move tags and report the result.
client.updateAgentEnvironmentTag({path:{agentId:'a',tagName:'prod'},body:{workspaceId:1,version:null,dynamicVariables:{customer_name:''}}});
client.updateChatAgentEnvironmentTag({path:{agentId:'a',tagName:'qa'},body:{workspaceId:1,version:2,create:true}});
// @ts-expect-error Tag variable values are strings.
client.updateAgentEnvironmentTag({path:{agentId:'a',tagName:'prod'},body:{workspaceId:1,dynamicVariables:{count:1}}});
// @ts-expect-error Detection requires a version.
client.detectAgentDynamicVariables({path:{agentId:'a'},query:{workspaceId:1}});
const moved:Promise<string[]|undefined>=client.publishAgentVersion({path:{agentId:'a',version:3},body:{workspaceId:1,environmentTags:['prod']}}).then(v=>v.environmentTagUpdate?.moved);
void moved;
const chatMoved:Promise<Array<{tag:string;error:string}>|undefined>=client.publishChatAgentVersion({path:{agentId:'a',version:3},body:{workspaceId:1,environmentTags:['prod']}}).then(v=>v.environmentTagUpdate?.failed);
void chatMoved;
const tagVersion:Promise<number|null|undefined>=client.listChatAgentEnvironmentTags({path:{agentId:'a'},query:{workspaceId:1}}).then(r=>r.tags[0]?.version);
void tagVersion;
