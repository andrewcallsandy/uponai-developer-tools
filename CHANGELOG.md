# Changelog

## 0.1.2 — 2026-10-17

- Optional `copy_project_id` on project creation duplicates the draft and active scenarios in the same workspace, with fresh run history and approvals.

- Native voice simulation SDK methods for projects, scenarios, estimates, sessions and improvement drafts.
- Typed simulation model choices for counterpart, scoring, scenario generation and improvement requests.
- Optional criterion evidence references for observed IVR and tool events, duration and call termination.
- Scoped MCP simulation summaries and optional estimate, launch and cancellation capabilities.
- Release coordinated with the production voice simulation API.

- Added ten candidate operations for IVR recording generation/download and approval-budgeted improvement runs, including typed review fingerprints and cumulative budgets.
- Added two scoped MCP improvement-run reads and an opt-in confirmed Stop action; approval and prompt content remain outside summary-only tools.

- recurring voice improvement schedule read/approve/pause SDK methods,
calendar and call-count trigger types, scoped MCP schedule summaries, and an
explicitly enabled pause tool.

- voice simulation projects expose `automation_mode` (`automated` or
`manual`); creation accepts it and the new `updateVoiceSimulationProject` SDK
method switches it. MCP project summaries include the mode; mode changes are not
an MCP write capability.

- version-2 voice simulation draft/proposal types, approved improvement
categories, hosted-handler definitions and example-test evidence, and session
configuration fingerprints. MCP summaries include fingerprints and approved
categories; handler code, configuration and endpoint-management writes remain
excluded.


## 0.1.1 — 2026-10-14

- Published through GitHub Actions with npm trusted publishing and build provenance.
- No API or runtime behavior changes from 0.1.0.

## 0.1.0 — 2026-10-14

- Typed SDK for 75 explicitly approved customer API operations.
- Scoped MCP with read-only defaults, filtered summaries, and explicit write capabilities.
- Local stdio and operator-managed single-principal HTTP transports.
- MIT licensing, package checks, clean-install checks, and protected publishing workflow.

Authenticated SDK and MCP read checks passed. Initial bootstrap uploads were
accepted by npm from the authorized server; GitHub release assets were installed
and live-tested. The bootstrap artifacts have no GitHub build provenance.
