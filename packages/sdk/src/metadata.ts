// Generated from the approved public contract.
export const metadata = {
  "listLlms": {
    "path": "/api/v1/llms",
    "method": "get",
    "summary": "List LLMs",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
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
        },
        "description": "Maximum number of records to return."
      },
      {
        "name": "paginationKey",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Identifier to continue pagination."
      },
      {
        "name": "paginationKeyVersion",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer"
        },
        "description": "Version paired with the pagination key."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "createLlm": {
    "path": "/api/v1/llms",
    "method": "post",
    "summary": "Create LLM",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateLlmRequest"
    }
  },
  "getLlm": {
    "path": "/api/v1/llms/{llmId}",
    "method": "get",
    "summary": "Get LLM",
    "parameters": [
      {
        "name": "llmId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "LLM identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific version to retrieve or update."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "updateLlm": {
    "path": "/api/v1/llms/{llmId}",
    "method": "patch",
    "summary": "Update LLM",
    "parameters": [
      {
        "name": "llmId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "LLM identifier."
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific version to retrieve or update."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/UpdateLlmRequest"
    }
  },
  "deleteLlm": {
    "path": "/api/v1/llms/{llmId}",
    "method": "delete",
    "summary": "Delete LLM",
    "parameters": [
      {
        "name": "llmId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "LLM identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "listAgents": {
    "path": "/api/v1/agents",
    "method": "get",
    "summary": "List agents",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
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
        },
        "description": "Maximum number of records to return."
      },
      {
        "name": "paginationKey",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Identifier to continue pagination."
      },
      {
        "name": "paginationKeyVersion",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer"
        },
        "description": "Version paired with the pagination key."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "createAgent": {
    "path": "/api/v1/agents",
    "method": "post",
    "summary": "Create agent",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateAgentRequest"
    }
  },
  "getAgent": {
    "path": "/api/v1/agents/{agentId}",
    "method": "get",
    "summary": "Get agent",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific version to retrieve or update."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "updateAgent": {
    "path": "/api/v1/agents/{agentId}",
    "method": "patch",
    "summary": "Update agent",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific version to retrieve or update."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/UpdateAgentRequest"
    }
  },
  "deleteAgent": {
    "path": "/api/v1/agents/{agentId}",
    "method": "delete",
    "summary": "Delete agent",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "listAgentVersions": {
    "path": "/api/v1/agents/{agentId}/versions",
    "method": "get",
    "summary": "List agent versions",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "createAgentDraftVersion": {
    "path": "/api/v1/agents/{agentId}/versions",
    "method": "post",
    "summary": "Create agent draft version",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateAgentVersionRequest"
    }
  },
  "publishAgentVersion": {
    "path": "/api/v1/agents/{agentId}/versions/{version}/publish",
    "method": "post",
    "summary": "Publish agent version",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      },
      {
        "name": "version",
        "in": "path",
        "required": true,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific agent version."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/PublishAgentVersionRequest"
    }
  },
  "deleteAgentVersion": {
    "path": "/api/v1/agents/{agentId}/versions/{version}",
    "method": "delete",
    "summary": "Delete agent version",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      },
      {
        "name": "version",
        "in": "path",
        "required": true,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific agent version."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "listChatAgents": {
    "path": "/api/v1/chat-agents",
    "method": "get",
    "summary": "List chat agents",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
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
        },
        "description": "Maximum number of records to return."
      },
      {
        "name": "paginationKey",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Identifier to continue pagination."
      },
      {
        "name": "paginationKeyVersion",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer"
        },
        "description": "Version paired with the pagination key."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "createChatAgent": {
    "path": "/api/v1/chat-agents",
    "method": "post",
    "summary": "Create chat agent",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateChatAgentRequest"
    }
  },
  "getChatAgent": {
    "path": "/api/v1/chat-agents/{agentId}",
    "method": "get",
    "summary": "Get chat agent",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific version to retrieve or update."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "updateChatAgent": {
    "path": "/api/v1/chat-agents/{agentId}",
    "method": "patch",
    "summary": "Update chat agent",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific version to retrieve or update."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/UpdateChatAgentRequest"
    }
  },
  "deleteChatAgent": {
    "path": "/api/v1/chat-agents/{agentId}",
    "method": "delete",
    "summary": "Delete chat agent",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "listChatAgentVersions": {
    "path": "/api/v1/chat-agents/{agentId}/versions",
    "method": "get",
    "summary": "List chat agent versions",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "createChatAgentDraftVersion": {
    "path": "/api/v1/chat-agents/{agentId}/versions",
    "method": "post",
    "summary": "Create chat agent draft version",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateAgentVersionRequest"
    }
  },
  "publishChatAgentVersion": {
    "path": "/api/v1/chat-agents/{agentId}/versions/{version}/publish",
    "method": "post",
    "summary": "Publish chat agent version",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      },
      {
        "name": "version",
        "in": "path",
        "required": true,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific agent version."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/PublishAgentVersionRequest"
    }
  },
  "deleteChatAgentVersion": {
    "path": "/api/v1/chat-agents/{agentId}/versions/{version}",
    "method": "delete",
    "summary": "Delete chat agent version",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      },
      {
        "name": "version",
        "in": "path",
        "required": true,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific agent version."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "publishChatAgentVersionFiltered": {
    "path": "/api/v1/chat-agents/{agentId}/publish",
    "method": "post",
    "summary": "Publish chat agent version (legacy path)",
    "parameters": [
      {
        "name": "agentId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Agent identifier."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "type": "object",
      "required": [
        "workspaceId",
        "version"
      ],
      "properties": {
        "workspaceId": {
          "type": "integer"
        },
        "version": {
          "type": "integer",
          "minimum": 0
        },
        "versionTitle": {
          "type": "string"
        },
        "versionDescription": {
          "type": "string"
        }
      }
    }
  },
  "listChats": {
    "path": "/api/v1/chats",
    "method": "get",
    "summary": "List chats",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
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
        },
        "description": "Sort direction for chat listings."
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
        },
        "description": "Maximum number of records to return."
      },
      {
        "name": "paginationKey",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Identifier to continue pagination."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "createChat": {
    "path": "/api/v1/chats",
    "method": "post",
    "summary": "Create chat",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateChatRequest"
    }
  },
  "createOutboundSmsChat": {
    "path": "/api/v1/chats/outbound-sms",
    "method": "post",
    "summary": "Create outbound SMS chat",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateOutboundSmsChatRequest"
    }
  },
  "getChat": {
    "path": "/api/v1/chats/{chatId}",
    "method": "get",
    "summary": "Get chat",
    "parameters": [
      {
        "name": "chatId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Chat identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "updateChat": {
    "path": "/api/v1/chats/{chatId}",
    "method": "patch",
    "summary": "Update chat",
    "parameters": [
      {
        "name": "chatId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Chat identifier."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/UpdateChatRequest"
    }
  },
  "createChatCompletion": {
    "path": "/api/v1/chats/{chatId}/completions",
    "method": "post",
    "summary": "Create chat completion",
    "parameters": [
      {
        "name": "chatId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Chat identifier."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateChatCompletionRequest"
    }
  },
  "endChat": {
    "path": "/api/v1/chats/{chatId}/end",
    "method": "post",
    "summary": "End chat",
    "parameters": [
      {
        "name": "chatId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Chat identifier."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "type": "object",
      "required": [
        "workspaceId"
      ],
      "properties": {
        "workspaceId": {
          "type": "integer"
        }
      }
    }
  },
  "listChatWidgets": {
    "path": "/api/v1/chat-widgets",
    "method": "get",
    "summary": "List chat widgets",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "createChatWidget": {
    "path": "/api/v1/chat-widgets",
    "method": "post",
    "summary": "Create chat widget",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateChatWidgetRequest"
    }
  },
  "getChatWidget": {
    "path": "/api/v1/chat-widgets/{widgetId}",
    "method": "get",
    "summary": "Get chat widget",
    "parameters": [
      {
        "name": "widgetId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Chat widget configuration identifier."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "updateChatWidget": {
    "path": "/api/v1/chat-widgets/{widgetId}",
    "method": "patch",
    "summary": "Update chat widget",
    "parameters": [
      {
        "name": "widgetId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Chat widget configuration identifier."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/UpdateChatWidgetRequest"
    }
  },
  "regenerateWidgetKey": {
    "path": "/api/v1/chat-widgets/{widgetId}/regenerate-key",
    "method": "post",
    "summary": "Regenerate widget key",
    "parameters": [
      {
        "name": "widgetId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Chat widget configuration identifier."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "listConversationFlows": {
    "path": "/api/v1/conversation-flows",
    "method": "get",
    "summary": "List conversation flows",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
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
        },
        "description": "Maximum number of records to return."
      },
      {
        "name": "paginationKey",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Identifier to continue pagination."
      },
      {
        "name": "paginationKeyVersion",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer"
        },
        "description": "Version paired with the pagination key."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "createConversationFlow": {
    "path": "/api/v1/conversation-flows",
    "method": "post",
    "summary": "Create conversation flow",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateConversationFlowRequest"
    }
  },
  "getConversationFlow": {
    "path": "/api/v1/conversation-flows/{conversationFlowId}",
    "method": "get",
    "summary": "Get conversation flow",
    "parameters": [
      {
        "name": "conversationFlowId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Conversation flow identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific version to retrieve or update."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "updateConversationFlow": {
    "path": "/api/v1/conversation-flows/{conversationFlowId}",
    "method": "patch",
    "summary": "Update conversation flow",
    "parameters": [
      {
        "name": "conversationFlowId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Conversation flow identifier."
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific version to retrieve or update."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/UpdateConversationFlowRequest"
    }
  },
  "deleteConversationFlow": {
    "path": "/api/v1/conversation-flows/{conversationFlowId}",
    "method": "delete",
    "summary": "Delete conversation flow",
    "parameters": [
      {
        "name": "conversationFlowId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Conversation flow identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "listKnowledgeBases": {
    "path": "/api/v1/knowledge-bases",
    "method": "get",
    "summary": "List knowledge bases",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "createKnowledgeBase": {
    "path": "/api/v1/knowledge-bases",
    "method": "post",
    "summary": "Create knowledge base",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateKnowledgeBaseRequest"
    }
  },
  "getKnowledgeBase": {
    "path": "/api/v1/knowledge-bases/{knowledgeBaseId}",
    "method": "get",
    "summary": "Get knowledge base",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Knowledge base identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "deleteKnowledgeBase": {
    "path": "/api/v1/knowledge-bases/{knowledgeBaseId}",
    "method": "delete",
    "summary": "Delete knowledge base",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Knowledge base identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "addKnowledgeBaseSources": {
    "path": "/api/v1/knowledge-bases/{knowledgeBaseId}/sources",
    "method": "post",
    "summary": "Add knowledge base sources",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Knowledge base identifier."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/AddKnowledgeBaseSourcesRequest"
    }
  },
  "deleteKnowledgeBaseSource": {
    "path": "/api/v1/knowledge-bases/{knowledgeBaseId}/sources/{sourceId}",
    "method": "delete",
    "summary": "Delete knowledge base source",
    "parameters": [
      {
        "name": "knowledgeBaseId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Knowledge base identifier."
      },
      {
        "name": "sourceId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Knowledge base source identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "listVoices": {
    "path": "/api/v1/voices",
    "method": "get",
    "summary": "List voices",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "searchCommunityVoices": {
    "path": "/api/v1/voices/search",
    "method": "post",
    "summary": "Search community voices",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/SearchCommunityVoiceRequest"
    }
  },
  "addCommunityVoice": {
    "path": "/api/v1/voices/community",
    "method": "post",
    "summary": "Add community voice",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/AddCommunityVoiceRequest"
    }
  },
  "cloneVoice": {
    "path": "/api/v1/voices/clone",
    "method": "post",
    "summary": "Clone voice",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "multipart/form-data",
    "bodySchema": {
      "$ref": "#/components/schemas/CloneVoiceRequest"
    }
  },
  "getVoice": {
    "path": "/api/v1/voices/{voiceId}",
    "method": "get",
    "summary": "Get voice",
    "parameters": [
      {
        "name": "voiceId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Voice identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "streamVoiceSample": {
    "path": "/api/v1/voices/{voiceId}/sample",
    "method": "get",
    "summary": "Stream voice sample",
    "parameters": [
      {
        "name": "voiceId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Voice identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "listTestCaseDefinitions": {
    "path": "/api/v1/test-case-definitions",
    "method": "get",
    "summary": "List test case definitions",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      },
      {
        "name": "type",
        "in": "query",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Response engine type used by an existing test case definition."
      },
      {
        "name": "llmId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "LLM identifier filter."
      },
      {
        "name": "conversationFlowId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Conversation flow identifier filter."
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific version to retrieve or update."
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
        },
        "description": "Maximum number of records to return."
      },
      {
        "name": "paginationKey",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Identifier to continue pagination."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "createTestCaseDefinition": {
    "path": "/api/v1/test-case-definitions",
    "method": "post",
    "summary": "Create test case definition",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateTestCaseDefinitionRequest"
    }
  },
  "listBatchTests": {
    "path": "/api/v1/batch-tests",
    "method": "get",
    "summary": "List batch tests",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      },
      {
        "name": "type",
        "in": "query",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Response engine type used by an existing test case definition."
      },
      {
        "name": "llmId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "LLM identifier filter."
      },
      {
        "name": "conversationFlowId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Conversation flow identifier filter."
      },
      {
        "name": "version",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Specific version to retrieve or update."
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
        },
        "description": "Maximum number of records to return."
      },
      {
        "name": "paginationKey",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Identifier to continue pagination."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "createBatchTest": {
    "path": "/api/v1/batch-tests",
    "method": "post",
    "summary": "Create batch test",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateBatchTestRequest"
    }
  },
  "getBatchTest": {
    "path": "/api/v1/batch-tests/{testCaseBatchJobId}",
    "method": "get",
    "summary": "Get batch test",
    "parameters": [
      {
        "name": "testCaseBatchJobId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Test run batch identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "getTestCaseDefinition": {
    "path": "/api/v1/test-case-definitions/{testCaseDefinitionId}",
    "method": "get",
    "summary": "Get test case definition",
    "parameters": [
      {
        "name": "testCaseDefinitionId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Test case definition identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "updateTestCaseDefinition": {
    "path": "/api/v1/test-case-definitions/{testCaseDefinitionId}",
    "method": "put",
    "summary": "Update test case definition",
    "parameters": [
      {
        "name": "testCaseDefinitionId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Test case definition identifier."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/UpdateTestCaseDefinitionRequest"
    }
  },
  "deleteTestCaseDefinition": {
    "path": "/api/v1/test-case-definitions/{testCaseDefinitionId}",
    "method": "delete",
    "summary": "Delete test case definition",
    "parameters": [
      {
        "name": "testCaseDefinitionId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Test case definition identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "getTestRun": {
    "path": "/api/v1/test-runs/{testCaseJobId}",
    "method": "get",
    "summary": "Get test run",
    "parameters": [
      {
        "name": "testCaseJobId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Test run job identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "listTestRunsByBatch": {
    "path": "/api/v1/test-runs/batches/{testCaseBatchJobId}",
    "method": "get",
    "summary": "List test runs by batch",
    "parameters": [
      {
        "name": "testCaseBatchJobId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Test run batch identifier."
      },
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
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
        },
        "description": "Maximum number of records to return."
      },
      {
        "name": "paginationKey",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Identifier to continue pagination."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "getConcurrency": {
    "path": "/api/v1/concurrency",
    "method": "get",
    "summary": "Get concurrency",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "listWorkspaces": {
    "path": "/api/v1/workspaces",
    "method": "get",
    "summary": "List workspaces",
    "parameters": [],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "createPhoneCall": {
    "path": "/api/v1/calls/initiate",
    "method": "post",
    "summary": "Create phone call",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreatePhoneCallRequest"
    }
  },
  "createWebCall": {
    "path": "/api/v1/calls/web",
    "method": "post",
    "summary": "Create web call",
    "parameters": [],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CreateWebCallRequest"
    }
  },
  "listCalls": {
    "path": "/api/v1/calls",
    "method": "get",
    "summary": "List calls",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer"
        },
        "description": "Optional workspace identifier filter. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      },
      {
        "name": "agentId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Filter call listings to a specific agent."
      },
      {
        "name": "status",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Filter calls by status."
      },
      {
        "name": "fromDate",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string",
          "format": "date-time"
        },
        "description": "Inclusive start date for call listing filter."
      },
      {
        "name": "toDate",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string",
          "format": "date-time"
        },
        "description": "Inclusive end date for call listing filter."
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
        },
        "description": "Page size for list endpoints."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "listCallsFiltered": {
    "path": "/api/v1/calls/list",
    "method": "post",
    "summary": "List calls",
    "parameters": [],
    "bodyRequired": false,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/V3ListCallsRequest"
    }
  },
  "fetchCallHistory": {
    "path": "/api/v1/calls/history",
    "method": "get",
    "summary": "Fetch call history",
    "parameters": [
      {
        "name": "workspaceId",
        "in": "query",
        "required": true,
        "schema": {
          "type": "integer"
        },
        "description": "Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token."
      },
      {
        "name": "agentId",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Filter call listings to a specific agent."
      },
      {
        "name": "agentVersion",
        "in": "query",
        "required": false,
        "schema": {
          "type": "integer",
          "minimum": 0
        },
        "description": "Filter call history to a specific persisted agent version captured at call time."
      },
      {
        "name": "status",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Filter calls by status."
      },
      {
        "name": "search",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string"
        },
        "description": "Search by call SID, phone number, platform call ID, customer name, or agent name."
      },
      {
        "name": "fromDate",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string",
          "format": "date-time"
        },
        "description": "Inclusive start date for call listing filter."
      },
      {
        "name": "toDate",
        "in": "query",
        "required": false,
        "schema": {
          "type": "string",
          "format": "date-time"
        },
        "description": "Inclusive end date for call listing filter."
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
        },
        "description": "Page size for list endpoints."
      },
      {
        "name": "includeArchived",
        "in": "query",
        "required": false,
        "schema": {
          "type": "boolean",
          "default": false
        },
        "description": "When true, include archived calls in the response."
      },
      {
        "name": "includeChildCalls",
        "in": "query",
        "required": false,
        "schema": {
          "type": "boolean",
          "default": false
        },
        "description": "When true, include child calls linked to transfer or split-call workflows."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "getCall": {
    "path": "/api/v1/calls/{callId}",
    "method": "get",
    "summary": "Get call",
    "parameters": [
      {
        "name": "callId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Call identifier or SID."
      }
    ],
    "bodyRequired": false,
    "bodyType": null,
    "bodySchema": null
  },
  "updateCall": {
    "path": "/api/v1/calls/{callId}",
    "method": "patch",
    "summary": "Update call",
    "parameters": [
      {
        "name": "callId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Call identifier or SID."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/UpdateCallRequest"
    }
  },
  "endLiveCall": {
    "path": "/api/v1/calls/{callId}/end",
    "method": "post",
    "summary": "End live call",
    "parameters": [
      {
        "name": "callId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Call identifier or SID."
      }
    ],
    "bodyRequired": false,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CallActionWorkspaceRequest"
    }
  },
  "updateLiveCall": {
    "path": "/api/v1/calls/{callId}/live",
    "method": "patch",
    "summary": "Update live call",
    "parameters": [
      {
        "name": "callId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Call identifier or SID."
      }
    ],
    "bodyRequired": true,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/UpdateLiveCallRequest"
    }
  },
  "rerunCallAnalysis": {
    "path": "/api/v1/calls/{callId}/analysis/rerun",
    "method": "put",
    "summary": "Rerun call analysis",
    "parameters": [
      {
        "name": "callId",
        "in": "path",
        "required": true,
        "schema": {
          "type": "string"
        },
        "description": "Call identifier or SID."
      }
    ],
    "bodyRequired": false,
    "bodyType": "application/json",
    "bodySchema": {
      "$ref": "#/components/schemas/CallActionWorkspaceRequest"
    }
  }
} as const;
