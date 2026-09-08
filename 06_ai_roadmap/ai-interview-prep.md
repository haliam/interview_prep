# AI-Specific Interview Prep

AI/RAG/agent interview questions and system-design scenarios, distinct from
the general C#/.NET material in `04_technical_interview/`. Pair this with
Week 12 of [roadmap.md](roadmap.md) (coding drills + behavioural stories live
there / in `02_hhrr_interview/03_star_behavioural_stories.md`).

## AI interview questions

Have a crisp, concrete answer (ideally backed by something you actually built
in Project 3/4) for each of these:

- [ ] How would you reduce hallucinations in a RAG system?
- [ ] Why use RAG instead of fine-tuning?
- [ ] How would you evaluate an LLM application?
- [ ] How do you evaluate retrieval independently from generation?
- [ ] How would you reduce LLM latency?
- [ ] How would you reduce token cost?
- [ ] How would you design an agent that uses external tools?
- [ ] What happens when an LLM provider goes down?
- [ ] How would you detect prompt injection?
- [ ] How would you select an embedding model?

These are much more valuable to have deeply understood than to have
memorised definitions for.

## System design scenarios

Practice explaining architecture **verbally** — not just what the pieces are,
but why each one is there.

Example prompt: *"Design an AI assistant for a UK insurance company with 5
million documents."* The answer should naturally reach:

```
API Gateway → Authentication → Application Service → Agent / Orchestrator
                                        │
                        ┌───────────────┼───────────────┐
                        ▼               ▼               ▼
                       RAG             SQL             Tools
                        │
                    Vector DB
                        │
                       LLM
                        │
              Evaluation / Guardrails
                        │
                   Observability
```

Then discuss: security, PII, GDPR, prompt injection, access control, cost,
latency, reliability, auditability. This matters especially for UK roles in
regulated sectors (finance, insurance, healthcare, defence) — Chubb, for
example, combines AI engineering with production APIs, cloud, security and
regulated-industry experience.

Scenarios worth rehearsing end-to-end (requirements → architecture → APIs →
data model → model choice → retrieval → scaling → caching → security →
monitoring → evaluation → cost → failure modes):

- [ ] ChatGPT-like application
- [ ] Enterprise RAG for 10M documents
- [ ] AI customer-support agent
- [ ] Real-time voice agent (telephony + STT + LLM + TTS — see SCG Midlands role in [market-research.md](market-research.md))
- [ ] Multi-agent research platform
- [ ] LLM evaluation platform
