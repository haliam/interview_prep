# AI Dictionary

Simple definitions for the concepts introduced in the [Kyndryl roadmap](kyndryl_roadmap.md), organized by week. Each week's terms are ordered alphabetically.

---

## Week 1 — Raw API Fundamentals + Engineering Foundation

**Async/await**

Python syntax for writing non-blocking code: while waiting on a slow operation (like an API call), the program can do other work instead of freezing.

**Config/secrets management**

Keeping settings (API keys, URLs, credentials) out of the code, usually in environment variables or a secrets manager, so they aren't hardcoded or leaked.

**Context window**

The maximum amount of text (measured in tokens) a model can "see" at once, including the system prompt, conversation history, and any retrieved documents.

**Cost/latency tradeoffs**

The balance between how much an LLM call costs and how fast it responds; e.g. a bigger/smarter model is usually slower and pricier than a smaller one.

**Exceptions**

Python's mechanism for handling errors: code that might fail is wrapped so the program can catch the problem and react instead of crashing.

**Fallback model**

A backup model (e.g. switching from Anthropic to OpenAI) used automatically if the primary model call fails.

**Function/tool calling (as a loop)**

The pattern where the model proposes calling a function with certain arguments, your code actually executes it, the result is sent back to the model, and the model continues from there. It's not magic — you're always the one running the code.

**Idempotency**

A property of an operation where running it multiple times has the same effect as running it once (important for safely retrying tool calls without duplicating actions).

**Logging**

Recording what a program is doing (requests, errors, decisions) so behavior can be reviewed or debugged later.

**Max tokens**

A parameter that caps how many tokens the model is allowed to generate in its response.

**Model selection**

Choosing which model to use for a task based on factors like capability needed, cost, and speed.

**Pytest**

A popular Python testing framework used to write and run unit tests.

**Rate-limit handling**

Logic to deal with API limits on how many requests can be made in a given time, usually by slowing down or queuing requests.

**RAG-as-memory**

Using Retrieval-Augmented Generation (searching a knowledge base for relevant info) as a way to give the model "memory" of facts it wasn't trained on, instead of keeping everything in the conversation.

**Retries with backoff**

Automatically retrying a failed request, waiting progressively longer between each attempt, to avoid hammering a failing service.

**Sliding window (memory)**

A memory strategy that keeps only the most recent N messages/tokens of a conversation, dropping older ones as new ones come in.

**Streaming (SSE / token vs event-based)**

Sending the model's response back piece by piece as it's generated (via Server-Sent Events or similar), instead of waiting for the full answer. Improves perceived speed but makes it harder to parse structured output, since you may need to buffer until you have valid JSON.

**Structured outputs**

Getting the model to return data in a predictable format (like JSON matching a schema) instead of free-form text, so it can be reliably parsed by code.

**Summarization (memory)**

A memory strategy where older conversation content is condensed into a shorter summary instead of being kept in full, to save context space.

**Temperature**

A setting that controls how random/creative the model's output is. Low temperature (0–0.3) gives more deterministic, focused answers (good for classification/extraction); higher temperature gives more varied, creative answers.

**Timeouts**

A limit on how long to wait for a response before giving up and treating the call as failed.

**Tokens**

The basic units of text an LLM processes (roughly pieces of words). Cost and context limits are measured in tokens.

**Tool-forcing / JSON schema**

Explicitly telling the model to use a specific tool/schema to structure its output, rather than just asking it in plain language to "return JSON" (which is less reliable).

**Top_p**

A sampling setting (nucleus sampling) that controls diversity by limiting the model to choosing from the most likely tokens that add up to probability p. Often used alongside or instead of temperature.

**Typing (Python)**

Adding type hints to Python code (e.g. `def foo(x: int) -> str`) to make code more readable and catch errors earlier with tools like type checkers.

**Validation (with Pydantic)**

Checking that data (e.g. a model's structured output) matches an expected shape/type before using it, and handling repair/retry if it doesn't. Pydantic is a Python library commonly used for this.

---

## Week 2 — Agentic Loop + MCP + Alternative Frameworks Awareness

**Agent vs workflow**

An agent lets the model decide the sequence of steps/tools dynamically; a workflow is a fixed, predetermined sequence of steps. Using an agent when a simple workflow would do is over-engineering.

**Authentication/authorization (MCP)**

Authentication verifies who is calling a tool; authorization determines what that caller is allowed to do. Both matter when exposing enterprise APIs to agents via MCP.

**AutoGen**

A multi-agent framework (Microsoft) built around "conversable agents" that talk to each other to solve tasks, as opposed to LangGraph's explicit state-graph model.

**Checkpointing**

Saving an agent's state at points in its execution so it can be paused, inspected, resumed, or rolled back — useful for human-in-the-loop and debugging.

**CrewAI**

A multi-agent framework organized around role-based "crews" (e.g. researcher, writer) collaborating on a task, as opposed to LangGraph's graph-based orchestration.

**Google ADK**

Google's Agent Development Kit — Google's own framework/toolset for building agents, one of several alternatives to LangGraph worth knowing about conceptually.

**Human-in-the-loop**

A design pattern where the agent pauses to require human review or approval before taking a certain action (especially state-changing ones), instead of acting fully autonomously.

**Long-term memory**

Memory that persists across sessions/conversations — e.g. storing resolved-ticket outcomes so they can be retrieved and reused later.

**LangGraph**

A framework for building agents as state graphs: nodes represent steps (classify, retrieve, act, respond) and edges define the routing/flow between them, with support for tool execution, checkpointing, and human-in-the-loop.

**MCP (Model Context Protocol) architecture**

A standard client/server protocol for exposing tools, resources, and prompts to agents in a portable way, so integrations aren't bespoke per framework.

**OpenAI Agents SDK**

OpenAI's own framework/toolset for building agents, another alternative to LangGraph worth knowing about conceptually.

**Permission vs capability**

A security principle: a tool being *callable* by an agent does not automatically mean it's *permitted* to execute the underlying business operation. Capability (can it be called) and permission (is it allowed) are separate layers that must both be enforced.

**Resources vs tools vs prompts (MCP)**

The three things an MCP server can expose: resources (data/context the model can read), tools (actions the model can call), and prompts (reusable prompt templates).

**Semantic Kernel**

Microsoft's orchestration framework/SDK for building AI applications and agents, another alternative to LangGraph worth knowing about conceptually.

**Short-term memory**

Memory scoped to the current conversation/task — e.g. a running summary kept in the agent's state while it works.

**State graph (nodes/edges/routing)**

The core LangGraph concept: the agent's logic is modeled as a graph where nodes are steps and edges (with routing logic) decide which step runs next based on the current state.

**Tool schema (MCP)**

A structured definition (e.g. JSON schema) describing a tool's name, inputs, and outputs, so both the agent and the MCP server agree on how to call it correctly.

---

## Week 3 — RAG, Data Layer, Docker, and Guardrails

**Chunking strategies**

How you split documents into smaller pieces before embedding them, so retrieval returns focused, relevant passages rather than whole documents. Chunk size/overlap choices trade off context completeness vs precision.

**Context construction with citations**

Building the prompt sent to the model by injecting the retrieved chunks along with references to their source, so the model's answer can cite where information came from.

**Embeddings**

Numeric vector representations of text that capture meaning, so pieces of text with similar meaning end up close together in vector space — the basis for semantic (vector) search.

**Excessive agency**

A governance risk where an agent is given more autonomy or tool access than it needs, increasing the blast radius if it misbehaves or is manipulated.

**Groundedness**

Whether a model's answer is actually supported by the retrieved source content, as opposed to being made up (hallucinated).

**Hybrid search (BM25 + vector)**

Combining traditional keyword search (BM25) with semantic vector search to get both exact-term matches and meaning-based matches in retrieval results.

**Metadata filtering**

Narrowing a retrieval search using structured metadata (e.g. date, category, customer ID) in addition to semantic similarity, to return more relevant results.

**PII/data privacy basics**

Awareness of personally identifiable information (names, emails, IDs, etc.) and the need to detect, filter, or protect it when it flows through prompts, logs, or stored data.

**Prompt injection (direct and indirect)**

An attack where malicious instructions are inserted into the model's input to hijack its behavior. Direct injection comes from the user's own message; indirect injection is hidden in content the model retrieves (e.g. a poisoned document or webpage).

**RAG failure modes and evaluation**

Ways a Retrieval-Augmented Generation system can go wrong (irrelevant retrieval, low precision/recall, ungrounded/hallucinated answers) and the practice of measuring these with an evaluation set, similar in spirit to frameworks like RAGAS.

**Reranking**

A second-pass step after initial retrieval that re-scores and reorders the retrieved candidates (often with a more accurate but slower model) to push the most relevant results to the top.

**Tool poisoning**

A risk where a tool's description or behavior is manipulated (e.g. by a compromised MCP server) to trick the agent into taking harmful or unintended actions.

---

## Week 4 — Observability, Governance, System Design, and Interview Simulation

**Audit trail**

A recorded log of every tool call and decision an agent makes, so actions can be reviewed after the fact — essential for accountability and incident investigation.

**Distributed tracing**

Tracking a request as it flows across multiple calls/services (e.g. LLM calls, tool calls) so you can see the full execution path, timing, and where issues occur.

**OpenTelemetry**

An open standard/toolkit for instrumenting code to emit traces, metrics, and logs — used here to create a span per LLM call and per tool call for observability.

**OPA/Rego**

Open Policy Agent and its policy language, Rego — used to write policy-as-code rules (e.g. "agent cannot auto-escalate above priority X without human approval") that are evaluated separately from application code.

**Policy-as-code**

Expressing governance/business rules as code (e.g. with OPA/Rego) so they can be version-controlled, tested, and enforced automatically, rather than relying on manual review.

**Red-team test list**

A set of adversarial test cases (e.g. prompt injection attempts, over-permission attempts) run against the agent to check whether its guardrails actually hold up.

**Span**

A single unit of work in a trace (e.g. one LLM call or one tool call), capturing its duration, inputs/outputs, and metadata — spans link together to form a full trace.
