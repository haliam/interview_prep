# **Top 25 Architecture Questions**

> **Purpose:** Senior architecture interview Q&A — service boundaries, distributed systems, data choices, resilience, Azure operations, and delivery — with trade-off-driven answers.

---

## **1) How do you decide between a monolith, a modular monolith, and microservices?**

**Answer:**

- Start with a modular monolith unless there’s a clear need for independent scaling/deployments.

- Microservices add tax: distributed data, ops, debugging, versioning, testing, latency.

- Choose microservices only when team/org boundaries, domain isolation, or scale demands outweigh that tax.

---

## **2) How do you choose between layered, vertical slice, and hexagonal/clean architecture (in .NET)?**

**Answer:**

- Layered: simple, but can encourage an anemic domain and tight coupling to frameworks.

- Vertical slice: ships features fast, keeps cohesion per use-case.

- Hexagonal/clean: isolates business logic from IO, improves testability and long-term change (ports/adapters, DI, app services).

---

## **3) How do you define service boundaries (or module boundaries) effectively?**

**Answer:**

- Use business capabilities and data ownership as the primary signal.

- Avoid “entity-based” services (UserService/OrderService) that become shared god services.

- Validate boundaries with change frequency, team ownership, and integration pain.

---

## **4) In a Clean Architecture codebase, what goes in Domain vs Application vs Infrastructure vs API?**

**Answer:**

- Domain: business rules/entities/value objects, domain events, invariants (no framework dependencies).

- Application: use-cases/orchestration, DTOs, validation, interfaces for IO (repos, clocks, messaging).

- Infrastructure: EF Core, external clients, Azure integrations; implements interfaces.

- API: transport concerns (FastEndpoints/controllers), auth, versioning, mapping, HTTP errors.

---

## **5) How do you decide sync vs async communication?**

**Answer:**

- Sync for low-latency, request/response user journeys with simple failure modes.

- Async for decoupling, smoothing load, resilience, and long-running workflows.

- Beware async complexity: ordering, duplicates, eventual consistency, debugging.

---

## **6) When do you use direct calls vs queues vs streams (Azure examples)?**

**Answer:**

- Direct calls: simplest, lowest latency, tighter coupling.

- Queues: work distribution, retries, backpressure, point-to-point commands (e.g., Azure Service Bus queues).

- Streams: event log + fan-out, replay, analytics (e.g., Event Hubs/Kafka).

- Pub/sub events: decouple producers/consumers (e.g., Azure Service Bus topics or Event Grid).

---

## **7) How do you design idempotent operations in systems with retries?**

**Answer:**

- Use idempotency keys and store request outcomes (dedupe table).

- Make writes deterministic: upserts, natural keys, and conflict detection.

- Ensure side effects (emails/payments) are protected with outbox/deduplication.

---

## **8) How do you prevent race conditions in high-throughput workflows (SQL + .NET)?**

**Answer:**

- Prefer optimistic concurrency with version checks (ETag/row version) for most cases.

- Use locks only where necessary and keep lock scope small.

- Serialize per-entity operations via partitioned queues when contention is high.

---

## **9) How do you handle distributed transactions without 2PC?**

**Answer:**

- Use sagas with compensating actions and explicit states.

- Use the outbox pattern (in the same SQL transaction) to atomically persist state + publish events.

- Design for eventual consistency with clear UX and reconciliation processes.

---

## **10) How do you get “exactly-once” or “effectively-once” processing?**

**Answer:**

- True exactly-once is rare; aim for effectively-once via idempotency + dedup.

- Track processing state and use deterministic message keys.

- Make consumers idempotent; tolerate duplicates and replays.

---

## **11) How do you choose between relational, document, key-value, and graph databases?**

**Answer:**

- Relational: strong consistency, joins, constraints, complex queries.

- Document: flexible schema, aggregate-oriented reads, horizontal scale.

- Key-value: ultra-fast lookups/caching.

- Decide by access patterns, consistency needs, and operational maturity.

---

## **12) CQRS: when is it worth it and what are common traps?**

**Answer:**

- Worth it when read/write models diverge heavily or read throughput dominates.

- Traps: premature complexity, duplicated logic, difficult consistency.

- Start lightweight (separate query paths) before full event-driven projections.

---

## **13) Event sourcing: when does it help (and when does it hurt)?**

**Answer:**

- Helps when auditability, temporal queries, and complex domain behaviour matter.

- Hurts when the team can’t support event versioning, replay, and operational complexity.

- Requires strong discipline: schema evolution, snapshots, projection correctness.

---

## **14) How do you design caching (client/CDN/L1/L2) without serving stale or wrong data?**

**Answer:**

- Cache only what’s safe; define TTL + invalidation strategy.

- Use request coalescing to avoid thundering herds.

- Separate per-user vs public cache keys; use ETags and cache-control correctly.

---

## **15) How do you scale a system: vertical vs horizontal, and what signals drive the decision?**

**Answer:**

- Vertical first for quick wins; horizontal for high availability and concurrency.

- Use metrics: saturation, latency, queue depth, error rate.

- Identify the bottleneck (DB, network, CPU, locks) before scaling blindly.

---

## **16) How do you handle hot partitions and uneven load distribution?**

**Answer:**

- Choose keys carefully; avoid natural hotspots.

- Use consistent hashing and partition rebalancing.

- Add a routing layer or shard-by-tenant/user to spread load.

---

## **17) How do you design multi-tenancy (isolation, noisy neighbours, compliance)?**

**Answer:**

- Decide isolation level: shared DB, schema-per-tenant, DB-per-tenant.

- Enforce quotas and rate limits; isolate heavy tenants.

- Consider compliance and data residency early; make tenant boundaries explicit.

---

## **18) How do you approach API gateways, BFFs, and edge concerns in Azure?**

**Answer:**

- Gateway for cross-cutting concerns: auth, rate limiting, routing, observability (e.g., Azure API Management).

- BFF for client-specific aggregation/shape (web vs mobile), reduces chatty clients.

- Avoid putting business logic in gateways; keep it in services/modules.

---

## **19) How do you design for resilience with external dependencies?**

**Answer:**

- Timeouts everywhere, retries with backoff+jitter, circuit breakers.

- Bulkheads to prevent cascading failure; graceful degradation.

- Make failure modes explicit and observable; run chaos/timeout drills.

---

## **20) What’s your strategy for SQL schema evolution and EF Core migrations in production?**

**Answer:**

- Use expand/contract (backward-compatible) migrations; avoid destructive changes in one step.

- Keep migrations small and reversible; deploy app changes before removing old columns.

- For heavy tables: online index strategies, background backfills, and careful lock/timeout planning.

---

## **21) How do you handle transactional messaging in .NET (outbox/inbox) on Azure?**

**Answer:**

- Use an outbox table + background publisher to Service Bus/Event Grid.

- Use an inbox/dedup store per consumer to handle at-least-once delivery.

- Make handlers idempotent and observable (dead-letter queues, poison message strategy).

---

## **22) Observability: what do you require before calling a system “production ready” (Azure)?**

**Answer:**

- Logs (structured), metrics, and traces with correlation IDs end-to-end.

- SLOs/SLIs tied to user outcomes; actionable alerts.

- Use Application Insights/OpenTelemetry where possible; runbooks, dashboards, and error budgets drive decisions.

---

## **23) How do you secure secrets and service-to-service access on Azure?**

**Answer:**

- Prefer Managed Identity over client secrets; use Key Vault for secrets/keys.

- Use least privilege (RBAC), rotate credentials, and audit access.

- Treat config as code; never store secrets in appsettings or repo.

---

## **24) How do you handle deployments and rollbacks on Azure (App Service/AKS) with minimal risk?**

**Answer:**

- Use health checks, readiness probes, and safe startup (no “migrate-on-start” surprises).

- Prefer canary/blue-green where possible; feature flags for risky behaviour changes.

- Define rollback triggers (SLO breach, error spikes) and keep migrations compatible.

---

## **25) How do you evolve schemas and deploy changes with zero/low downtime?**

**Answer:**

- Backward-compatible changes first; expand/contract migrations.

- Blue/green or canary deployments; feature flags for risky behaviour changes.

- Version contracts, support dual reads/writes temporarily, and monitor rollout.

---

## **Additional questions (non-duplicated)**

---

## **26) How do you apply the Principle of Least Surprises when designing components?**

**Answer:**

- Make contracts explicit (inputs/outputs, errors, performance characteristics).

- Follow conventions; avoid hidden side effects and “action at a distance”.

- Keep behaviour consistent across similar components and endpoints.

---

## **27) How do you avoid accidental complexity as the system scales?**

**Answer:**

- Start simple; evolve based on evidence (metrics, incidents, team throughput).

- Prefer “paved roads” (templates, standards, shared libraries) over bespoke patterns.

- Remove options that don’t pay rent (too many ways to do the same thing).

---

## **28) How do you handle partial failures and prevent cascading failure in distributed systems?**

**Answer:**

- Timeouts, bounded retries with backoff+jitter, circuit breakers, and bulkheads.

- Make failure modes explicit (degrade features, queue work, return partial data intentionally).

- Use DLQs/poison-message strategies and runbooks for recovery.

---

## **29) What’s your approach to detecting and isolating slow components/services?**

**Answer:**

- Define SLOs/SLIs; monitor percentiles (P95/P99) and saturation, not just averages.

- Use distributed tracing to find which dependency dominates latency.

- Validate with targeted load tests and regression budgets.

---

## **30) How do you design read-heavy workloads for maximum throughput?**

**Answer:**

- Use caching (CDN/edge + L2 + L1), read replicas, and carefully shaped endpoints.

- Precompute/denormalize read models where it’s cheaper than querying hot OLTP paths.

- Reduce payload sizes and avoid N+1 query patterns.

---

## **31) How do you handle high-volume write workloads?**

**Answer:**

- Batch and buffer writes; move non-critical writes to async pipelines.

- Partition/shard by tenant/user/time to reduce contention; serialize per-key.

- Optimize schema/indexes for write patterns; separate OLTP from analytics.

---

## **32) How do you design an audit-friendly system without killing performance?**

**Answer:**

- Emit immutable audit events and process/store them asynchronously.

- Keep audit storage separate from the OLTP hot path; use append-only patterns.

- Ensure integrity where required (hash chains/signing) and secure access.

---

### **Quick follow-ups (when the interviewer goes deeper)**

- Cost: team cognitive load, ops overhead, and “distributed tax”.

- Risk: blast radius, rollback strategy, and data correctness.

- Delivery: CI/CD maturity, testing strategy, and migration playbooks.

- Security: threat modelling, least privilege, secrets management.
