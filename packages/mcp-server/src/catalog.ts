// Reviewed MCP operation subset; generated from public contract.
export const catalog: Record<string, {summary:string;parameters:Array<{name:string;in:string;required?:boolean;schema:any}>}> = {
  "listLlms": {
    "summary": "List LLMs",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 1,
          "maximum": 1000,
          "default": 1000
        }
      },
      {
        "name": "paginationKey",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "paginationKeyVersion",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "getLlm": {
    "summary": "Get LLM",
    "parameters": [
      {
        "name": "llmId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        }
      }
    ]
  },
  "listAgents": {
    "summary": "List agents",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 1,
          "maximum": 1000,
          "default": 1000
        }
      },
      {
        "name": "paginationKey",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "paginationKeyVersion",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "getAgent": {
    "summary": "Get agent",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        }
      }
    ]
  },
  "listAgentVersions": {
    "summary": "List agent versions",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "listChatAgents": {
    "summary": "List chat agents",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 1,
          "maximum": 1000,
          "default": 1000
        }
      },
      {
        "name": "paginationKey",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "paginationKeyVersion",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "getChatAgent": {
    "summary": "Get chat agent",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        }
      }
    ]
  },
  "listChatAgentVersions": {
    "summary": "List chat agent versions",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "listChats": {
    "summary": "List chats",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "sortOrder",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string",
          "enum": [
            "ascending",
            "descending"
          ],
          "default": "descending"
        }
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 1,
          "maximum": 1000,
          "default": 1000
        }
      },
      {
        "name": "paginationKey",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ]
  },
  "getChat": {
    "summary": "Get chat",
    "parameters": [
      {
        "name": "chatId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "listConversationFlows": {
    "summary": "List conversation flows",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 1,
          "maximum": 1000,
          "default": 1000
        }
      },
      {
        "name": "paginationKey",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "paginationKeyVersion",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "getConversationFlow": {
    "summary": "Get conversation flow",
    "parameters": [
      {
        "name": "conversationFlowId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        }
      }
    ]
  },
  "listKnowledgeBases": {
    "summary": "List knowledge bases",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "getKnowledgeBase": {
    "summary": "Get knowledge base",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "listVoices": {
    "summary": "List voices",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "getVoice": {
    "summary": "Get voice",
    "parameters": [
      {
        "name": "voiceId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "getConcurrency": {
    "summary": "Get concurrency",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "listCalls": {
    "summary": "List calls",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "agentId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "status",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "fromDate",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string",
          "format": "date-time"
        }
      },
      {
        "name": "toDate",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string",
          "format": "date-time"
        }
      },
      {
        "name": "page",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 1,
          "default": 1
        }
      },
      {
        "name": "limit",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 1,
          "maximum": 100,
          "default": 20
        }
      }
    ]
  },
  "getVoiceSimulationSettings": {
    "summary": "Get voice simulation access and prices",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "listVoiceSimulationSourceAgents": {
    "summary": "List editable simulation source agents",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "listVoiceSimulationProjects": {
    "summary": "List voice simulation projects",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      }
    ]
  },
  "getVoiceSimulationProject": {
    "summary": "Get a voice simulation project",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "projectId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string",
          "format": "uuid"
        }
      }
    ]
  },
  "listVoiceSimulationScenarios": {
    "summary": "List project scenarios",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "projectId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string",
          "format": "uuid"
        }
      }
    ]
  },
  "listVoiceSimulationSessions": {
    "summary": "List simulation sessions",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "projectId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string",
          "format": "uuid"
        }
      }
    ]
  },
  "getVoiceSimulationSession": {
    "summary": "Get a simulation session and report",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "sessionId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string",
          "format": "uuid"
        }
      }
    ]
  },
  "listVoiceSimulationImprovementRuns": {
    "summary": "List self-improving runs",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "projectId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string",
          "format": "uuid"
        }
      }
    ]
  },
  "getVoiceSimulationImprovementRun": {
    "summary": "Review a self-improving run",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "id",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string",
          "format": "uuid"
        }
      }
    ]
  },
  "getVoiceSimulationSchedule": {
    "summary": "Get recurring improvement policy",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        }
      },
      {
        "name": "projectId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string",
          "format": "uuid"
        }
      }
    ]
  }
};
