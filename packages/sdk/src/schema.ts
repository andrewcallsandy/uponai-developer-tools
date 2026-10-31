export interface paths {
    "/api/v1/llms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List LLMs
         * @description Enumerate the UponAI LLM configurations available to a workspace. Results are returned newest first.
         */
        get: operations["listLlms"];
        put?: never;
        /**
         * Create LLM
         * @description Provision a new UponAI large language model configuration.
         */
        post: operations["createLlm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/llms/{llmId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description LLM identifier. */
                llmId: components["parameters"]["LlmIdPath"];
            };
            cookie?: never;
        };
        /**
         * Get LLM
         * @description Retrieve the latest or a specific version of an LLM configuration.
         */
        get: operations["getLlm"];
        put?: never;
        post?: never;
        /**
         * Delete LLM
         * @description Permanently delete an LLM configuration and its versions.
         */
        delete: operations["deleteLlm"];
        options?: never;
        head?: never;
        /**
         * Update LLM
         * @description Apply partial updates to an existing LLM configuration.
         */
        patch: operations["updateLlm"];
        trace?: never;
    };
    "/api/v1/agents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List agents
         * @description List agents created inside a workspace.
         */
        get: operations["listAgents"];
        put?: never;
        /**
         * Create agent
         * @description Create a new UponAI agent for use in calls and web sessions.
         */
        post: operations["createAgent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/agents/{agentId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        /**
         * Get agent
         * @description Retrieve the active configuration or a historical version of an agent.
         */
        get: operations["getAgent"];
        put?: never;
        post?: never;
        /**
         * Delete agent
         * @description Permanently remove an agent and all saved versions.
         */
        delete: operations["deleteAgent"];
        options?: never;
        head?: never;
        /**
         * Update agent
         * @description Apply partial updates. Customer webhook URLs and event selections are stored by the platform; delivery uses the platform proxy. Omitted webhook fields are preserved. Subscription changes require an editable version; publish it separately to activate.
         */
        patch: operations["updateAgent"];
        trace?: never;
    };
    "/api/v1/agents/{agentId}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        /**
         * List agent versions
         * @description Review the revision history for an agent.
         */
        get: operations["listAgentVersions"];
        put?: never;
        /**
         * Create agent draft version
         * @description Create a new editable draft from an existing agent version.
         */
        post: operations["createAgentDraftVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/agents/{agentId}/versions/{version}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Specific agent version. */
                version: components["parameters"]["VersionPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Publish agent version
         * @description Publish one existing draft version in place.
         */
        post: operations["publishAgentVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/agents/{agentId}/versions/{version}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Specific agent version. */
                version: components["parameters"]["VersionPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete agent version
         * @description Delete one specific agent version.
         */
        delete: operations["deleteAgentVersion"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/agents/{agentId}/environment-tags": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        /**
         * List agent environment tags
         * @description List the agent's environment tags. Each tag points to one published version (or none) and carries dynamic variable values that apply to calls or chats using the tag. Every agent has the built-in prod and staging tags. Set includeDetectedVariables=true to also return the dynamic variables each tagged version (and the current working version) references.
         */
        get: operations["listAgentEnvironmentTags"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/agents/{agentId}/environment-tags/detected-variables": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        /**
         * Detect agent dynamic variables
         * @description List the dynamic variables a version expects as inputs, found in its prompts, messages, tools, and default dynamic variables. System variables and values collected during the conversation are excluded. Use the result to decide which variables to set on an environment tag.
         */
        get: operations["detectAgentDynamicVariables"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/agents/{agentId}/environment-tags/{tagName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Environment tag name, such as prod, staging, or a custom tag. */
                tagName: components["parameters"]["TagNamePath"];
            };
            cookie?: never;
        };
        get?: never;
        /**
         * Create or update agent environment tag
         * @description Point a tag at a published version, unassign it (version null), replace its dynamic variables, or create a new tag (create true). Omitted fields keep their current values. Tag variables override the agent's default dynamic variables, so a blank value replaces the default; omit a variable to keep the default. Publishing a version does not move tags; move them here or with environmentTags when publishing.
         */
        put: operations["updateAgentEnvironmentTag"];
        post?: never;
        /**
         * Delete agent environment tag
         * @description Remove a custom tag and its variables. The built-in prod and staging tags cannot be removed.
         */
        delete: operations["deleteAgentEnvironmentTag"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat-agents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List chat agents
         * @description List chat agents created inside a workspace.
         */
        get: operations["listChatAgents"];
        put?: never;
        /**
         * Create chat agent
         * @description Create a new UponAI chat agent for browser and messaging use cases.
         */
        post: operations["createChatAgent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat-agents/{agentId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        /**
         * Get chat agent
         * @description Retrieve the active configuration or a historical version of a chat agent.
         */
        get: operations["getChatAgent"];
        put?: never;
        post?: never;
        /**
         * Delete chat agent
         * @description Permanently remove a chat agent and all saved versions.
         */
        delete: operations["deleteChatAgent"];
        options?: never;
        head?: never;
        /**
         * Update chat agent
         * @description Apply partial updates. Customer webhook URLs and event selections are stored by the platform; delivery uses the platform proxy. Omitted webhook fields are preserved. Subscription changes require an editable version; publish it separately to activate.
         */
        patch: operations["updateChatAgent"];
        trace?: never;
    };
    "/api/v1/chat-agents/{agentId}/versions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        /**
         * List chat agent versions
         * @description Review the revision history for a chat agent.
         */
        get: operations["listChatAgentVersions"];
        put?: never;
        /**
         * Create chat agent draft version
         * @description Create a new editable draft from an existing chat agent version.
         */
        post: operations["createChatAgentDraftVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat-agents/{agentId}/versions/{version}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Specific agent version. */
                version: components["parameters"]["VersionPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Publish chat agent version
         * @description Publish one existing chat agent draft version in place.
         */
        post: operations["publishChatAgentVersion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat-agents/{agentId}/versions/{version}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Specific agent version. */
                version: components["parameters"]["VersionPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete chat agent version
         * @description Delete one specific chat agent version.
         */
        delete: operations["deleteChatAgentVersion"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat-agents/{agentId}/environment-tags": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        /**
         * List chat agent environment tags
         * @description List the chat agent's environment tags. Each tag points to one published version (or none) and carries dynamic variable values that apply to calls or chats using the tag. Every agent has the built-in prod and staging tags. Set includeDetectedVariables=true to also return the dynamic variables each tagged version (and the current working version) references.
         */
        get: operations["listChatAgentEnvironmentTags"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat-agents/{agentId}/environment-tags/detected-variables": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        /**
         * Detect chat agent dynamic variables
         * @description List the dynamic variables a version expects as inputs, found in its prompts, messages, tools, and default dynamic variables. System variables and values collected during the conversation are excluded. Use the result to decide which variables to set on an environment tag.
         */
        get: operations["detectChatAgentDynamicVariables"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat-agents/{agentId}/environment-tags/{tagName}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Environment tag name, such as prod, staging, or a custom tag. */
                tagName: components["parameters"]["TagNamePath"];
            };
            cookie?: never;
        };
        get?: never;
        /**
         * Create or update chat agent environment tag
         * @description Point a tag at a published version, unassign it (version null), replace its dynamic variables, or create a new tag (create true). Omitted fields keep their current values. Tag variables override the agent's default dynamic variables, so a blank value replaces the default; omit a variable to keep the default. Publishing a version does not move tags; move them here or with environmentTags when publishing.
         */
        put: operations["updateChatAgentEnvironmentTag"];
        post?: never;
        /**
         * Delete chat agent environment tag
         * @description Remove a custom tag and its variables. The built-in prod and staging tags cannot be removed.
         */
        delete: operations["deleteChatAgentEnvironmentTag"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat-agents/{agentId}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Publish chat agent version (legacy path)
         * @deprecated
         * @description Deprecated compatibility path. Publish the explicit version supplied in the request body.
         */
        post: operations["publishChatAgentVersionFiltered"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List chats
         * @description List chats for a workspace, newest first by default.
         */
        get: operations["listChats"];
        put?: never;
        /**
         * Create chat
         * @description Start a new live chat session backed by a chat agent.
         */
        post: operations["createChat"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/outbound-sms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create outbound SMS chat
         * @description Start an outbound SMS chat session for a workspace.
         */
        post: operations["createOutboundSmsChat"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{chatId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. */
                chatId: components["parameters"]["ChatIdPath"];
            };
            cookie?: never;
        };
        /**
         * Get chat
         * @description Retrieve details for a specific chat session.
         */
        get: operations["getChat"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update chat
         * @description Update metadata, custom attributes, or dynamic-variable overrides for an existing chat.
         */
        patch: operations["updateChat"];
        trace?: never;
    };
    "/api/v1/chats/{chatId}/completions": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. */
                chatId: components["parameters"]["ChatIdPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create chat completion
         * @description Send a user message into an existing chat and receive the assistant response messages.
         */
        post: operations["createChatCompletion"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{chatId}/end": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. */
                chatId: components["parameters"]["ChatIdPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * End chat
         * @description Mark a chat as completed and close the session.
         */
        post: operations["endChat"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat-widgets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List chat widgets
         * @description List embeddable website chat widget configurations for a workspace.
         */
        get: operations["listChatWidgets"];
        put?: never;
        /**
         * Create chat widget
         * @description Create a public widget key and embed configuration for a website chat widget. The returned `embedScript` is the snippet to place on the customer's website. Browser traffic uses the widget public key and calls UponAI runtime endpoints; provider credentials and provider URLs are never exposed to the website.
         */
        post: operations["createChatWidget"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat-widgets/{widgetId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat widget configuration identifier. */
                widgetId: components["parameters"]["WidgetIdPath"];
            };
            cookie?: never;
        };
        /**
         * Get chat widget
         * @description Retrieve a website chat widget configuration and its embed script.
         */
        get: operations["getChatWidget"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update chat widget
         * @description Update styling, allowed origins, assigned chat agent, or enabled state for a website widget.
         */
        patch: operations["updateChatWidget"];
        trace?: never;
    };
    "/api/v1/chat-widgets/{widgetId}/regenerate-key": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat widget configuration identifier. */
                widgetId: components["parameters"]["WidgetIdPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Regenerate widget key
         * @description Rotate the public widget key. Existing website embeds using the old key will stop working until the script tag is updated with the returned `embedScript`.
         */
        post: operations["regenerateWidgetKey"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversation-flows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List conversation flows
         * @description Enumerate conversation flows for the workspace. The JSON body remains an array. Follow X-Pagination-Key while X-Has-More is true; paginationKeyVersion is accepted for compatibility and is no longer needed.
         */
        get: operations["listConversationFlows"];
        put?: never;
        /**
         * Create conversation flow
         * @description Compose a reusable flow graph for agents to attach to.
         */
        post: operations["createConversationFlow"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/conversation-flows/{conversationFlowId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Conversation flow identifier. */
                conversationFlowId: components["parameters"]["ConversationFlowIdPath"];
            };
            cookie?: never;
        };
        /**
         * Get conversation flow
         * @description Retrieve the latest or a specific version of a conversation flow.
         */
        get: operations["getConversationFlow"];
        put?: never;
        post?: never;
        /**
         * Delete conversation flow
         * @description Remove a conversation flow and its versions.
         */
        delete: operations["deleteConversationFlow"];
        options?: never;
        head?: never;
        /**
         * Update conversation flow
         * @description Apply partial updates to a conversation flow.
         */
        patch: operations["updateConversationFlow"];
        trace?: never;
    };
    "/api/v1/knowledge-bases": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List knowledge bases
         * @description Enumerate knowledge bases available to the workspace.
         */
        get: operations["listKnowledgeBases"];
        put?: never;
        /**
         * Create knowledge base
         * @description Create a knowledge base and ingest documents, URLs, or free-form text for grounded responses. URL auto-refresh and chunking controls are supported when needed.
         */
        post: operations["createKnowledgeBase"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge-bases/{knowledgeBaseId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Knowledge base identifier. */
                knowledgeBaseId: components["parameters"]["KnowledgeBaseIdPath"];
            };
            cookie?: never;
        };
        /**
         * Get knowledge base
         * @description Retrieve knowledge base metadata and ingestion status.
         */
        get: operations["getKnowledgeBase"];
        put?: never;
        post?: never;
        /**
         * Delete knowledge base
         * @description Permanently remove a knowledge base and its sources.
         */
        delete: operations["deleteKnowledgeBase"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge-bases/{knowledgeBaseId}/sources": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Knowledge base identifier. */
                knowledgeBaseId: components["parameters"]["KnowledgeBaseIdPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add knowledge base sources
         * @description Append new source material to an existing knowledge base.
         */
        post: operations["addKnowledgeBaseSources"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge-bases/{knowledgeBaseId}/sources/{sourceId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Knowledge base identifier. */
                knowledgeBaseId: components["parameters"]["KnowledgeBaseIdPath"];
                /** @description Knowledge base source identifier. */
                sourceId: components["parameters"]["SourceIdPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete knowledge base source
         * @description Remove a specific source entry from a knowledge base.
         */
        delete: operations["deleteKnowledgeBaseSource"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List voices
         * @description Explore the UponAI voice catalog available to a workspace.
         */
        get: operations["listVoices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voices/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search community voices
         * @description Search provider voice catalogs for community voices.
         */
        post: operations["searchCommunityVoices"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voices/community": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add community voice
         * @description Add a provider community voice into the workspace library.
         */
        post: operations["addCommunityVoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voices/clone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Clone voice
         * @description Clone a custom voice from uploaded source audio files.
         */
        post: operations["cloneVoice"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voices/{voiceId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Voice identifier. */
                voiceId: components["parameters"]["VoiceIdPath"];
            };
            cookie?: never;
        };
        /**
         * Get voice
         * @description Retrieve metadata for a specific voice.
         */
        get: operations["getVoice"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voices/{voiceId}/sample": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Voice identifier. */
                voiceId: components["parameters"]["VoiceIdPath"];
            };
            cookie?: never;
        };
        /**
         * Stream voice sample
         * @description Stream an MPEG sample to preview the voice.
         */
        get: operations["streamVoiceSample"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/test-case-definitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List test case definitions
         * @description List test case definitions for a target response engine.
         */
        get: operations["listTestCaseDefinitions"];
        put?: never;
        /**
         * Create test case definition
         * @description Create a simulation test case definition for a response engine.
         */
        post: operations["createTestCaseDefinition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/batch-tests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List batch tests
         * @description List simulation batch jobs for a target response engine.
         */
        get: operations["listBatchTests"];
        put?: never;
        /**
         * Create batch test
         * @description Run one or more saved simulation test case definitions against a response engine.
         */
        post: operations["createBatchTest"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/batch-tests/{testCaseBatchJobId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Test run batch identifier. */
                testCaseBatchJobId: components["parameters"]["TestCaseBatchJobIdPath"];
            };
            cookie?: never;
        };
        /**
         * Get batch test
         * @description Retrieve a simulation batch job by ID.
         */
        get: operations["getBatchTest"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/test-case-definitions/{testCaseDefinitionId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Test case definition identifier. */
                testCaseDefinitionId: components["parameters"]["TestCaseDefinitionIdPath"];
            };
            cookie?: never;
        };
        /**
         * Get test case definition
         * @description Retrieve a single test case definition.
         */
        get: operations["getTestCaseDefinition"];
        /**
         * Update test case definition
         * @description Update an existing test case definition.
         */
        put: operations["updateTestCaseDefinition"];
        post?: never;
        /**
         * Delete test case definition
         * @description Delete an existing test case definition.
         */
        delete: operations["deleteTestCaseDefinition"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/test-runs/{testCaseJobId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Test run job identifier. */
                testCaseJobId: components["parameters"]["TestCaseJobIdPath"];
            };
            cookie?: never;
        };
        /**
         * Get test run
         * @description Retrieve a single test run result by job ID.
         */
        get: operations["getTestRun"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/test-runs/batches/{testCaseBatchJobId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Test run batch identifier. */
                testCaseBatchJobId: components["parameters"]["TestCaseBatchJobIdPath"];
            };
            cookie?: never;
        };
        /**
         * List test runs by batch
         * @description List all test runs associated with a batch job.
         */
        get: operations["listTestRunsByBatch"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/concurrency": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get concurrency
         * @description Retrieve concurrency limits and current usage for the account.
         */
        get: operations["getConcurrency"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/workspaces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List workspaces
         * @description List the workspaces accessible to the bearer token. Use this endpoint to discover the workspaceId required by workspace-scoped endpoints.
         */
        get: operations["listWorkspaces"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/calls/initiate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create phone call
         * @description Initiate a PSTN phone call via UponAI infrastructure. The workspace is inferred from the unique agentId. You may still send workspaceId for backward compatibility. Native-transfer workspaces expose the full per-call override surface, including agentOverride, overrideAgentVersion, customSipHeaders, and ignoreE164Validation.
         */
        post: operations["createPhoneCall"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/calls/web": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create web call
         * @description Start a browser based call session powered by an UponAI agent. The workspace is inferred from the unique agentId. You may still send workspaceId for backward compatibility.
         */
        post: operations["createWebCall"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/calls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List calls
         * @deprecated
         * @description Deprecated. List calls with optional workspace, agent, status, and date filters from local call history. Use POST /api/v1/calls/list for the current cursor-compatible listing contract.
         */
        get: operations["listCalls"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/calls/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * List calls
         * @description List calls from local call history with the current unified pagination envelope. The response returns `items`, `has_more`, and `pagination_key`; send the returned pagination key in the next request to continue. You may include workspaceId to scope the query to one accessible workspace.
         */
        post: operations["listCallsFiltered"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/calls/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch call history
         * @description Return paginated call history for a single workspace, including agent and workspace metadata plus optional search and date filters.
         */
        get: operations["fetchCallHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/calls/{callId}": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Call identifier or SID. */
                callId: components["parameters"]["CallIdPath"];
            };
            cookie?: never;
        };
        /**
         * Get call
         * @description Retrieve details for a specific call.
         */
        get: operations["getCall"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update call
         * @description Update stored metadata or opt out of sensitive data storage. The API infers workspace from stored call data when available; workspaceId remains an optional backward-compatible fallback.
         */
        patch: operations["updateCall"];
        trace?: never;
    };
    "/api/v1/calls/{callId}/end": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Call identifier or SID. */
                callId: components["parameters"]["CallIdPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * End live call
         * @description Immediately ends an active voice or web call. If the call is already stored in call history, the workspace is inferred from that record; otherwise provide workspaceId in the request body so the action can be scoped to the correct workspace.
         */
        post: operations["endLiveCall"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/calls/{callId}/live": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Call identifier or SID. */
                callId: components["parameters"]["CallIdPath"];
            };
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update live call
         * @description Applies runtime changes to an active call. You can override dynamic variables, metadata, and data storage setting, inject additional context, request a fresh agent response, and start or stop a listen-only audio stream while the call is in progress. These changes take effect immediately; metadata and data storage setting changes are also persisted to the call record. CamelCase and snake_case request field names are both accepted.
         */
        patch: operations["updateLiveCall"];
        trace?: never;
    };
    "/api/v1/calls/{callId}/analysis/rerun": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Call identifier or SID. */
                callId: components["parameters"]["CallIdPath"];
            };
            cookie?: never;
        };
        get?: never;
        /**
         * Rerun call analysis
         * @description Reprocess post-call analysis for a completed call. If the call is already stored in call history, the workspace is inferred from that record; otherwise provide workspaceId in the request body.
         */
        put: operations["rerunCallAnalysis"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/templates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List voice simulation templates
         * @description Requires workspace access. Voice simulations use isolated agent copies and the workspace simulation entitlement.
         */
        get: operations["listVoiceSimulationTemplates"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get voice simulation access and prices
         * @description Requires workspace access. Voice simulations use isolated agent copies and the workspace simulation entitlement.
         */
        get: operations["getVoiceSimulationSettings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/agents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List editable simulation source agents
         * @description Requires workspace access. Voice simulations use isolated agent copies and the workspace simulation entitlement.
         */
        get: operations["listVoiceSimulationSourceAgents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/projects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List voice simulation projects
         * @description Requires workspace access. Voice simulations use isolated agent copies and the workspace simulation entitlement.
         */
        get: operations["listVoiceSimulationProjects"];
        put?: never;
        /**
         * Create a voice simulation project
         * @description Requires workspace access. Optionally copy an accessible, active project in the same workspace using copy_project_id. Copies its simulation draft and active scenarios including IVR recordings; source_agent_id must match the original. Histories, sessions, improvements and budget approvals are not copied. Creation is atomic and does not launch calls.
         */
        post: operations["createVoiceSimulationProject"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/projects/{projectId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a voice simulation project
         * @description Requires workspace access. Voice simulations use isolated agent copies and the workspace simulation entitlement.
         */
        get: operations["getVoiceSimulationProject"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Update a voice simulation project
         * @description Requires workspace access and edit access to the source agent. Converts the project between automated and manual. Switching to manual returns 409 AUTOMATION_ACTIVE while an improvement run is running or paused, or its schedule is enabled; stop or pause it first. Manual projects reject new improvement runs and schedules with 409 PROJECT_MANUAL.
         */
        patch: operations["updateVoiceSimulationProject"];
        trace?: never;
    };
    "/api/v1/voice-simulations/projects/{projectId}/scenarios": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List project scenarios
         * @description Requires workspace access. Voice simulations use isolated agent copies and the workspace simulation entitlement.
         */
        get: operations["listVoiceSimulationScenarios"];
        put?: never;
        /**
         * Create a voice simulation scenario
         * @description Requires workspace access. Voice simulations use isolated agent copies and the workspace simulation entitlement.
         */
        post: operations["createVoiceSimulationScenario"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/projects/{projectId}/scenarios/{scenarioId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update a voice simulation scenario
         * @description Requires workspace access. Voice simulations use isolated agent copies and the workspace simulation entitlement.
         */
        put: operations["updateVoiceSimulationScenario"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/projects/{projectId}/generate-scenarios": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate scenarios with Agent IQ
         * @description Agent IQ drafts scenarios for review. This does not save scenarios or launch calls. Omit `instruction` to let Agent IQ recommend the highest-value suite from the agent's prompt, tools and up to 20 recent real calls (last 90 days, contact details removed). Requires Agent IQ access and uses the workspace Agent IQ pricing.
         */
        post: operations["generateVoiceSimulationScenarios"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/projects/{projectId}/estimate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Estimate a simulation session
         * @description Requires workspace access. Voice simulations use isolated agent copies and the workspace simulation entitlement.
         */
        post: operations["estimateVoiceSimulationSession"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/projects/{projectId}/sessions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List simulation sessions
         * @description Requires workspace access. Voice simulations use isolated agent copies and the workspace simulation entitlement.
         */
        get: operations["listVoiceSimulationSessions"];
        put?: never;
        /**
         * Launch a voice simulation session
         * @description Queues real audio conversations using isolated test copies. Review the estimate and supply the accepted maximum surcharge. Reuse the same idempotency_key only for an identical request. Voice usage and monthly access are separate from the surcharge. Registration is not proof of a completed audio run.
         */
        post: operations["launchVoiceSimulationSession"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/sessions/{sessionId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a simulation session and report
         * @description Returns run status, criterion scores and transcript evidence. Outcomes distinguish pass, fail, infrastructure error and inconclusive evidence.
         */
        get: operations["getVoiceSimulationSession"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/sessions/{sessionId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel a voice simulation session
         * @description Requests asynchronous cancellation. Remains available after the feature is disabled. Already connected runs may incur usage charges.
         */
        post: operations["cancelVoiceSimulationSession"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/sessions/{sessionId}/improvements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Propose a simulation improvement
         * @description Agent IQ proposes changes within change_scope based on the tested draft and session evidence. The default is prompts only. Expanded proposals include structured configuration diffs and hosted-function tests. This does not modify the source agent or apply the draft. Requires Agent IQ access.
         */
        post: operations["proposeVoiceSimulationImprovement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/projects/{projectId}/improvements/{improvementId}/apply": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Apply an improvement to a simulation draft
         * @description Applies the reviewed configuration and hosted-function handlers to future simulation copies only. The source agent and production assignments are unchanged. Stale draft revisions are rejected.
         */
        post: operations["applyVoiceSimulationImprovement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/sessions/{sessionId}/runs/{runId}/recording": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a voice simulation recording
         * @description Stream the tested agent audio recording when retained by the workspace. Requires access to the session and source agent.
         */
        get: operations["getVoiceSimulationRecording"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/projects/{projectId}/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Archive a voice simulation project
         * @description Archives the resource while retaining existing session evidence. Project archival also requests cancellation of active sessions.
         */
        post: operations["archiveVoiceSimulationProject"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/projects/{projectId}/scenarios/{scenarioId}/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Archive a voice simulation scenario
         * @description Archives the resource while retaining existing session evidence. Project archival also requests cancellation of active sessions.
         */
        post: operations["archiveVoiceSimulationScenario"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/projects/{projectId}/improvements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List voice simulation improvement history
         * @description Returns reviewed and pending prompt proposals without modifying the original agent.
         */
        get: operations["listVoiceSimulationImprovements"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/speech/voices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List voices for IVR recordings
         * @description Lists voices using the workspace brand speech account. Provider-owned workspaces require an enabled provider grant and their own speech key. Keys are never returned.
         */
        get: operations["listVoiceSimulationSpeechVoices"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/ivr/audio": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate recordings for IVR prompts
         * @description Generates speech for announcement and menu nodes using the configured brand account. May incur speech-provider charges. Identical workspace/text/voice/model requests reuse cached assets. Partial failures return complete=false and per-node errors; review before saving the returned graph.
         */
        post: operations["generateVoiceSimulationIvrAudio"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/audio/{audioId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Download an IVR recording
         * @description Returns a workspace-scoped generated recording. Requires workspace access.
         */
        get: operations["getVoiceSimulationIvrAudio"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/projects/{projectId}/improvement-runs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List self-improving runs
         * @description Returns up to 50 recent improvement runs for this project.
         */
        get: operations["listVoiceSimulationImprovementRuns"];
        put?: never;
        /**
         * Create a self-improving run
         * @description Creates an awaiting-approval draft. Does not launch calls. Only one active improvement run per project. AI generation can consume the configured interaction budget before call approval.
         */
        post: operations["createVoiceSimulationImprovementRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/improvement-runs/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Review a self-improving run
         * @description Returns counters, selected scenarios, review fingerprint and the latest 100 activity events. Review the actual scenarios and draft before approval.
         */
        get: operations["getVoiceSimulationImprovementRun"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Choose scenarios before improvement approval
         * @description Owner only, while awaiting approval and no generation is in progress. Updates the selected suite without resetting consumed AI usage. Approved suites cannot be changed; stop and create a new run instead.
         */
        patch: operations["updateVoiceSimulationImprovementRun"];
        trace?: never;
    };
    "/api/v1/voice-simulations/improvement-runs/{id}/generate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate and save an improvement test suite
         * @description Owner only, before approval. Reserves one Agent IQ interaction and saves the generated scenarios for review. Replaces this draft run selection. Does not launch calls.
         */
        post: operations["generateVoiceSimulationImprovementScenarios"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/improvement-runs/{id}/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Approve or renew an improvement budget
         * @description Owner approval starts real calls and automatic Agent IQ changes to the isolated simulation draft. Present the complete selected suite and budget to the user first. Submit the fingerprint from that review. Calls, AI interactions and surcharges accumulate across renewals. The full approved suite is frozen; changes require a new improvement run. Errors, missing evidence and insufficient budget pause the loop.
         */
        post: operations["approveVoiceSimulationImprovementRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/improvement-runs/{id}/stop": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stop a self-improving run
         * @description Stops future work and requests cancellation of active sessions. In-flight calls may take time to end; already incurred usage remains billable.
         */
        post: operations["stopVoiceSimulationImprovementRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/projects/{projectId}/improvement-schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get recurring improvement policy
         * @description Returns the policy, remaining cycle allowance, next time trigger and unconsumed completed-call count.
         */
        get: operations["getVoiceSimulationSchedule"];
        /**
         * Approve or renew recurring improvement cycles
         * @description Explicit owner approval is required. The reviewed run supplies the fixed regression suite; an unstarted reviewed run is converted to the schedule. Each cycle uses its own approved budgets. Fresh tests can be preauthorized. Only isolated simulation drafts change; original agents require manual review. Reapproval resets the cycle allowance but retains consumed-call history. Active scheduled cycles must finish or be stopped before renewal.
         */
        put: operations["saveVoiceSimulationSchedule"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/voice-simulations/projects/{projectId}/improvement-schedule/pause": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Pause future improvement cycles
         * @description Owner only. Stops future scheduling without cancelling the current cycle. Use the improvement-run stop operation to cancel current work.
         */
        post: operations["pauseVoiceSimulationSchedule"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/calls/{callId}/monitor": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Open a live call monitoring session
         * @description Create a single-use ticket valid for 60 seconds for a call-scoped WebSocket. Connect to websocket_path on the same API origin using wss. The stream sends ready, transcript_snapshot, transcript_updated and call_ended JSON events. Transcript events contain the complete current transcripts array; replace items by id. Optional audio uses audio_started, audio_chunk, audio_stopped and audio_error events. Audio chunks contain base64 signed 16-bit little-endian PCM; audio_started supplies sample_rate and channels. Audio requires workspace live-audio access and a supported active media connection. Audio startup failure leaves transcripts available. Access is rechecked on connection and every 15 seconds. Reconnect by creating a new session. Tickets are credentials; keep them out of logs. Live transcripts are raw, before post-call privacy processing. No client messages are required.
         */
        post: operations["createCallMonitorSession"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        LlmSummary: {
            llm_id: string;
            display_name: string;
            version: number;
        };
        CreateLlmRequest: {
            workspaceId: number;
            display_name: string;
            model?: string;
            /** @description Speech-to-speech model. Set either `model` or `s2s_model`, not both. */
            s2s_model?: string | null;
            general_prompt?: string;
            begin_message?: string | null;
            /** @enum {string} */
            start_speaker?: "user" | "agent";
            begin_after_user_silence_ms?: number | null;
            responsiveness?: string;
            model_temperature?: number;
            model_high_priority?: boolean;
            tool_call_strict_mode?: boolean;
            knowledge_base_ids?: string[];
            kb_config?: {
                [key: string]: unknown;
            };
            general_tools?: components["schemas"]["LlmTool"][];
            states?: components["schemas"]["LlmState"][];
            starting_state?: string | null;
            default_dynamic_variables?: {
                [key: string]: string;
            };
            mcps?: components["schemas"]["McpConnection"][];
            /** @description Optional LLM version number. */
            version?: number;
        } & {
            [key: string]: unknown;
        };
        LlmTool: components["schemas"]["TransferCallTool"] | components["schemas"]["EndCallTool"] | components["schemas"]["BridgeTransferTool"] | components["schemas"]["CancelTransferTool"] | components["schemas"]["CustomFunctionTool"] | components["schemas"]["Tool"];
        TransferCallTool: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "TransferCallTool";
            /** @example transfer_to_support */
            name: string;
            /** @description Prompt-style description that tells the LLM when to call this transfer tool. */
            description?: string;
            transfer_destination: components["schemas"]["TransferDestination"];
            transfer_option: components["schemas"]["TransferOption"];
            /** @description Disable E.164 validation for internal or custom telephony destinations. */
            ignore_e164_validation?: boolean;
            /**
             * @description SIP headers sent with the outbound transfer leg.
             * @example {
             *       "x-department": "support"
             *     }
             */
            custom_sip_headers?: {
                [key: string]: string;
            };
            speak_during_execution?: boolean;
            execution_message_description?: string;
            /** @enum {string} */
            execution_message_type?: "prompt" | "static_text";
        };
        TransferDestination: components["schemas"]["TransferDestinationPredefined"] | components["schemas"]["TransferDestinationInferred"];
        TransferDestinationPredefined: {
            /** @enum {string} */
            type: "predefined";
            /**
             * @description E.164 number, internal extension, or dynamic variable such as `{{transfer_destination}}`.
             * @example +18885551212
             */
            number?: string;
            /**
             * @description SIP URI destination for SIP transfers.
             * @example sip:support@pbx.example.com
             */
            sip_uri?: string;
            /**
             * @description DTMF extension to dial after the main transfer connects.
             * @example 1234
             */
            extension?: string;
        };
        TransferDestinationInferred: {
            /** @enum {string} */
            type: "inferred";
            /**
             * @description Prompt used with the global prompt and transcript to infer the transfer destination.
             * @example Transfer to billing at +18885550111 or sales at +18885550112 based on the user's request.
             */
            prompt: string;
        };
        TransferOption: components["schemas"]["TransferOptionColdTransfer"] | components["schemas"]["TransferOptionWarmTransfer"] | components["schemas"]["TransferOptionAgenticWarmTransfer"];
        TransferOptionColdTransfer: {
            /** @enum {string} */
            type: "cold_transfer";
            /**
             * @description Use SIP INVITE for a new outbound leg, or SIP REFER to ask the carrier/PBX to transfer the call.
             * @default sip_invite
             * @enum {string}
             */
            cold_transfer_mode?: "sip_invite" | "sip_refer";
            /** @description Show the original caller as caller ID when supported. Applies to SIP INVITE transfers. */
            show_transferee_as_caller?: boolean;
            transfer_ring_duration_ms?: number;
        };
        TransferOptionWarmTransfer: {
            /** @enum {string} */
            type: "warm_transfer";
            show_transferee_as_caller?: boolean;
            /** @description Milliseconds to wait for human detection before treating the transfer as failed. */
            agent_detection_timeout_ms?: number;
            transfer_ring_duration_ms?: number;
            /** @enum {string} */
            on_hold_music?: "none" | "relaxing_sound" | "uplifting_beats" | "ringtone";
            public_handoff_option?: components["schemas"]["WarmTransferHandoffOption"];
            private_handoff_option?: components["schemas"]["WarmTransferHandoffOption"];
            ivr_option?: components["schemas"]["WarmTransferPrompt"];
            opt_out_human_detection?: boolean;
            /** @default true */
            enable_bridge_audio_cue?: boolean;
        };
        WarmTransferHandoffOption: components["schemas"]["WarmTransferPrompt"] | components["schemas"]["WarmTransferStaticMessage"];
        WarmTransferPrompt: {
            /** @enum {string} */
            type: "prompt";
            prompt: string;
        };
        WarmTransferStaticMessage: {
            /** @enum {string} */
            type: "static_message";
            message: string;
        };
        TransferOptionAgenticWarmTransfer: {
            /** @enum {string} */
            type: "agentic_warm_transfer";
            show_transferee_as_caller?: boolean;
            /** @enum {string} */
            on_hold_music?: "none" | "relaxing_sound" | "uplifting_beats" | "ringtone";
            transfer_ring_duration_ms?: number;
            public_handoff_option?: components["schemas"]["WarmTransferHandoffOption"];
            agentic_transfer_config: {
                transfer_agent: {
                    agent_id: string;
                    /** @default 0 */
                    agent_version: number;
                };
                /** @default 30000 */
                transfer_timeout_ms?: number;
                /**
                 * @default cancel_transfer
                 * @enum {string}
                 */
                action_on_timeout?: "cancel_transfer" | "bridge_transfer";
            };
            /** @default true */
            enable_bridge_audio_cue?: boolean;
        };
        EndCallTool: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "EndCallTool";
            name: string;
            description?: string;
            speak_during_execution?: boolean;
            execution_message_description?: string;
            /** @enum {string} */
            execution_message_type?: "prompt" | "static_text";
        };
        BridgeTransferTool: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "BridgeTransferTool";
            /** @default bridge_transfer */
            name: string;
            description?: string;
        };
        CancelTransferTool: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "CancelTransferTool";
            /** @default cancel_transfer */
            name: string;
            description?: string;
        };
        CustomFunctionTool: {
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "CustomFunctionTool";
            name: string;
            description?: string;
            /** Format: uri */
            url?: string;
            /** @enum {string} */
            method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
            headers?: {
                [key: string]: string;
            };
            parameters?: {
                [key: string]: unknown;
            };
        };
        Tool: {
            name: string;
            description?: string;
            /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
            type: "Tool";
        };
        LlmState: {
            name: string;
            state_prompt?: string;
            edges?: components["schemas"]["LlmStateEdge"][];
            tools?: components["schemas"]["LlmTool"][];
        };
        LlmStateEdge: {
            destination_state_name: string;
            description: string;
        };
        McpConnection: {
            name: string;
            /** Format: uri */
            url: string;
            headers?: {
                [key: string]: string;
            };
            query_params?: {
                [key: string]: string;
            };
            timeout_ms?: number;
        };
        Llm: components["schemas"]["LlmSummary"] & ({
            model?: string;
            s2s_model?: string | null;
            general_prompt?: string | null;
            begin_message?: string | null;
            responsiveness?: string | null;
            general_tools?: components["schemas"]["LlmTool"][];
            states?: components["schemas"]["LlmState"][];
            starting_state?: string | null;
            /** Format: date-time */
            updated_at?: string | null;
        } & {
            [key: string]: unknown;
        });
        UpdateLlmRequest: {
            workspaceId: number;
            general_prompt?: string | null;
            begin_message?: string | null;
            responsiveness?: string;
            model?: string;
            /** @description Speech-to-speech model. Set either `model` or `s2s_model`, not both. */
            s2s_model?: string | null;
            /** @enum {string} */
            start_speaker?: "user" | "agent";
            begin_after_user_silence_ms?: number | null;
            model_temperature?: number;
            model_high_priority?: boolean;
            tool_call_strict_mode?: boolean;
            knowledge_base_ids?: string[];
            kb_config?: {
                [key: string]: unknown;
            };
            general_tools?: components["schemas"]["LlmTool"][];
            states?: components["schemas"]["LlmState"][];
            starting_state?: string | null;
            default_dynamic_variables?: {
                [key: string]: string;
            };
            mcps?: components["schemas"]["McpConnection"][];
            /** @description Optional LLM version number when included in the update body. To target an existing version, use the `version` query parameter. */
            version?: number;
        } & {
            [key: string]: unknown;
        };
        AgentSummary: {
            agent_id: string;
            agent_name?: string;
            version: number;
        };
        CreateAgentRequest: {
            workspaceId: number;
            agent_name: string;
            voice_id: string;
            voice_model?: components["schemas"]["VoiceModel"];
            fallback_voice_ids?: string[] | null;
            /** @default en-US */
            language?: string;
            response_engine: components["schemas"]["ResponseEngine"];
            /**
             * Format: uri
             * @description Customer receiving URL saved by the platform. Delivery uses the platform proxy. Null disables customer forwarding; omitted PATCH fields are preserved. Responses include the current agent-level destination, even for historical versions.
             */
            webhook_url?: string | null;
            /** @description Customer event selections. Omission preserves selections on update and defaults to the three lifecycle events on creation. An empty array disables customer event delivery. Optional subscriptions are enabled only when selected. Subscription changes require an editable version and publication to activate for production calls or chats. */
            webhook_events?: components["schemas"]["VoiceWebhookEvent"][];
            webhook_timeout_ms?: number;
            response_threshold?: number;
            interruption_sensitivity?: number;
            ambient_sound?: string;
            ambient_sound_volume?: number;
            responsiveness?: number;
            enable_dynamic_responsiveness?: boolean;
            voice_temperature?: number;
            voice_speed?: number;
            enable_dynamic_voice_speed?: boolean;
            volume?: number;
            voice_emotion?: string | null;
            /** @description Enables expressive voice tags for supported voices. */
            enable_expressive_mode?: boolean;
            expressive_emotion_tags?: string[];
            expressive_mode_prompt?: string | null;
            /** @enum {string} */
            denoising_mode?: "noise-cancellation" | "noise-and-background-speech-cancellation";
            /** @enum {string} */
            stt_mode?: "fast" | "accurate" | "custom";
            custom_stt_config?: components["schemas"]["CustomSttConfig"];
            /** @enum {string} */
            vocab_specialization?: "general" | "medical";
            boosted_keywords?: string[];
            handbook_config?: {
                [key: string]: unknown;
            };
            max_call_duration_ms?: number;
            end_call_after_silence_ms?: number;
        } & {
            [key: string]: unknown;
        };
        /**
         * @description Voice synthesis model for the selected voice. When omitted or set to auto for an ElevenLabs voice, new agents default to `eleven_turbo_v2`.
         * @enum {string|null}
         */
        VoiceModel: "eleven_turbo_v2" | "eleven_flash_v2" | "eleven_turbo_v2_5" | "eleven_flash_v2_5" | "eleven_multilingual_v2" | "eleven_v3" | "sonic-3" | "sonic-3-latest" | "sonic-3.5" | "tts-1" | "gpt-4o-mini-tts" | "speech-02-turbo" | "speech-2.8-turbo" | "s1" | "s2-pro" | "s2.1-pro" | "auto" | null;
        ResponseEngine: {
            type: string;
            llm_id?: string;
        };
        /** @enum {string} */
        VoiceWebhookEvent: "call_started" | "call_ended" | "call_analyzed" | "transcript_updated" | "transfer_started" | "transfer_bridged" | "transfer_cancelled" | "transfer_ended";
        CustomSttConfig: ({
            /**
             * @description Realtime transcription provider used when stt_mode is custom.
             * @enum {string}
             */
            provider?: "deepgram" | "azure" | "soniox" | "assemblyai";
            /** @description Endpointing delay in milliseconds for the selected provider. */
            endpointing_ms?: number;
        } & {
            [key: string]: unknown;
        }) | null;
        Agent: components["schemas"]["AgentSummary"] & ({
            voice_id?: string;
            voice_model?: components["schemas"]["VoiceModel"];
            fallback_voice_ids?: string[] | null;
            language?: string | null;
            response_engine?: components["schemas"]["ResponseEngine"];
            /**
             * Format: uri
             * @description Customer receiving URL saved by the platform. Delivery uses the platform proxy. Null disables customer forwarding; omitted PATCH fields are preserved. Responses include the current agent-level destination, even for historical versions.
             */
            webhook_url?: string | null;
            /** @description Customer event selections. Omission preserves selections on update and defaults to the three lifecycle events on creation. An empty array disables customer event delivery. Optional subscriptions are enabled only when selected. Subscription changes require an editable version and publication to activate for production calls or chats. */
            webhook_events?: components["schemas"]["VoiceWebhookEvent"][];
            webhook_timeout_ms?: number | null;
            response_threshold?: number | null;
            interruption_sensitivity?: number | null;
            ambient_sound?: string | null;
            ambient_sound_volume?: number | null;
            responsiveness?: number | null;
            enable_dynamic_responsiveness?: boolean | null;
            voice_temperature?: number | null;
            voice_speed?: number | null;
            enable_dynamic_voice_speed?: boolean | null;
            volume?: number | null;
            voice_emotion?: string | null;
            enable_expressive_mode?: boolean | null;
            expressive_emotion_tags?: string[] | null;
            expressive_mode_prompt?: string | null;
            denoising_mode?: string | null;
            /** @enum {string|null} */
            stt_mode?: "fast" | "accurate" | "custom" | null;
            custom_stt_config?: components["schemas"]["CustomSttConfig"];
            vocab_specialization?: string | null;
            boosted_keywords?: string[] | null;
            handbook_config?: {
                [key: string]: unknown;
            } | null;
            max_call_duration_ms?: number | null;
            end_call_after_silence_ms?: number | null;
            /** Format: date-time */
            created_at?: string | null;
            /** Format: date-time */
            updated_at?: string | null;
        } & {
            [key: string]: unknown;
        });
        UpdateAgentRequest: {
            workspaceId: number;
            agent_name?: string;
            voice_id?: string;
            voice_model?: components["schemas"]["VoiceModel"];
            fallback_voice_ids?: string[] | null;
            language?: string;
            /**
             * Format: uri
             * @description Customer receiving URL saved by the platform. Delivery uses the platform proxy. Null disables customer forwarding; omitted PATCH fields are preserved. Responses include the current agent-level destination, even for historical versions.
             */
            webhook_url?: string | null;
            /** @description Customer event selections. Omission preserves selections on update and defaults to the three lifecycle events on creation. An empty array disables customer event delivery. Optional subscriptions are enabled only when selected. Subscription changes require an editable version and publication to activate for production calls or chats. */
            webhook_events?: components["schemas"]["VoiceWebhookEvent"][];
            response_engine?: components["schemas"]["ResponseEngine"];
            interruption_sensitivity?: number;
            max_call_duration_ms?: number;
            responsiveness?: number;
            enable_dynamic_responsiveness?: boolean;
            voice_temperature?: number;
            voice_speed?: number;
            enable_dynamic_voice_speed?: boolean;
            volume?: number;
            voice_emotion?: string | null;
            enable_expressive_mode?: boolean;
            expressive_emotion_tags?: string[];
            expressive_mode_prompt?: string | null;
            /** @enum {string} */
            denoising_mode?: "noise-cancellation" | "noise-and-background-speech-cancellation";
            /** @enum {string} */
            stt_mode?: "fast" | "accurate" | "custom";
            custom_stt_config?: components["schemas"]["CustomSttConfig"];
            /** @enum {string} */
            vocab_specialization?: "general" | "medical";
            boosted_keywords?: string[];
            handbook_config?: {
                [key: string]: unknown;
            };
            end_call_after_silence_ms?: number;
        } & {
            [key: string]: unknown;
        };
        AgentVersion: {
            agent_id: string;
            version: number;
            base_version?: number | null;
            is_published?: boolean;
            version_title?: string | null;
            version_description?: string | null;
            /** Format: date-time */
            updated_at?: string;
        };
        CreateAgentVersionRequest: {
            workspaceId: number;
            /** @description Existing version used as the base for the new draft. */
            baseVersion: number;
        };
        PublishAgentVersionRequest: {
            workspaceId: number;
            /** @description Optional title stored on the published version. */
            versionTitle?: string;
            /** @description Optional description stored on the published version. */
            versionDescription?: string;
            /** @description Existing environment tags (for example prod) to point at this version after it is published. Publishing alone does not move tags. */
            environmentTags?: string[];
        };
        PublishedAgentVersion: components["schemas"]["Agent"] & {
            environmentTagUpdate?: components["schemas"]["EnvironmentTagMoveResult"];
        };
        EnvironmentTagMoveResult: {
            moved: string[];
            failed: {
                tag: string;
                error: string;
            }[];
        };
        EnvironmentTagListResponse: {
            tags: components["schemas"]["EnvironmentTag"][];
            /** @description Maximum number of tags an agent can have, including prod and staging. */
            maxTags: number;
            /** @description Returned with includeDetectedVariables. The latest draft, or the latest version when there is no draft. */
            workingVersion?: number | null;
            /** @description Returned with includeDetectedVariables. Maps version numbers to the variables that version references. */
            detectedVariables?: {
                [key: string]: components["schemas"]["DetectedDynamicVariable"][];
            };
        };
        EnvironmentTag: {
            /** @description Tag name. prod and staging are built in. */
            name: string;
            /** @description True for the built-in prod and staging tags. */
            isDefault: boolean;
            /** @description Published version the tag points to, or null when unassigned. */
            version: number | null;
            /**
             * Format: date-time
             * @description When the tag was last pointed at a version.
             */
            assignedAt: string | null;
            /** @description Values supplied to calls or chats that use this tag. They override the agent's default dynamic variables. */
            dynamicVariables: {
                [key: string]: string;
            };
        };
        DetectedDynamicVariable: {
            name: string;
            /** @description The agent's default value, or null when there is none. */
            defaultValue: string | null;
        };
        DetectedDynamicVariablesResponse: {
            version: number;
            variables: components["schemas"]["DetectedDynamicVariable"][];
        };
        UpdateEnvironmentTagRequest: {
            workspaceId: number;
            /** @description Published version to point the tag at, or null to unassign. Omit to keep the current version. */
            version?: number | null;
            /** @description Replaces the tag's variables. Values must be text. Omit to keep the current variables. */
            dynamicVariables?: {
                [key: string]: string;
            };
            /**
             * @description Create the tag if it does not exist. An agent can have at most 10 tags.
             * @default false
             */
            create?: boolean;
        };
        EnvironmentTagUpdateResponse: {
            tag: components["schemas"]["EnvironmentTag"];
            tags: components["schemas"]["EnvironmentTag"][];
        };
        ChatAgentListResponse: components["schemas"]["ChatAgentSummary"][] | components["schemas"]["ChatAgentListEnvelope"];
        ChatAgentSummary: components["schemas"]["ChatAgentVersion"] & {
            agent_name?: string;
            response_engine?: components["schemas"]["ChatResponseEngine"];
            auto_close_message?: string | null;
            is_public?: boolean | null;
        };
        ChatAgentVersion: {
            agent_id: string;
            version: number;
            base_version?: number | null;
            is_published?: boolean;
            version_title?: string | null;
            version_description?: string | null;
            /** Format: date-time */
            updated_at?: string | null;
        };
        ChatResponseEngine: {
            /** @enum {string} */
            type: "uponai-llm" | "uponai-custom-llm";
            llm_id?: string | null;
        };
        ChatAgentListEnvelope: {
            data?: components["schemas"]["ChatAgentSummary"][];
            pagination_key?: string | null;
            pagination_key_version?: number | null;
        };
        CreateChatAgentRequest: {
            workspaceId: number;
            agent_name: string;
            response_engine: components["schemas"]["ChatResponseEngine"];
            auto_close_message?: string | null;
            end_chat_after_silence_ms?: number;
            timezone?: string;
            /**
             * Format: uri
             * @description Customer receiving URL saved by the platform. Delivery uses the platform proxy. Null disables customer forwarding; omitted PATCH fields are preserved. Responses include the current agent-level destination, even for historical versions.
             */
            webhook_url?: string | null;
            /** @description Customer event selections. Omission preserves selections on update and defaults to the three lifecycle events on creation. An empty array disables customer event delivery. Optional subscriptions are enabled only when selected. Subscription changes require an editable version and publication to activate for production calls or chats. */
            webhook_events?: components["schemas"]["ChatWebhookEvent"][];
            webhook_timeout_ms?: number;
            /** @enum {string} */
            data_storage_setting?: "everything" | "everything_except_pii" | "basic_attributes_only";
            data_storage_retention_days?: number;
            post_chat_analysis_data?: components["schemas"]["ChatAgentAnalysisField"][];
            post_chat_analysis_model?: string;
            pii_config?: {
                [key: string]: unknown;
            };
            guardrail_config?: {
                [key: string]: unknown;
            };
            handbook_config?: {
                [key: string]: unknown;
            };
            is_public?: boolean;
            uponai_dynamic_variables?: {
                [key: string]: string;
            };
        };
        /** @enum {string} */
        ChatWebhookEvent: "chat_started" | "chat_ended" | "chat_analyzed";
        ChatAgentAnalysisField: {
            /** @example chat_summary */
            type: string;
            /** @example summary */
            name: string;
            /** @example Short summary of the completed chat. */
            description?: string | null;
            prompt?: string | null;
        };
        ChatAgent: components["schemas"]["ChatAgentSummary"] & {
            end_chat_after_silence_ms?: number | null;
            timezone?: string | null;
            /**
             * Format: uri
             * @description Customer receiving URL saved by the platform. Delivery uses the platform proxy. Null disables customer forwarding; omitted PATCH fields are preserved. Responses include the current agent-level destination, even for historical versions.
             */
            webhook_url?: string | null;
            /** @description Customer event selections. Omission preserves selections on update and defaults to the three lifecycle events on creation. An empty array disables customer event delivery. Optional subscriptions are enabled only when selected. Subscription changes require an editable version and publication to activate for production calls or chats. */
            webhook_events?: components["schemas"]["ChatWebhookEvent"][];
            webhook_timeout_ms?: number | null;
            /** @enum {string|null} */
            data_storage_setting?: "everything" | "everything_except_pii" | "basic_attributes_only" | null;
            data_storage_retention_days?: number | null;
            post_chat_analysis_data?: components["schemas"]["ChatAgentAnalysisField"][];
            post_chat_analysis_model?: string | null;
            pii_config?: {
                [key: string]: unknown;
            } | null;
            guardrail_config?: {
                [key: string]: unknown;
            } | null;
            handbook_config?: {
                [key: string]: unknown;
            } | null;
            override_agent_id?: string | null;
            uponai_dynamic_variables?: {
                [key: string]: string;
            };
            /** Format: date-time */
            created_at?: string | null;
            /** Format: date-time */
            updated_at?: string | null;
        };
        UpdateChatAgentRequest: {
            workspaceId: number;
            agent_name?: string;
            response_engine?: components["schemas"]["ChatResponseEngine"];
            auto_close_message?: string | null;
            end_chat_after_silence_ms?: number;
            timezone?: string;
            /**
             * Format: uri
             * @description Customer receiving URL saved by the platform. Delivery uses the platform proxy. Null disables customer forwarding; omitted PATCH fields are preserved. Responses include the current agent-level destination, even for historical versions.
             */
            webhook_url?: string | null;
            /** @description Customer event selections. Omission preserves selections on update and defaults to the three lifecycle events on creation. An empty array disables customer event delivery. Optional subscriptions are enabled only when selected. Subscription changes require an editable version and publication to activate for production calls or chats. */
            webhook_events?: components["schemas"]["ChatWebhookEvent"][];
            webhook_timeout_ms?: number;
            /** @enum {string} */
            data_storage_setting?: "everything" | "everything_except_pii" | "basic_attributes_only";
            data_storage_retention_days?: number;
            post_chat_analysis_data?: components["schemas"]["ChatAgentAnalysisField"][];
            post_chat_analysis_model?: string;
            pii_config?: {
                [key: string]: unknown;
            };
            guardrail_config?: {
                [key: string]: unknown;
            };
            handbook_config?: {
                [key: string]: unknown;
            };
            is_public?: boolean;
            uponai_dynamic_variables?: {
                [key: string]: string;
            };
        };
        ChatAgentVersionListResponse: components["schemas"]["ChatAgentVersion"][] | {
            data?: components["schemas"]["ChatAgentVersion"][];
        };
        PublishedChatAgentVersion: components["schemas"]["ChatAgent"] & {
            environmentTagUpdate?: components["schemas"]["EnvironmentTagMoveResult"];
        };
        ChatListResponse: components["schemas"]["Chat"][] | components["schemas"]["ChatListEnvelope"];
        Chat: {
            chatId: string;
            agentId: string;
            version?: number | null;
            status: string;
            /** @example web_chat */
            type?: string | null;
            metadata?: {
                [key: string]: unknown;
            } | null;
            customAttributes?: {
                [key: string]: unknown;
            };
            /** Format: date-time */
            startedAt?: string | null;
            /** Format: date-time */
            endedAt?: string | null;
            transcript?: string | null;
            messages: components["schemas"]["ChatMessage"][];
            chatCost?: {
                [key: string]: unknown;
            } | null;
            chatAnalysis?: {
                [key: string]: unknown;
            } | null;
            collectedDynamicVariables?: {
                [key: string]: unknown;
            };
            uponai_dynamic_variables?: {
                [key: string]: unknown;
            };
            overrideDynamicVariables?: {
                [key: string]: unknown;
            } | null;
        };
        ChatMessage: {
            /** @example assistant */
            role: string;
            /** @example I can help with pricing and onboarding. */
            content?: string | null;
            name?: string | null;
            tool_calls?: {
                [key: string]: unknown;
            }[];
        };
        ChatListEnvelope: {
            data?: components["schemas"]["Chat"][];
            pagination_key?: string | null;
        };
        CreateChatRequest: {
            workspaceId: number;
            agent_id: string;
            metadata?: {
                [key: string]: unknown;
            };
            uponai_dynamic_variables?: {
                [key: string]: string;
            };
        };
        CreateOutboundSmsChatRequest: components["schemas"]["CreateChatRequest"] & {
            /** @example +14155550100 */
            from_number: string;
            /** @example +14155550199 */
            to_number: string;
        };
        UpdateChatRequest: {
            workspaceId: number;
            metadata?: {
                [key: string]: unknown;
            };
            custom_attributes?: {
                [key: string]: unknown;
            };
            override_dynamic_variables?: {
                [key: string]: unknown;
            };
        };
        CreateChatCompletionRequest: {
            workspaceId: number;
            content: string;
        };
        ChatCompletionResponse: {
            messages: components["schemas"]["ChatMessage"][];
        };
        ChatWidgetConfig: {
            id: number;
            /**
             * @description Public key used by the embeddable browser script.
             * @example upon_widget_7d41a8d0c84f4d1fbf8ad4f1
             */
            publicKey: string;
            workspaceId: number;
            /**
             * @description Chat agent that powers this widget.
             * @example chat_agent_01hzk4q6dr3n0d4qzpw9z6gth6
             */
            agentId: string;
            /** @description Optional fixed chat agent version. Null uses the latest published version. */
            agentVersion?: number | null;
            /** @example How can we help? */
            title: string;
            /** Format: uri */
            logoUrl?: string | null;
            /** @example #071a3e */
            themeColor: string;
            /** @example #2563eb */
            componentColor: string;
            /** @example Need help? */
            fabText?: string;
            /** @example Support */
            botName?: string;
            /** @example Questions? We are here. */
            popupMessage?: string | null;
            showAiPopup?: boolean;
            /** @description Seconds to wait before showing the popup prompt. */
            showAiPopupTime?: number;
            autoOpen?: boolean;
            /** @description Website origins allowed to load and use this widget. Empty allows any origin; use exact origins such as https://example.com for production embeds. */
            allowedOrigins?: string[];
            metadata?: {
                [key: string]: unknown;
            };
            isEnabled?: boolean;
            /**
             * @description Complete script tag to paste into a website.
             * @example <script src="https://api.upon-ai.com/js/upon-chat-widget.js" data-public-key="upon_widget_7d41a8d0c84f4d1fbf8ad4f1" async></script>
             */
            embedScript: string;
        };
        CreateChatWidgetRequest: {
            workspaceId: number;
            /** @description Chat agent that powers the widget. */
            agentId: string;
            agentVersion?: number | null;
            /** @default Chat */
            title?: string;
            /** Format: uri */
            logoUrl?: string | null;
            /**
             * @description Shorthand that sets both themeColor and componentColor when specific colors are omitted.
             * @example #2563eb
             */
            color?: string;
            /** @default #071a3e */
            themeColor?: string;
            /** @default #3E6AEF */
            componentColor?: string;
            /** @default Need support? */
            fabText?: string;
            /** @default AI Assistant */
            botName?: string;
            popupMessage?: string | null;
            /** @default true */
            showAiPopup?: boolean;
            /** @default 5 */
            showAiPopupTime?: number;
            /** @default false */
            autoOpen?: boolean;
            allowedOrigins?: string[];
            metadata?: {
                [key: string]: unknown;
            };
        };
        UpdateChatWidgetRequest: {
            /** @description Chat agent that powers the widget. */
            agentId?: string;
            agentVersion?: number | null;
            title?: string;
            /** Format: uri */
            logoUrl?: string | null;
            /** @description Shorthand that sets both themeColor and componentColor when specific colors are omitted. */
            color?: string;
            themeColor?: string;
            componentColor?: string;
            fabText?: string;
            botName?: string;
            popupMessage?: string | null;
            showAiPopup?: boolean;
            showAiPopupTime?: number;
            autoOpen?: boolean;
            allowedOrigins?: string[];
            metadata?: {
                [key: string]: unknown;
            };
            isEnabled?: boolean;
        };
        ConversationFlowSummary: {
            conversation_flow_id: string;
            version: number;
            start_speaker?: string | null;
        };
        CreateConversationFlowRequest: {
            workspaceId: number;
            global_prompt?: string;
            start_speaker: string;
            model_choice?: components["schemas"]["ModelChoice"];
            nodes: components["schemas"]["ConversationNode"][];
        };
        ModelChoice: {
            type: string;
            model?: string;
        };
        ConversationNode: {
            id: string;
            type: string;
            instruction?: components["schemas"]["Instruction"];
            edges?: components["schemas"]["ConversationEdge"][];
        };
        Instruction: {
            type: string;
            text?: string;
        };
        ConversationEdge: {
            id: string;
            transition_condition: {
                type: string;
                prompt?: string;
            };
            destination_node_id: string;
        };
        ConversationFlow: components["schemas"]["ConversationFlowSummary"] & {
            workspaceId?: number | null;
            global_prompt?: string | null;
            start_speaker?: string | null;
            model_choice?: components["schemas"]["ModelChoice"];
            nodes?: components["schemas"]["ConversationNode"][];
        };
        UpdateConversationFlowRequest: {
            workspaceId: number;
            global_prompt?: string;
            model_choice?: components["schemas"]["ModelChoice"];
            nodes?: components["schemas"]["ConversationNode"][];
        };
        KnowledgeBaseSummary: {
            /** @example knowledge_base_17c5db1600cea2b4 */
            knowledgeBaseId: string;
            /** @example Customer Support FAQ */
            name: string;
            /**
             * @example processing
             * @enum {string}
             */
            status: "pending" | "processing" | "ready" | "failed";
        };
        CreateKnowledgeBaseRequest: {
            workspaceId: number;
            name: string;
            /** @example Grounding material for customer support. */
            description?: string;
            /**
             * @description Automatically refresh URL-based sources on the provider cadence.
             * @example false
             */
            enableAutoRefresh?: boolean;
            /** @example 2000 */
            maxChunkSize?: number;
            /** @example 400 */
            minChunkSize?: number;
            sources?: components["schemas"]["KnowledgeBaseSourceInput"][];
        };
        KnowledgeBaseSourceInput: {
            /** @enum {string} */
            type: "text" | "url" | "document";
            /** @example We issue refunds within 30 days of purchase. */
            text?: string;
            /**
             * @description Optional display title for text sources. If omitted, one is generated automatically.
             * @example Refund Policy
             */
            title?: string;
            /**
             * Format: uri
             * @example https://example.com/help/refunds
             */
            url?: string;
            /** @example handbook.pdf */
            filename?: string;
            /** @example application/pdf */
            contentType?: string;
            /**
             * @description Base64-encoded file contents for document sources.
             * @example JVBERi0xLjQKJcfs...
             */
            base64?: string;
        };
        KnowledgeBase: components["schemas"]["KnowledgeBaseSummary"] & {
            /** @example Grounding material for support agents. */
            description?: string | null;
            sources?: components["schemas"]["KnowledgeBaseSource"][];
            /** @example 58 */
            workspaceId?: number | null;
            /** @example false */
            enableAutoRefresh?: boolean;
            /** @example 1773937556128 */
            lastRefreshedTimestamp?: number | null;
            /** @example 2000 */
            maxChunkSize?: number | null;
            /** @example 400 */
            minChunkSize?: number | null;
            /**
             * Format: date-time
             * @example 2026-03-19T13:25:56.128Z
             */
            createdAt?: string | null;
            /**
             * Format: date-time
             * @example 2026-03-19T13:26:12.512Z
             */
            updatedAt?: string | null;
        };
        KnowledgeBaseSource: components["schemas"]["KnowledgeBaseSourceDocument"] | components["schemas"]["KnowledgeBaseSourceText"] | components["schemas"]["KnowledgeBaseSourceUrl"];
        KnowledgeBaseSourceDocument: {
            /** @example kb_source_35e085a611328bd3 */
            source_id: string;
            /**
             * @example document
             * @enum {string}
             */
            type: "document";
            /** @example benefits-guide.pdf */
            filename?: string | null;
            /** @example https://cdn.example.com/knowledge-bases/benefits-guide.pdf */
            file_url?: string | null;
            /** @example 482311 */
            file_size?: number | null;
        };
        KnowledgeBaseSourceText: {
            /** @example kb_source_41f4dfd2f142bf07 */
            source_id: string;
            /**
             * @example text
             * @enum {string}
             */
            type: "text";
            /** @example Refund Policy */
            title?: string | null;
            /** @example https://cdn.example.com/knowledge-bases/refund-policy.txt */
            content_url?: string | null;
        };
        KnowledgeBaseSourceUrl: {
            /** @example kb_source_803751f5c87eab66 */
            source_id: string;
            /**
             * @example url
             * @enum {string}
             */
            type: "url";
            /**
             * Format: uri
             * @example https://metro-ride.com/careers/
             */
            url?: string;
        };
        AddKnowledgeBaseSourcesRequest: {
            /** @example 58 */
            workspaceId: number;
            sources: components["schemas"]["KnowledgeBaseSourceInput"][];
        };
        Voice: {
            voiceId: string;
            name: string;
            gender?: string;
            language?: string;
            accent?: string;
            description?: string;
            provider?: string | null;
            /** Format: uri */
            previewUrl?: string;
            /** Format: uri */
            playbackOverrideUrl?: string | null;
            tags?: string[];
            /** Format: date-time */
            createdAt?: string | null;
            /** Format: date-time */
            updatedAt?: string | null;
        };
        SearchCommunityVoiceRequest: {
            workspaceId: number;
            /** @enum {string} */
            voiceProvider?: "elevenlabs" | "cartesia" | "minimax";
            searchQuery: string;
        };
        SearchCommunityVoiceResponse: {
            voices: components["schemas"]["SearchCommunityVoiceItem"][];
        };
        SearchCommunityVoiceItem: {
            providerVoiceId?: string;
            name?: string;
            description?: string | null;
            publicUserId?: string | null;
            /** @enum {string|null} */
            voiceProvider?: "elevenlabs" | "cartesia" | "minimax" | null;
        };
        AddCommunityVoiceRequest: {
            workspaceId: number;
            /**
             * @default elevenlabs
             * @enum {string}
             */
            voiceProvider?: "elevenlabs" | "cartesia" | "minimax";
            providerVoiceId: string;
            voiceName: string;
            publicUserId?: string | null;
        };
        CloneVoiceRequest: {
            workspaceId: number;
            /**
             * @default elevenlabs
             * @enum {string}
             */
            voiceProvider?: "elevenlabs" | "cartesia" | "minimax";
            voiceName: string;
            files: string[];
        };
        TestCaseDefinition: components["schemas"]["TestCaseDefinitionInput"] & {
            test_case_definition_id: string;
            type?: string;
            creation_timestamp?: number;
            user_modified_timestamp?: number;
        };
        TestCaseDefinitionInput: {
            name?: string;
            response_engine?: components["schemas"]["TestResponseEngine"];
            user_prompt?: string;
            metrics?: string[];
            dynamic_variables?: {
                [key: string]: string;
            };
            tool_mocks?: {
                [key: string]: unknown;
            }[];
            llm_model?: string | null;
        };
        TestResponseEngine: {
            /** @enum {string} */
            type: "llm" | "conversation-flow";
            llm_id?: string | null;
            conversation_flow_id?: string | null;
            version?: number | null;
        };
        CreateTestCaseDefinitionRequest: components["schemas"]["TestCaseDefinitionInput"] & {
            workspaceId: number;
        };
        BatchTest: {
            test_case_batch_job_id: string;
            /** @enum {string} */
            status: "in_progress" | "complete";
            response_engine?: components["schemas"]["TestResponseEngine"];
            pass_count?: number;
            fail_count?: number;
            error_count?: number;
            total_count?: number;
            creation_timestamp?: number;
            user_modified_timestamp?: number;
        };
        CreateBatchTestRequest: {
            workspaceId: number;
            response_engine: components["schemas"]["TestResponseEngine"];
            test_case_definition_ids: string[];
        };
        UpdateTestCaseDefinitionRequest: components["schemas"]["TestCaseDefinitionInput"] & {
            workspaceId: number;
        };
        TestRun: {
            test_case_job_id: string;
            status: string;
            test_case_definition_id?: string;
            test_case_definition_snapshot?: components["schemas"]["TestCaseDefinition"];
            transcript_snapshot?: {
                [key: string]: unknown;
            } | null;
            result_explanation?: string | null;
            creation_timestamp?: number;
            user_modified_timestamp?: number;
        };
        Concurrency: {
            maxConcurrent: number;
            currentUsage: number;
            purchasedConcurrency?: number;
            concurrencyPurchaseLimit?: number;
        };
        WorkspaceSummary: {
            id: number;
            name: string;
            accountSid?: string | null;
            accountPath?: string | null;
            nativeTransferEnabled: boolean;
        };
        /** @description Unknown top-level fields return HTTP 400 before a call is created. Supply dynamic variables using the documented field, with string values only. */
        CreatePhoneCallRequest: {
            /** @description Unique agent identifier. The owning workspace is inferred from this value. */
            agentId: string;
            /** @description Optional backward-compatible workspace hint. If supplied, it must match the workspace that owns agentId. */
            workspaceId?: number;
            /** @description Caller identifier. For native-transfer workspaces this may be an imported number, extension, or platform-side pseudo DID when ignoreE164Validation is enabled. */
            fromNumber: string;
            /** @description Destination identifier to dial. Standard phone calls should use E.164; native-transfer workspaces can also use configured extensions or pseudo numbers when ignoreE164Validation is enabled. */
            toNumber: string;
            customerName?: string;
            carrierName?: string;
            trunkName?: string;
            /** @description Optional SIP From display-name override. The selected fromNumber remains the actual caller ID/user part for native-transfer calls. */
            overrideCid?: string;
            /**
             * @description Native-transfer only. Format applied to the caller ID before the outbound leg is dialed.
             * @enum {string}
             */
            callerIdFormat?: "10-digit" | "11-digit" | "e164";
            /**
             * @description Native-transfer only. Format applied to the destination number before the outbound leg is dialed.
             * @enum {string}
             */
            toNumberFormat?: "10-digit" | "11-digit" | "e164";
            /** @description Native-transfer only. Overrides the agent version for this specific call. */
            overrideAgentVersion?: number;
            agentOverride?: components["schemas"]["CallAgentOverrideRequest"];
            /** @description Optional custom caller identifier used when fromNumber is set to custom. This may be a configured non-E.164 identifier on supported trunk-based workspaces. */
            customFromNumber?: string;
            /**
             * Format: uri
             * @description Per-call destination for branded call_started, call_ended, and call_analyzed events.
             */
            customStatusHookUrl?: string;
            metadata?: {
                [key: string]: string;
            };
            /** @description Native-transfer only. Additional SIP headers merged into the outbound call request. */
            customSipHeaders?: {
                [key: string]: string;
            };
            /** @description Native-transfer only. Disables E.164 validation so imported pseudo DIDs, extensions, and other custom telephony identifiers can be used. The platform may also enable this automatically when needed on supported workspaces. */
            ignoreE164Validation?: boolean;
            /** @description Dynamic variables with string values only (including empty strings). CamelCase variable containers are not supported. */
            uponai_dynamic_variables?: {
                [key: string]: string;
            };
            /** @description Alias for overrideAgentVersion. */
            override_agent_version?: number;
            agent_override?: components["schemas"]["CallAgentOverrideRequest"];
            /** @description Alias for customSipHeaders. */
            custom_sip_headers?: {
                [key: string]: string;
            };
            /** @description Alias for ignoreE164Validation. */
            ignore_e164_validation?: boolean;
        };
        CallAgentOverrideRequest: {
            agent?: components["schemas"]["CallAgentConfigOverride"];
            llm?: components["schemas"]["CallLlmOverride"];
            conversationFlow?: components["schemas"]["CallConversationFlowOverride"];
        };
        CallAgentConfigOverride: {
            agentName?: string;
            versionDescription?: string;
            voiceId?: string;
            responseEngine?: {
                [key: string]: unknown;
            };
            responseThreshold?: number;
            interruptionSensitivity?: string;
            ambientSound?: string;
            responsiveness?: string;
            maxCallDurationMs?: number;
            beginMessageDelayMs?: number;
        } & {
            [key: string]: unknown;
        };
        CallLlmOverride: {
            model?: string;
            s2sModel?: string;
            modelTemperature?: number;
            modelHighPriority?: boolean;
            toolCallStrictMode?: boolean;
            knowledgeBaseIds?: string[];
            kbConfig?: {
                [key: string]: unknown;
            };
            /** @enum {string} */
            startSpeaker?: "user" | "agent";
            beginAfterUserSilenceMs?: number;
            beginMessage?: string;
        } & {
            [key: string]: unknown;
        };
        CallConversationFlowOverride: {
            modelChoice?: components["schemas"]["ModelChoice"];
            modelTemperature?: number;
            toolCallStrictMode?: boolean;
            knowledgeBaseIds?: string[];
            kbConfig?: {
                [key: string]: unknown;
            };
            /** @enum {string} */
            startSpeaker?: "user" | "agent";
            beginAfterUserSilenceMs?: number;
        } & {
            [key: string]: unknown;
        };
        CreatePhoneCallResponse: {
            success?: boolean;
            call_sid?: string;
            call?: components["schemas"]["CallDetail"];
        };
        CallDetail: {
            success?: boolean;
            call?: components["schemas"]["CallRecord"];
        } & {
            [key: string]: unknown;
        };
        CallRecord: {
            callId?: string;
            callType?: string;
            status?: string;
            agentId?: string;
            agentVersion?: number;
            metadata?: {
                [key: string]: string;
            };
            optOutSensitiveDataStorage?: boolean;
            accessToken?: string | null;
            /** Format: date-time */
            expiresAt?: string | null;
            /** Format: uri */
            webCallUrl?: string | null;
            uponai_dynamic_variables?: {
                [key: string]: string;
            };
        };
        CreateWebCallRequest: {
            /** @description Optional backward-compatible workspace hint. If supplied, it must match the workspace that owns agentId. */
            workspaceId?: number;
            /** @description Unique agent identifier. The owning workspace is inferred from this value. */
            agentId: string;
            agentVersion?: number;
            metadata?: {
                [key: string]: string;
            };
            uponai_dynamic_variables?: {
                [key: string]: string;
            };
        };
        WebCall: {
            callId: string;
            callType?: string;
            status: string;
            agentId?: string;
            agentVersion?: number;
            metadata?: {
                [key: string]: string;
            };
            optOutSensitiveDataStorage?: boolean;
            /**
             * @description Audio transport for the browser connection.
             * @enum {string}
             */
            transport?: "gateway";
            /** @description ICE server configuration to pass to the browser connection client. */
            iceServers?: {
                urls?: string | string[];
                username?: string;
                credential?: string;
            }[];
            accessToken?: string | null;
            /** Format: date-time */
            expiresAt?: string | null;
            /** Format: uri */
            webCallUrl?: string | null;
            uponai_dynamic_variables?: {
                [key: string]: string;
            };
        };
        CallList: {
            success: boolean;
            calls: components["schemas"]["CallRecord"][];
            total?: number;
            pages?: number;
            currentPage?: number;
        };
        V3ListCallsRequest: {
            /** @description Optional branded extension to scope results to one accessible workspace. */
            workspaceId?: number;
            filter_criteria?: components["schemas"]["CallFilter"];
            /**
             * @description Sort calls by start timestamp.
             * @default descending
             * @enum {string}
             */
            sort_order?: "ascending" | "descending";
            /**
             * @description Maximum number of calls to return.
             * @default 50
             */
            limit?: number;
            /**
             * @description Number of records to skip for pagination.
             * @default 0
             */
            skip?: number;
            /** @description Pagination key from the previous response. */
            pagination_key?: string;
            /**
             * @description Whether to include the total count of matching calls.
             * @default false
             */
            include_total?: boolean;
        };
        /** @description Filter criteria for calls. All provided conditions are combined with AND. */
        CallFilter: {
            /** @description Agent filters are combined with OR. */
            agent?: components["schemas"]["AgentFilter"][];
            call_id?: components["schemas"]["StringFilter"] | components["schemas"]["EnumFilter"];
            batch_call_id?: components["schemas"]["StringFilter"];
            call_status?: components["schemas"]["EnumFilter"];
            in_voicemail?: components["schemas"]["BooleanFilter"];
            disconnection_reason?: components["schemas"]["EnumFilter"];
            from_number?: components["schemas"]["StringFilter"];
            to_number?: components["schemas"]["StringFilter"];
            call_type?: components["schemas"]["EnumFilter"];
            direction?: components["schemas"]["EnumFilter"];
            user_sentiment?: components["schemas"]["EnumFilter"];
            data_storage_setting?: components["schemas"]["EnumFilter"];
            call_successful?: components["schemas"]["BooleanFilter"];
            start_timestamp?: components["schemas"]["NumberFilter"] | components["schemas"]["RangeFilter"];
            end_timestamp?: components["schemas"]["NumberFilter"] | components["schemas"]["RangeFilter"];
            duration_ms?: components["schemas"]["NumberFilter"] | components["schemas"]["RangeFilter"];
            combined_cost?: components["schemas"]["NumberFilter"] | components["schemas"]["RangeFilter"];
        };
        AgentFilter: {
            agent_id: string;
            version?: number[];
        };
        StringFilter: {
            /** @enum {string} */
            type: "string";
            /**
             * @description Equal, not equal, starts with, ends with, or contains.
             * @enum {string}
             */
            op: "eq" | "ne" | "sw" | "ew" | "co";
            value: string;
        };
        EnumFilter: {
            /** @enum {string} */
            type: "enum";
            /** @enum {string} */
            op: "in";
            value: string[];
        };
        BooleanFilter: {
            /** @enum {string} */
            type: "boolean";
            /** @enum {string} */
            op: "eq";
            value: boolean;
        };
        NumberFilter: {
            /** @enum {string} */
            type: "number";
            /** @enum {string} */
            op: "eq" | "ne" | "gt" | "ge" | "lt" | "le";
            value: number;
        };
        RangeFilter: {
            /** @enum {string} */
            type: "range";
            /** @enum {string} */
            op: "bt";
            value: number[];
        };
        V3ListCallsResponse: {
            items: components["schemas"]["V3CallResponse"][];
            /** @description Pagination key for the next page, or null when no more results are available. */
            pagination_key: string | null;
            /** @description Whether more results are available. */
            has_more: boolean;
            /** @description Total number of matching calls. Present only when include_total is true. */
            total?: number;
        };
        V3CallResponse: components["schemas"]["V3WebCallResponse"] | components["schemas"]["V3PhoneCallResponse"];
        V3WebCallResponse: components["schemas"]["V3CallBase"] & {
            /** @enum {string} */
            call_type?: "web_call";
            access_token?: string | null;
        };
        V3CallBase: {
            call_id?: string;
            agent_id?: string;
            agent_name?: string | null;
            agent_version?: number | null;
            call_status?: string | null;
            /** @description Start timestamp in milliseconds since epoch. */
            start_timestamp?: number | null;
            /** @description End timestamp in milliseconds since epoch. */
            end_timestamp?: number | null;
            duration_ms?: number | null;
            disconnection_reason?: string | null;
            metadata?: {
                [key: string]: unknown;
            };
            transcript?: string | null;
            transcript_object?: {
                [key: string]: unknown;
            } | null;
            transcript_with_tool_calls?: {
                [key: string]: unknown;
            }[] | null;
            /** Format: uri */
            recording_url?: string | null;
            /** Format: uri */
            public_log_url?: string | null;
            call_analysis?: {
                [key: string]: unknown;
            };
            call_cost?: {
                [key: string]: unknown;
            };
            /** @enum {string|null} */
            data_storage_setting?: "everything" | "everything_except_pii" | "basic_attributes_only" | null;
        };
        V3PhoneCallResponse: components["schemas"]["V3CallBase"] & {
            /** @enum {string} */
            call_type?: "phone_call";
            from_number?: string | null;
            to_number?: string | null;
            direction?: string | null;
        };
        CallHistoryList: {
            success: boolean;
            calls: components["schemas"]["CallHistoryRecord"][];
            pagination: {
                page?: number;
                limit?: number;
                total?: number;
                pages?: number;
            };
            filters: components["schemas"]["CallHistoryFilters"];
        };
        CallHistoryRecord: {
            callSid: string;
            callStatus?: string | null;
            agentId?: string | null;
            agentVersion?: number | null;
            agentName?: string | null;
            workspaceId: number;
            workspaceName?: string | null;
            fromNumber?: string | null;
            toNumber?: string | null;
            direction?: string | null;
            customerName?: string | null;
            duration?: number | null;
            /** Format: date-time */
            startedAt?: string | null;
            /** Format: date-time */
            createdAt?: string | null;
            /** Format: date-time */
            updatedAt?: string | null;
            /** Format: uri */
            recordingUrl?: string | null;
            sentiment?: string | null;
            summary?: string | null;
            voiceModel?: string | null;
            llmModel?: string | null;
            telecommunicationsProvider?: string | null;
            carrierSid?: string | null;
            carrierName?: string | null;
            archived: boolean;
            costs?: components["schemas"]["CallHistoryCosts"];
        };
        CallHistoryCosts: {
            voice?: number | null;
            llm?: number | null;
            voiceMarkup?: number | null;
            llmMarkup?: number | null;
            gross?: number | null;
            markup?: number | null;
            total?: number | null;
            markupRate?: number | null;
        };
        CallHistoryFilters: {
            workspaceId?: number;
            agentId?: string | null;
            agentVersion?: number | null;
            status?: string | null;
            /** Format: date-time */
            fromDate?: string | null;
            /** Format: date-time */
            toDate?: string | null;
            search?: string | null;
            includeArchived?: boolean;
            includeChildCalls?: boolean;
        };
        /** @description Metadata updates are routed according to the current call state. Ongoing calls use the live-call operation; completed calls use the stored-call operation. Connecting calls return 409. Privacy settings cannot be made less restrictive during a live call. */
        UpdateCallRequest: {
            /** @description Optional backward-compatible fallback. Required only when the call cannot be resolved from stored call data. */
            workspaceId?: number;
            metadata?: {
                [key: string]: string;
            };
            optOutSensitiveDataStorage?: boolean;
        };
        CallActionWorkspaceRequest: {
            /** @description Optional backward-compatible fallback. Required only when the call cannot be resolved from stored call data. */
            workspaceId?: number;
        };
        EndLiveCallResponse: {
            success: boolean;
            callId: string;
            /** @example ended */
            status: string;
            call?: components["schemas"]["CallRecord"];
        };
        UpdateLiveCallRequest: components["schemas"]["CallActionWorkspaceRequest"] & {
            fieldsToOverride?: components["schemas"]["UpdateLiveCallFields"];
            fields_to_override?: components["schemas"]["UpdateLiveCallFields"];
            callControl?: components["schemas"]["LiveCallControl"];
            call_control?: components["schemas"]["LiveCallControl"];
            listen?: components["schemas"]["LiveCallListenControl"];
        };
        UpdateLiveCallFields: {
            /** @description Delta of dynamic variable overrides. Set to null to remove existing overrides. */
            dynamicVariables?: {
                [key: string]: string;
            } | null;
            /** @description Snake_case alias for dynamicVariables. */
            override_dynamic_variables?: {
                [key: string]: string;
            } | null;
            /** @description Metadata persisted to the call record. Maximum size is 50KB. */
            metadata?: {
                [key: string]: unknown;
            };
            /**
             * @description Data storage setting for this call. More restrictive settings may not be relaxed during a live call.
             * @enum {string}
             */
            dataStorageSetting?: "everything" | "everything_except_pii" | "basic_attributes_only";
            /**
             * @description Snake_case alias for dataStorageSetting.
             * @enum {string}
             */
            data_storage_setting?: "everything" | "everything_except_pii" | "basic_attributes_only";
        };
        LiveCallControl: {
            /** @description When true, requests that the live agent generate a response when appropriate. If the agent is speaking, the current response may be interrupted depending on the agent interruption settings. If the user is speaking, the request is ignored so the agent does not talk over them. */
            triggerResponse?: boolean;
            /** @description Snake_case alias for triggerResponse. */
            trigger_response?: boolean;
            /** @description Non-empty text injected into the live call context for the next agent response. */
            additionalContext?: string;
            /** @description Snake_case alias for additionalContext. */
            additional_context?: string;
            listen?: components["schemas"]["LiveCallListenControl"];
        };
        LiveCallListenControl: {
            /**
             * @description Start or stop a listen-only audio stream for the live call.
             * @enum {string}
             */
            action: "start" | "stop";
            /**
             * Format: uri
             * @description WebSocket URL that will receive the live call audio stream. Required when action is start.
             */
            url?: string;
            /**
             * @description Audio channel mix for the stream.
             * @default mixed
             * @enum {string}
             */
            mixType?: "mono" | "mixed" | "stereo";
            /**
             * @description Sample rate for the stream.
             * @default 8000
             * @enum {integer}
             */
            sampleRate?: 8000 | 16000 | 24000 | 48000;
            /**
             * @description Keep the stream listen-only.
             * @default true
             */
            disableBidirectionalAudio?: boolean;
            /** @description Optional WebSocket authentication payload. */
            wsAuth?: {
                [key: string]: unknown;
            };
            /** @description Optional metadata delivered with the stream setup. */
            metadata?: {
                [key: string]: unknown;
            };
        };
        UpdateLiveCallResponse: {
            success: boolean;
            callId: string;
            result?: {
                [key: string]: unknown;
            };
            listen?: {
                [key: string]: unknown;
            } | null;
            call?: components["schemas"]["CallRecord"];
        };
        RerunCallAnalysisResponse: {
            success: boolean;
            callId: string;
            call?: components["schemas"]["CallRecord"];
        };
        VoiceSimulationScenarioDefinition: {
            /** @description Allowed voice model for the simulated counterpart; omitted means workspace default. */
            counterpart_model?: string | null;
            /** @description Allowed Agent IQ model key for scoring; omitted means workspace default. */
            judge_model?: string | null;
            name: string;
            persona: string;
            instructions: string;
            /**
             * @default sim_dials
             * @enum {string}
             */
            direction?: "agent_dials" | "sim_dials";
            /** @default 180 */
            max_duration_seconds?: number;
            /** @default 80 */
            pass_threshold?: number;
            /** @description Why Agent IQ recommended this scenario. Optional. */
            rationale?: string;
            /**
             * @description What the recommendation was based on. Present only with a rationale.
             * @enum {string}
             */
            origin?: "prompt" | "call_history" | "request";
            criteria: {
                id: string;
                description: string;
                weight?: number;
                required?: boolean;
            }[];
            agent_variables?: {
                [key: string]: string;
            };
            counterpart_variables?: {
                [key: string]: string;
            };
            voice_id?: string | null;
            tool_mocks?: {
                [key: string]: unknown;
            };
            ivr?: {
                entry: string;
                nodes: {
                    id: string;
                    /** @enum {string} */
                    type: "say" | "menu" | "hold" | "bridge" | "hangup";
                    prompt?: string;
                    next?: string;
                    seconds?: number;
                    routes?: {
                        [key: string]: string;
                    };
                    failure?: string;
                    timeout_seconds?: number;
                    retry_limit?: number;
                    /**
                     * Format: uuid
                     * @description Workspace recording whose stored text must exactly match prompt; regenerate after editing.
                     */
                    audio_id?: string;
                    position?: {
                        x: number;
                        y: number;
                    };
                }[];
                required_nodes?: string[];
            } | null;
        };
        VoiceSimulationError: {
            error: string;
            code?: string;
        };
        VoiceSimulationSettings: {
            /** @description Imported English accent voices for simulation counterparts. The library is provisioned automatically by the simulation UI or first run; refresh settings after provisioning. Source-agent voices remain unchanged. */
            voice_options?: {
                key?: string;
                name?: string;
                /** @enum {string} */
                provider?: "cartesia" | "elevenlabs";
                accent?: string;
                /** @enum {string} */
                language?: "en";
                voice_id?: string;
            }[];
            model_options?: {
                counterpart?: string[];
                ai?: string[];
                /** @description Retail-facing labels and effective per-connected-run prices for allowed AI model IDs. Blank configuration inherits the workspace surcharge. */
                ai_details?: components["schemas"]["VoiceSimulationModelOption"][];
                defaults?: {
                    counterpart?: string | null;
                    ai?: string | null;
                };
            };
            enabled: boolean;
            workspace_enabled?: boolean;
            provider_allowed?: boolean;
            per_run_price: number;
            monthly_price: number;
            currency: string;
            max_concurrent_runs?: number;
            max_session_runs?: number;
            can_manage?: boolean;
            max_auto_calls?: number;
            max_auto_ai?: number;
            speech?: {
                enabled?: boolean;
                providers?: {
                    /** @enum {string} */
                    provider?: "cartesia" | "elevenlabs";
                    configured?: boolean;
                    voice_id?: string;
                    model?: string;
                }[];
            };
        };
        VoiceSimulationModelOption: {
            /** @description Stable allowed AI model ID used in requests. */
            id: string;
            /** @description Configured alias */
            label: string;
            alias?: string | null;
            tier?: string | null;
            per_run_price: number;
        };
        VoiceSimulationProject: {
            /** Format: uuid */
            id: string;
            workspace_id: number;
            name: string;
            description?: string;
            source_agent_id: string;
            draft_revision: number;
            draft_patch?: components["schemas"]["VoiceSimulationDraftPatch"];
            baseline_fingerprint?: string | null;
            created_by?: number;
            /** Format: date-time */
            created_at?: string | null;
            /** Format: date-time */
            updated_at?: string | null;
            /** Format: date-time */
            archived_at?: string | null;
            /**
             * @description automated lets Agent IQ draft, run and improve the suite through improvement runs and schedules. manual runs selected scenarios once with no automatic draft changes.
             * @enum {string}
             */
            automation_mode: "automated" | "manual";
        };
        VoiceSimulationDraftPatch: {
            general_prompt?: string;
            global_prompt?: string;
        } | {
            /** @enum {integer} */
            version: 2;
            /** @description Approved prompt, tool, graph, knowledge and engine behavior fields. Arrays replace the complete field. Protected existing values use opaque references and cannot be moved. */
            engine: {
                [key: string]: unknown;
            };
            /** @description Approved voice behavior and analysis fields. Publication, assignments and platform event callbacks cannot be changed. */
            agent: {
                [key: string]: unknown;
            };
            functions: {
                [key: string]: components["schemas"]["VoiceSimulationHostedFunction"];
            };
        };
        VoiceSimulationHostedFunction: {
            /** @description Map local aliases to existing custom-tool names. A handler requests a connector with {$request:{connector:alias,args:{...}}}, then reads context.responses[alias]. Simulations return fixtures. Accepted endpoints use the reviewed HTTPS connection with credentials retained server-side. Each connector runs at most once per invocation. */
            connectors?: {
                [key: string]: string;
            };
            description: string;
            /** @description Synchronous JavaScript function expression accepting input and context and returning JSON. No network, filesystem, modules or host credentials. context.fixture is available only during simulation. */
            code: string;
            input_schema: {
                [key: string]: unknown;
            };
            tests: {
                input: unknown;
                expected: unknown;
                fixture?: unknown;
                connector_results?: {
                    [key: string]: unknown;
                };
            }[];
        };
        VoiceSimulationScenario: {
            /** Format: uuid */
            id: string;
            workspace_id?: number;
            /** Format: uuid */
            project_id: string;
            name: string;
            revision: number;
            definition: components["schemas"]["VoiceSimulationScenarioDefinition"];
            /** Format: date-time */
            created_at?: string | null;
            /** Format: date-time */
            updated_at?: string | null;
        };
        VoiceSimulationEstimate: {
            currency: string;
            run_count: number;
            /** @description Highest per-run surcharge in this session. For mixed models, use model_prices and maximum_surcharge for exact amounts. */
            per_run_price?: number;
            /** @description Server-computed per-scenario pricing, frozen when the session is launched. Each connected repetition incurs this surcharge; voice usage and Agent IQ interactions remain separate. */
            model_prices?: {
                /** Format: uuid */
                scenario_id?: string;
                ai_model?: string;
                label?: string;
                tier?: string | null;
                per_run_price?: number;
            }[];
            maximum_surcharge: number;
            monthly_price?: number;
            max_audio_seconds?: number;
            billing_description?: string;
        };
        VoiceSimulationLaunchInput: {
            scenario_ids: string[];
            /** @description Use the same optional AI model ID as the estimate. Selects scoring and per-run tier pricing; changing it requires a new idempotency key. */
            ai_model?: string;
            /** @default 1 */
            repetitions?: number;
            max_surcharge: number;
            idempotency_key: string;
        };
        VoiceSimulationSession: {
            draft_fingerprint?: string;
            /**
             * @description Null while active. Pass requires all runs to pass; failed criteria take precedence over errors, cancellations and inconclusive evidence.
             * @enum {string|null}
             */
            outcome?: "pass" | "fail" | "inconclusive" | "error" | "cancelled" | null;
            test_counts?: {
                total?: number;
                passed?: number;
                failed?: number;
                inconclusive?: number;
                errors?: number;
                cancelled?: number;
                pending?: number;
            };
            /** Format: uuid */
            id: string;
            workspace_id: number;
            /** Format: uuid */
            project_id: string;
            /** @enum {string} */
            status: "queued" | "running" | "completed" | "cancelled" | "failed";
            /** Format: date-time */
            cancel_requested_at?: string | null;
            /** Format: date-time */
            created_at?: string | null;
            /** Format: date-time */
            completed_at?: string | null;
            estimate?: components["schemas"]["VoiceSimulationEstimate"];
            runs?: components["schemas"]["VoiceSimulationRun"][];
            /**
             * Format: uuid
             * @description Automatic improvement run that owns this session, if any.
             */
            campaign_id?: string | null;
        };
        VoiceSimulationRun: {
            /** @description Fingerprint of the tested scenario definition. */
            scenario_fingerprint?: string;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            scenario_id?: string;
            name?: string;
            /** @enum {string} */
            status: "queued" | "preparing" | "dialing" | "running" | "scoring" | "completed" | "failed" | "cancelled";
            /** @enum {string|null} */
            outcome?: "pass" | "fail" | "error" | "inconclusive" | null;
            error_code?: string | null;
            score?: number | null;
            /** Format: date-time */
            created_at?: string | null;
            /** Format: date-time */
            started_at?: string | null;
            /** Format: date-time */
            completed_at?: string | null;
            report?: components["schemas"]["VoiceSimulationReport"] | null;
        };
        VoiceSimulationReport: {
            outcome: string;
            score?: number | null;
            summary: string;
            criteria?: {
                id: string;
                description: string;
                weight?: number;
                required?: boolean;
                /** @enum {string} */
                verdict?: "pass" | "fail" | "inconclusive";
                explanation?: string;
                turn_indexes?: number[];
                /** @description Validated references to observed IVR or tool events, call duration, or termination evidence. Array references use zero-based indexes. */
                evidence_refs?: string[];
            }[];
            ivr_checks?: {
                node_id?: string;
                passed?: boolean;
            }[];
            evidence?: {
                target_connected?: boolean;
                counterpart_connected?: boolean;
                transcript?: {
                    /** @enum {string} */
                    role?: "agent" | "user";
                    content?: string;
                }[];
                ivr_visited_nodes?: string[];
                tool_captures?: {
                    tool?: string;
                    args?: {
                        [key: string]: unknown;
                    };
                    result?: unknown;
                }[];
                duration_seconds?: number;
                recording_available?: boolean;
                collected_variables?: {
                    [key: string]: string;
                };
                analysis?: {
                    [key: string]: unknown;
                } | null;
                ivr_inputs?: {
                    node_id?: string;
                    digits?: string;
                    matched?: boolean;
                }[];
                /** @description Observed invocation names only; an invocation alone does not prove that an external action succeeded. */
                tool_invocations?: {
                    name?: string;
                }[];
                /** @enum {string|null} */
                call_end_reason?: "agent_hangup" | "user_hangup" | "max_duration_reached" | "inactivity" | null;
            };
        };
        /**
         * @description Approved categories for simulation draft changes. Existing approvals retain prompts-only scope until explicitly renewed.
         * @default [
         *       "prompts"
         *     ]
         */
        VoiceSimulationChangeScope: ("prompts" | "tools" | "flow" | "settings" | "analysis" | "knowledge" | "webhooks")[];
        VoiceSimulationImprovement: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            project_id: string;
            /** Format: uuid */
            session_id?: string;
            /** Format: date-time */
            created_at?: string | null;
            /** Format: date-time */
            applied_at?: string | null;
            /** @description For expanded proposals, true only when the applied current draft has passed the complete current suite and has not already been accepted. Saving still rechecks source drift and permissions. */
            can_accept?: boolean;
            /** Format: uuid */
            tested_session_id?: string | null;
            proposal: {
                /**
                 * @description Present for expanded configuration proposals; absent for legacy prompt proposals.
                 * @enum {integer}
                 */
                version?: 2;
                change_scope?: components["schemas"]["VoiceSimulationChangeScope"];
                patch?: components["schemas"]["VoiceSimulationDraftPatch"];
                draft_fingerprint?: string;
                changes?: {
                    section?: string;
                    field?: string;
                    category?: string;
                    before?: unknown;
                    after?: unknown;
                }[];
                function_tests?: {
                    [key: string]: {
                        fingerprint?: string;
                        passed?: boolean;
                        results?: {
                            [key: string]: unknown;
                        }[];
                    };
                };
                summary: string;
                reasons: string[];
                /** @enum {string} */
                field?: "general_prompt" | "global_prompt";
                before?: string;
                after?: string;
                draft_revision: number;
            };
        };
        VoiceSimulationIvr: {
            entry: string;
            nodes: {
                id: string;
                /** @enum {string} */
                type: "say" | "menu" | "hold" | "bridge" | "hangup";
                prompt?: string;
                next?: string;
                seconds?: number;
                routes?: {
                    [key: string]: string;
                };
                failure?: string;
                timeout_seconds?: number;
                retry_limit?: number;
                /**
                 * Format: uuid
                 * @description Workspace recording whose stored text must exactly match prompt; regenerate after editing.
                 */
                audio_id?: string;
                position?: {
                    x: number;
                    y: number;
                };
            }[];
            required_nodes?: string[];
        };
        VoiceSimulationImprovementRun: {
            change_scope?: components["schemas"]["VoiceSimulationChangeScope"];
            /**
             * Format: uuid
             * @description Recurring policy that created this cycle, if any.
             */
            schedule_id?: string | null;
            /** @description Monotonic cycle number across renewals of the same policy. */
            schedule_cycle?: number | null;
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            project_id: string;
            workspace_id: number;
            created_by?: number;
            /** @enum {string} */
            status: "awaiting_approval" | "running" | "paused" | "passed" | "cancelled" | "failed";
            phase?: string;
            scenario_ids?: string[];
            approved_revision?: number | null;
            /** @description Total simulation runs allowed, including prior reserved calls; workspace cap may be lower. */
            max_calls: number;
            /** @description Total logical Agent IQ interactions, including execution planning, scenario generation, scoring and draft improvements. Multi-scenario execution plans consume one interaction each; single-scenario runs skip planning. Model fallback belongs to the same interaction. Workspace cap may be lower. */
            max_ai: number;
            max_surcharge?: string | number;
            calls_used: number;
            ai_used: number;
            iteration: number;
            /** Format: uuid */
            current_session_id?: string | null;
            surcharge_reserved?: string | number;
            ai_model?: string | null;
            reason?: string | null;
            approval_version: number;
            approved_by?: number | null;
            /** Format: date-time */
            approved_at?: string | null;
            /** Format: date-time */
            created_at?: string;
            /** Format: date-time */
            updated_at?: string;
            scenarios?: {
                /** Format: uuid */
                id: string;
                revision: number;
                name: string;
                definition: components["schemas"]["VoiceSimulationScenarioDefinition"];
            }[];
            approved_scenarios?: {
                /** Format: uuid */
                id: string;
                revision: number;
                name: string;
                definition: components["schemas"]["VoiceSimulationScenarioDefinition"];
            }[] | null;
            /** @description GET returns a token binding the reviewed scenario revisions and draft revision. Submit the token the user actually reviewed when approving; never refresh it silently. */
            review_fingerprint?: string;
            events?: {
                id?: string | number;
                kind?: string;
                payload?: {
                    [key: string]: unknown;
                };
                /** Format: date-time */
                created_at?: string;
            }[];
        };
        VoiceSimulationScheduleResponse: {
            schedule: components["schemas"]["VoiceSimulationSchedule"] | null;
        };
        VoiceSimulationSchedule: {
            change_scope?: components["schemas"]["VoiceSimulationChangeScope"];
            /** Format: uuid */
            id?: string;
            workspace_id?: number;
            /** Format: uuid */
            project_id?: string;
            created_by?: number;
            /** @enum {string} */
            status?: "enabled" | "paused" | "exhausted";
            config?: components["schemas"]["VoiceSimulationScheduleTrigger"];
            scenario_ids?: string[];
            max_calls?: number;
            max_ai?: number;
            /** @description Decimal surcharge allowance per cycle. */
            max_surcharge?: string;
            max_cycles?: number;
            cycles_started?: number;
            ai_model?: string;
            new_scenarios?: number;
            expected_draft_revision?: number;
            pending_calls?: number;
            /** Format: date-time */
            next_run_at?: string | null;
            /** Format: uuid */
            last_campaign_id?: string | null;
            reason?: string | null;
            /** Format: date-time */
            calls_after?: string;
            /** Format: date-time */
            next_check_at?: string;
            /** Format: date-time */
            created_at?: string;
            /** Format: date-time */
            updated_at?: string;
        };
        /** @description Time is interpreted in the IANA timezone. Monthly dates clamp to month end. Either starts on either trigger; both waits for the time and call threshold. Calls only requires a threshold. */
        VoiceSimulationScheduleTrigger: {
            /** @enum {string} */
            cadence?: "none" | "daily" | "weekly" | "monthly";
            /** @default UTC */
            timezone?: string;
            /** @default 09:00 */
            time?: string;
            /** @description Sunday=0, Monday=1. */
            weekday?: number;
            month_day?: number;
            call_threshold?: number | null;
            /**
             * @default either
             * @enum {string}
             */
            combination?: "either" | "both";
        };
        VoiceSimulationScheduleApproval: {
            change_scope?: components["schemas"]["VoiceSimulationChangeScope"];
            /** @constant */
            confirm: true;
            /** Format: uuid */
            improvement_run_id: string;
            review_fingerprint: string;
            trigger: components["schemas"]["VoiceSimulationScheduleTrigger"];
            max_calls: number;
            max_ai: number;
            /** @description Per-cycle run surcharge allowance. Voice usage, AI charges and monthly access remain additional. */
            max_surcharge: number;
            max_cycles: number;
            /** @description An allowed Agent IQ model key. */
            ai_model: string;
            /**
             * @description Automatically generate this many new tests from recent real calls each cycle, in addition to the fixed approved suite.
             * @default 0
             */
            new_scenarios?: number;
        };
    };
    responses: never;
    parameters: {
        /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
        WorkspaceIdQuery: number;
        /** @description Maximum number of records to return. */
        LimitQuery: number;
        /** @description Identifier to continue pagination. */
        PaginationKeyQuery: string;
        /** @description Version paired with the pagination key. */
        PaginationKeyVersionQuery: number;
        /** @description LLM identifier. */
        LlmIdPath: string;
        /** @description Specific version to retrieve or update. */
        VersionQuery: number;
        /** @description Agent identifier. */
        AgentIdPath: string;
        /** @description Specific agent version. */
        VersionPath: number;
        /** @description Also return the dynamic variables referenced by each tagged version and the working version. */
        IncludeDetectedVariablesQuery: boolean;
        /** @description Agent version to inspect. */
        RequiredVersionQuery: number;
        /** @description Environment tag name, such as prod, staging, or a custom tag. */
        TagNamePath: string;
        /** @description Sort direction for chat listings. */
        SortOrderQuery: "ascending" | "descending";
        /** @description Chat identifier. */
        ChatIdPath: string;
        /** @description Chat widget configuration identifier. */
        WidgetIdPath: number;
        /** @description Conversation flow identifier. */
        ConversationFlowIdPath: string;
        /** @description Knowledge base identifier. */
        KnowledgeBaseIdPath: string;
        /** @description Knowledge base source identifier. */
        SourceIdPath: string;
        /** @description Voice identifier. */
        VoiceIdPath: string;
        /** @description Response engine type used by an existing test case definition. */
        TestCaseDefinitionTypeQuery: string;
        /** @description LLM identifier filter. */
        LlmIdQuery: string;
        /** @description Conversation flow identifier filter. */
        ConversationFlowIdQuery: string;
        /** @description Test run batch identifier. */
        TestCaseBatchJobIdPath: string;
        /** @description Test case definition identifier. */
        TestCaseDefinitionIdPath: string;
        /** @description Test run job identifier. */
        TestCaseJobIdPath: string;
        /** @description Optional workspace identifier filter. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
        WorkspaceIdQueryOptional: number;
        /** @description Filter call listings to a specific agent. */
        AgentIdQuery: string;
        /** @description Filter calls by status. */
        StatusQuery: string;
        /** @description Inclusive start date for call listing filter. */
        FromDateQuery: string;
        /** @description Inclusive end date for call listing filter. */
        ToDateQuery: string;
        PageQuery: number;
        /** @description Page size for list endpoints. */
        LimitQueryDefault20: number;
        /** @description Filter call history to a specific persisted agent version captured at call time. */
        AgentVersionQuery: number;
        /** @description Search by call SID, phone number, platform call ID, customer name, or agent name. */
        SearchQuery: string;
        /** @description When true, include archived calls in the response. */
        IncludeArchivedQuery: boolean;
        /** @description When true, include child calls linked to transfer or split-call workflows. */
        IncludeChildCallsQuery: boolean;
        /** @description Call identifier or SID. */
        CallIdPath: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    listLlms: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Maximum number of records to return. */
                limit?: components["parameters"]["LimitQuery"];
                /** @description Identifier to continue pagination. */
                paginationKey?: components["parameters"]["PaginationKeyQuery"];
                /** @description Version paired with the pagination key. */
                paginationKeyVersion?: components["parameters"]["PaginationKeyVersionQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description LLM configurations visible to the workspace. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LlmSummary"][];
                };
            };
        };
    };
    createLlm: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateLlmRequest"];
            };
        };
        responses: {
            /** @description Newly created LLM configuration. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Llm"];
                };
            };
            /** @description Multi-prompt LLMs (with states) are deprecated. From 12/15/2026, creating an LLM with states is rejected; use a conversation flow instead. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getLlm: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Specific version to retrieve or update. */
                version?: components["parameters"]["VersionQuery"];
            };
            header?: never;
            path: {
                /** @description LLM identifier. */
                llmId: components["parameters"]["LlmIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description LLM configuration details. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Llm"];
                };
            };
        };
    };
    deleteLlm: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description LLM identifier. */
                llmId: components["parameters"]["LlmIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description LLM deleted. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateLlm: {
        parameters: {
            query?: {
                /** @description Specific version to retrieve or update. */
                version?: components["parameters"]["VersionQuery"];
            };
            header?: never;
            path: {
                /** @description LLM identifier. */
                llmId: components["parameters"]["LlmIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateLlmRequest"];
            };
        };
        responses: {
            /** @description Updated LLM configuration. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Llm"];
                };
            };
            /** @description Multi-prompt LLMs are deprecated. Adding states to a single-prompt LLM is rejected, and from 02/01/2027 updating states on a multi-prompt LLM is rejected; convert the agent to a conversation flow instead. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listAgents: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Maximum number of records to return. */
                limit?: components["parameters"]["LimitQuery"];
                /** @description Identifier to continue pagination. */
                paginationKey?: components["parameters"]["PaginationKeyQuery"];
                /** @description Version paired with the pagination key. */
                paginationKeyVersion?: components["parameters"]["PaginationKeyVersionQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Agent summary list. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AgentSummary"][];
                };
            };
        };
    };
    createAgent: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAgentRequest"];
            };
        };
        responses: {
            /** @description Newly created agent. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Agent"];
                };
            };
        };
    };
    getAgent: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Specific version to retrieve or update. */
                version?: components["parameters"]["VersionQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Agent configuration. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Agent"];
                };
            };
        };
    };
    deleteAgent: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Agent deleted. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateAgent: {
        parameters: {
            query?: {
                /** @description Specific version to retrieve or update. */
                version?: components["parameters"]["VersionQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateAgentRequest"];
            };
        };
        responses: {
            /** @description Updated agent. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Agent"];
                };
            };
            /** @description Invalid webhook URL or event selection for this agent channel. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Agent or workspace not found or inaccessible. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The selected version is published. Create an editable version before changing subscriptions. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The webhook subscription could not be verified. Customer settings were not saved. */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listAgentVersions: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Agent version history. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AgentVersion"][];
                };
            };
        };
    };
    createAgentDraftVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAgentVersionRequest"];
            };
        };
        responses: {
            /** @description Draft version created. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Agent"];
                };
            };
        };
    };
    publishAgentVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Specific agent version. */
                version: components["parameters"]["VersionPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PublishAgentVersionRequest"];
            };
        };
        responses: {
            /** @description Published agent version. When environmentTags was sent, environmentTagUpdate reports which tags moved; the publish succeeds even if a tag move fails. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublishedAgentVersion"];
                };
            };
        };
    };
    deleteAgentVersion: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Specific agent version. */
                version: components["parameters"]["VersionPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Agent version deleted. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description An environment tag points to this version. Move or unassign the tag first. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listAgentEnvironmentTags: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Also return the dynamic variables referenced by each tagged version and the working version. */
                includeDetectedVariables?: components["parameters"]["IncludeDetectedVariablesQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Environment tags. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EnvironmentTagListResponse"];
                };
            };
            /** @description Agent not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    detectAgentDynamicVariables: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Agent version to inspect. */
                version: components["parameters"]["RequiredVersionQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Detected dynamic variables. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DetectedDynamicVariablesResponse"];
                };
            };
            /** @description Invalid version. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Agent or version not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateAgentEnvironmentTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Environment tag name, such as prod, staging, or a custom tag. */
                tagName: components["parameters"]["TagNamePath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateEnvironmentTagRequest"];
            };
        };
        responses: {
            /** @description Updated tag and the agent's full tag list. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EnvironmentTagUpdateResponse"];
                };
            };
            /** @description Invalid tag name, version, or variables; unknown tag without create; or the 10-tag limit. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Agent or version not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The version is a draft. Only published versions can be tagged. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteAgentEnvironmentTag: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Environment tag name, such as prod, staging, or a custom tag. */
                tagName: components["parameters"]["TagNamePath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Tag removed. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Built-in or unknown tag. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Agent not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listChatAgents: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Maximum number of records to return. */
                limit?: components["parameters"]["LimitQuery"];
                /** @description Identifier to continue pagination. */
                paginationKey?: components["parameters"]["PaginationKeyQuery"];
                /** @description Version paired with the pagination key. */
                paginationKeyVersion?: components["parameters"]["PaginationKeyVersionQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat agent summary list. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatAgentListResponse"];
                };
            };
        };
    };
    createChatAgent: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateChatAgentRequest"];
            };
        };
        responses: {
            /** @description Newly created chat agent. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatAgent"];
                };
            };
        };
    };
    getChatAgent: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Specific version to retrieve or update. */
                version?: components["parameters"]["VersionQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat agent configuration. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatAgent"];
                };
            };
        };
    };
    deleteChatAgent: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat agent deleted. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateChatAgent: {
        parameters: {
            query?: {
                /** @description Specific version to retrieve or update. */
                version?: components["parameters"]["VersionQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateChatAgentRequest"];
            };
        };
        responses: {
            /** @description Updated chat agent. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatAgent"];
                };
            };
            /** @description Invalid webhook URL or event selection for this agent channel. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Agent or workspace not found or inaccessible. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The selected version is published. Create an editable version before changing subscriptions. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The webhook subscription could not be verified. Customer settings were not saved. */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listChatAgentVersions: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat agent version history. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatAgentVersionListResponse"];
                };
            };
        };
    };
    createChatAgentDraftVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateAgentVersionRequest"];
            };
        };
        responses: {
            /** @description Draft version created. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatAgent"];
                };
            };
        };
    };
    publishChatAgentVersion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Specific agent version. */
                version: components["parameters"]["VersionPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PublishAgentVersionRequest"];
            };
        };
        responses: {
            /** @description Published chat agent version. When environmentTags was sent, environmentTagUpdate reports which tags moved; the publish succeeds even if a tag move fails. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublishedChatAgentVersion"];
                };
            };
        };
    };
    deleteChatAgentVersion: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Specific agent version. */
                version: components["parameters"]["VersionPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat agent version deleted. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description An environment tag points to this version. Move or unassign the tag first. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listChatAgentEnvironmentTags: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Also return the dynamic variables referenced by each tagged version and the working version. */
                includeDetectedVariables?: components["parameters"]["IncludeDetectedVariablesQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Environment tags. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EnvironmentTagListResponse"];
                };
            };
            /** @description Agent not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    detectChatAgentDynamicVariables: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Agent version to inspect. */
                version: components["parameters"]["RequiredVersionQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Detected dynamic variables. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DetectedDynamicVariablesResponse"];
                };
            };
            /** @description Invalid version. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Agent or version not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateChatAgentEnvironmentTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Environment tag name, such as prod, staging, or a custom tag. */
                tagName: components["parameters"]["TagNamePath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateEnvironmentTagRequest"];
            };
        };
        responses: {
            /** @description Updated tag and the agent's full tag list. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EnvironmentTagUpdateResponse"];
                };
            };
            /** @description Invalid tag name, version, or variables; unknown tag without create; or the 10-tag limit. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Agent or version not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description The version is a draft. Only published versions can be tagged. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteChatAgentEnvironmentTag: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
                /** @description Environment tag name, such as prod, staging, or a custom tag. */
                tagName: components["parameters"]["TagNamePath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Tag removed. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Built-in or unknown tag. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Agent not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    publishChatAgentVersionFiltered: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Agent identifier. */
                agentId: components["parameters"]["AgentIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    workspaceId: number;
                    version: number;
                    versionTitle?: string;
                    versionDescription?: string;
                };
            };
        };
        responses: {
            /** @description Published chat agent. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatAgent"];
                };
            };
        };
    };
    listChats: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Sort direction for chat listings. */
                sortOrder?: components["parameters"]["SortOrderQuery"];
                /** @description Maximum number of records to return. */
                limit?: components["parameters"]["LimitQuery"];
                /** @description Identifier to continue pagination. */
                paginationKey?: components["parameters"]["PaginationKeyQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat session list. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatListResponse"];
                };
            };
        };
    };
    createChat: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateChatRequest"];
            };
        };
        responses: {
            /** @description Chat created. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Chat"];
                };
            };
        };
    };
    createOutboundSmsChat: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateOutboundSmsChatRequest"];
            };
        };
        responses: {
            /** @description Outbound SMS chat created. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Chat"];
                };
            };
        };
    };
    getChat: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Chat identifier. */
                chatId: components["parameters"]["ChatIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat details. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Chat"];
                };
            };
        };
    };
    updateChat: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. */
                chatId: components["parameters"]["ChatIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateChatRequest"];
            };
        };
        responses: {
            /** @description Updated chat session. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Chat"];
                };
            };
        };
    };
    createChatCompletion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. */
                chatId: components["parameters"]["ChatIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateChatCompletionRequest"];
            };
        };
        responses: {
            /** @description Chat completion messages. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatCompletionResponse"];
                };
            };
        };
    };
    endChat: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat identifier. */
                chatId: components["parameters"]["ChatIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    workspaceId: number;
                };
            };
        };
        responses: {
            /** @description Chat ended. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listChatWidgets: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat widget configurations. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatWidgetConfig"][];
                };
            };
        };
    };
    createChatWidget: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateChatWidgetRequest"];
            };
        };
        responses: {
            /** @description Chat widget created. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatWidgetConfig"];
                };
            };
        };
    };
    getChatWidget: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat widget configuration identifier. */
                widgetId: components["parameters"]["WidgetIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat widget configuration. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatWidgetConfig"];
                };
            };
        };
    };
    updateChatWidget: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat widget configuration identifier. */
                widgetId: components["parameters"]["WidgetIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateChatWidgetRequest"];
            };
        };
        responses: {
            /** @description Updated chat widget. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatWidgetConfig"];
                };
            };
        };
    };
    regenerateWidgetKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Chat widget configuration identifier. */
                widgetId: components["parameters"]["WidgetIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Chat widget with a new public key. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatWidgetConfig"];
                };
            };
        };
    };
    listConversationFlows: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Maximum number of records to return. */
                limit?: components["parameters"]["LimitQuery"];
                /** @description Identifier to continue pagination. */
                paginationKey?: components["parameters"]["PaginationKeyQuery"];
                /** @description Version paired with the pagination key. */
                paginationKeyVersion?: components["parameters"]["PaginationKeyVersionQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Conversation flow summaries. */
            200: {
                headers: {
                    /** @description Whether another page is available. */
                    "X-Has-More"?: boolean;
                    /** @description Opaque cursor for the next page. */
                    "X-Pagination-Key"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ConversationFlowSummary"][];
                };
            };
        };
    };
    createConversationFlow: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateConversationFlowRequest"];
            };
        };
        responses: {
            /** @description Newly created conversation flow. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ConversationFlow"];
                };
            };
        };
    };
    getConversationFlow: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Specific version to retrieve or update. */
                version?: components["parameters"]["VersionQuery"];
            };
            header?: never;
            path: {
                /** @description Conversation flow identifier. */
                conversationFlowId: components["parameters"]["ConversationFlowIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Conversation flow details. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ConversationFlow"];
                };
            };
        };
    };
    deleteConversationFlow: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Conversation flow identifier. */
                conversationFlowId: components["parameters"]["ConversationFlowIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Conversation flow deleted. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateConversationFlow: {
        parameters: {
            query?: {
                /** @description Specific version to retrieve or update. */
                version?: components["parameters"]["VersionQuery"];
            };
            header?: never;
            path: {
                /** @description Conversation flow identifier. */
                conversationFlowId: components["parameters"]["ConversationFlowIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateConversationFlowRequest"];
            };
        };
        responses: {
            /** @description Updated conversation flow. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ConversationFlow"];
                };
            };
        };
    };
    listKnowledgeBases: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Knowledge base summaries. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeBaseSummary"][];
                };
            };
        };
    };
    createKnowledgeBase: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateKnowledgeBaseRequest"];
            };
        };
        responses: {
            /** @description Newly created knowledge base. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeBase"];
                };
            };
        };
    };
    getKnowledgeBase: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Knowledge base identifier. */
                knowledgeBaseId: components["parameters"]["KnowledgeBaseIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Knowledge base details. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeBase"];
                };
            };
        };
    };
    deleteKnowledgeBase: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Knowledge base identifier. */
                knowledgeBaseId: components["parameters"]["KnowledgeBaseIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Knowledge base deleted. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    addKnowledgeBaseSources: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Knowledge base identifier. */
                knowledgeBaseId: components["parameters"]["KnowledgeBaseIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AddKnowledgeBaseSourcesRequest"];
            };
        };
        responses: {
            /** @description Knowledge base with updated source list. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeBase"];
                };
            };
        };
    };
    deleteKnowledgeBaseSource: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Knowledge base identifier. */
                knowledgeBaseId: components["parameters"]["KnowledgeBaseIdPath"];
                /** @description Knowledge base source identifier. */
                sourceId: components["parameters"]["SourceIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Knowledge base with updated source list. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeBase"];
                };
            };
        };
    };
    listVoices: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Voice catalog. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Voice"][];
                };
            };
        };
    };
    searchCommunityVoices: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SearchCommunityVoiceRequest"];
            };
        };
        responses: {
            /** @description Matching community voices. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchCommunityVoiceResponse"];
                };
            };
        };
    };
    addCommunityVoice: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AddCommunityVoiceRequest"];
            };
        };
        responses: {
            /** @description Community voice added. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Voice"];
                };
            };
        };
    };
    cloneVoice: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["CloneVoiceRequest"];
            };
        };
        responses: {
            /** @description Cloned voice metadata. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Voice"];
                };
            };
        };
    };
    getVoice: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Voice identifier. */
                voiceId: components["parameters"]["VoiceIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Voice metadata. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Voice"];
                };
            };
        };
    };
    streamVoiceSample: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Voice identifier. */
                voiceId: components["parameters"]["VoiceIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Voice sample stream. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "audio/mpeg": string;
                };
            };
        };
    };
    listTestCaseDefinitions: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Response engine type used by an existing test case definition. */
                type: components["parameters"]["TestCaseDefinitionTypeQuery"];
                /** @description LLM identifier filter. */
                llmId?: components["parameters"]["LlmIdQuery"];
                /** @description Conversation flow identifier filter. */
                conversationFlowId?: components["parameters"]["ConversationFlowIdQuery"];
                /** @description Specific version to retrieve or update. */
                version?: components["parameters"]["VersionQuery"];
                /** @description Maximum number of records to return. */
                limit?: components["parameters"]["LimitQuery"];
                /** @description Identifier to continue pagination. */
                paginationKey?: components["parameters"]["PaginationKeyQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Test case definitions. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TestCaseDefinition"][];
                };
            };
        };
    };
    createTestCaseDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateTestCaseDefinitionRequest"];
            };
        };
        responses: {
            /** @description Created test case definition. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TestCaseDefinition"];
                };
            };
        };
    };
    listBatchTests: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Response engine type used by an existing test case definition. */
                type: components["parameters"]["TestCaseDefinitionTypeQuery"];
                /** @description LLM identifier filter. */
                llmId?: components["parameters"]["LlmIdQuery"];
                /** @description Conversation flow identifier filter. */
                conversationFlowId?: components["parameters"]["ConversationFlowIdQuery"];
                /** @description Specific version to retrieve or update. */
                version?: components["parameters"]["VersionQuery"];
                /** @description Maximum number of records to return. */
                limit?: components["parameters"]["LimitQuery"];
                /** @description Identifier to continue pagination. */
                paginationKey?: components["parameters"]["PaginationKeyQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Batch test jobs. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BatchTest"][];
                };
            };
        };
    };
    createBatchTest: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateBatchTestRequest"];
            };
        };
        responses: {
            /** @description Created batch test job. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BatchTest"];
                };
            };
        };
    };
    getBatchTest: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Test run batch identifier. */
                testCaseBatchJobId: components["parameters"]["TestCaseBatchJobIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Batch test job. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BatchTest"];
                };
            };
        };
    };
    getTestCaseDefinition: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Test case definition identifier. */
                testCaseDefinitionId: components["parameters"]["TestCaseDefinitionIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Test case definition. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TestCaseDefinition"];
                };
            };
        };
    };
    updateTestCaseDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Test case definition identifier. */
                testCaseDefinitionId: components["parameters"]["TestCaseDefinitionIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateTestCaseDefinitionRequest"];
            };
        };
        responses: {
            /** @description Updated test case definition. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TestCaseDefinition"];
                };
            };
        };
    };
    deleteTestCaseDefinition: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Test case definition identifier. */
                testCaseDefinitionId: components["parameters"]["TestCaseDefinitionIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Test case definition deleted. */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getTestRun: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                /** @description Test run job identifier. */
                testCaseJobId: components["parameters"]["TestCaseJobIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Test run payload. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TestRun"];
                };
            };
        };
    };
    listTestRunsByBatch: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Maximum number of records to return. */
                limit?: components["parameters"]["LimitQuery"];
                /** @description Identifier to continue pagination. */
                paginationKey?: components["parameters"]["PaginationKeyQuery"];
            };
            header?: never;
            path: {
                /** @description Test run batch identifier. */
                testCaseBatchJobId: components["parameters"]["TestCaseBatchJobIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Batch test runs. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TestRun"][];
                };
            };
        };
    };
    getConcurrency: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Concurrency snapshot. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Concurrency"];
                };
            };
        };
    };
    listWorkspaces: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Workspaces visible to the authenticated token. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        workspaces: components["schemas"]["WorkspaceSummary"][];
                    };
                };
            };
        };
    };
    createPhoneCall: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreatePhoneCallRequest"];
            };
        };
        responses: {
            /** @description Call initiation response. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreatePhoneCallResponse"];
                };
            };
            /** @description Invalid request. Unknown fields, invalid dynamic variable values, or conflicting dynamic variable objects are rejected before dialing. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        error?: string;
                        unknownFields?: string[];
                        dynamicVariablesField?: string;
                        field?: string;
                        invalidKeys?: string[];
                    };
                };
            };
        };
    };
    createWebCall: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateWebCallRequest"];
            };
        };
        responses: {
            /** @description Web call created. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WebCall"];
                };
            };
        };
    };
    listCalls: {
        parameters: {
            query?: {
                /** @description Optional workspace identifier filter. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId?: components["parameters"]["WorkspaceIdQueryOptional"];
                /** @description Filter call listings to a specific agent. */
                agentId?: components["parameters"]["AgentIdQuery"];
                /** @description Filter calls by status. */
                status?: components["parameters"]["StatusQuery"];
                /** @description Inclusive start date for call listing filter. */
                fromDate?: components["parameters"]["FromDateQuery"];
                /** @description Inclusive end date for call listing filter. */
                toDate?: components["parameters"]["ToDateQuery"];
                page?: components["parameters"]["PageQuery"];
                /** @description Page size for list endpoints. */
                limit?: components["parameters"]["LimitQueryDefault20"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated call list. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallList"];
                };
            };
        };
    };
    listCallsFiltered: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["V3ListCallsRequest"];
            };
        };
        responses: {
            /** @description Calls matching the provided filters. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["V3ListCallsResponse"];
                };
            };
            /** @description Invalid filter or pagination request. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    fetchCallHistory: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                /** @description Filter call listings to a specific agent. */
                agentId?: components["parameters"]["AgentIdQuery"];
                /** @description Filter call history to a specific persisted agent version captured at call time. */
                agentVersion?: components["parameters"]["AgentVersionQuery"];
                /** @description Filter calls by status. */
                status?: components["parameters"]["StatusQuery"];
                /** @description Search by call SID, phone number, platform call ID, customer name, or agent name. */
                search?: components["parameters"]["SearchQuery"];
                /** @description Inclusive start date for call listing filter. */
                fromDate?: components["parameters"]["FromDateQuery"];
                /** @description Inclusive end date for call listing filter. */
                toDate?: components["parameters"]["ToDateQuery"];
                page?: components["parameters"]["PageQuery"];
                /** @description Page size for list endpoints. */
                limit?: components["parameters"]["LimitQueryDefault20"];
                /** @description When true, include archived calls in the response. */
                includeArchived?: components["parameters"]["IncludeArchivedQuery"];
                /** @description When true, include child calls linked to transfer or split-call workflows. */
                includeChildCalls?: components["parameters"]["IncludeChildCallsQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated call history. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallHistoryList"];
                };
            };
        };
    };
    getCall: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Call identifier or SID. */
                callId: components["parameters"]["CallIdPath"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Call details. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallDetail"];
                };
            };
        };
    };
    updateCall: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Call identifier or SID. */
                callId: components["parameters"]["CallIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateCallRequest"];
            };
        };
        responses: {
            /** @description Updated call record. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CallRecord"];
                };
            };
        };
    };
    endLiveCall: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Call identifier or SID. */
                callId: components["parameters"]["CallIdPath"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CallActionWorkspaceRequest"];
            };
        };
        responses: {
            /** @description Live call ended. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EndLiveCallResponse"];
                };
            };
            /** @description The call is no longer live. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateLiveCall: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Call identifier or SID. */
                callId: components["parameters"]["CallIdPath"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateLiveCallRequest"];
            };
        };
        responses: {
            /** @description Live call updated. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateLiveCallResponse"];
                };
            };
            /** @description The call is no longer live. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    rerunCallAnalysis: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Call identifier or SID. */
                callId: components["parameters"]["CallIdPath"];
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": components["schemas"]["CallActionWorkspaceRequest"];
            };
        };
        responses: {
            /** @description Call analysis rerun started or completed. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RerunCallAnalysisResponse"];
                };
            };
        };
    };
    listVoiceSimulationTemplates: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        templates?: {
                            id?: string;
                            category?: string;
                            scenario?: components["schemas"]["VoiceSimulationScenarioDefinition"];
                        }[];
                    };
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    getVoiceSimulationSettings: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationSettings"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    listVoiceSimulationSourceAgents: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        agents?: {
                            agent_id?: string;
                            agent_name?: string;
                        }[];
                    };
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    listVoiceSimulationProjects: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        projects?: components["schemas"]["VoiceSimulationProject"][];
                    };
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    createVoiceSimulationProject: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    description?: string;
                    source_agent_id: string;
                    /**
                     * Format: uuid
                     * @description Optional existing project to duplicate within the same workspace.
                     */
                    copy_project_id?: string;
                    /**
                     * @description How the project runs. A copy keeps the original's mode unless this is set.
                     * @default automated
                     * @enum {string}
                     */
                    automation_mode?: "automated" | "manual";
                };
            };
        };
        responses: {
            /** @description Successful response. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationProject"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    getVoiceSimulationProject: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationProject"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    updateVoiceSimulationProject: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    automation_mode: "automated" | "manual";
                };
            };
        };
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationProject"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    listVoiceSimulationScenarios: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        scenarios?: components["schemas"]["VoiceSimulationScenario"][];
                    };
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    createVoiceSimulationScenario: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    definition: components["schemas"]["VoiceSimulationScenarioDefinition"];
                };
            };
        };
        responses: {
            /** @description Successful response. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationScenario"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    updateVoiceSimulationScenario: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
                scenarioId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    definition: components["schemas"]["VoiceSimulationScenarioDefinition"];
                    revision: number;
                };
            };
        };
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationScenario"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    generateVoiceSimulationScenarios: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Allowed Agent IQ model key from workspace model_options. */
                    ai_model?: string;
                    /** @description What to test. Omit or leave empty to let Agent IQ recommend scenarios. */
                    instruction?: string;
                    count?: number;
                    /**
                     * @description Include recent real calls as evidence.
                     * @default true
                     */
                    use_call_history?: boolean;
                };
            };
        };
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        scenarios?: components["schemas"]["VoiceSimulationScenarioDefinition"][];
                        context?: {
                            calls_reviewed?: number;
                            recommended?: boolean;
                        };
                    };
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    estimateVoiceSimulationSession: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    scenario_ids: string[];
                    /** @description Optional allowed AI model ID from settings. Overrides scenario scoring models and selects their per-run tier price. Aliases are display labels, not IDs. */
                    ai_model?: string;
                    repetitions?: number;
                };
            };
        };
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationEstimate"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    listVoiceSimulationSessions: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        sessions?: components["schemas"]["VoiceSimulationSession"][];
                    };
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    launchVoiceSimulationSession: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["VoiceSimulationLaunchInput"];
            };
        };
        responses: {
            /** @description Successful response. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationSession"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    getVoiceSimulationSession: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                sessionId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationSession"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    cancelVoiceSimulationSession: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                sessionId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Successful response. */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationSession"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    proposeVoiceSimulationImprovement: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                sessionId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    change_scope?: components["schemas"]["VoiceSimulationChangeScope"];
                    /** @description Allowed Agent IQ model key from workspace model_options. */
                    ai_model?: string;
                };
            };
        };
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationImprovement"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    applyVoiceSimulationImprovement: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
                improvementId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @constant */
                    confirm: true;
                };
            };
        };
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: uuid */
                        project_id?: string;
                        draft_revision?: number;
                        applied?: boolean;
                    };
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    getVoiceSimulationRecording: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                sessionId: string;
                runId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Audio recording */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "audio/wav": string;
                };
            };
            /** @description Recording unavailable */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    archiveVoiceSimulationProject: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: uuid */
                        id?: string;
                        archived?: boolean;
                    };
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    archiveVoiceSimulationScenario: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
                scenarioId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: uuid */
                        id?: string;
                        archived?: boolean;
                    };
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listVoiceSimulationImprovements: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        improvements?: components["schemas"]["VoiceSimulationImprovement"][];
                    };
                };
            };
            /** @description Resource not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listVoiceSimulationSpeechVoices: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
                provider: "cartesia" | "elevenlabs";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        voices?: {
                            id: string;
                            name: string;
                        }[];
                    };
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    generateVoiceSimulationIvrAudio: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    ivr: components["schemas"]["VoiceSimulationIvr"];
                    /** @enum {string} */
                    provider: "cartesia" | "elevenlabs";
                    voice_id?: string;
                };
            };
        };
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        ivr: components["schemas"]["VoiceSimulationIvr"];
                        complete: boolean;
                        errors: {
                            node_id?: string;
                            error?: string;
                            code?: string;
                        }[];
                    };
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    getVoiceSimulationIvrAudio: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                audioId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "audio/wav": string;
                    "audio/mpeg": string;
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    listVoiceSimulationImprovementRuns: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        improvement_runs?: components["schemas"]["VoiceSimulationImprovementRun"][];
                    };
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    createVoiceSimulationImprovementRun: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Total simulation runs allowed, including prior reserved calls; workspace cap may be lower. */
                    max_calls?: number;
                    /** @description Total logical Agent IQ interactions, including execution planning, scenario generation, scoring and draft improvements. Multi-scenario execution plans consume one interaction each; single-scenario runs skip planning. Model fallback belongs to the same interaction. Workspace cap may be lower. */
                    max_ai?: number;
                    /** @description Maximum cumulative per-run surcharges. Voice usage, Agent IQ pricing and monthly access remain separate. */
                    max_surcharge?: number;
                    scenario_ids?: string[];
                    ai_model?: string;
                };
            };
        };
        responses: {
            /** @description Successful response. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationImprovementRun"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    getVoiceSimulationImprovementRun: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationImprovementRun"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    updateVoiceSimulationImprovementRun: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    scenario_ids: string[];
                };
            };
        };
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationImprovementRun"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    generateVoiceSimulationImprovementScenarios: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    instruction: string;
                    count?: number;
                };
            };
        };
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationImprovementRun"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    approveVoiceSimulationImprovementRun: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    change_scope?: components["schemas"]["VoiceSimulationChangeScope"];
                    /** @description Allowed Agent IQ model key for future improvement steps (provider/model). Saved atomically with approval. Omit to retain the run model, or resolve the workspace default for an older run without a model. May be changed when approving a draft or renewing a paused run; scenario scoring and counterpart models are unchanged. */
                    ai_model?: string;
                    /** @description Total simulation runs allowed, including prior reserved calls; workspace cap may be lower. */
                    max_calls: number;
                    /** @description Total logical Agent IQ interactions, including execution planning, scenario generation, scoring and draft improvements. Multi-scenario execution plans consume one interaction each; single-scenario runs skip planning. Model fallback belongs to the same interaction. Workspace cap may be lower. */
                    max_ai: number;
                    /** @description Maximum cumulative per-run surcharges. Voice usage, Agent IQ pricing and monthly access remain separate. */
                    max_surcharge: number;
                    /** @constant */
                    confirm: true;
                    review_fingerprint: string;
                };
            };
        };
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationImprovementRun"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    stopVoiceSimulationImprovementRun: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Successful response. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationImprovementRun"];
                };
            };
            /** @description Invalid input. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Authentication required. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature disabled or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Resource not found in this workspace. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Revision, price or idempotency conflict. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Voice configuration or fixture unavailable. */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Workspace queue limit reached. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Feature setup or service unavailable. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    getVoiceSimulationSchedule: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Recurring policy. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationScheduleResponse"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    saveVoiceSimulationSchedule: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["VoiceSimulationScheduleApproval"];
            };
        };
        responses: {
            /** @description Recurring policy. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationScheduleResponse"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    pauseVoiceSimulationSchedule: {
        parameters: {
            query: {
                /** @description Workspace identifier. Call GET /api/v1/workspaces to list workspaces accessible to your token. */
                workspaceId: components["parameters"]["WorkspaceIdQuery"];
            };
            header?: never;
            path: {
                projectId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Recurring policy. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationScheduleResponse"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
            /** @description Invalid request, unavailable feature or access denied. */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoiceSimulationError"];
                };
            };
        };
    };
    createCallMonitorSession: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                callId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Request live audio in addition to transcripts.
                     * @default false
                     */
                    audio?: boolean;
                };
            };
        };
        responses: {
            /** @description Single-use monitoring ticket created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Relative WebSocket path on the same API origin, including the single-use ticket. */
                        websocket_path: string;
                        /** @constant */
                        expires_in: 60;
                        audio: boolean;
                    };
                };
            };
            /** @description Invalid audio option */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Invalid or missing API token */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Live audio access is not enabled */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Live call not found or inaccessible */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Call is no longer live */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Too many pending monitoring sessions */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Monitoring temporarily unavailable */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
