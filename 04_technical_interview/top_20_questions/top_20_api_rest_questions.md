# Top 20 API & REST Interview Questions

> **Purpose:** Senior-level API & REST interview Q&A — HTTP semantics, security, reliability, versioning, observability, and delivery — with concise, interview-ready answers.

---

## **1) What makes an API “RESTful” in practice (beyond “it uses HTTP”)?**

**Answer:**

- Resource-oriented URIs, standard HTTP methods, and clear representations.

- Correct use of status codes, caching semantics, and idempotency.

- Consistent contracts, evolvability, and layered architecture.

---

## **2) Explain idempotency and safety. Why do they matter?**

**Answer:**

- Safe: doesn’t change server state (GET, HEAD).

- Idempotent: repeated calls have the same effect (PUT, DELETE should be; POST usually isn’t).

- Enables retries, resilience, and predictable client behaviour.

---

## **3) How do you choose between POST, PUT, PATCH, and DELETE?**

**Answer:**

- POST: create subordinate resources or trigger non-idempotent processing.

- PUT: replace resource at a known URI (idempotent).

- PATCH: partial update (define semantics clearly).

- DELETE: remove resource (idempotent even if resource is already gone).

---

## **4) How do you design resource URIs and naming conventions?**

**Answer:**

- Use nouns (resources), not verbs: /orders/{id} not /getOrder.

- Use collections and sub-resources when there’s clear containment: /orders/{id}/items.

- Keep it consistent: pluralization, kebab-case, predictable filtering/pagination.

---

## **5) How do you design pagination, filtering, and sorting?**

**Answer:**

- Prefer cursor pagination for large/volatile datasets; offset for small/stable.

- Use query params: ?pageSize=&cursor=&sort=&filter=.

- Return metadata (next cursor/link) and make sorting/filtering explicit and validated.

---

## **6) How do you version an API, and how do you evolve it safely?**

**Answer:**

- Prefer additive, backward-compatible changes; deprecate with a policy.

- Versioning options: URL (/v1), header, or content negotiation; pick one and standardize.

- Use semantic contract changes + consumer-driven tests where possible.

---

## **7) What’s your approach to error handling and error payloads?**

**Answer:**

- Use standard HTTP codes + a consistent error schema (e.g., RFC 7807 Problem Details).

- Distinguish validation vs authorization vs not found vs conflict.

- Provide stable error codes/messages, correlation IDs, and actionable details.

---

## **8) Which HTTP status codes do you use most, and when?**

**Answer:**

- 200/201/204 success, 202 accepted (async), 304 caching.

- 400 validation, 401 unauthenticated, 403 unauthorized, 404 not found.

- 409 conflict, 412 precondition failed (ETag), 429 rate limit, 5xx server errors.

---

## **9) How do you implement caching correctly?**

**Answer:**

- Use Cache-Control, ETag/If-None-Match, Last-Modified where relevant.

- Cache only safe responses; avoid caching user-specific data without private/vary keys.

- Consider CDN edge caching for public resources.

---

## **10) How do you handle concurrency control (lost updates)?**

**Answer:**

- Use optimistic concurrency with ETags and If-Match for updates.

- Return 409 or 412 on conflicts; provide a merge/retry story.

- Avoid “last write wins” for critical resources.

---

## **11) How do you design authentication and authorization for APIs?**

**Answer:**

- AuthN: OAuth2/OIDC with JWT access tokens (or opaque tokens + introspection).

- AuthZ: scopes/roles + resource-level checks; least privilege.

- Never trust client claims without verification; audit and log decisions.

---

## **12) What are common API security risks and mitigations?**

**Answer:**

- OWASP API Top 10 themes: broken authZ, excessive data exposure, injection, SSRF, rate limiting.

- Validate input strictly; use parameterized queries; limit payload sizes.

- Use TLS everywhere, secret management, and safe CORS policies.

---

## **13) How do you design for rate limiting and abuse protection?**

**Answer:**

- Apply per-client/user/IP limits; return 429 + Retry-After.

- Use quotas and burst limits; protect expensive endpoints.

- Consider WAF/API gateway for centralized enforcement.

---

## **14) How do you ensure an API is observable in production?**

**Answer:**

- Structured logs, metrics (latency, error rate, saturation), and distributed tracing.

- Correlation/request IDs propagated end-to-end.

- SLOs/SLIs with alerts tied to user impact.

---

## **15) How do you design for reliability (timeouts, retries, backoff, circuit breakers)?**

**Answer:**

- Set timeouts everywhere; retries only for safe/idempotent operations.

- Use exponential backoff + jitter; avoid retry storms.

- Apply circuit breakers and bulkheads for dependencies.

---

## **16) How do you model async workflows in REST (long-running jobs)?**

**Answer:**

- Use 202 Accepted + a job resource (/jobs/{id}) to poll status.

- Provide webhook/callback options when possible.

- Make job status and error semantics explicit.

---

## **17) How do you prevent “chatty APIs” and over/under-fetching?**

**Answer:**

- Good resource design + embedding/expansion (?include=) carefully.

- Batch endpoints for specific cases; avoid “N+1” patterns.

- Consider GraphQL only when it solves a real client-driven selection problem.

---

## **18) How do you document and validate API contracts?**

**Answer:**

- Use OpenAPI/Swagger as the source of truth; generate clients where it helps.

- Validate requests/responses (schema, examples) in CI.

- Use consumer-driven contract tests for critical integrations.

---

## **19) How do you test APIs (unit/integration/e2e) and what do you mock?**

**Answer:**

- Unit: business logic and validators.

- Integration: HTTP layer + real serialization + DB boundaries (test containers if feasible).

- Mock external dependencies (payments, email) but keep contracts stable.

---

## **20) How do you handle backward compatibility and deprecation in a UK enterprise environment?**

**Answer:**

- Publish a deprecation policy (timelines, headers, changelog) and communicate early.

- Support parallel versions only when necessary; measure usage and migrate consumers.

- Automate compatibility checks and monitor breaking changes in real traffic.

---

### **Quick follow-ups (when the interviewer goes deeper)**

- HTTP semantics: idempotency, ETags, caching, content negotiation.

- Security: authZ correctness, input validation, rate limiting, OWASP API risks.

- Reliability: retries/backoff, timeouts, circuit breakers, async jobs.

- Delivery: OpenAPI, contract testing, observability, SLOs.
