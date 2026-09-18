# Top 30 Python Interview Questions — Senior AI/Backend Engineer

Ordered **ascending**: foundational language mechanics first, building up to concurrency, performance, and production-grade design. Use alongside the Kyndryl-specific and generic AI-engineering top-30 docs — this one is the language-literacy safety net that underpins the FastAPI/LangGraph/MCP capstone. A senior candidate should answer #1–15 instantly and #16–30 with real war stories, not textbook recall.

## Core language mechanics

1. **Mutable vs. immutable types — what's the practical consequence of `def f(x=[])` as a default argument?** Classic gotcha; tests whether you understand default-argument evaluation happens once, at function-definition time.
2. **What's the difference between `is` and `==`?** Identity vs. equality — distinguishes people who've debugged a subtle bug from people who haven't.
3. **Explain Python's scoping rules (LEGB) and the `global`/`nonlocal` keywords.** Baseline literacy for reasoning about closures and nested functions.
4. **What are `*args` and `**kwargs`, and when would you use them in a decorator or a wrapper around an LLM SDK call?** Directly relevant to the roadmap's "raw API fundamentals" week — wrapping retries/fallbacks around provider calls.
5. **How does Python's import system work — what does `__init__.py` do, and what's the difference between absolute and relative imports?** Comes up constantly when structuring a `supportops/`-style multi-module service.
6. **What's the difference between a shallow copy and a deep copy?** Practical relevance: copying conversation state/message history without aliasing bugs.
7. **Explain list/dict/set comprehensions vs. generator expressions — when do you choose one over the other?** Tests memory-awareness, not just syntax fluency.
8. **What are Python decorators, and how would you write one that adds retry-with-backoff to a function?** Near-guaranteed live-coding prompt; maps directly to Week 1's reliability engineering (retries/backoff/fallback models).

## Data structures & idioms

9. **When do you use a `dataclass` vs. a `NamedTuple` vs. a plain class vs. a Pydantic model?** Senior-level judgment question — especially relevant given the roadmap's emphasis on Pydantic for structured LLM outputs.
10. **How does Python's `dict` maintain insertion order, and what are the performance characteristics of dict/set lookups?** Tests whether "average case O(1)" understanding is real, not memorized.
11. **What's the difference between `@staticmethod`, `@classmethod`, and an instance method?** Common in code review discussions, not always asked directly but expected to be fluent.
12. **Explain Python's data model — what do `__eq__`, `__hash__`, `__repr__`, and `__enter__`/`__exit__` actually do, and why must `__eq__` and `__hash__` stay consistent?** Distinguishes "uses Python" from "understands Python."
13. **How would you implement a simple LRU cache — using `functools.lru_cache` and then by hand?** Practical and maps to caching for cost/latency reduction (roadmap Week 1/4 theme).

## Exceptions, typing, and API design

14. **How do you design exception hierarchies for a service that calls multiple external APIs (e.g., Anthropic, OpenAI, a ticketing system)?** Tests whether you'd build clean `try/except` boundaries or let raw provider exceptions leak into business logic.
15. **What's the difference between `raise`, `raise ... from ...`, and bare `raise` inside an `except` block?** Common in code review; shows exception-chaining literacy.
16. **How do you use Python's type hints effectively — `Optional`, `Union`/`|`, `TypedDict`, `Protocol`, generics — and where do they actually help vs. add noise?** Senior differentiator; ties directly to validating tool-call arguments and structured outputs.
17. **What's the difference between Pydantic v1 and v2 in practice, and how do you use it to validate/repair malformed LLM JSON output?** Direct roadmap tie-in — "validate with Pydantic; handle repair/retry on malformed output."
18. **How does context management (`with` statements, `contextlib.contextmanager`) help with resource safety — e.g., DB connections, HTTP sessions, or trace spans?** Relevant to the OpenTelemetry span-per-call pattern in Week 4.

## Concurrency & async

19. **Explain the GIL — what does it actually prevent, and what doesn't it prevent?** Near-universal senior question; tests whether you conflate "no true parallelism for CPU-bound threads" with "no concurrency benefit at all."
20. **`asyncio` vs. threading vs. multiprocessing — when do you choose each for an I/O-bound LLM-calling service vs. a CPU-bound embedding/reranking job?** Directly maps to FastAPI + concurrent tool calls + local embedding work.
21. **How do you run multiple tool calls or API requests concurrently in `asyncio`, and how do you bound concurrency (e.g., `asyncio.Semaphore`) to avoid rate-limit errors?** Practical, maps to "parallel tool calls" in the cost/latency cheat sheet.
22. **What's a race condition in async code, and how have you actually hit one — e.g., shared state across concurrent tool executions?** Tests real experience vs. definition recall.
23. **How would you add a timeout to an async LLM call, and what happens to the underlying task if you don't handle cancellation properly?** Reliability engineering question, ties to Week 1's timeout/retry theme.

## Performance & production concerns

24. **How do you profile a slow Python service — what's your actual toolkit (`cProfile`, `py-spy`, `line_profiler`, logging timers)?** Separates people who've debugged production latency from people who guess.
25. **What causes a memory leak in a long-running Python process, and how would you diagnose one in a service that's accumulating conversation history or embeddings in memory?** Directly relevant to a long-lived agent process.
26. **How do you structure configuration and secrets management in a Python service — env vars, `pydantic-settings`, vault integration — and what do you never do?** Ties to the roadmap's "config/secrets management" hygiene point.
27. **How do you write testable code around external LLM calls — mocking, dependency injection, recorded fixtures (VCR-style) — without making tests brittle or slow?** Senior distinguisher; tests pytest fluency beyond "I wrote some tests."
28. **What's your approach to packaging and dependency management — `pip` + `requirements.txt` vs. `poetry`/`uv`, virtual environments, and pinning for reproducible Docker builds?** Ties directly to the roadmap's Docker Compose deliverable.

## Senior judgment & code quality

29. **How do you review a pull request that adds a new LLM-calling code path — what specifically are you looking for beyond "does it work"?** Tests engineering leadership instincts, not just Python knowledge — connects to the FDE "translate business challenges" and code-quality dimension.
30. **Tell me about a time Python's flexibility (duck typing, dynamic attributes, metaprogramming) caused a production bug — how did you find it, and how did you prevent a recurrence?** Behavioral/technical hybrid; leverages 5 years of production experience directly, and tests whether you've been burned by Python's looseness and adapted.

## Note on scope

This set assumes senior-level fluency already exists in basic syntax, so there's no "what is a list" or "what is `def`" — those aren't asked at this level. It skews toward patterns that show up specifically in LLM/agent service code (async I/O around API calls, Pydantic validation, retry/backoff decorators, concurrency bounding) rather than generic algorithmic Python, since that's covered separately by coding-practice sessions in the main roadmap.
