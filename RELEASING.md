# UponAI package releases

The release candidates are `@upon-ai/sdk` and `@upon-ai/mcp-server`, under MIT,
Copyright (c) 2026 UponAI. Neither package has been published by this work.
The protected token authenticates as uponaiadmin, an owner of the npm organization
upon-ai (verified 2026-10-14). Read-only checks do not prove publish permission or
that the token meets npm two-factor requirements.

## Configured GitHub setup

The public repository is `andrewcallsandy/uponai-developer-tools`. Package metadata
points to it. Environment `npm-release` is restricted to main, requires review
by andrewcallsandy, and contains the encrypted bootstrap `NPM_TOKEN` secret.
The docs source is separate and private: `andrewcallsandy/uponai-admin-public-api`.
No npm publish workflow has been dispatched.

## Setup and initial publication procedure

1. Create `andrewcallsandy/uponai-developer-tools` and confirm its visibility.
   Public provenance requires an appropriate public source repository.
2. Run `node scripts/set-repository.mjs andrewcallsandy/uponai-developer-tools` to set package provenance metadata.
3. Commit and push the reviewed files only after owner authorization.
4. Create the GitHub environment `npm-release`, restrict it to the default branch,
   and require a release reviewer. Protect that branch with CI and code review.
5. For initial package creation only, store the existing protected token as the
   environment secret `NPM_TOKEN`. From this server, after creating the repository:

   ```bash
   gh secret set NPM_TOKEN --repo andrewcallsandy/uponai-developer-tools --env npm-release < /home/ubuntu/.config/uponai/npm-token
   ```

   Never put the token in a command argument, committed .npmrc, browser bundle,
   issue, or chat. The granular token needs package publishing rights for the
   upon-ai scope and must satisfy npm's current 2FA policy.
6. Release the filtered public API through the application's authorized release
   process. Run an isolated customer-workspace integration check. Internal admin
   documentation stays in the application; it is not an SDK generation input.
7. After release approval, run **Publish reviewed packages** from the default
   branch with channel `next` and bootstrap enabled. The workflow validates,
   packs, tests clean installations, checks production contract equality, then
   publishes SDK before MCP with public access and provenance.
8. In npm package settings for BOTH packages, configure Trusted Publishing:
   exact GitHub owner/repository, workflow `publish.yml`, environment `npm-release`.
   Subsequent releases use bootstrap=false. Remove the temporary GitHub secret
   and revoke the bootstrap token once OIDC publication is verified.

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
and activate the DocsGPT index. Automatic cross-repository delivery is pending
remote repository creation and production API promotion; no polling service is active.

References: [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/),
[npm scoped publishing](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages/).
