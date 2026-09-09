# AI Software Engineer Roadmap — 12 Weeks

Living tracker: check items off as you complete them. Background and
rationale for these choices live in [market-research.md](market-research.md);
AI-specific interview drills live in [ai-interview-prep.md](ai-interview-prep.md).

## Effort allocation
- 40% Software engineering + cloud
- 30% LLM / RAG / agents
- 15% System design + AI architecture
- 10% Coding interview
- 5% ML theory

## Stack to standardize on
Python · FastAPI · PostgreSQL + pgvector · Redis · OpenAI + Anthropic APIs · LangGraph ·
AWS · Docker · GitHub Actions · Pytest · RAGAS/LangSmith for eval

---

## Week 1 — Baseline & setup
- [ ] Audit current level: Python, SQL, Git, Linux, Docker, cloud, ML, LLM basics
- [ ] Set up dev environment: Python 3.x, Docker, AWS free-tier account, GitHub repo structure for portfolio
- [ ] Skim all target job postings again — note recurring keywords to check off later

## Weeks 2–3 — Software engineering foundation
**Python (production-level, not notebooks):** OOP, typing, decorators, generators, async/await,
exceptions, pytest, packaging, logging, config management.
**Backend:** FastAPI, REST, Pydantic, PostgreSQL, SQLAlchemy, auth basics.
**Engineering hygiene:** Git/GitHub, Docker, CI basics (GitHub Actions), unit + integration tests.

- [ ] Python production fundamentals covered
- [ ] FastAPI + PostgreSQL + SQLAlchemy basics covered
- [ ] Git/Docker/CI hygiene covered

**Project 1 — Production AI API skeleton**
FastAPI → PostgreSQL → Redis → Docker → pytest → GitHub Actions. No LLM yet — this proves the
engineering foundation. Should demonstrate: Python + FastAPI + PostgreSQL + Docker + tests +
CI/CD + AWS deploy.

- [ ] Project 1 built and deployed

## Week 4 — ML fundamentals
Vectors/matrices/probability basics, regression, classification, clustering, train/val/test,
overfitting, precision/recall/F1, embeddings conceptually, NumPy/Pandas/scikit-learn, basic PyTorch.
Don't go deeper than needed to read a paper abstract and reason about a model choice.

- [ ] Core ML concepts covered

**Mini-project:** small ML pipeline (dataset → train → eval → FastAPI endpoint → Docker). Half-week
effort — this is the lowest-priority phase.

- [ ] Mini ML pipeline built

## Weeks 5–6 — LLM application engineering
Tokens, context windows, structured outputs/JSON schema, function/tool calling, streaming,
temperature, latency/cost tradeoffs, retries/fallbacks. Work with OpenAI + Anthropic APIs directly
(no framework yet).

- [ ] Core LLM API concepts covered

**Project 2 — Multi-model AI backend**
Router across OpenAI/Anthropic/one open model. Implement retries, fallbacks, streaming, token/cost
tracking, structured outputs, logging.

```
        ┌── OpenAI
Request ┼── Claude          → Model Router → FastAPI
        └── Local model
```

- [ ] Project 2 built (router + retries/fallbacks + streaming + cost tracking)

## Weeks 7–8 — RAG engineering
Document parsing (PDF/HTML/Markdown) → chunking → embeddings → PostgreSQL+pgvector → hybrid
search (BM25 + vector) → reranking → context construction → citations.
Evaluation: retrieval precision/recall, groundedness, hallucination checks, RAGAS.

- [ ] RAG pipeline concepts covered end-to-end

**Project 3 — Enterprise RAG platform** (flagship project)

```
Documents (PDF/DOCX/HTML/MD) → Ingestion Pipeline → Chunking → Embeddings
  → PostgreSQL/pgvector → Hybrid Retrieval → Reranker
  → Context Builder → LLM → Answer + Sources
```

Add auth, evaluation, monitoring, tests, Docker, CI/CD.

- [ ] Project 3 built (flagship — full pipeline + auth + eval + monitoring + CI/CD)

## Weeks 9–10 — Agentic AI
Tool/function calling, planning, orchestration, state, memory, multi-step workflows,
human-in-the-loop, guardrails, MCP basics. Learn **one framework deeply: LangGraph**.

- [ ] Agentic AI concepts covered
- [ ] LangGraph fundamentals covered

**Project 4 — AI research/decision agent**

```
User → Supervisor ┬→ Search ┐
                   ├→ RAG    ├→ Analyst → Verification → Final Report
                   └→ SQL   ┘
```

Add tool calling, RAG, web/API integration, SQL, memory/state, evaluation, human approval, tracing.

- [ ] Project 4 built (supervisor + tool routing + verification + tracing)

## Week 11 — Production & cloud (compressed)
AWS essentials: IAM, S3, Lambda, ECS/Fargate, RDS, CloudWatch, Bedrock. Deploy Project 3 or 4
to AWS with Docker, basic Terraform, CI/CD via GitHub Actions, logging/monitoring/secrets.
Quality→Latency→Cost→Reliability tradeoff framing for AI systems specifically.

- [ ] AWS essentials covered
- [ ] Project 3 or 4 deployed to AWS with Terraform + CI/CD + monitoring

## Week 12 — System design + interview sprint

**System design practice (verbal, 30 min each):** see
[ai-interview-prep.md](ai-interview-prep.md) for the full scenario list and
framework (requirements → architecture → APIs → data model → model choice →
retrieval → scaling → caching → security → monitoring → evaluation → cost →
failure modes).

- [ ] Ran through all 5 system-design scenarios out loud

**Coding:** 50–80 well-understood LeetCode Easy/Medium (arrays, hash maps, trees, graphs,
BFS/DFS, binary search) — depth over volume.

- [ ] 50–80 LeetCode problems done and understood

**AI interview questions:** see [ai-interview-prep.md](ai-interview-prep.md) for the full list
(hallucination reduction, RAG vs fine-tuning, evaluation, latency/cost, provider outage handling,
prompt injection, embedding model selection).

- [ ] Crisp answers ready for all AI interview questions

**Behavioural (STAR stories):** hard technical problem, teammate disagreement, production
incident, project failure, ambiguity, stakeholder communication, time pressure, technical
trade-off. (See `02_hhrr_interview/03_star_behavioural_stories.md`.)

- [ ] STAR stories prepared for all 8 scenarios

---

## What to deliberately skip in this 3-month window
- Deep mathematics beyond what's listed in Week 4
- Training an LLM from scratch
- Learning every agent framework (LangChain/CrewAI/AutoGen/Semantic Kernel) — LangGraph only
- Becoming a React expert — enough for a demo UI is enough
- Kubernetes depth — fundamentals only, mention in interviews, don't operate a cluster

## Portfolio at the end of 12 weeks
1. **Production AI API skeleton** — engineering foundation
2. **Multi-model AI backend** — LLM integration, resilience, cost/latency
3. **Enterprise RAG platform** — flagship project
4. **AI research/decision agent** — agentic orchestration

- [ ] All 4 projects have: README, architecture diagram, tests, Docker, CI/CD
- [ ] Projects 3 & 4 have an evaluation dataset with measured metrics
- [ ] Project 4 (or a combined final system) has: API documentation, cost
      analysis, security considerations, design decisions write-up, demo video

This is what carries every interview conversation.
