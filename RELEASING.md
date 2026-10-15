# UponAI package releases

Packages: `@upon-ai/sdk` and `@upon-ai/mcp-server`, MIT, copyright UponAI.
Public source: `andrewcallsandy/uponai-developer-tools`. Public docs deploy from
`andrewcallsandy/uponai-admin-public-api` independently of internal app docs.

## Publishing setup

Both npm packages trust GitHub Actions from owner `andrewcallsandy`, repository
`uponai-developer-tools`, workflow `publish.yml`, environment `npm-release`.
The connections must allow **npm publish**. Stage-only permissions cannot run
this workflow. Publishing uses OIDC and provenance; no npm token is needed.
The GitHub environment requires owner review and limits releases to main.
Main requires passing CI and a pull request.

## Each release

1. Review the production public contract and explicit operation policy. Regenerate
   the SDK and review MCP exposure separately. New operations never automatically
   enter MCP. Production API promotion precedes package publication.
2. Update root and package versions together, the MCP dependency on the SDK,
   the MCP initialization version, examples, and CHANGELOG.md. Update the lockfile
   with `npm install --package-lock-only --ignore-scripts`.
3. Submit a PR. CI runs package checks, protocol tests, consumer type checks,
   and clean tarball installation. Validate representative affected operations
   in an isolated customer workspace; schema equality does not prove live behavior.
4. Merge passing changes. Dispatch **Publish reviewed packages** on main, choosing
   `next` or `latest`. Leave `resume` false for a new release. Approve the
   `npm-release` deployment review. The workflow verifies the production contract,
   publishes SDK before MCP, and checks registry artifact integrity.
5. npm may process accepted uploads for several minutes. The workflow waits up to
   ten minutes per package. Verify a clean registry install and run
   `npm audit signatures` to verify signatures and provenance before announcing.
6. Update public setup guides and their version badges. Their main-branch push
   rebuilds and deploys the docs and then refreshes the documentation assistant.

## Recovering a partial release

Do not blindly rerun publication after an accepted upload. npm versions are
immutable. First inspect the run and registry metadata for **both** packages.
If npm is still processing an upload, wait for it to become visible.

When the existing artifact is known and visible, explicitly dispatch with
`resume=true`. The workflow compares its SHA-512 against the newly packed
artifact and skips it only if bytes match. A mismatch or unknown registry state
stops the release before writes. Never remove the integrity check to force a
resume; investigate the build or prepare a new reviewed version instead.

## Automation boundaries

Docs rebuild on main pushes, check for approved API-contract changes every
15 minutes, and refresh the assistant after deployment. SDK/MCP version bumps
and npm publication remain reviewed releases, not automatic publication on every
API change. Keep package contract changes and public API releases coordinated.

## Bootstrap history

Version 0.1.0 was published from the IP-allowed deployment server with a temporary
npm token and has no GitHub provenance. Version 0.1.1 successfully validated both trusted
publishers. The GitHub NPM_TOKEN secret and protected local token file were removed.
npm rejected programmatic revocation with HTTP 403; the owner must revoke the old
bootstrap token through the signed-in npm account. Future releases do not use it.
