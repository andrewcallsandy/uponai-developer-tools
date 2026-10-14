# Release readiness — 2026-10-14

Status: locally validated release candidates; not published or live-integrated.

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
- GitHub workflow YAML parsed locally; workflows have not run on GitHub.
- npm identity uponaiadmin and owner role in upon-ai verified with read-only requests.
  No registry writes were performed; token publishing rights remain untested.

Artifacts are in `artifacts/`; `pack-report.json` records consumer checks.

## Remaining release gates

1. Public repository: `andrewcallsandy/uponai-developer-tools`. Private docs source:
   `andrewcallsandy/uponai-admin-public-api`. The npm-release environment is
   restricted to main, requires owner review, and holds the bootstrap NPM_TOKEN.
   Verify GitHub CI after the initial push. Configure npm trusted publishers
   after the initial package publication.
2. Deploy the approved application public-contract route. The production endpoint
   https://api.upon-ai.com/openapi.json currently returns 404; the release check
   correctly blocks publication. No application deployment was performed.
3. Validate representative operations and denied cross-workspace access with an
   isolated customer API credential. Mock tests do not establish live isolation.
4. Approve initial npm publication, verify registry installation, then configure
   trusted publishers for both packages and retire the bootstrap token.
5. Connect API promotion to docs contract sync, package release PRs, and assistant
   refresh after repository identities and deployment access are configured.

The public docs site is independent of internal app docs. The internal renderer,
helpers and links remain; canonical raw-spec download requires login. Public
projection excludes admin operations and privileged context headers. Documentation
filtering is not a substitute for runtime API authorization.

See RELEASING.md for exact npm/GitHub setup and ongoing release procedure.
