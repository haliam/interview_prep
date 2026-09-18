# Kyndryl FDE — AI & Agentic Engineer: Definitive 4-Week Roadmap

**Role:** Forward Deployed Engineer — AI & Agentic Engineer (Kyndryl, Band 8, London)
**Profile:** 5+ years senior .NET/architecture/consulting engineer, new to hands-on AI engineering.
**Timeline:** 4 weeks, intensive (~40h/week).
**Strategy:** You already have the production-engineering and client-delivery credibility this JD wants. The gap is hands-on AI/agentic fluency. Close it with **one capstone project, built incrementally**, that hits every JD bullet and gives you a single confident end-to-end story for the interview — rather than presenting yourself as a junior AI engineer starting from zero.

---

## The Capstone: "SupportOps" — AI Ticketing/Support Agent

One production-style system, built week over week, not four disconnected tutorials.

```text
User
 │
 ▼
FastAPI ──► LangGraph Agent
              │
       ┌──────┼─────────┐
       ▼      ▼         ▼
     RAG    MCP Tools  Memory
       │      │
 Vector DB   Ticketing/SLA API (mock)
              │
          PostgreSQL

Cross-cutting: Docker · Observability · Guardrails · Evaluation · Tests
```

**Example use case:** *"A customer's ticket says the checkout API is timing out for EU users — has this happened before, what's the SLA, and should this auto-escalate?"*

The agent should: classify the ticket → retrieve similar past tickets/docs via RAG → call deterministic tools (check SLA, search KB, create/escalate ticket) via MCP → require human approval before any state-changing action (escalate, close, refund-equivalent) → stream the response → record traces, latency, token usage, and tool calls → apply a guardrail/policy check before acting.

**Senior principle to internalize and be able to state in the interview:** the LLM decides *how* to use capabilities; it never becomes the source of truth for transactional/business-critical state. Payments, SLAs, ticket status, and permissions stay deterministic.

---

## Week 1 — Raw API Fundamentals + Engineering Foundation

**Goal:** be able to explain *why* agent frameworks exist by having built the loop without one first, on top of solid engineering hygiene.

**Learn**
- Tokens, context windows, model selection, cost/latency tradeoffs, temperature/top_p/max_tokens (when to set each — low temp for classification/extraction, higher for open-ended generation).
- Structured outputs: prefer tool-forcing/JSON-schema over "please return JSON"; validate with Pydantic; handle repair/retry on malformed output.
- Function/tool calling as a loop: model proposes a call → you execute it → you return the result as a new message → model continues. Not magic.
- Streaming (SSE/token vs event-based) and why it complicates structured-output parsing (buffer until valid JSON).
- Context/memory management: sliding window vs summarization vs RAG-as-memory.
- Reliability: retries with backoff, timeouts, fallback model (Anthropic → OpenAI on failure), rate-limit handling, idempotency.
- Python engineering hygiene at production level: typing, async/await, exceptions, pytest, logging, config/secrets management.

**Build**
- Call OpenAI and Anthropic APIs directly (no framework) — same prompt, compare outputs.
- Define two tools as JSON schemas (`create_ticket`, `check_sla`); parse tool-use blocks; execute; return results; run the full loop.
- FastAPI endpoint `/triage`: classifies a ticket, calls a tool, returns validated structured JSON.
- Unit tests for the tool-calling parser and the endpoint.

**Interview prep**
- Explain an LLM application to a senior engineer, in plain terms.
- Why structured output instead of parsing free text?
- How do you control hallucinations? How do you reduce token cost/latency?
- When should an application *not* use an LLM?

**Deliverable:** `/triage` endpoint built with raw SDK calls, no framework, with tests.

---

## Week 2 — Agentic Loop + MCP + Alternative Frameworks Awareness

**Goal:** rebuild Week 1's loop as a real agent graph, and understand what MCP standardizes and why it matters for enterprise tool exposure.

**Learn**
- LangGraph: state graphs, nodes/edges, routing, tool execution, checkpointing, human-in-the-loop.
- Short-term memory (running summary in state) vs long-term memory (store resolved-ticket outcomes, retrieve later).
- Agent vs workflow — know when an agent is over-engineering.
- MCP architecture: client/server model, resources vs tools vs prompts, tool schemas, authentication/authorization.
- **Critical senior/security point:** an MCP tool being *callable* must not imply automatic permission to *execute* the underlying business operation — permission and capability are separate layers.
- Conceptual (not hands-on) fluency in the framework landscape: LangGraph vs CrewAI vs AutoGen vs OpenAI Agents SDK vs Google ADK vs Semantic Kernel — nodes/edges/state vs role-based crews vs conversable agents vs Microsoft's orchestration model. You need to name the tradeoffs, not implement all of them.

**Build**
- Rebuild the tool-calling loop in LangGraph (classify → retrieve → decide tool → act → respond).
- Stand up an MCP server exposing `search_kb`, `check_sla`, `create_ticket`, `escalate_ticket` — connect the LangGraph agent to it over MCP instead of hardcoded functions.
- Add memory (short-term + long-term) and a second agent behavior: an escalation/retry loop when confidence is low.
- Add a tool-permission policy stub: the agent can *call* `escalate_ticket` but the action requires a human-approval gate before it executes.

**Interview prep**
- MCP vs direct function calling — why use MCP at all?
- MCP's security model; how would you expose enterprise APIs to agents safely?
- Why LangGraph over the alternatives, for this use case?
- How do you prevent infinite loops / manage agent state? When would you use multiple agents?

**Deliverable:** graph-based agent, tools served over MCP, with memory, retry/escalation behavior, and a first permission gate.

---

## Week 3 — RAG, Data Layer, Docker, and Guardrails (pulled forward)

**Goal:** ground the agent in real data, and — because the timeline is compressed — start governance now rather than leaving it entirely to week 4.

**Learn**
- Embeddings, chunking strategies, metadata filtering, hybrid search (BM25 + vector), reranking, context construction with citations.
- RAG failure modes and evaluation: retrieval precision/recall, groundedness, hallucination checks (RAGAS-style thinking, even if you don't run the full framework).
- PII/data privacy basics, prompt injection (direct and indirect), tool poisoning, excessive agency — enough to reason about each, not a security specialization.

**Build**
- Postgres (tickets, users, SLAs — relational) + pgvector or Chroma (embedded past-ticket resolutions + docs).
- RAG pipeline: chunk → embed → store → retrieve (top-k) → inject into prompt → cite sources.
- Small evaluation set (20–30 question/answer pairs) to sanity-check retrieval quality.
- Docker Compose for the full stack (FastAPI + Postgres + vector DB) — one-command `docker compose up`.
- First guardrail pass: PII filtering on inputs/outputs, an approval gate on any state-changing tool call, a basic prompt-injection test case or two.
- Integration test for the `/triage` endpoint end-to-end (retrieval included).

**Interview prep**
- Design a production RAG system; chunk-size tradeoffs; why did retrieval return irrelevant results; vector DB vs relational DB; how would you evaluate RAG quality.
- How would you prevent an agent from calling a dangerous tool, or acting on injected instructions hidden in retrieved content?

**Deliverable:** agent retrieves similar past tickets/docs before answering, runs via `docker compose up`, has a first guardrail layer.

---

## Week 4 — Observability, Governance, System Design, and Interview Simulation

**Goal:** finish the production story, rehearse the FDE-specific interview format, and consolidate.

**Learn / Build**
- OpenTelemetry: a span per LLM call and per tool call, even a minimal console exporter — enough to talk credibly about distributed tracing, latency/token/cost metrics, and agent execution traces.
- OPA/Rego basics: write one real toy policy (e.g., "agent cannot auto-close/escalate tickets above priority X without human approval") — policy-as-code as a guardrail pattern, not mastery.
- Consolidate the guardrail layer: audit trail (log every tool call + decision), a short red-team test list (prompt injection attempts, over-permission attempts) run against the agent.
- Architecture diagram + README explaining the business problem, architecture, and trade-offs made.

**System design practice** (verbal, ~30 min each, cover requirements → architecture → data → model → orchestration → APIs/tools → security → reliability → observability → evaluation → cost → deployment):
1. Enterprise RAG platform.
2. Customer-service/support agent (your own capstone, generalized).
3. Multi-agent workflow.
4. Legacy system modernized with an AI/agent layer.
5. Enterprise MCP/tool platform.

**FDE-specific scenario rehearsal** — this is what distinguishes this role from a generic AI engineering interview. Practice out loud, using the structure **clarify → identify business outcome → constraints → propose architecture → prototype → validate → measure → productionize → iterate**:
- Customer gives an ambiguous business problem.
- An existing legacy API must become agent-accessible.
- Customer wants a fully autonomous agent but governance/compliance rejects it.
- RAG quality is poor in front of the customer.
- LLM costs suddenly spike mid-engagement.
- The agent performs an incorrect or unauthorized action — what's the incident process?
- Customer wants to replace an existing application with an AI-first one.
- A production incident happens *during* a customer deployment.

**STAR stories to prepare (bridge .NET experience → this role):**
- A production incident you diagnosed and fixed → "how well it holds up once people are using it."
- A time you translated a vague business ask into a technical design → "translate business challenges into technical solutions."
- A time you worked closely with an infrastructure/platform team without owning their layer → "work hand-in-hand with platform engineers without owning that infrastructure."

**Coding practice (light — this role weighs system reasoning over algorithm depth):**
- One Python problem and one API/backend design problem per day; a debugging exercise every other day. Focus: arrays/hash maps → strings → trees/graphs → BFS/DFS → intervals → concurrency → API design. Don't grind hard LeetCode — depth of reasoning matters more than volume.

**Mock interviews before the real one:**
- 2–3 coding interviews (45 min).
- 2–3 AI/system-design interviews (60 min).
- 2 FDE/customer-scenario interviews (45 min).
- 1 full mock interview (2 hours, mixed).

**Deliverable:** fully observable, guarded, documented capstone; rehearsed system designs and FDE scenarios; 3 STAR stories ready; 10–15 minute demo script.

---

## Senior-Level Interview Checklist

Before interviewing, you should be able to explain each of these **without notes**:

**LLM fundamentals** — tokens/context/model selection/cost; structured outputs; tool calling as a loop; prompt/context engineering; hallucination mitigation.

**RAG** — embeddings → chunking → indexing → retrieval → reranking → generation; evaluation and failure modes; RAG vs fine-tuning.

**Agents** — agent vs workflow; state/memory (short-term buffer vs summary vs vector-store long-term vs LangGraph working state); LangGraph architecture; human-in-the-loop; multi-agent trade-offs; conceptual awareness of CrewAI/AutoGen/OpenAI Agents SDK/Semantic Kernel.

**MCP** — protocol architecture; tools/resources/prompts distinction; security and permissions model; MCP vs direct function calling.

**Production engineering** — FastAPI; Docker; CI/CD; authentication; retries/circuit breakers/idempotency; OpenTelemetry; cost/latency optimization; model tiering and caching.

**Enterprise AI governance** — prompt injection (direct/indirect); data leakage; excessive agency; tool poisoning; PII/privacy; human approval gates; auditability; policy-as-code (OPA/Rego); responsible AI.

**Senior/FDE dimension** — requirements discovery from an ambiguous ask; architecture decision-making and trade-offs; legacy modernization; customer communication; technical leadership; taking a prototype to production.

### Quick-reference cheat sheet

| Topic | One crisp answer |
|---|---|
| Tokens/context window | Cost & limit unit; context = conversation + retrieved docs + system prompt, all competing for the same budget |
| Structured outputs | Tool-forcing/JSON schema over prompted JSON; always validate with Pydantic; handle repair/retry |
| Function/tool calling | Model proposes → you execute → you return result as a new message → model continues |
| Streaming | SSE/chunked; improves perceived latency; complicates structured-output parsing (buffer until valid) |
| Temperature | Low (0–0.3) for classification/extraction/tool use; higher for open-ended generation |
| Latency/cost tradeoffs | Model tiering, caching, parallel tool calls, RAG instead of stuffing full history |
| Retries/fallbacks | Exponential backoff, circuit breaker to a second provider, idempotent tool calls |
| Memory | Short-term (buffer/summary) vs long-term (vector store) vs working memory (agent state) |
| MCP | Standard protocol so tools/resources are portable across frameworks instead of bespoke per-framework integration |
| Governance | Security → identity → data → tools → policies → human approval → audit → observability → evaluation |

---

## Final Deliverables (GitHub repo)

- `supportops/` — FastAPI service, LangGraph agent, MCP server, RAG pipeline, PostgreSQL + vector DB, Docker Compose.
- OpenTelemetry tracing, structured logging.
- Small evaluation dataset with measured retrieval metrics.
- Guardrail layer: PII filtering, approval gates, one OPA/Rego policy, a short red-team test list, audit trail.
- Architecture diagram + README explaining the business problem, architecture, and trade-offs.
- A 10–15 minute technical demo you can give unscripted.

**The interview story to rehearse:**
*"I'm a senior engineer who already knows how to design and deliver production systems and work directly with customers. I added the AI engineering layer — LLMs, RAG, agents, MCP, governance, and observability — and proved it with an end-to-end production-style system I can walk through at any layer."*

Position this way, not as a junior AI engineer trying to substitute framework knowledge for five years of engineering experience.

---

## What's deliberately cut, given 4 weeks

- Deep ML theory (regression/classification/clustering fundamentals) beyond what's needed to reason about a model choice in conversation.
- Training or fine-tuning a model from scratch.
- Hands-on depth in every agent framework — LangGraph only; the rest stay conceptual.
- A multi-project portfolio — one capstone, deep, instead of four shallow ones.
- Full AWS/cloud deployment depth — Docker Compose is the production story; cloud deployment (ECS/Lambda/Bedrock) is a stretch goal only if week 4 finishes early, not a requirement.
- Kubernetes — not mentioned, not needed at this depth.

If any interview stage reveals cloud deployment or a second framework matters more than expected, that's the first thing to add back — the capstone's modularity (MCP-exposed tools, containerized services) makes it extensible without a rebuild.
