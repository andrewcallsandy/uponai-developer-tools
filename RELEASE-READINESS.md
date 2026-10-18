# Release verification — 2026-10-18

SDK and MCP **0.1.2** are published under the `latest` npm tag through
[the protected OIDC release workflow](https://github.com/andrewcallsandy/uponai-developer-tools/actions/runs/39083827420).
Both registry artifacts passed the workflow's SHA-512 comparison.

- Public contract SHA-256: `d8b4def3f123e951857909aaf9eb3036093aefb07a1c377d99bcfe50306c6504`.
- 110 typed SDK operations; MCP workspace discovery plus 28 curated read tools.
  Eight optional writes remain disabled by default.
- Production API promotion preceded publication. The live contract matched the
  reviewed snapshot; anonymous and invalid-token requests were rejected, and the
  internal canonical specification continued to require authentication.
- A clean registry installation of both 0.1.2 packages completed with zero
  dependency vulnerabilities. Signature auditing verified 97 registry signatures
  and 13 attestations, including both UponAI packages.
- The installed SDK read production workspaces, voice simulation settings and
  projects. The installed MCP executable initialized over real stdio as 0.1.2,
  exposed 29 default tools, read production settings and rejected a workspace
  outside its explicit allowlist. Optional writes were absent by default.
- Staging acceptance used the candidate SDK/MCP against a real completed voice
  session. Both call legs connected, evaluation passed, cancellation reached a
  terminal state, repeat cancellation was safe, and workspace isolation held.

These checks distinguish live read/protocol evidence from staging voice-call
acceptance; they do not claim that all 110 operations were exercised in production.
Workspaces require explicit administrator enablement for voice simulations.
Public documentation is published independently at https://docs.uponai.com.

## Earlier release verification — 2026-10-14

SDK and MCP **0.1.1** are published under the `latest` npm tag through GitHub
trusted publishing, with provenance. Both trusted connections have completed a
successful publish. [Successful release workflow](https://github.com/andrewcallsandy/uponai-developer-tools/actions/runs/38660092822).

- Packages: `@upon-ai/sdk@0.1.1`, `@upon-ai/mcp-server@0.1.1`.
- MIT license, copyright UponAI.
- Public contract SHA-256: `2dde3cce47c07123e8f88de2f6553c1ce527467ab364d0600e4a919fe2873654`.
- 75 typed public SDK operations; MCP workspace discovery plus 18 curated read
  tools. Three optional writes remain disabled by default.
- CI passed 17 tests, consumer type checks, clean packed-package installation,
  package content checks, dependency audit, and production contract equality.
- A fresh npm installation verified package exports and the MCP executable.
  `npm audit signatures` verified 97 registry signatures and 13 attestations,
  including provenance for both UponAI packages.
- The initial SDK upload was accepted before npm exposed its metadata. Recovery
  verified the existing SDK SHA-512 against the rebuilt artifact before publishing
  MCP. The publisher now waits for processing and supports explicit, integrity-bound
  partial-release resume. npm 12 integrity-output parsing has regression coverage.

Authenticated production workspace discovery and agent listing passed through
both SDK and real MCP stdio using the 0.1.0 registry installation. Invalid API
credentials were rejected and MCP rejected a workspace outside its allowlist.
Zero production writes were performed. The 0.1.1 release changes packaging/version
metadata, not API behavior. Live checks do not establish all 75 operations or all
server-side authorization boundaries. The temporary customer-token file was
removed; the owner should revoke the shared token in the dashboard.

## Ongoing operation

GitHub environment `npm-release` restricts releases to main and requires owner
review. Publishing uses OIDC only. The bootstrap GitHub secret and protected local
npm-token file were removed. npm rejected token revocation with HTTP 403; the
owner must revoke the old bootstrap token in their signed-in npm account.

Public docs deploy independently on main pushes, check for approved API changes
every 15 minutes, and reindex the assistant after deployment. SDK/MCP versioning
and npm releases remain reviewed operations. Internal API docs are unchanged;
public schemas exclude admin operations and privileged override headers.

See RELEASING.md for the release and partial-recovery procedure.
