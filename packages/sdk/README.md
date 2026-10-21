# @upon-ai/sdk

Typed Node.js client for the UponAI customer API. MIT © 2026 UponAI.
Requires Node >=22.14. ESM package; CommonJS consumers can use dynamic `import()`.

## Install

```sh
npm install @upon-ai/sdk@0.1.3
```

```ts
import { UponAI, UponAIError } from '@upon-ai/sdk';

const client = new UponAI({ apiKey: process.env.UPONAI_API_KEY! });
const workspaces = await client.listWorkspaces();
const agents = await client.listAgents({ query: { workspaceId: 123, limit: 20 } });
const agent = await client.getAgent({
  path: { agentId: 'agent_example' },
  query: { workspaceId: 123 },
});
```

Keep the API key on your server. Do not embed customer credentials in browser
bundles. Each client keeps its own credential; an async `apiKey` callback can
supply a rotated token. There are no global credentials or privileged header overrides.

All 110 reviewed public operations have named methods. Inputs use `path`, `query`
and `body` groups matching the public OpenAPI contract. Types include
`OperationInput`, `OperationOutput`, `operations` and `components`.
Multipart bodies use native `FormData`; binary endpoints return `Blob`.
JSON responses retain the API's native shape, without invented pagination fields.

```ts
const controller = new AbortController();
try {
  await client.getAgent(
    { path: { agentId: 'agent_example' }, query: { workspaceId: 123 } },
    { signal: controller.signal, timeoutMs: 15_000 },
  );
} catch (error) {
  if (error instanceof UponAIError) {
    console.error(error.status, error.requestId);
  }
}
```

Default timeout is 30 seconds. Only GET requests retry HTTP 429/502/503/504,
up to twice with bounded backoff. Writes and network failures are not automatically
retried. Redirects are rejected. Responses are capped at 5 MiB; JSON requests
are capped at 5 MiB. The server applies its own multipart upload limits.

For pagination, `client.paginate({ operation, input, items, next, maxPages })`
accepts callbacks for the particular endpoint's documented page shape. `next`
returns the next operation input or `undefined`; repeated inputs and excessive
pages fail instead of looping indefinitely. No universal cursor format is assumed.

Use `baseUrl` only for a trusted HTTPS API origin, such as your staging deployment.
The optional injected `fetch` is trusted application code, primarily for tests.
Types describe the reviewed contract; responses are not runtime schema-validated.

## Agent webhook settings

The contract types all eight voice events and three chat events. Use
`updateAgent` or `updateChatAgent` with `body.workspaceId`, `body.webhook_url`, and
`body.webhook_events`; set `query.version` to the editable version when changing
subscriptions. The platform saves the customer destination and routes delivery
through its proxy. Omitted fields are preserved. `webhook_url: null` clears the
destination; `webhook_events: []` disables customer event delivery. Read back with
`getAgent` or `getChatAgent` to verify the current saved customer settings.
Subscription changes on published versions return 409; publish the edited draft
separately to activate.

```ts
await client.updateAgent({
  path: { agentId: 'agent_example' },
  query: { version: 3 },
  body: { workspaceId: 123, webhook_events: ['transcript_updated', 'transfer_ended'] },
});
```
