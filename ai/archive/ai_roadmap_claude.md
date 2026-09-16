# Interview Roadmap — Forward Deployed Engineer, AI & Agentic Engineering (Kyndryl, Band 8)

**Profile:** 5+ yrs .NET senior engineer, 0 hands-on AI. **Timeline:** 4 weeks. **Strategy:** you already have the SDLC/production-engineering credibility the JD wants ("write production-grade services with solid engineering practices"). The gap is *practical* AI-engineering fluency. Close it with one project, built incrementally, that you can walk through confidently in the interview.

## The Project: "SupportOps" — AI Ticketing Assistant
An agent that triages support tickets: classifies them, looks up similar past tickets/docs (RAG), calls tools (create ticket, assign, escalate, check SLA), and streams a response — with memory across a conversation. Small enough to finish in a month, big enough to touch every JD bullet.

**Stack:** Python, FastAPI, OpenAI + Anthropic SDKs directly (Week 1), LangGraph (Week 2), a vector store (pgvector or Chroma) + Postgres (Week 3), basic OpenTelemetry (Week 4 stretch).

---

## Week 1 — Raw API Fundamentals (no framework)
Goal: be able to explain *why* frameworks exist by having built without one first.

- [ ] Call OpenAI and Anthropic `/messages`/`/chat/completions` directly (httpx or SDK) — same prompt, compare outputs
- [ ] **Structured output**: force JSON via `response_format`/tool-forcing; validate with Pydantic; handle malformed JSON gracefully
- [ ] **Function/tool calling**: define 2 tools (`create_ticket`, `check_sla`) as JSON schemas; parse tool_use blocks; execute; return tool results in the next turn (the full loop, not just the call)
- [ ] **Streaming**: SSE stream back to a client; understand token-by-token vs event-based streaming
- [ ] **Context window management**: count tokens (tiktoken), truncate/summarize a growing conversation, explain sliding window vs summarization vs RAG-as-memory
- [ ] **Params**: temperature, top_p, max_tokens — when you'd set each for a support-triage use case (low temp, deterministic)
- [ ] **Reliability**: retries with backoff, timeout handling, fallback model (Anthropic → OpenAI on failure), rate-limit handling
- [ ] **Cost/latency tradeoffs**: model tiering (small model for classification, large for generation), caching identical requests, streaming to reduce perceived latency

**Deliverable:** a FastAPI endpoint `/triage` that classifies a ticket, calls a tool, returns structured JSON — built with raw SDK calls, no framework.

## Week 2 — Agentic Loop + MCP
Goal: rebuild Week 1's loop with a framework, and understand what MCP standardizes.

- [ ] Rebuild the tool-calling loop in **LangGraph** (state graph: classify → retrieve → decide tool → act → respond)
- [ ] Add a real **local tool server** — expose `create_ticket`/`check_sla`/`search_kb` as an **MCP server**, have the agent call it over MCP instead of hardcoded functions. This directly hits "MCP (Model Context Protocol)" in required skills.
- [ ] Add conversation **memory**: short-term (running summary in state) vs long-term (store resolved-ticket outcomes, retrieve later)
- [ ] Add a second agent behavior: escalation loop (agent re-tries with more context if confidence is low) — this is your "certain behaviour" demo
- [ ] Be ready to explain LangGraph vs CrewAI vs AutoGen vs OpenAI Agents SDK vs Google ADK — at a conceptual level (nodes/edges/state vs role-based crews vs conversable agents) even without hands-on in all of them

**Deliverable:** same triage flow as Week 1, now graph-based, tools served over MCP, with basic memory and a retry/escalation behavior.

## Week 3 — RAG + Data Layer
Goal: ground the agent in real data, touch both DB types the JD names.

- [ ] Stand up **Postgres** (tickets, users, SLAs — relational) + **pgvector** or Chroma (embedded past-ticket resolutions + docs)
- [ ] Build the RAG pipeline: chunk → embed → store → retrieve (top-k) → inject into prompt → cite source
- [ ] Optional stretch: a tiny **Neo4j** graph (ticket → category → related tickets) and one query showing when graph beats relational (e.g. "find tickets like this one, 2 hops of similarity")
- [ ] Add **Docker Compose** for the whole stack (FastAPI + Postgres + vector DB) — matches "Docker for building and running AI applications"
- [ ] Write a couple of real tests (unit test the tool-calling parser, integration test the `/triage` endpoint) — ties back to your CI/CD strength

**Deliverable:** agent now retrieves similar past tickets/docs before answering; runs via `docker compose up`.

## Week 4 — Governance, Observability, Polish + Mock Interviews
- [ ] Add basic **OpenTelemetry** tracing around the agent loop (span per tool call, per LLM call) — even a minimal console exporter is enough to talk credibly about it
- [ ] Skim **OPA/Rego** basics: write one toy policy (e.g. "agent cannot auto-close tickets above priority X") — you don't need mastery, just to show you understand policy-as-code as a guardrail pattern
- [ ] Write a 1-page **architecture diagram + README** for SupportOps — this becomes your portfolio artifact and interview whiteboard script
- [ ] Prepare **3 STAR stories** bridging .NET experience → this role:
  - A production incident you diagnosed/fixed (→ "how well it holds up once people are using it")
  - A time you translated a vague business ask into a technical design (→ "translate business challenges into technical solutions")
  - A time you worked closely with an infra/platform team without owning their layer (→ "work hand-in-hand with platform engineers... without owning that infrastructure")
- [ ] Rehearse explaining SupportOps end-to-end in under 5 minutes, then be ready to go deep on any layer when probed

---

## Question 5 Deep-Dive Cheat Sheet (their stated focus areas)
| Topic | One crisp answer you should be able to give |
|---|---|
| Tokens/context window | Cost & limit unit; context = conversation + retrieved docs + system prompt, all competing for the same budget |
| Structured outputs | Prefer tool-forcing/JSON schema over prompting "return JSON"; always validate with Pydantic; handle repair/retry |
| Function/tool calling | Model proposes call → you execute → you return result as a new message → model continues. Not magic, it's a loop |
| Streaming | SSE/chunked; improves perceived latency; complicates structured-output parsing (buffer until valid JSON) |
| Temperature | Low (0–0.3) for classification/extraction/tool use; higher for open-ended generation |
| Latency/cost tradeoffs | Model tiering, caching, parallel tool calls, smaller context via RAG instead of stuffing history |
| Retries/fallbacks | Exponential backoff, circuit breaker to a second provider, idempotent tool calls |
| Context/memory management | Short-term (buffer/summary) vs long-term (vector store) vs working memory (agent state in LangGraph) |
| MCP | Standard protocol so tools/resources are portable across agent frameworks instead of bespoke per-framework integrations |

## Logistics Reminders
- This is a **Forward Deployed Engineer**: expect questions on client-facing delivery, ambiguity, and "own it in production" — not just algorithms. Lean on your 5 years of shipping .NET systems.
- Have SupportOps **on GitHub**, deployable in one command, with a clear README — likely to be asked to share your screen and walk through real code.
- Prepare 2–3 questions for them: how they scope FDE engagements, how platform vs FDE teams split ownership, what "production-grade" means for their current AI stack.
