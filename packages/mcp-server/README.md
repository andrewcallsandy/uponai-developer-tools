# @upon-ai/mcp-server

UponAI customer API tools for Model Context Protocol clients. MIT © 2026 UponAI.
Requires Node >=22.14.

## Local stdio

Configure your MCP client with:

```json
{
  "mcpServers": {
    "uponai": {
      "command": "npx",
      "args": ["-y", "@upon-ai/mcp-server@0.1.1"],
      "env": {
        "UPONAI_API_KEY": "YOUR_CUSTOMER_API_TOKEN",
        "UPONAI_WORKSPACE_IDS": "123"
      }
    }
  }
}
```

Use your MCP client's secret store for the credential. Do not commit populated
configuration. For local source development, use `node packages/mcp-server/dist/cli.js`
from the built checkout.

The token is validated through workspace discovery before MCP initialization.
Without `UPONAI_WORKSPACE_IDS`, only workspace discovery is available. With an
explicit comma-separated allowlist, 28 summary-only read tools become available
for agents, LLMs, chats, conversation flows, knowledge bases, voices, concurrency
calls and voice simulations. Tools never accept an arbitrary path, method, authentication header,
privileged context, or API origin.

Raw configuration, prompts, transcripts, recordings, signed URLs and secret fields
are omitted from tool results. This intentionally returns less data than the SDK.
Upstream API authorization still applies to every request.

## Optional write capabilities

Writes are off by default. An operator can set `UPONAI_MCP_WRITE_OPERATIONS` to a
comma-separated subset of `createPhoneCall,endLiveCall,rerunCallAnalysis,estimateVoiceSimulationSession,launchVoiceSimulationSession,cancelVoiceSimulationSession,stopVoiceSimulationImprovementRun,pauseVoiceSimulationSchedule`.
Each write also requires a `confirm: true` argument and an allowed workspace.
The confirmation argument is an extra safeguard, not proof of human approval;
configure your MCP client's approval controls before enabling writes. These tools
can incur charges or affect live calls. Phone-call creation accepts E.164 numbers
and a deliberately small request schema. Other writes remain available through
the SDK only. Simulation launch requires a bounded scenario selection, an accepted
surcharge limit and an idempotency key. Voice usage and monthly access are charged
separately from the run surcharge.

## Self-hosted Streamable HTTP

```sh
# Load secrets through your process manager, not shell command arguments.
# UPONAI_API_KEY: upstream customer token
# UPONAI_MCP_ACCESS_TOKEN: a different random token, at least 32 characters
# UPONAI_MCP_PUBLIC_URL: e.g. https://mcp.example.com (fixed HTTPS origin)
# UPONAI_WORKSPACE_IDS: explicit workspace IDs
uponai-mcp --http
```

The listener binds to `127.0.0.1:7093` (`PORT` overrides it). Put a TLS reverse
proxy in front, preserving Host. Only authenticated POST `/mcp` is supported;
Host/Origin checks, 64 KiB request limits, four concurrent requests and 60 requests
per minute per process apply. Forwarded Host/Origin headers are not trusted.

This is a single-principal, operator-managed bearer deployment. Its MCP access
token is never forwarded to the customer API. It is not an OAuth service and is
not advertised as compatible with clients that require OAuth discovery. Deploy
separate instances/credentials for separate principals; do not use it as a
multi-customer gateway. A production hosted endpoint is not deployed by npm install.

All diagnostics go to stderr so stdio protocol output remains clean.

Self-improving runs can be monitored with `listVoiceSimulationImprovementRuns`
and `getVoiceSimulationImprovementRun`. Summaries include status, cycle number,
call/IQ usage, approved limits and the pause reason, but omit prompts, criteria,
review fingerprints and event payloads. `stopVoiceSimulationImprovementRun` is
an optional write requiring `confirm: true`. Budget approval and automatic-draft
consent stay in the complete UI/SDK review flow; summary-only tools cannot approve
an unseen suite. Project summaries include `automation_mode` (`automated` or
`manual`); creating projects and changing their mode with
`updateVoiceSimulationProject` remain SDK/UI operations. IVR speech credentials are configured through Brand Management,
never through MCP.
