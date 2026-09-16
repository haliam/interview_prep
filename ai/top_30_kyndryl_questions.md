# Top 30 Interview Questions — Kyndryl FDE, AI & Agentic Engineer

Ranked most → least important, based on the definitive 4-week roadmap and the current live job posting (fetched 2026-09-16). "Roadmap ref" points to where you built the answer.

1. **Walk me through your project end-to-end — architecture and key decisions.** Almost certain opener; frames every follow-up. *Roadmap ref: Weeks 1–4, capstone.*
2. **When do you use an agent versus a deterministic workflow?** Filters framework-tourists from people who understand the tradeoff. *Week 2.*
3. **Explain the tool/function-calling loop, step by step.** Baseline literacy check — "not magic, it's a loop." *Week 1.*
4. **What is MCP, and why use it instead of hardcoded function calls?** Named explicitly as a required skill. *Week 2.*
5. **Why must a tool being *callable* not imply *permission* to execute it? How do you enforce that boundary?** The senior/security differentiator both Kyndryl-specific drafts flagged as critical. *Week 2–3.*
6. **Compare LangGraph, CrewAI, AutoGen, Semantic Kernel, OpenAI Agents SDK, and Google ADK.** This is a near-verbatim list from the JD's required skills — expect to be asked to place your experience against all six even having built with one. *Week 2.*
7. **Walk through your RAG pipeline: chunking → embedding → retrieval → reranking → generation.** RAG/LLM pipeline development is explicitly required. *Week 3.*
8. **How do you evaluate whether RAG/agent output is actually good? What failure modes have you seen?** Separates "built a demo" from "validated one." *Week 3.*
9. **A customer hands you a vague business problem — how do you turn it into an agentic AI solution?** This is the JD's literal top responsibility line: "translate business challenges into agentic AI applications." *Week 4 FDE scenarios.*
10. **How would you design AI governance and guardrails — data privacy boundaries, policy enforcement?** Direct JD responsibility quote. *Week 3–4.*
11. **What is prompt injection (direct and indirect), and how do you defend against it?** Standard senior AI-security question tied to guardrails. *Week 3.*
12. **When would you reach for Neo4j (graph) over Postgres (relational) in an AI application?** Both are named together as required in the live JD — don't underweight this. *Week 3.*
13. **What's policy-as-code, and how would OPA/Rego fit into an agent's guardrails?** Named explicitly in JD preferred skills. *Week 4.*
14. **"Your agent works locally but fails intermittently in production" — how do you investigate?** Classic production-readiness probe. *Week 4, observability.*
15. **A customer wants full agent autonomy, but governance/compliance rejects it — how do you resolve that?** Tests judgment under real client-delivery constraints — core to the FDE identity. *Week 4 FDE scenario.*
16. **How do you expose a legacy system to an agent while keeping the underlying business logic deterministic?** JD: "guiding clients through modernization into AI-enabled workflows." *Week 4 FDE scenario.*
17. **How do you work with a platform engineering team on deployment without owning their infrastructure?** Direct JD quote — tests your instinct for boundaries. *Behavioral.*
18. **How do you reduce LLM cost and latency in production?** Practical, recurs across every source roadmap. *Week 1.*
19. **Why prefer structured/tool-forced output over prompting "return JSON"?** Foundational, almost always asked early. *Week 1.*
20. **How do you handle a provider outage — retries, backoff, fallback models?** Reliability engineering, leverages your existing production-engineering background directly. *Week 1.*
21. **Where do you place human-in-the-loop approval gates, and how do you decide?** Shows you don't over-trust the model. *Week 2–3.*
22. **How do you manage short-term vs. long-term memory in an agent?** Common once past the basics. *Week 2.*
23. **When does a single agent become a multi-agent system, and what does that cost you?** Tests whether you know added complexity isn't free. *Week 2.*
24. **How do you containerize and ship this kind of application — what's different from a normal service?** Docker proficiency explicitly required. *Week 3.*
25. **How do you use AI coding copilots in your own workflow, and where don't you trust them?** Explicitly named JD skill; often a rapport-building question. *Ongoing.*
26. **When would you use an open-source/self-hosted model (Hugging Face) instead of a hosted API?** JD preferred skill — lower depth expected given your background. *Not covered in roadmap — light prep only.*
27. **How would you incorporate image understanding or OCR into an agent pipeline?** JD preferred skill, unlikely to be probed deeply. *Not covered in roadmap — light prep only.*
28. **Tell me about a production incident you diagnosed and fixed under pressure.** Leverages your 5 years of .NET experience directly — near-certain behavioral question. *STAR story #1.*
29. **Tell me about a time you translated an ambiguous business ask into a technical design.** Mirrors the JD's core responsibility almost word for word. *STAR story #2.*
30. **What questions do you have about how FDE engagements are scoped, and how platform vs. FDE teams split ownership?** Not asked of you, but expected from you. *Closing.*

## Note on the live JD vs. the roadmap
The current posting confirms Postgres **and Neo4j** as required (the roadmap treated Neo4j as an optional stretch), and adds preferred-but-not-required exposure to TensorFlow/PyTorch, Hugging Face, image understanding/OCR, and Prometheus — none of which the roadmap builds hands-on. Given the 4-week timeline, treat #26–27 above as "have a one-paragraph answer ready," not build targets.
