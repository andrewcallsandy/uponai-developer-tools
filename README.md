# UponAI developer tools

`@upon-ai/sdk` and `@upon-ai/mcp-server`, owned by UponAI and licensed under MIT.

```sh
npm install @upon-ai/sdk@0.1.8
```

[SDK guide](https://docs.uponai.com/sdk/overview/) ·
[MCP setup](https://docs.uponai.com/mcp/overview/) ·
[Interactive API](https://docs.uponai.com/api/list-agents/)

This independent release repository consumes the reviewed customer OpenAPI
contract. Internal application docs remain in the application repository.
No administrative APIs or privileged impersonation headers are included.

## Build and verify

Requires Node >=22.14. Use the pinned lockfile:

```sh
npm ci --ignore-scripts
npm run check
npm run pack:release
```

Generated sources are reproducible from `contract/openapi.json` and its explicit
policy. The SDK has 133 typed operations. MCP exposes 36 curated read operations
plus workspace discovery, and twelve separately enabled write operations for calls,
simulation sessions, improvement runs, schedules, agent webhook settings and
agent environment tag pointers.
Webhook settings use the platform proxy and saved customer selections.

- [SDK usage](packages/sdk/README.md)
- [MCP configuration](packages/mcp-server/README.md)
- [Release and npm setup](RELEASING.md)
- [Security boundary](SECURITY.md)

The MCP is a fresh implementation sharing this SDK. The earlier prototype was
reviewed as a reference; its raw request escape hatch and dashboard phone tools
are not carried into these packages. No third-party prototype source is copied.

Tests use isolated mock API responses and a real MCP protocol client. Live
customer-workspace integration is a separate release gate; a passing local test
suite is not evidence that all API operations work in production.

Recurring voice improvement policies are available through
`getVoiceSimulationSchedule`, `saveVoiceSimulationSchedule` and
`pauseVoiceSimulationSchedule`. A policy requires explicit review, per-cycle
budgets and a bounded number of cycles before reapproval. MCP exposes schedule
summaries and the optional `pauseVoiceSimulationSchedule` write capability;
automatic recurring approval is deliberately excluded from the MCP catalog.

## Agent languages

Agent create/update inputs and responses accept `language` as a supported locale
string or an ordered array. For example:

```ts
await client.updateAgent({path:{agentId:'agent_id'},query:{version:3},body:{workspaceId:58,language:['es-ES','en-US']}});
```

The first locale is the voice pronunciation fallback. Use an editable version;
the voice and speech recognition configuration must support the entire selection.
MCP opt-in writes `updateAgentLanguages` and `updateChatAgentLanguages` accept the
same language values with `workspaceId`, `agentId`, optional `version`, and
`confirm: true`. These tools do not publish. MCP read summaries preserve locale
arrays in order. Empty and duplicate selections are rejected.
