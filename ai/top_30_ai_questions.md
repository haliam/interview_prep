# **Top 30 AI Questions**



## LLM & application fundamentals

1. **Explain, at a high level, how an LLM generates a response token by token.** Baseline literacy — almost every interview opens near here.
2. **What are embeddings, and how are they used for search or retrieval?** Foundation for everything RAG-related.
3. **Why prefer structured/tool-forced output over prompting "return JSON"?** Practical, near-universal.
4. **What is temperature/top-p, and how do you choose sampling parameters for different tasks?** Shows you understand determinism vs creativity tradeoffs.
5. **How do you manage a long conversation's context window — sliding window vs summarization vs RAG-as-memory?** Cost and correctness question in one.
6. **How do you test and version-control prompts as if they were code?** Separates hobbyists from engineers shipping LLM features.

## RAG

7. **Walk through a RAG pipeline end to end: chunking → embedding → indexing → retrieval → reranking → generation.** The single most common deep-dive in AI engineering interviews right now.
8. **RAG vs. fine-tuning — when do you choose one over the other?** Classic decision-framework question.
9. **What are common RAG failure modes, and how do you debug retrieval returning irrelevant results?** Tests hands-on experience vs theory.
10. **Vector database vs. relational database — when do you need which, and what does "hybrid search" mean?** Frequently paired with a system-design question.
11. **How do you choose an embedding model?** Secondary but common follow-up to #7.
12. **How do you reduce hallucinations in a RAG system?** Almost guaranteed if RAG comes up at all.
13. **How do you evaluate an LLM application — and why evaluate retrieval and generation separately?** Distinguishes people who shipped something from people who validated it.

## Agents

14. **Explain the tool/function-calling loop, step by step.** "Model proposes → you execute → you return the result → model continues." Expect this literally.
15. **Agent vs. workflow — when is a full agent over-engineering?** Tests judgment, not just framework knowledge.
16. **What is a multi-agent system, and when does it add more risk than value?** Common follow-up once single-agent basics are established.
17. **How do you prevent an agent from looping infinitely or taking an unauthorized action?** Safety/reliability question, often paired with guardrails.
18. **What is MCP (Model Context Protocol), and why does it matter for connecting agents to tools?** Increasingly asked as MCP adoption grows industry-wide.

## Production & reliability

19. **How do you reduce LLM cost and latency in a production application?** Model tiering, caching, streaming, parallel tool calls — near-universal question.
20. **How do you handle a provider outage or rate limit in an LLM-backed service?** Retries/backoff, circuit breakers, fallback models — leverages general backend experience.
21. **"This worked in a demo but breaks in production" — what do you check first?** Classic production-readiness probe, framework-agnostic.
22. **How would you monitor and instrument an LLM/agent system in production?** Tracing, token/cost/latency metrics, error rates.
23. **How do you decide between a hosted API model and a self-hosted open-source model?** Cost, latency, data-residency, and control tradeoffs.

## System design

24. **Design a production RAG system for 10 million documents.** Standard AI-engineer system-design prompt.
25. **Design a customer-support or research AI agent end-to-end.** Requirements → architecture → data → orchestration → security → evaluation → cost.
26. **Design an LLM evaluation platform.** Less common but increasingly asked as teams mature past "vibes-based" evaluation.

## Classic ML theory (lighter weight, but still asked)

27. **Explain the bias-variance tradeoff.** Quick sanity check that you have ML fundamentals underneath the LLM layer.
28. **Precision, recall, and F1 — when do you optimize for one over the other?** Common if the role touches any classification/ranking component.
29. **What is overfitting, and how do you detect and prevent it?** Baseline ML literacy check.

## Coding

30. **A backend/data-structure problem relevant to agent or API systems** (e.g., an interval-scheduling problem, a graph traversal for a tool-dependency graph, or rate-limiter design). Most AI engineering interviews now favor practical backend problems over pure algorithmic grinding — depth of reasoning matters more than speed.
