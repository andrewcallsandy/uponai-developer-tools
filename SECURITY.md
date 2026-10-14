# Security boundary

SDK routes are generated only from the explicitly approved public contract. The
client supplies no raw-request API or custom authentication/context headers.
HTTPS origins, strict path segments, fixed methods, blocked redirects, bounded
responses, cancellation and limited GET retries prevent common client-side mistakes.
The API remains responsible for authorization, tenant isolation, body validation,
rate limits and persistence; this package does not replace those checks.

MCP authenticates before initialization, requires configured workspace IDs for
non-discovery tools, projects output through a small field allowlist, and enables
no writes by default. Unknown properties are rejected by strict tool schemas.
The HTTP mode uses a separate operator-managed bearer credential and binds only
to loopback. It is not OAuth and is not a multi-tenant hosted gateway.

Tests exercise these boundaries with synthetic credentials. Never use production
admin tokens for SDK/MCP integration tests. Do not log credentials, tool arguments,
raw API error bodies, or private records. Report security issues privately to the
UponAI repository owner; do not put secrets into public issues.

Dependency audit, clean-tarball installation and tests are required before release.
Live tenant-isolation checks and real customer-route validation need an isolated
workspace before declaring the release production-verified.
