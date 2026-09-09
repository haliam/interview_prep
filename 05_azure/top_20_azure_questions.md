# Top 20 Azure Interview Questions

> **Purpose:** Senior-level Azure interview Q&A with **concrete, interview-ready** answers.
> **Focus:** Senior Azure signal — identity, networking, reliability, IaC, security, cost, observability, governance.

---

## **1) How do you choose between App Service, Container Apps, AKS, and Functions?**

**Answer:**

- App Service: simplest PaaS for web APIs; great DX and built-in ops.

- Container Apps: serverless containers + scaling/KEDA without managing Kubernetes.

- AKS: full Kubernetes control (complexity tax) when you truly need it.

- Functions: event-driven/serverless for bursts and integrations; watch cold start and state.

---

## **2) What’s your default approach to identity: Managed Identity vs secrets?**

**Answer:**

- Prefer Managed Identity for service-to-service/resource access.

- Use Key Vault for secrets/keys/certs; avoid secrets in config/repos.

- Enforce least privilege with RBAC and periodic access reviews.

---

## **3) How do you design Azure networking for a secure PaaS architecture?**

**Answer:**

- Use VNets, private endpoints/Private Link, and disable public network access where possible.

- Centralize egress with Azure Firewall/NAT Gateway; control outbound with UDRs.

- Use DNS properly (private DNS zones) and segment subnets by trust boundary.

---

## **4) How do you secure APIs in Azure (authn/authz + edge protection)?**

**Answer:**

- Use Entra ID (OIDC/OAuth2) for auth; validate tokens properly.

- Put an edge layer: API Management / Front Door / Application Gateway + WAF.

- Apply rate limiting, quotas, and request validation; log auth decisions.

---

## **5) How do you implement secrets, keys, and certificate lifecycle?**

**Answer:**

- Store in Key Vault; rotate automatically where possible.

- Use Key Vault references and Managed Identity access policies/RBAC.

- Monitor expiry/rotation, and audit access logs.

---

## **6) How do you approach Infrastructure as Code (Bicep vs Terraform) and environments?**

**Answer:**

- Pick one standard; avoid mixing without a strong reason.

- Use modules, naming standards, and parameterization per environment.

- Manage state carefully (TF state) and run policy checks in CI.

---

## **7) What governance controls do you put in place in Azure?**

**Answer:**

- Management Groups, Azure Policy, RBAC, tagging standards, budgets.

- Resource locks for critical assets; blueprint-like guardrails.

- Separate subscriptions by environment or risk boundary.

---

## **8) How do you design for high availability and regional resilience?**

**Answer:**

- Use zone redundancy when available; multi-region for higher RTO/RPO.

- Front Door/Traffic Manager for global routing; health probes.

- Practice failover and verify data replication/failback.

---

## **9) How do you define RTO/RPO and map them to Azure services?**

**Answer:**

- Start from business impact: acceptable downtime (RTO) and data loss (RPO).

- Choose storage/DB replication accordingly (geo-redundant, failover groups).

- Validate with DR drills and measured recovery times.

---

## **10) What’s your approach to observability (logs, metrics, traces) in Azure?**

**Answer:**

- Standardize on OpenTelemetry where possible; export to Application Insights.

- Correlate requests end-to-end with trace IDs; structured logs.

- Alert on SLOs (latency/error rate) not just resource utilization.

---

## **11) How do you secure and operate Azure SQL for production?**

**Answer:**

- Private endpoints, minimal public exposure, firewall rules, and auditing.

- Use least-privilege identities; prefer Entra ID auth when feasible.

- Backups, geo-replication/failover groups if needed, and performance tuning.

---

## **12) How do you handle scaling: vertical vs horizontal vs autoscale?**

**Answer:**

- Scale based on measured bottlenecks (CPU, memory, I/O, DB contention).

- Autoscale with safe limits; avoid runaway costs.

- Use queues to smooth bursts and protect downstream dependencies.

---

## **13) When do you use Service Bus vs Event Grid vs Event Hubs?**

**Answer:**

- Service Bus: reliable commands/work queues, ordering/sessions, DLQ.

- Event Grid: lightweight pub/sub for resource events and notifications.

- Event Hubs: high-throughput streaming ingestion and analytics pipelines.

---

## **14) How do you handle retries, poison messages, and DLQs in messaging?**

**Answer:**

- Retries with backoff+jitter; don’t retry non-transient errors blindly.

- Use DLQ and a reprocessing/runbook strategy.

- Make handlers idempotent; track message deduplication when needed.

---

## **15) What is your baseline security posture for Azure (Defender, policies, logging)?**

**Answer:**

- Enable Defender for Cloud where appropriate; remediate high-risk findings.

- Enforce policies: public endpoints, TLS, diagnostic settings, approved SKUs.

- Centralize logs and ensure retention meets compliance requirements.

---

## **16) How do you approach cost management (FinOps) in Azure?**

**Answer:**

- Use budgets, alerts, tagging, and cost allocation.

- Rightsize, reserved instances/savings plans, and autoscale with guardrails.

- Measure cost per transaction; avoid overprovisioning “just in case”.

---

## **17) What’s your strategy for CI/CD to Azure with minimal risk?**

**Answer:**

- Use staged deployments (dev/test/prod) with approvals and gates.

- Blue/green or canary where possible; feature flags for risky changes.

- Validate IaC + security scanning + smoke tests before promotion.

---

## **18) How do you manage compliance and data protection (UK/EU) in Azure?**

**Answer:**

- Data classification, encryption at rest/in transit, key management.

- Data residency, retention, and audit requirements mapped to services.

- Least privilege, logging, and incident response processes.

---

## **19) How do you troubleshoot production incidents in Azure?**

**Answer:**

- Start with symptoms and SLO impact; use dashboards and traces to narrow scope.

- Check deployment changes, dependency health, and throttling/quotas.

- Capture postmortems with action items (automation, alerts, runbooks).

---

## **20) What are common Azure failure modes you design around?**

**Answer:**

- Throttling/quotas, transient network errors, DNS issues, regional outages.

- Misconfigured identity/RBAC, secret expiry, and certificate rotation failures.

- Operational drift: missing diagnostics, inconsistent policies, manual changes.

---

### **Quick follow-ups (when the interviewer goes deeper)**

- Private Link and DNS design; egress control patterns.

- APIM policies, WAF, DDoS, and rate limiting.

- DR drills, chaos testing, and operational readiness.

- Policy-as-code, least privilege, and secrets hygiene.
