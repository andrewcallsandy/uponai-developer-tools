# Release readiness — 2026-10-14

Status: authenticated production checks passed. npm accepted both 0.1.0 bootstrap uploads; registry visibility and clean registry installation are being verified.

- Packages: @upon-ai/sdk 0.1.0 and @upon-ai/mcp-server 0.1.0.
- License: MIT, copyright UponAI.
- Public contract SHA-256: `2dde3cce47c07123e8f88de2f6553c1ce527467ab364d0600e4a919fe2873654`.
- Generated SDK: 75 explicitly approved public operations.
- MCP: workspace discovery plus 18 curated read tools; three writes separately opt-in.
- Tests: 14 passed, including SDK failures/limits and real MCP protocol/HTTP boundaries.
- Consumer TypeScript checks passed, including rejected invalid inputs.
- Both packed tarballs installed together in an empty consumer directory; ESM and
  CommonJS dynamic imports passed and the MCP executable was present.
- Package metadata, declarations, branding and credential-pattern checks passed.
- npm audit: zero known vulnerabilities across package dependencies at this check.
- Application public projection/internal-route separation: six focused tests passed.
- GitHub main CI passed, including builds, protocol tests and clean packed-package installation.
- npm identity uponaiadmin and owner role in upon-ai verified with read-only requests.
  Bootstrap uploads were accepted from the IP-allowed server. The token cannot
  publish from GitHub-hosted runners or configure trusted publishers.

Artifacts are in `artifacts/`; `pack-report.json` records consumer checks.

## Remaining release gates

1. Public repository: `andrewcallsandy/uponai-developer-tools`. Private docs source:
   `andrewcallsandy/uponai-admin-public-api`. The npm-release environment is
   restricted to main, requires owner review, and holds the bootstrap NPM_TOKEN.
   GitHub main CI passed. Configure npm trusted publishers
   after the initial package publication.
2. Production public-contract deployment verified. The production endpoint
   https://api.upon-ai.com/openapi.json now returns 200 and matches the package
   contract after the owner deployed the API. This gate passed on 2026-10-14.
3. Authenticated production read checks passed for workspace discovery and agent
   listing through the SDK and a real MCP stdio client in workspace 1. Invalid
   credentials were rejected and MCP rejected a workspace outside its configured
   allowlist. Zero writes were performed. This does not establish server-side
   isolation across all operations or validate all 75 methods. Reproduce with
   `node scripts/verify-live-readonly.mjs <protected-token-file> <workspace-id>`.
4. Complete registry-install verification and configure npm trusted publishers
   through the signed-in owner account. The bootstrap release has no GitHub
   provenance. Verify a subsequent OIDC release before retiring the token.
5. Public docs now rebuild and deploy on main pushes, check for API-contract
   changes every 15 minutes, and refresh the assistant after deployment. Package
   versioning and npm releases remain reviewed releases; API changes do not
   automatically publish npm packages. Configure trusted publishing after bootstrap.

The public docs site is independent of internal app docs. The internal renderer,
helpers and links remain; canonical raw-spec download requires login. Public
projection excludes admin operations and privileged context headers. Documentation
filtering is not a substitute for runtime API authorization.

See RELEASING.md for exact npm/GitHub setup and ongoing release procedure.
