# UponAI developer tools

`@upon-ai/sdk` and `@upon-ai/mcp-server`, owned by UponAI and licensed under MIT.

```sh
npm install @upon-ai/sdk@0.1.1
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
policy. The SDK has 75 typed operations. MCP exposes 18 curated read operations
plus workspace discovery, and three separately enabled call-changing operations.

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
