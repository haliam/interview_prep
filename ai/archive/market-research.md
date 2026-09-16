# UK AI Software Engineer — Market Research

This is a **UK-market skills analysis**, not a generic "learn AI" roadmap. It's
the reference material behind [roadmap.md](roadmap.md) — read it once to
understand *why* the roadmap is shaped the way it is, and revisit it if you
want to re-check a prioritisation call.

Sample: 20 distinct UK job listings across LinkedIn, covering London,
Cambridge, Manchester, Nottingham, Hungerford, Burgess Hill, Melton and other
UK locations — junior/graduate through senior/lead, permanent and contract.
Broad enough to find the common denominator rather than basing the roadmap on
one company's stack.

## 1. The 20 UK roles analysed

| # | Employer / role | Main signal |
|:--:|----|----|
| 1 | Bruin — AI Software Engineer | Python, React/TS, LLMs, RAG, agents, AWS, production ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-software-engineer-at-bruin-4452744272?utm_source=chatgpt.com)) |
| 2 | SCG Midlands — AI Software Engineer | Go/Python, voice agents, RAG, APIs, function calling, testing ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-software-engineer-at-scg-midlands-4455448380?utm_source=chatgpt.com)) |
| 3 | Accenture — Junior AI Software Engineer | Python/Java/TS, LLM APIs, cloud, Docker, CI/CD, databases, RAG/agents ([LinkedIn](https://uk.linkedin.com/jobs/view/junior-ai-software-engineer-at-accenture-uk-ireland-4456017550?utm_source=chatgpt.com)) |
| 4 | Wave Group — AI Engineer | Python, production LLMs, RAG, vector DBs, LangChain/LangGraph, agents, cloud/K8s ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-engineer-at-wave-group-4440129564?utm_source=chatgpt.com)) |
| 5 | Intec Select — AI Engineer, LLM & Agentic Systems | Python, agents, RAG, MCP, LangGraph, cloud, system design ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-engineer-llm-agentic-systems-at-intec-select-4454107169?utm_source=chatgpt.com)) |
| 6 | iO Associates — AI Engineer | Python, PyTorch/TensorFlow/Sklearn, LLMs, RAG, Docker/K8s, APIs, MLOps ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-engineer-at-io-associates-4438170613?utm_source=chatgpt.com)) |
| 7 | Hired — AI Software Engineer, Cloud | Python/Java/Go/C++, ML pipelines, CI/CD, testing, Git, Docker ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-software-engineer-cloud-remote-at-hired-4409569472?utm_source=chatgpt.com)) |
| 8 | FactTrace — AI/Software Engineer | Python, LLM/RAG, embeddings, vector DBs, SQL, Docker, AWS, React ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-software-engineer-full-stack-systems-at-facttrace-4451398829?utm_source=chatgpt.com)) |
| 9 | Chubb — Associate AI Engineer | Python, LLMs, RAG, Hugging Face/LangChain, APIs, Docker, CI/CD, cloud, MLOps ([LinkedIn](https://uk.linkedin.com/jobs/view/associate-ai-engineer-at-chubb-4446233198?utm_source=chatgpt.com)) |
| 10 | Hawksworth — AI Software Engineer | Microservices, distributed systems, Docker/K8s, agents, AWS/Azure, IaC ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-software-engineer-manchester-hybrid-£50k-£90k-%2B-bonus-%2B-package-banking-at-hawksworth-4444351117?utm_source=chatgpt.com)) |
| 11 | Data Reply — AI Engineer | Python, LLM APIs, RAG, vector DB, LangChain/LangGraph, AWS, evaluation/security ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-engineer-gen-ai-and-agentic-systems-mid-senior-at-data-reply-uk-4381038747?utm_source=chatgpt.com)) |
| 12 | Ampstek/Infosys — AI Engineer | MLOps, Python, LLM APIs, embeddings, vector DB, RAG, agents/MCP, SQL/Spark/cloud ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-engineer-at-ampstek-4440204800?utm_source=chatgpt.com)) |
| 13 | AMPLIFYR — AI Engineer | Python, LangGraph/CrewAI, AWS, RAG, agent evaluation, production LLMs ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-engineer-at-amplifyr-limited-at-jack-jill-4450328725?utm_source=chatgpt.com)) |
| 14 | Keyrus — AI Engineer & Lead | Python, async APIs, RAG, agents, knowledge graphs, SQL, FastAPI, Snowflake ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-engineer-lead-at-keyrus-4457305678?utm_source=chatgpt.com)) |
| 15 | iXceed — Generative AI Engineer | Python, OpenAI/Azure OpenAI, RAG, vector DBs, LangGraph, APIs, cloud, Docker/K8s ([LinkedIn](https://uk.linkedin.com/jobs/view/generative-ai-engineer-at-ixceed-solutions-4444411728?utm_source=chatgpt.com)) |
| 16 | Klipboard — AI Software Engineer | C#/.NET, LLM APIs, prompt/context engineering, RAG, evaluation, AI coding tools ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-software-engineer-at-klipboard-4444493400?utm_source=chatgpt.com)) |
| 17 | Searchability NS&D — Software Engineer AI | Python, AWS/Azure, Docker/K8s, GenAI, RAG, MLOps, APIs/security ([LinkedIn](https://uk.linkedin.com/jobs/view/software-engineer-ai-at-searchability-ns-d-4443762852?utm_source=chatgpt.com)) |
| 18 | Bending Spoons — Graduate AI Software Engineer | Core software engineering, Python/Rust, APIs, Docker/K8s, production systems ([LinkedIn](https://uk.linkedin.com/jobs/view/graduate-ai-software-engineer-at-bending-spoons-4455483260?utm_source=chatgpt.com)) |
| 19 | Aurum Search — Generative AI Engineer | Python, SQL, Pandas, Snowflake, Elasticsearch, Docker/K8s, Spark/Airflow ([LinkedIn](https://uk.linkedin.com/jobs/view/generative-ai-engineer-at-aurum-search-limited-4438727397?utm_source=chatgpt.com)) |
| 20 | Brown & Brown UK — AI Engineer | GenAI, LLMs, GCP, production systems, business/risk/compliance collaboration ([LinkedIn](https://uk.linkedin.com/jobs/view/ai-engineer-at-brown-brown-uk-4440571371?utm_source=chatgpt.com)) |

## 2. The headline finding

The UK market is **not primarily hiring "AI people."** It is hiring:

> **Software engineers who can build, integrate, deploy, evaluate and operate AI systems.**

- Bruin asks for Python + React/TypeScript + AWS alongside LLM/RAG/agents and production experience.
- Accenture's junior role combines a conventional SWE foundation (backend language, databases, cloud, Docker, CI/CD) with LLM APIs, RAG and agentic systems.
- Klipboard shows Python isn't mandatory everywhere: their AI engineer works primarily in C#/.NET while integrating LLMs, RAG, evaluation and AI coding tools into an existing production system.

So the roadmap is **not**:

> Python → Machine Learning → ChatGPT API → LangChain → apply for jobs

It's:

> **Software Engineering → Cloud/DevOps → ML foundations → LLM engineering → RAG → Agents → AI production engineering → System Design → Interview preparation**

## 3. Essential skills, ranked

### Tier 1 — Non-negotiable

**1. Python / strong programming** — overwhelmingly the dominant language.
Production Python, not notebooks: Python 3.x, OOP, typing, exceptions,
async/await, concurrency basics, packages, virtual environments, pytest,
logging, configuration, REST APIs, FastAPI, Pydantic, clean architecture, Git.
(Keyrus explicitly asks for production Python including APIs, async
architectures and data pipelines.)

**2. LLM application engineering** — building applications around OpenAI,
Anthropic, Azure OpenAI, Gemini, open-source models, Hugging Face: model APIs,
tokenisation, context windows, structured outputs, function/tool calling,
streaming, latency, cost, retries, fallbacks. Now much more important than
knowing how transformers work mathematically.

**3. RAG** — probably the single most important specialised AI skill in the
sample. Be able to build it from scratch and explain every component:

```
Documents → Parsing → Chunking → Metadata → Embedding
  → Vector/hybrid index → Retriever → Reranker
  → Context construction → LLM → Answer + citations
```

Know: embeddings, cosine similarity, vector databases, hybrid search, BM25,
chunking strategies, metadata filtering, reranking, retrieval evaluation,
hallucination, context management, document ingestion. Appears repeatedly
across Bruin, Wave, Chubb, Data Reply, Ampstek, iXceed, Keyrus and others.

**4. Agentic AI** — the second major trend:

```
User → Agent → Tool / Retrieval / Memory / Other agent / External API
```

Concepts: tool/function calling, planning, orchestration, state, memory,
multi-step workflows, human-in-the-loop, agent evaluation, guardrails, MCP,
LangGraph, LangChain, CrewAI, OpenAI/Anthropic agent SDKs. Employers
increasingly want agents that work in production, not a LangChain tutorial —
Intec, Wave, AMPLIFYR and iXceed explicitly emphasise this.

## 4. Cloud + DevOps is essential

Many people studying AI underestimate this. Need at least one cloud platform
seriously — **recommendation: AWS**.

- **AWS**: IAM, EC2, S3, Lambda, ECS/Fargate, API Gateway, CloudWatch, SQS, RDS, Bedrock, basic networking, secrets, monitoring
- **Then**: Docker, Kubernetes fundamentals, GitHub Actions, CI/CD, Terraform, observability

Jobs repeatedly mention AWS/Azure/GCP, Docker and Kubernetes — Hawksworth
combines AI engineering with microservices, distributed systems, Docker/K8s
and IaC. You don't need to become a DevOps engineer, but you must be capable
of taking `localhost` to `production`.

## 5. Databases are still extremely important

AI doesn't replace traditional data engineering.

- **SQL, well**: SELECT, JOIN, GROUP BY, CTEs, subqueries, window functions,
  indexes, transactions, query optimisation. (Keyrus explicitly calls for
  strong SQL including analytical queries, joins and window functions.)
- **PostgreSQL**: pgvector, relational modelling, JSON/JSONB, indexing
- **Vector databases** — know at least one deeply: pgvector, Pinecone,
  Weaviate, Qdrant, OpenSearch. You don't need five.

## 6. ML fundamentals — yes, but don't become a researcher

You do need: supervised vs unsupervised learning, regression, classification,
clustering, train/validation/test, overfitting, regularisation, feature
engineering, precision/recall/F1, ROC-AUC, embeddings, neural networks,
transformers, attention, fine-tuning, inference — plus enough
PyTorch/Scikit-learn to understand the ecosystem.

Unless targeting ML Researcher / Research Engineer / ML Scientist roles,
don't spend six months on advanced maths before touching LLM systems. Chubb,
for example, asks for Python, LLM/RAG experience and ML frameworks
(PyTorch/TensorFlow) together, not as separate worlds.

## 7. AI evaluation is a differentiator

One of the most interesting findings — employers increasingly care about:

> **How do you know your AI system actually works?**

Learn: golden datasets, test sets, regression tests, LLM-as-a-judge, RAGAS,
LangSmith, precision/recall for retrieval, groundedness, faithfulness,
relevance, latency, cost, failure analysis. AMPLIFYR explicitly mentions
golden datasets and LLM-as-judge metrics for cost, latency and quality;
Klipboard requires structured evaluation of LLM outputs before releasing AI
functionality to customers. **This should be a major component of your
portfolio.**

## 8. Software engineering remains the foundation

The most important strategic conclusion — you should still handle normal SWE
interview questions.

- **Algorithms & data structures**: arrays, hash maps, stacks/queues, trees, graphs, heaps, sorting, searching, Big-O
- **System design**: "Design a production RAG system for 10 million documents" — APIs, queues, databases, caching, vector search, model selection, scaling, reliability, observability, security, cost

SCG explicitly lists algorithms, data structures, complexity and design
patterns among its requirements.

## 9. What's not as essential as people think

Don't prioritise these early:

- ❌ **Becoming an expert in mathematics** — useful, not highest ROI
- ❌ **Training an LLM from scratch** — almost certainly unnecessary for your initial target
- ❌ **Learning every AI framework** — don't learn LangChain + LangGraph + CrewAI + AutoGen + Semantic Kernel + LlamaIndex + 10 others. Learn **one deeply** (LangGraph), and understand the underlying concepts so you can move between frameworks
- ❌ **Becoming a React expert** — some roles want React/TS (Bruin is one), but it's secondary to backend/SWE for most AI Engineer roles. Learn enough React to build an interface for your AI systems

## 10. Target technology stack

|       Area       | Technology                              |
|:----------------:|-----------------------------------------|
| Primary language | **Python**                              |
|     Backend      | **FastAPI**                             |
|     Database     | **PostgreSQL**                          |
|  Vector search   | **pgvector**                            |
|      Cache       | Redis                                   |
|       LLMs       | OpenAI + Anthropic + one open model     |
|   AI framework   | **LangGraph**                           |
|       RAG        | Custom + LangChain/LlamaIndex knowledge |
|        ML        | Scikit-learn + PyTorch                  |
|      Cloud       | **AWS**                                 |
|    Containers    | Docker                                  |
|  Orchestration   | Kubernetes fundamentals                 |
|       IaC        | Terraform                               |
|      CI/CD       | GitHub Actions                          |
|  Observability   | OpenTelemetry + CloudWatch              |
|    Evaluation    | RAGAS + LangSmith                       |
|      Agents      | LangGraph + MCP                         |
|     Frontend     | React/TypeScript fundamentals           |
|       Data       | SQL + Pandas                            |
|     Testing      | Pytest                                  |
| Version control  | Git/GitHub                              |

Not because these are universally the best technologies — because they give
unusually good coverage against the technologies appearing across the UK
sample.

## 11. Skill priority matrix

|           Skill            | Priority                              |
|:--------------------------:|---------------------------------------|
|           Python           | 🔴 Essential                          |
|    Software engineering    | 🔴 Essential                          |
|          LLM APIs          | 🔴 Essential                          |
|            RAG             | 🔴 Essential                          |
|    REST/API development    | 🔴 Essential                          |
|            SQL             | 🔴 Essential                          |
|           Cloud            | 🔴 Essential                          |
|           Docker           | 🔴 Essential                          |
|     Git/CI/CD/testing      | 🔴 Essential                          |
|         Agentic AI         | 🔴 Essential                          |
|       System design        | 🔴 Essential                          |
|       AI evaluation        | 🟠 Very important                     |
|      Vector databases      | 🟠 Very important                     |
| Prompt/context engineering | 🟠 Very important                     |
|         Kubernetes         | 🟠 Important                          |
|      ML fundamentals       | 🟠 Important                          |
|          PyTorch           | 🟡 Useful                             |
|      React/TypeScript      | 🟡 Useful                             |
|            MCP             | 🟡 Emerging but increasingly relevant |
|      Knowledge graphs      | 🟡 Specialised                        |
|        Fine-tuning         | 🟡 Useful                             |
|    Advanced mathematics    | 🟢 Lower priority initially           |
| Training LLMs from scratch | 🟢 Low priority                       |

## 12. Positioning

Don't market yourself as "I'm learning AI." Aim to say:

> **"I'm a software engineer specialising in production AI systems."**

That fits the jobs much better. The postings repeatedly describe people who
can take an ambiguous business problem, design an architecture, integrate
LLMs, build RAG/agents, deploy the system, and then measure whether it
actually works — that's the profile to optimise for.

---

See [roadmap.md](roadmap.md) for the week-by-week execution plan built from
this research, and [ai-interview-prep.md](ai-interview-prep.md) for the
AI-specific interview questions and system-design scenarios.
