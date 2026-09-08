# Top 20 API Concepts

> **Purpose:** The 20 core API concepts every senior engineer should explain fluently — what each one is, how to implement it, and the common gotchas.

---

## **1) Endpoint**

- **What it is**: a combination of **HTTP method + URL** that exposes a capability over a **resource** (e.g., GET /users/{id}).

- **How to implement**: define routes/handlers in your framework, validate inputs, and return consistent representations.

- **Gotchas**: thinking “endpoint = URL” (ignoring the method); verb-y URLs like /getUser.

---

## **2) HTTP Methods**

- **What it is**: verbs with standardized semantics (safe/idempotent) to operate on resources.

- **How to implement**: map intent to verbs: GET (read), POST (create or non-idempotent action), PUT (replace), PATCH (partial update), DELETE (remove).

- **Gotchas**: using POST for everything; unclear PATCH semantics.

---

## **3) Request–Response**

- **What it is**: a communication pattern where the client sends a **request** (headers, path, query, body) and the server returns a **response** (status, headers, body).

- **How to implement**: use middleware/pipelines for parsing, auth, validation, logging, and serialization.

- **Gotchas**: mixing responsibilities (business logic hidden in filters/middleware); inconsistent responses.

---

## **4) Status Codes**

- **What it is**: numeric codes that describe the outcome (2xx success, 4xx client error, 5xx server error).

- **How to implement**: return correct, consistent codes; e.g., 201 + Location on create, 204 with no body.

- **Gotchas**: using 200 for everything; returning a body with 204; using 500 for validation errors.

---

## **5) Authentication (AuthN)**

- **What it is**: verifying **who** the user/client is.

- **How to implement**: OIDC/OAuth2, tokens (JWT or opaque), mTLS (service-to-service), or sessions.

- **Gotchas**: confusing AuthN with AuthZ; storing tokens unsafely; not rotating credentials.

---

## **6) Authorization (AuthZ)**

- **What it is**: deciding **what the user/client is allowed to do** on a resource.

- **How to implement**: RBAC/ABAC, scopes/claims, resource-level checks (owner/tenant), and policies.

- **Gotchas**: BOLA (Broken Object Level Authorization): letting users access other users’ resources by ID.

---

## **7) Access Tokens**

- **What it is**: proof of access (typically a **Bearer token**) presented on each request.

- **How to implement**: send via Authorization: Bearer <token>; validate signature/issuer/audience/expiry for JWT.

- **Gotchas**: overly long-lived tokens; not validating aud/iss; leaking tokens in logs.

---

## **8) OAuth 2.0 / OpenID Connect**

- **What it is**: OAuth2 is authorization delegation; OIDC adds an identity layer on top of OAuth2.

- **How to implement**: use an IdP/Authorization Server; choose the right flow (Auth Code + PKCE for public clients).

- **Gotchas**: implementing OAuth yourself; confusing ID tokens with access tokens.

---

## **9) Rate Limiting**

- **What it is**: limiting the number of requests per time window (per IP, user, API key, tenant).

- **How to implement**: gateway or middleware (token bucket/leaky bucket); return 429 + Retry-After.

- **Gotchas**: global limits that punish everyone; not separating expensive endpoints.

---

## **10) Throttling**

- **What it is**: backpressure control that **slows down** during saturation (not only “rejecting”).

- **How to implement**: queues, concurrency limits, prioritization, and graceful degradation.

- **Gotchas**: confusing it with rate limiting; adding arbitrary delays without metrics.

---

## **11) Pagination**

- **What it is**: splitting results to avoid huge responses.

- **How to implement**: offset (?page=…) for small/stable data; cursor for large/volatile datasets.

- **Gotchas**: offset pagination on massive tables (slow); not defining a stable ordering.

---

## **12) Caching**

- **What it is**: reusing responses/data to reduce latency and load.

- **How to implement**: HTTP caching (Cache-Control, ETag) + L1/L2 caches (in-memory/Redis) as appropriate.

- **Gotchas**: caching user-specific data without varying by identity; no invalidation strategy.

---

## **13) Idempotency**

- **What it is**: repeating the same operation results in the same effect (critical for retries).

- **How to implement**: PUT/DELETE should be idempotent by design; for POST, use an idempotency key + deduplication.

- **Gotchas**: assuming “idempotent = same response”; the key property is the **side effect**.

---

## **14) Webhooks**

- **What it is**: HTTP callbacks (server → server) used to notify events.

- **How to implement**: receiving endpoint + verification (signature/HMAC), retries, idempotency, and a DLQ strategy.

- **Gotchas**: not authenticating the sender; not handling retries/duplicate deliveries.

---

## **15) API Versioning**

- **What it is**: evolving contracts without breaking consumers.

- **How to implement**: prefer backward-compatible changes; version via URL (/v1) or headers, and publish a deprecation policy.

- **Gotchas**: versioning everything out of fear; keeping unlimited versions with no retirement plan.

---

## **16) OpenAPI (Swagger)**

- **What it is**: a standard spec to document endpoints, schemas, auth, and examples.

- **How to implement**: generate and publish the spec; use it for contract validation and client generation.

- **Gotchas**: docs that drift from runtime behaviour; incomplete examples.

---

## **17) REST vs GraphQL**

- **What it is**: REST models resources over HTTP; GraphQL enables flexible field selection.

- **How to implement**: use REST for simpler contracts and edge caching; use GraphQL when response shapes vary significantly by client.

- **Gotchas**: using GraphQL to avoid designing APIs; N+1 queries and missing cost controls.

---

## **18) API Gateway**

- **What it is**: an entry point that centralizes cross-cutting concerns (auth, rate limiting, routing, WAF, observability).

- **How to implement**: managed or self-hosted gateway; policies per API/route; propagate correlation IDs.

- **Gotchas**: putting business logic into the gateway; making it a SPOF without HA.

---

## **19) Microservices**

- **What it is**: independently deployable services with clear ownership and ideally isolated data.

- **How to implement**: define boundaries by business capability; use explicit contracts, strong observability, and automated deployment.

- **Gotchas**: “microservices by fashion”; shared databases; cascading synchronous calls creating tight coupling.

---

## **20) Error Handling**

- **What it is**: a consistent strategy for communicating failures (HTTP code + stable payload).

- **How to implement**: use a standard schema (e.g., Problem Details / RFC 7807), internal error codes, and correlation IDs.

- **Gotchas**: variable/unpredictable messages; leaking sensitive info; not distinguishing 4xx vs 5xx.
