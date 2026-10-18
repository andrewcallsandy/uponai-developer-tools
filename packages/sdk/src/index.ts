// Generated; edit the generator, not this file.
import { ClientCore } from './client.js';
import type { OperationInput, OperationOutput, RequestOptions } from './types.js';
export * from './types.js';
export * from './errors.js';
export type { paths, components, operations } from './schema.js';
export { publicContractSha256 } from './version.js';
export class UponAI extends ClientCore {
  listLlms(args: OperationInput<'listLlms'>, options?: RequestOptions): Promise<OperationOutput<'listLlms'>> { return this.execute('listLlms', args, options); }
  createLlm(args: OperationInput<'createLlm'>, options?: RequestOptions): Promise<OperationOutput<'createLlm'>> { return this.execute('createLlm', args, options); }
  getLlm(args: OperationInput<'getLlm'>, options?: RequestOptions): Promise<OperationOutput<'getLlm'>> { return this.execute('getLlm', args, options); }
  updateLlm(args: OperationInput<'updateLlm'>, options?: RequestOptions): Promise<OperationOutput<'updateLlm'>> { return this.execute('updateLlm', args, options); }
  deleteLlm(args: OperationInput<'deleteLlm'>, options?: RequestOptions): Promise<OperationOutput<'deleteLlm'>> { return this.execute('deleteLlm', args, options); }
  listAgents(args: OperationInput<'listAgents'>, options?: RequestOptions): Promise<OperationOutput<'listAgents'>> { return this.execute('listAgents', args, options); }
  createAgent(args: OperationInput<'createAgent'>, options?: RequestOptions): Promise<OperationOutput<'createAgent'>> { return this.execute('createAgent', args, options); }
  getAgent(args: OperationInput<'getAgent'>, options?: RequestOptions): Promise<OperationOutput<'getAgent'>> { return this.execute('getAgent', args, options); }
  updateAgent(args: OperationInput<'updateAgent'>, options?: RequestOptions): Promise<OperationOutput<'updateAgent'>> { return this.execute('updateAgent', args, options); }
  deleteAgent(args: OperationInput<'deleteAgent'>, options?: RequestOptions): Promise<OperationOutput<'deleteAgent'>> { return this.execute('deleteAgent', args, options); }
  listAgentVersions(args: OperationInput<'listAgentVersions'>, options?: RequestOptions): Promise<OperationOutput<'listAgentVersions'>> { return this.execute('listAgentVersions', args, options); }
  createAgentDraftVersion(args: OperationInput<'createAgentDraftVersion'>, options?: RequestOptions): Promise<OperationOutput<'createAgentDraftVersion'>> { return this.execute('createAgentDraftVersion', args, options); }
  publishAgentVersion(args: OperationInput<'publishAgentVersion'>, options?: RequestOptions): Promise<OperationOutput<'publishAgentVersion'>> { return this.execute('publishAgentVersion', args, options); }
  deleteAgentVersion(args: OperationInput<'deleteAgentVersion'>, options?: RequestOptions): Promise<OperationOutput<'deleteAgentVersion'>> { return this.execute('deleteAgentVersion', args, options); }
  listChatAgents(args: OperationInput<'listChatAgents'>, options?: RequestOptions): Promise<OperationOutput<'listChatAgents'>> { return this.execute('listChatAgents', args, options); }
  createChatAgent(args: OperationInput<'createChatAgent'>, options?: RequestOptions): Promise<OperationOutput<'createChatAgent'>> { return this.execute('createChatAgent', args, options); }
  getChatAgent(args: OperationInput<'getChatAgent'>, options?: RequestOptions): Promise<OperationOutput<'getChatAgent'>> { return this.execute('getChatAgent', args, options); }
  updateChatAgent(args: OperationInput<'updateChatAgent'>, options?: RequestOptions): Promise<OperationOutput<'updateChatAgent'>> { return this.execute('updateChatAgent', args, options); }
  deleteChatAgent(args: OperationInput<'deleteChatAgent'>, options?: RequestOptions): Promise<OperationOutput<'deleteChatAgent'>> { return this.execute('deleteChatAgent', args, options); }
  listChatAgentVersions(args: OperationInput<'listChatAgentVersions'>, options?: RequestOptions): Promise<OperationOutput<'listChatAgentVersions'>> { return this.execute('listChatAgentVersions', args, options); }
  createChatAgentDraftVersion(args: OperationInput<'createChatAgentDraftVersion'>, options?: RequestOptions): Promise<OperationOutput<'createChatAgentDraftVersion'>> { return this.execute('createChatAgentDraftVersion', args, options); }
  publishChatAgentVersion(args: OperationInput<'publishChatAgentVersion'>, options?: RequestOptions): Promise<OperationOutput<'publishChatAgentVersion'>> { return this.execute('publishChatAgentVersion', args, options); }
  deleteChatAgentVersion(args: OperationInput<'deleteChatAgentVersion'>, options?: RequestOptions): Promise<OperationOutput<'deleteChatAgentVersion'>> { return this.execute('deleteChatAgentVersion', args, options); }
  publishChatAgentVersionFiltered(args: OperationInput<'publishChatAgentVersionFiltered'>, options?: RequestOptions): Promise<OperationOutput<'publishChatAgentVersionFiltered'>> { return this.execute('publishChatAgentVersionFiltered', args, options); }
  listChats(args: OperationInput<'listChats'>, options?: RequestOptions): Promise<OperationOutput<'listChats'>> { return this.execute('listChats', args, options); }
  createChat(args: OperationInput<'createChat'>, options?: RequestOptions): Promise<OperationOutput<'createChat'>> { return this.execute('createChat', args, options); }
  createOutboundSmsChat(args: OperationInput<'createOutboundSmsChat'>, options?: RequestOptions): Promise<OperationOutput<'createOutboundSmsChat'>> { return this.execute('createOutboundSmsChat', args, options); }
  getChat(args: OperationInput<'getChat'>, options?: RequestOptions): Promise<OperationOutput<'getChat'>> { return this.execute('getChat', args, options); }
  updateChat(args: OperationInput<'updateChat'>, options?: RequestOptions): Promise<OperationOutput<'updateChat'>> { return this.execute('updateChat', args, options); }
  createChatCompletion(args: OperationInput<'createChatCompletion'>, options?: RequestOptions): Promise<OperationOutput<'createChatCompletion'>> { return this.execute('createChatCompletion', args, options); }
  endChat(args: OperationInput<'endChat'>, options?: RequestOptions): Promise<OperationOutput<'endChat'>> { return this.execute('endChat', args, options); }
  listChatWidgets(args: OperationInput<'listChatWidgets'>, options?: RequestOptions): Promise<OperationOutput<'listChatWidgets'>> { return this.execute('listChatWidgets', args, options); }
  createChatWidget(args: OperationInput<'createChatWidget'>, options?: RequestOptions): Promise<OperationOutput<'createChatWidget'>> { return this.execute('createChatWidget', args, options); }
  getChatWidget(args: OperationInput<'getChatWidget'>, options?: RequestOptions): Promise<OperationOutput<'getChatWidget'>> { return this.execute('getChatWidget', args, options); }
  updateChatWidget(args: OperationInput<'updateChatWidget'>, options?: RequestOptions): Promise<OperationOutput<'updateChatWidget'>> { return this.execute('updateChatWidget', args, options); }
  regenerateWidgetKey(args: OperationInput<'regenerateWidgetKey'>, options?: RequestOptions): Promise<OperationOutput<'regenerateWidgetKey'>> { return this.execute('regenerateWidgetKey', args, options); }
  listConversationFlows(args: OperationInput<'listConversationFlows'>, options?: RequestOptions): Promise<OperationOutput<'listConversationFlows'>> { return this.execute('listConversationFlows', args, options); }
  createConversationFlow(args: OperationInput<'createConversationFlow'>, options?: RequestOptions): Promise<OperationOutput<'createConversationFlow'>> { return this.execute('createConversationFlow', args, options); }
  getConversationFlow(args: OperationInput<'getConversationFlow'>, options?: RequestOptions): Promise<OperationOutput<'getConversationFlow'>> { return this.execute('getConversationFlow', args, options); }
  updateConversationFlow(args: OperationInput<'updateConversationFlow'>, options?: RequestOptions): Promise<OperationOutput<'updateConversationFlow'>> { return this.execute('updateConversationFlow', args, options); }
  deleteConversationFlow(args: OperationInput<'deleteConversationFlow'>, options?: RequestOptions): Promise<OperationOutput<'deleteConversationFlow'>> { return this.execute('deleteConversationFlow', args, options); }
  listKnowledgeBases(args: OperationInput<'listKnowledgeBases'>, options?: RequestOptions): Promise<OperationOutput<'listKnowledgeBases'>> { return this.execute('listKnowledgeBases', args, options); }
  createKnowledgeBase(args: OperationInput<'createKnowledgeBase'>, options?: RequestOptions): Promise<OperationOutput<'createKnowledgeBase'>> { return this.execute('createKnowledgeBase', args, options); }
  getKnowledgeBase(args: OperationInput<'getKnowledgeBase'>, options?: RequestOptions): Promise<OperationOutput<'getKnowledgeBase'>> { return this.execute('getKnowledgeBase', args, options); }
  deleteKnowledgeBase(args: OperationInput<'deleteKnowledgeBase'>, options?: RequestOptions): Promise<OperationOutput<'deleteKnowledgeBase'>> { return this.execute('deleteKnowledgeBase', args, options); }
  addKnowledgeBaseSources(args: OperationInput<'addKnowledgeBaseSources'>, options?: RequestOptions): Promise<OperationOutput<'addKnowledgeBaseSources'>> { return this.execute('addKnowledgeBaseSources', args, options); }
  deleteKnowledgeBaseSource(args: OperationInput<'deleteKnowledgeBaseSource'>, options?: RequestOptions): Promise<OperationOutput<'deleteKnowledgeBaseSource'>> { return this.execute('deleteKnowledgeBaseSource', args, options); }
  listVoices(args: OperationInput<'listVoices'>, options?: RequestOptions): Promise<OperationOutput<'listVoices'>> { return this.execute('listVoices', args, options); }
  searchCommunityVoices(args: OperationInput<'searchCommunityVoices'>, options?: RequestOptions): Promise<OperationOutput<'searchCommunityVoices'>> { return this.execute('searchCommunityVoices', args, options); }
  addCommunityVoice(args: OperationInput<'addCommunityVoice'>, options?: RequestOptions): Promise<OperationOutput<'addCommunityVoice'>> { return this.execute('addCommunityVoice', args, options); }
  cloneVoice(args: OperationInput<'cloneVoice'>, options?: RequestOptions): Promise<OperationOutput<'cloneVoice'>> { return this.execute('cloneVoice', args, options); }
  getVoice(args: OperationInput<'getVoice'>, options?: RequestOptions): Promise<OperationOutput<'getVoice'>> { return this.execute('getVoice', args, options); }
  streamVoiceSample(args: OperationInput<'streamVoiceSample'>, options?: RequestOptions): Promise<OperationOutput<'streamVoiceSample'>> { return this.execute('streamVoiceSample', args, options); }
  listTestCaseDefinitions(args: OperationInput<'listTestCaseDefinitions'>, options?: RequestOptions): Promise<OperationOutput<'listTestCaseDefinitions'>> { return this.execute('listTestCaseDefinitions', args, options); }
  createTestCaseDefinition(args: OperationInput<'createTestCaseDefinition'>, options?: RequestOptions): Promise<OperationOutput<'createTestCaseDefinition'>> { return this.execute('createTestCaseDefinition', args, options); }
  listBatchTests(args: OperationInput<'listBatchTests'>, options?: RequestOptions): Promise<OperationOutput<'listBatchTests'>> { return this.execute('listBatchTests', args, options); }
  createBatchTest(args: OperationInput<'createBatchTest'>, options?: RequestOptions): Promise<OperationOutput<'createBatchTest'>> { return this.execute('createBatchTest', args, options); }
  getBatchTest(args: OperationInput<'getBatchTest'>, options?: RequestOptions): Promise<OperationOutput<'getBatchTest'>> { return this.execute('getBatchTest', args, options); }
  getTestCaseDefinition(args: OperationInput<'getTestCaseDefinition'>, options?: RequestOptions): Promise<OperationOutput<'getTestCaseDefinition'>> { return this.execute('getTestCaseDefinition', args, options); }
  updateTestCaseDefinition(args: OperationInput<'updateTestCaseDefinition'>, options?: RequestOptions): Promise<OperationOutput<'updateTestCaseDefinition'>> { return this.execute('updateTestCaseDefinition', args, options); }
  deleteTestCaseDefinition(args: OperationInput<'deleteTestCaseDefinition'>, options?: RequestOptions): Promise<OperationOutput<'deleteTestCaseDefinition'>> { return this.execute('deleteTestCaseDefinition', args, options); }
  getTestRun(args: OperationInput<'getTestRun'>, options?: RequestOptions): Promise<OperationOutput<'getTestRun'>> { return this.execute('getTestRun', args, options); }
  listTestRunsByBatch(args: OperationInput<'listTestRunsByBatch'>, options?: RequestOptions): Promise<OperationOutput<'listTestRunsByBatch'>> { return this.execute('listTestRunsByBatch', args, options); }
  getConcurrency(args: OperationInput<'getConcurrency'>, options?: RequestOptions): Promise<OperationOutput<'getConcurrency'>> { return this.execute('getConcurrency', args, options); }
  listWorkspaces(args: OperationInput<'listWorkspaces'> = {}, options?: RequestOptions): Promise<OperationOutput<'listWorkspaces'>> { return this.execute('listWorkspaces', args, options); }
  createPhoneCall(args: OperationInput<'createPhoneCall'>, options?: RequestOptions): Promise<OperationOutput<'createPhoneCall'>> { return this.execute('createPhoneCall', args, options); }
  createWebCall(args: OperationInput<'createWebCall'>, options?: RequestOptions): Promise<OperationOutput<'createWebCall'>> { return this.execute('createWebCall', args, options); }
  listCalls(args: OperationInput<'listCalls'> = {}, options?: RequestOptions): Promise<OperationOutput<'listCalls'>> { return this.execute('listCalls', args, options); }
  listCallsFiltered(args: OperationInput<'listCallsFiltered'> = {}, options?: RequestOptions): Promise<OperationOutput<'listCallsFiltered'>> { return this.execute('listCallsFiltered', args, options); }
  fetchCallHistory(args: OperationInput<'fetchCallHistory'>, options?: RequestOptions): Promise<OperationOutput<'fetchCallHistory'>> { return this.execute('fetchCallHistory', args, options); }
  getCall(args: OperationInput<'getCall'>, options?: RequestOptions): Promise<OperationOutput<'getCall'>> { return this.execute('getCall', args, options); }
  updateCall(args: OperationInput<'updateCall'>, options?: RequestOptions): Promise<OperationOutput<'updateCall'>> { return this.execute('updateCall', args, options); }
  endLiveCall(args: OperationInput<'endLiveCall'>, options?: RequestOptions): Promise<OperationOutput<'endLiveCall'>> { return this.execute('endLiveCall', args, options); }
  updateLiveCall(args: OperationInput<'updateLiveCall'>, options?: RequestOptions): Promise<OperationOutput<'updateLiveCall'>> { return this.execute('updateLiveCall', args, options); }
  rerunCallAnalysis(args: OperationInput<'rerunCallAnalysis'>, options?: RequestOptions): Promise<OperationOutput<'rerunCallAnalysis'>> { return this.execute('rerunCallAnalysis', args, options); }
  listVoiceSimulationTemplates(args: OperationInput<'listVoiceSimulationTemplates'>, options?: RequestOptions): Promise<OperationOutput<'listVoiceSimulationTemplates'>> { return this.execute('listVoiceSimulationTemplates', args, options); }
  getVoiceSimulationSettings(args: OperationInput<'getVoiceSimulationSettings'>, options?: RequestOptions): Promise<OperationOutput<'getVoiceSimulationSettings'>> { return this.execute('getVoiceSimulationSettings', args, options); }
  listVoiceSimulationSourceAgents(args: OperationInput<'listVoiceSimulationSourceAgents'>, options?: RequestOptions): Promise<OperationOutput<'listVoiceSimulationSourceAgents'>> { return this.execute('listVoiceSimulationSourceAgents', args, options); }
  listVoiceSimulationProjects(args: OperationInput<'listVoiceSimulationProjects'>, options?: RequestOptions): Promise<OperationOutput<'listVoiceSimulationProjects'>> { return this.execute('listVoiceSimulationProjects', args, options); }
  createVoiceSimulationProject(args: OperationInput<'createVoiceSimulationProject'>, options?: RequestOptions): Promise<OperationOutput<'createVoiceSimulationProject'>> { return this.execute('createVoiceSimulationProject', args, options); }
  getVoiceSimulationProject(args: OperationInput<'getVoiceSimulationProject'>, options?: RequestOptions): Promise<OperationOutput<'getVoiceSimulationProject'>> { return this.execute('getVoiceSimulationProject', args, options); }
  updateVoiceSimulationProject(args: OperationInput<'updateVoiceSimulationProject'>, options?: RequestOptions): Promise<OperationOutput<'updateVoiceSimulationProject'>> { return this.execute('updateVoiceSimulationProject', args, options); }
  listVoiceSimulationScenarios(args: OperationInput<'listVoiceSimulationScenarios'>, options?: RequestOptions): Promise<OperationOutput<'listVoiceSimulationScenarios'>> { return this.execute('listVoiceSimulationScenarios', args, options); }
  createVoiceSimulationScenario(args: OperationInput<'createVoiceSimulationScenario'>, options?: RequestOptions): Promise<OperationOutput<'createVoiceSimulationScenario'>> { return this.execute('createVoiceSimulationScenario', args, options); }
  updateVoiceSimulationScenario(args: OperationInput<'updateVoiceSimulationScenario'>, options?: RequestOptions): Promise<OperationOutput<'updateVoiceSimulationScenario'>> { return this.execute('updateVoiceSimulationScenario', args, options); }
  generateVoiceSimulationScenarios(args: OperationInput<'generateVoiceSimulationScenarios'>, options?: RequestOptions): Promise<OperationOutput<'generateVoiceSimulationScenarios'>> { return this.execute('generateVoiceSimulationScenarios', args, options); }
  estimateVoiceSimulationSession(args: OperationInput<'estimateVoiceSimulationSession'>, options?: RequestOptions): Promise<OperationOutput<'estimateVoiceSimulationSession'>> { return this.execute('estimateVoiceSimulationSession', args, options); }
  listVoiceSimulationSessions(args: OperationInput<'listVoiceSimulationSessions'>, options?: RequestOptions): Promise<OperationOutput<'listVoiceSimulationSessions'>> { return this.execute('listVoiceSimulationSessions', args, options); }
  launchVoiceSimulationSession(args: OperationInput<'launchVoiceSimulationSession'>, options?: RequestOptions): Promise<OperationOutput<'launchVoiceSimulationSession'>> { return this.execute('launchVoiceSimulationSession', args, options); }
  getVoiceSimulationSession(args: OperationInput<'getVoiceSimulationSession'>, options?: RequestOptions): Promise<OperationOutput<'getVoiceSimulationSession'>> { return this.execute('getVoiceSimulationSession', args, options); }
  cancelVoiceSimulationSession(args: OperationInput<'cancelVoiceSimulationSession'>, options?: RequestOptions): Promise<OperationOutput<'cancelVoiceSimulationSession'>> { return this.execute('cancelVoiceSimulationSession', args, options); }
  proposeVoiceSimulationImprovement(args: OperationInput<'proposeVoiceSimulationImprovement'>, options?: RequestOptions): Promise<OperationOutput<'proposeVoiceSimulationImprovement'>> { return this.execute('proposeVoiceSimulationImprovement', args, options); }
  applyVoiceSimulationImprovement(args: OperationInput<'applyVoiceSimulationImprovement'>, options?: RequestOptions): Promise<OperationOutput<'applyVoiceSimulationImprovement'>> { return this.execute('applyVoiceSimulationImprovement', args, options); }
  getVoiceSimulationRecording(args: OperationInput<'getVoiceSimulationRecording'>, options?: RequestOptions): Promise<OperationOutput<'getVoiceSimulationRecording'>> { return this.execute('getVoiceSimulationRecording', args, options); }
  archiveVoiceSimulationProject(args: OperationInput<'archiveVoiceSimulationProject'>, options?: RequestOptions): Promise<OperationOutput<'archiveVoiceSimulationProject'>> { return this.execute('archiveVoiceSimulationProject', args, options); }
  archiveVoiceSimulationScenario(args: OperationInput<'archiveVoiceSimulationScenario'>, options?: RequestOptions): Promise<OperationOutput<'archiveVoiceSimulationScenario'>> { return this.execute('archiveVoiceSimulationScenario', args, options); }
  listVoiceSimulationImprovements(args: OperationInput<'listVoiceSimulationImprovements'>, options?: RequestOptions): Promise<OperationOutput<'listVoiceSimulationImprovements'>> { return this.execute('listVoiceSimulationImprovements', args, options); }
  listVoiceSimulationSpeechVoices(args: OperationInput<'listVoiceSimulationSpeechVoices'>, options?: RequestOptions): Promise<OperationOutput<'listVoiceSimulationSpeechVoices'>> { return this.execute('listVoiceSimulationSpeechVoices', args, options); }
  generateVoiceSimulationIvrAudio(args: OperationInput<'generateVoiceSimulationIvrAudio'>, options?: RequestOptions): Promise<OperationOutput<'generateVoiceSimulationIvrAudio'>> { return this.execute('generateVoiceSimulationIvrAudio', args, options); }
  getVoiceSimulationIvrAudio(args: OperationInput<'getVoiceSimulationIvrAudio'>, options?: RequestOptions): Promise<OperationOutput<'getVoiceSimulationIvrAudio'>> { return this.execute('getVoiceSimulationIvrAudio', args, options); }
  listVoiceSimulationImprovementRuns(args: OperationInput<'listVoiceSimulationImprovementRuns'>, options?: RequestOptions): Promise<OperationOutput<'listVoiceSimulationImprovementRuns'>> { return this.execute('listVoiceSimulationImprovementRuns', args, options); }
  createVoiceSimulationImprovementRun(args: OperationInput<'createVoiceSimulationImprovementRun'>, options?: RequestOptions): Promise<OperationOutput<'createVoiceSimulationImprovementRun'>> { return this.execute('createVoiceSimulationImprovementRun', args, options); }
  getVoiceSimulationImprovementRun(args: OperationInput<'getVoiceSimulationImprovementRun'>, options?: RequestOptions): Promise<OperationOutput<'getVoiceSimulationImprovementRun'>> { return this.execute('getVoiceSimulationImprovementRun', args, options); }
  updateVoiceSimulationImprovementRun(args: OperationInput<'updateVoiceSimulationImprovementRun'>, options?: RequestOptions): Promise<OperationOutput<'updateVoiceSimulationImprovementRun'>> { return this.execute('updateVoiceSimulationImprovementRun', args, options); }
  generateVoiceSimulationImprovementScenarios(args: OperationInput<'generateVoiceSimulationImprovementScenarios'>, options?: RequestOptions): Promise<OperationOutput<'generateVoiceSimulationImprovementScenarios'>> { return this.execute('generateVoiceSimulationImprovementScenarios', args, options); }
  approveVoiceSimulationImprovementRun(args: OperationInput<'approveVoiceSimulationImprovementRun'>, options?: RequestOptions): Promise<OperationOutput<'approveVoiceSimulationImprovementRun'>> { return this.execute('approveVoiceSimulationImprovementRun', args, options); }
  stopVoiceSimulationImprovementRun(args: OperationInput<'stopVoiceSimulationImprovementRun'>, options?: RequestOptions): Promise<OperationOutput<'stopVoiceSimulationImprovementRun'>> { return this.execute('stopVoiceSimulationImprovementRun', args, options); }
  getVoiceSimulationSchedule(args: OperationInput<'getVoiceSimulationSchedule'>, options?: RequestOptions): Promise<OperationOutput<'getVoiceSimulationSchedule'>> { return this.execute('getVoiceSimulationSchedule', args, options); }
  saveVoiceSimulationSchedule(args: OperationInput<'saveVoiceSimulationSchedule'>, options?: RequestOptions): Promise<OperationOutput<'saveVoiceSimulationSchedule'>> { return this.execute('saveVoiceSimulationSchedule', args, options); }
  pauseVoiceSimulationSchedule(args: OperationInput<'pauseVoiceSimulationSchedule'>, options?: RequestOptions): Promise<OperationOutput<'pauseVoiceSimulationSchedule'>> { return this.execute('pauseVoiceSimulationSchedule', args, options); }
}
