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
