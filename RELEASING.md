# UponAI package releases

Packages: `@upon-ai/sdk` and `@upon-ai/mcp-server`, MIT, copyright UponAI.
Public source: `andrewcallsandy/uponai-developer-tools`. Public docs are hosted
from the separate private `andrewcallsandy/uponai-admin-public-api` repository.

## Initial release and trusted-publisher setup

The 0.1.0 bootstrap uploads were accepted by npm on 2026-10-14 from the authorized
server. The granular token is IP-restricted to that server, so GitHub-hosted
runners cannot use it. These initial packages do not carry GitHub provenance.
Do not loosen token IP restrictions just to use the bootstrap workflow.

Future releases use the protected `publish.yml` GitHub workflow with
`bootstrap=false`, npm OIDC, and provenance. Environment `npm-release` is
restricted to main and requires owner review. Main requires package CI.

The owner must configure a Trusted Publisher in npm Settings for **each** package:

- Provider: GitHub Actions
- Organization/user: `andrewcallsandy`
- Repository: `uponai-developer-tools`
- Workflow filename: `publish.yml`
- Environment: `npm-release`

npm rejected programmatic trust setup with the bootstrap token because tokens
that bypass 2FA cannot perform that action. Use the signed-in npm account.
After a successful OIDC release, remove the GitHub `NPM_TOKEN` environment secret
and revoke the temporary bootstrap token. Never store credentials in source or logs.

## Each release

Review changes to the explicit public contract and policy. Regenerate the SDK;
review MCP exposure separately. New operations never automatically enter MCP.
Update root/package versions together, the MCP dependency on @upon-ai/sdk, and
CHANGELOG.md; run `npm install --package-lock-only --ignore-scripts`.
Use a major version for breaking changes after 1.0; review pre-1.0 breaking changes
explicitly. Submit a version/changelog PR and require passing package checks.

Run `npm run check`, `npm run pack:release`, and `npm audit --audit-level=high`.
Validate against an isolated live customer workspace before approving publication.
The workflow's production-schema check proves schema equality, not live endpoint
behavior or authorization. API production promotion precedes package publication.
Dispatch the reviewed default-branch revision to `next`; verify clean registry
installation and representative operations before an explicitly approved stable
release. Record commit, contract hash, npm integrity, and validation results.

Do not rerun a partially successful release blindly: npm versions are immutable.
The publisher stops when either version exists. Inspect registry state, complete
or supersede the partial release under a reviewed recovery change, then verify
both packages. Never silently skip an existing version.

Update public guides with actual released versions, publish docs, then refresh
and activate the DocsGPT index. Docs deploy automatically on main pushes, check for approved production API
changes every 15 minutes, and refresh the assistant after deployment. Package
version bumps and npm releases remain reviewed operations; API changes do not
automatically publish new package versions.

References: [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/),
[npm scoped publishing](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages/).
