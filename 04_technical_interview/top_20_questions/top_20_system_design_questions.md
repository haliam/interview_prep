# Top 20 System Design Interview Questions

> **Purpose:** Senior system design interview Q&A — scoping, capacity, consistency, caching, sharding, messaging, security, observability, and delivery — with structured, interview-ready answers.

---

## **1) How do you start a system design interview?**

**Answer:**

- **Clarify functional scope, users/traffic, latency/availability targets, and constraints.**

- **Define MVP vs later phases and what “success” means (SLOs).**

- **Sketch high-level architecture first, then drill into bottlenecks.**

---

## **2) How do you estimate capacity (QPS, storage, bandwidth) and why does it matter?**

**Answer:**

- **Use back-of-the-envelope math for peak vs average and growth.**

- **Derive DB size, cache needs, partitions, and cost envelope.**

- **Use estimates to choose patterns (caching, async, sharding).**

---

## **3) How do you choose between monolith, modular monolith, and microservices?**

**Answer:**

- **Start with modular monolith unless independence requirements justify microservices.**

- **Microservices cost: data ownership, ops, debugging, versioning, latency.**

- **Choose boundaries by business capability and team ownership.**

---

## **4) How do you design APIs and data contracts to evolve safely?**

**Answer:**

- **Prefer backward-compatible changes; use explicit versioning/deprecation policy.**

- **Validate schemas/contracts in CI; document with OpenAPI.**

- **Keep domain boundaries clear; avoid leaking internal models.**

---

## **5) How do you handle consistency: strong vs eventual?**

**Answer:**

- **Strong consistency for critical invariants (money, inventory, auth decisions).**

- **Eventual consistency for scale/decoupling; design UX + reconciliation.**

- **Make invariants explicit and decide where the “source of truth” lives.**

---

## **6) How do you prevent race conditions and lost updates?**

**Answer:**

- **Use optimistic concurrency (ETags/version columns) and idempotent operations.**

- **Serialize per-entity work where needed (partitioned queues).**

- **Keep critical sections small; avoid distributed locks unless necessary.**

---

## **7) How do you design idempotency and safe retries?**

**Answer:**

- **Idempotency keys + dedup store; deterministic writes.**

- **Retry only safe/idempotent operations; use backoff+jitter.**

- **Protect side effects (emails/payments) via outbox/inbox patterns.**

---

## **8) How do you design for high availability and disaster recovery?**

**Answer:**

- **Start from RTO/RPO; map to replication/failover choices.**

- **Remove single points of failure (multi-AZ, redundant dependencies).**

- **Practice failover and verify recovery with drills.**

---

## **9) How do you handle partial failures and cascading failures?**

**Answer:**

- **Timeouts, circuit breakers, bulkheads, and graceful degradation.**

- **Queue work to absorb spikes; apply backpressure.**

- **Define failure budgets and runbooks; make failures observable.**

---

## **10) Caching: what do you cache, where, and how do you invalidate?**

**Answer:**

- **Cache read-heavy, stable data; avoid caching user-specific data incorrectly.**

- **Use TTL + event-driven invalidation when feasible.**

- **Prevent thundering herds with request coalescing/locking.**

---

## **11) How do you design a read-heavy system for throughput?**

**Answer:**

- **Use caching, read replicas, and precomputed read models (CQRS-lite).**

- **Reduce payloads; avoid N+1 access patterns.**

- **Optimize indexes and query shapes; measure P95/P99.**

---

## **12) How do you design a write-heavy system?**

**Answer:**

- **Batch writes, async ingestion, and partition/shard by key/time/tenant.**

- **Reduce contention (append-only logs, per-key sequencing).**

- **Separate OLTP from analytics; minimize secondary indexes.**

---

## **13) How do you choose the right database (relational vs document vs key-value vs graph)?**

**Answer:**

- **Choose by access patterns, transactions, constraints, and operational maturity.**

- **Relational for strong invariants/joins; document for aggregates/flexibility.**

- **Key-value for fast lookups/caching; graph for relationship traversals.**

---

## **14) How do you approach partitioning and sharding (and avoid hot partitions)?**

**Answer:**

- **Pick partition keys that spread load; avoid natural hotspots.**

- **Use consistent hashing and rebalancing strategies.**

- **Monitor skew and redesign keys when workload changes.**

---

## **15) Messaging: when do you use queues vs pub/sub vs streams?**

**Answer:**

- **Queues for commands/work distribution; pub/sub for events.**

- **Streams for high-throughput event logs + replay + multiple consumers.**

- **Accept at-least-once delivery; design idempotent consumers.**

---

## **16) How do you model long-running workflows (sagas)?**

**Answer:**

- **Use explicit state machines and compensating actions.**

- **Keep steps idempotent; store workflow state durably.**

- **Provide observability and manual repair paths.**

---

## **17) How do you design secure systems (auth, authorization, data protection)?**

**Answer:**

- **Least privilege, strong auth (OIDC/OAuth2), resource-level authorization.**

- **Encrypt in transit and at rest; secure secrets and key rotation.**

- **Threat model critical flows; validate input and limit blast radius.**

---

## **18) Observability: what do you measure and how do you debug production issues?**

**Answer:**

- **Metrics: latency/error/saturation; define SLOs/SLIs.**

- **Tracing for dependency breakdown; structured logs with correlation IDs.**

- **Runbooks + postmortems; fix root causes and add guardrails.**

---

## **19) How do you approach deployment strategy and safe rollouts?**

**Answer:**

- **CI/CD with staged environments, health checks, and automated smoke tests.**

- **Blue/green or canary; feature flags for risky behaviour changes.**

- **Rollback strategy includes data/schema compatibility.**

---

## **20) How do you avoid accidental complexity and keep the design maintainable?**

**Answer:**

- **Start simple and evolve based on evidence; avoid premature distributed systems.**

- **Establish standards and “paved roads” (templates, shared libs, docs).**

- **Keep boundaries clear; continuously pay down operational and domain debt.**

---

### **Quick follow-ups (when the interviewer goes deeper)**

- **Exactly-once vs at-least-once trade-offs; deduplication patterns.**

- **CAP/consistency decisions tied to business invariants.**

- **Cost/performance budgets and capacity planning.**

- **Multi-tenancy, compliance, and data residency.**
