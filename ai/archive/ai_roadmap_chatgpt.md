Below is the roadmap I would use. I’ve deliberately made it **interview-first and implementation-heavy**, rather than a generic AI curriculum. The current Kyndryl role is explicitly about taking AI/agentic applications into production in customer environments, and Kyndryl’s current material strongly emphasises **governance, observability, secure agentic workflows and enterprise integration**. ([Indeed](https://uk.indeed.com/viewjob?jk=212457135a850241&utm_source=chatgpt.com))

I would use the ticketing platform as the capstone, but make the **AI/agentic layer** the centre of the project rather than building a conventional ticketing product.

# Kyndryl FDE — AI & Agentic Engineer

## Senior Interview Roadmap — 8 Weeks / ~40h per week

**Objective:** Become interview-ready for a senior FDE/AI Agentic Engineer role by combining existing senior .NET/architecture/consulting experience with production-level Python, LLM, agentic AI and AI-platform skills.

**Strategy:** ~60% hands-on engineering · ~20% system design/architecture · ~20% interview/coding/client scenarios.

------

## 1. Core Capstone — Intelligent Ticketing Agent Platform

Build one production-style system throughout the 8 weeks instead of isolated tutorials.

```text
User
 │
 ▼
FastAPI ──► LangGraph Agent
              │
       ┌──────┼─────────┐
       ▼      ▼         ▼
     RAG    MCP Tools  Analytics
       │      │
 Vector DB   Ticketing API
              │
          PostgreSQL
              
Cross-cutting:
Docker · CI/CD · Observability · Guardrails · Evaluation
```

**Example use case:**
A customer asks: *"Find me two tickets for Saturday under £100 and tell me the refund conditions."*

The system should:

1. Understand intent.
2. Retrieve relevant event/refund information using RAG.
3. Call deterministic business tools through MCP.
4. Return validated structured output.
5. Require approval for sensitive actions such as purchase/refund.
6. Record traces, latency, token usage and tool calls.
7. Apply policy/guardrails before executing actions.

**Senior principle:** Keep payments, inventory, pricing and other transactional rules deterministic. The LLM decides *how to use capabilities*; it does not become the source of truth.

------

# 2. Eight-Week Plan

## WEEK 1 — LLM Engineering Foundations + Python

**Learn**

- Tokens/context windows/model selection.
- System/user/tool messages.
- Temperature, determinism, latency and token cost.
- Structured outputs + JSON Schema.
- Pydantic validation.
- Function/tool calling.
- Prompt design, few-shot, constraints.
- Context/memory management.
- Hallucination and failure modes.
- Python async, typing, Pydantic, HTTP clients, pytest.

**Build**

- Python LLM client.
- Structured ticket-search response.
- Tool-calling loop from scratch.
- Retry/validation/error handling.
- Unit tests.

**Interview**

- Explain an LLM application to a senior engineer.
- Why structured output instead of parsing free text?
- How do you control hallucinations?
- How do you reduce token cost/latency?
- When should an application NOT use an LLM?

------

## WEEK 2 — FastAPI + RAG + Vector Search

**Learn**

- FastAPI architecture.
- Dependency injection, async APIs, validation.
- Embeddings.
- Chunking strategies.
- Metadata filtering.
- Vector similarity.
- Hybrid search.
- RAG failure modes.
- Retrieval evaluation.

**Build**

- FastAPI backend.
- PostgreSQL + pgvector **or another production-relevant vector DB**.
- Ingest event/refund/policy documents.
- Retrieval pipeline.
- RAG endpoint.
- Citation/source metadata.
- Evaluation dataset (~30–50 questions).

**Interview**

- Design a production RAG system.
- Chunk size trade-offs.
- Why did retrieval return irrelevant information?
- Vector DB vs relational DB.
- How would you evaluate RAG quality?

------

## WEEK 3 — LangGraph + Agent Architecture

**Learn**

- State graphs.
- Nodes/edges.
- Routing.
- Tool execution.
- Human-in-the-loop.
- Checkpointing.
- Short/long-term memory.
- Agent vs workflow.
- Single-agent vs multi-agent architecture.

**Build**

- LangGraph ticketing agent.
- Explicit state model.
- RAG node.
- Tool node.
- Routing/decision node.
- Human approval node.
- Persistent checkpoints.

**Also learn Semantic Kernel**

- Understand its orchestration model.
- Implement one small equivalent workflow.
- Be able to explain **LangGraph vs Semantic Kernel** and why you selected one.

**Interview**

- Why LangGraph?
- When is an agent over-engineering?
- How do you prevent infinite loops?
- How do you manage agent state?
- When would you use multiple agents?

------

## WEEK 4 — MCP + Enterprise Tool Integration

**Learn**

- MCP architecture.
- Client/server model.
- Resources vs tools vs prompts.
- Tool schemas.
- Authentication/authorisation.
- Tool permissions.
- MCP vs direct function calling.
- Security implications.

**Build**
Create an MCP server exposing:

- `search_events`
- `check_availability`
- `get_ticket`
- `reserve_ticket`
- `get_refund_policy`

Connect LangGraph → MCP → ticketing backend.

**Critical senior topic**
Understand why an MCP tool must not automatically imply permission to execute the underlying business operation.

**Interview**

- MCP vs function calling.
- Why use MCP?
- MCP security model.
- How would you expose enterprise APIs to agents?
- How would you prevent an agent from calling dangerous tools?

------

## WEEK 5 — Production AI Engineering

**Learn**

- Docker.
- CI/CD.
- Configuration/secrets.
- API authentication.
- Rate limiting.
- Retry/backoff.
- Timeouts/circuit breakers.
- Idempotency.
- Async jobs.
- Caching.
- Model fallback.
- Cost controls.

**Observability**

- OpenTelemetry.
- Distributed tracing.
- LLM/tool spans.
- Latency/token/cost metrics.
- Error rates.
- Agent execution traces.

**Build**
Dockerise the complete system.

Add:

- CI pipeline.
- OpenTelemetry.
- Structured logging.
- Agent/tool tracing.
- Metrics.
- Failure/retry handling.
- Authentication.

**Interview**
"Your agent works locally but fails intermittently in production. What do you investigate?"

------

## WEEK 6 — AI Security, Governance + Enterprise Architecture

**Learn**

- Prompt injection.
- Indirect prompt injection.
- Data leakage.
- Excessive agency.
- Tool poisoning.
- Secrets management.
- PII/data privacy.
- Human approval.
- Auditability.
- Guardrails.
- AI evaluation.
- Policy-as-code / OPA/Rego fundamentals.
- Responsible AI.

Kyndryl explicitly highlights policy-as-code, governance, privacy and guardrails for agentic systems. ([The Muse](https://www.themuse.com/jobs/kyndryl/forward-deployed-engineer-ai-agentic-engineer?utm_source=chatgpt.com))

**Build**
Add:

- Tool permission policy.
- PII filtering.
- Approval gate for purchase/refund.
- Prompt-injection tests.
- Audit trail.
- Basic OPA/Rego policy.
- Red-team test suite.

**Interview**
Design a governed enterprise agent for a bank/insurance company.

Be ready to discuss:
**security → identity → data → tools → policies → human approval → audit → observability → evaluation.**

------

## WEEK 7 — Senior System Design + FDE/Consulting

### System Design

Practise 5 designs:

1. Enterprise RAG platform.
2. Customer-service agent.
3. Multi-agent workflow.
4. AI application modernising a legacy system.
5. Enterprise MCP/tool platform.

For every design cover:

**Requirements → architecture → data → model → orchestration → APIs/tools → security → reliability → observability → evaluation → cost → deployment.**

### FDE scenarios

Practise:

- Customer gives an ambiguous business problem.
- Existing legacy API must become agent-accessible.
- Customer wants an autonomous agent but governance rejects it.
- RAG quality is poor.
- LLM costs suddenly increase.
- Agent performs an incorrect action.
- Customer wants to replace an existing application with AI.
- Production incident during customer deployment.

Your answer structure:

**Clarify → identify business outcome → constraints → propose architecture → prototype → validate → measure → productionise → iterate.**

This directly matches the FDE model described by Kyndryl: engineers work embedded with customers, build alongside users and own what they ship. ([Kyndryl](https://www.kyndryl.com/in/en/careers/hiring-areas-agentic-ai?utm_source=chatgpt.com))

------

## WEEK 8 — Interview Simulation

### Coding

Daily:

- 1 Python problem.
- 1 API/backend problem.
- 1 debugging exercise every 2 days.

Focus on:
**arrays/hash maps → strings → trees/graphs → BFS/DFS → intervals → concurrency → API design.**

Do not spend the week grinding difficult LeetCode. Senior backend/AI reasoning matters more.

### AI technical interview

Be able to whiteboard:

```text
LLM
 ↓
Structured Output
 ↓
Agent / Workflow
 ↓
Tool Calling
 ↓
MCP
 ↓
Enterprise APIs
 ↓
Data/RAG
 ↓
Governance
 ↓
Observability
 ↓
Production
```

### Final mock interviews

Perform at least:

- 3 × 45 min coding interviews
- 3 × 60 min AI/system-design interviews
- 2 × 45 min FDE/customer scenarios
- 1 × full 2-hour mock interview

------

# 3. Senior-Level Interview Checklist

Before interviewing, you should be able to explain **without notes**:

### LLM

- Tokens/context/model selection/cost.
- Structured outputs.
- Tool calling.
- Prompt/context engineering.
- Hallucination mitigation.

### RAG

- Embeddings → chunking → indexing → retrieval → reranking → generation.
- Evaluation and failure modes.

### Agents

- Agent vs workflow.
- State/memory.
- LangGraph architecture.
- Human-in-the-loop.
- Multi-agent trade-offs.

### MCP

- Protocol architecture.
- Tools/resources/prompts.
- Security and permissions.
- MCP vs function calling.

### Production

- FastAPI.
- Docker.
- CI/CD.
- Authentication.
- Reliability.
- OpenTelemetry.
- Cost/latency optimisation.

### Enterprise AI

- Governance.
- Privacy.
- Guardrails.
- Prompt injection.
- Policy-as-code.
- Auditability.
- Evaluation.

### Senior/FDE

- Requirements discovery.
- Architecture decisions.
- Trade-offs.
- Legacy modernisation.
- Customer communication.
- Technical leadership.
- Turning a prototype into production.

------

# 4. Final Deliverables

By the end, GitHub should contain:

- `ai-agent-ticketing/`
- FastAPI service
- LangGraph agent
- MCP server
- RAG pipeline
- PostgreSQL/vector database
- Docker Compose
- CI/CD
- OpenTelemetry
- Evaluation dataset
- Security/red-team tests
- OPA/Rego policies
- Architecture diagram
- ADRs explaining major decisions
- README explaining business problem + architecture + trade-offs
- 10–15 minute technical demo

**The interview story:**
*"I'm a senior software engineer/tech lead who already knows how to design and deliver production systems and work directly with customers. I added the AI engineering layer: LLMs, RAG, agents, MCP, governance and observability, and demonstrated it through an end-to-end production-style system."*

This is the positioning to rehearse—not presenting yourself as a junior AI engineer trying to replace five years of engineering experience with framework knowledge.

### One strategic point

I would **not start coding the capstone immediately**.

The first step should be to define its **exact architecture and scope**. We can make the project deliberately resemble something Kyndryl could deploy for a real customer, rather than a portfolio toy. Kyndryl's own current material stresses moving beyond POCs toward governed, observable, production agentic workflows. ([Kyndryl](https://www.kyndryl.com/us/en/artificial-intelligence?utm_source=chatgpt.com))

**Next I recommend we design the capstone itself:** requirements → use cases → architecture → repo structure → technology choices → 8-week incremental implementation plan. That will become the practical backbone of the roadmap.