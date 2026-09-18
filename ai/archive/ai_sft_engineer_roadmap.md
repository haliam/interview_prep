# AI Software Engineer Roadmap



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
- Audit current level: Python, SQL, Git, Linux, Docker, cloud, ML, LLM basics.
- Set up dev environment: Python 3.x, Docker, AWS free-tier account, GitHub repo structure for portfolio.
- Skim all target job postings again — note recurring keywords to check off later.

## Weeks 2–3 — Software engineering foundation
**Python (production-level, not notebooks):** OOP, typing, decorators, generators, async/await,
exceptions, pytest, packaging, logging, config management.
**Backend:** FastAPI, REST, Pydantic, PostgreSQL, SQLAlchemy, auth basics.
**Engineering hygiene:** Git/GitHub, Docker, CI basics (GitHub Actions), unit + integration tests.

**Project 1 — Production AI API skeleton**
FastAPI → PostgreSQL → Redis → Docker → pytest → GitHub Actions. No LLM yet — this proves the
engineering foundation.

## Week 4 — ML fundamentals 
Vectors/matrices/probability basics, regression, classification, clustering, train/val/test,
overfitting, precision/recall/F1, embeddings conceptually, NumPy/Pandas/scikit-learn, basic PyTorch.
Don't go deeper than needed to read a paper abstract and reason about a model choice.

**Mini-project:** small ML pipeline (dataset → train → eval → FastAPI endpoint → Docker). Half-week effort — this is the lowest-priority phase.

## Weeks 5–6 — LLM application engineering
Tokens, context windows, structured outputs/JSON schema, function/tool calling, streaming,
temperature, latency/cost tradeoffs, retries/fallbacks. Work with OpenAI + Anthropic APIs directly
(no framework yet).

**Project 2 — Multi-model AI backend**
Router across OpenAI/Anthropic/one open model. Implement retries, fallbacks, streaming, token/cost
tracking, structured outputs, logging.

## Weeks 7–8 — RAG engineering
Document parsing (PDF/HTML/Markdown) → chunking → embeddings → PostgreSQL+pgvector → hybrid
search (BM25 + vector) → reranking → context construction → citations.
Evaluation: retrieval precision/recall, groundedness, hallucination checks, RAGAS.

**Project 3 — Enterprise RAG platform** (flagship project)
Ingestion pipeline → chunking → embeddings → pgvector → hybrid retrieval → reranker → context
builder → LLM → answer with sources. Add auth, evaluation, monitoring, tests, Docker, CI/CD.

## Weeks 9–10 — Agentic AI
Tool/function calling, planning, orchestration, state, memory, multi-step workflows,
human-in-the-loop, guardrails, MCP basics. Learn **one framework deeply: LangGraph**.

**Project 4 — AI research/decision agent**
Supervisor agent routing to Search / RAG / SQL tools → analyst step → verification →
final report. Add tracing and evaluation.

## Week 11 — Production & cloud (compressed)
AWS essentials: IAM, S3, Lambda, ECS/Fargate, RDS, CloudWatch, Bedrock. Deploy Project 3 or 4
to AWS with Docker, basic Terraform, CI/CD via GitHub Actions, logging/monitoring/secrets.
Quality→Latency→Cost→Reliability tradeoff framing for AI systems specifically.

## Week 12 — System design + interview sprint
**System design practice (verbal, 30 min each):**
- ChatGPT-like app
- Enterprise RAG for 10M documents
- AI customer-support agent
- Multi-agent research platform
- LLM evaluation platform

For each: requirements → architecture → APIs → data model → model choice → retrieval →
scaling → caching → security → monitoring → evaluation → cost → failure modes.

**Coding:** 50–80 well-understood LeetCode Easy/Medium (arrays, hash maps, trees, graphs,
BFS/DFS, binary search) — depth over volume.

**AI interview questions to have crisp answers for:**
- Reducing hallucinations in RAG; RAG vs fine-tuning
- Evaluating an LLM application; retrieval vs generation evaluation separately
- Reducing latency/cost; provider outage handling; prompt injection detection
- Embedding model selection

**Behavioural (STAR stories):** hard technical problem, teammate disagreement, production
incident, project failure, ambiguity, stakeholder communication, time pressure, technical
trade-off.

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

Each should have: README, architecture diagram, tests, Docker, CI/CD, and (for 3 & 4) an
evaluation dataset with measured metrics. This is what carries every interview conversation.
