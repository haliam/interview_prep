# Python Senior Interview — Top 30 (+ Bonus) Questions

Merged and cleaned up from three source docs (cheatsheet diagrams, prose explanations, and LLM/AI-backend-flavored questions). Ordered ascending: language mechanics first, building up to concurrency, performance, and production-grade design. A senior candidate should answer #1–15 instantly and #16–30 with real war stories, not textbook recall.

---

### 1. GIL — Global Interpreter Lock

```
Thread1 [ GIL ACQUIRED ]
Thread2 [ WAITING FOR GIL ]
Thread3 [ WAITING FOR GIL ]

Only one thread executes Python bytecode at a time.
```

The **Global Interpreter Lock** ensures only one thread executes Python bytecode at a time in CPython. It simplifies memory management (reference counting) but prevents true CPU-bound parallelism with threads — for CPU-bound workloads use `multiprocessing` or native extensions (C, Cython, NumPy). For I/O-bound tasks, threads and `asyncio` still work well because the GIL is released during blocking I/O.

*Senior framing:* the GIL prevents true parallel **execution** of Python bytecode across threads, not concurrency itself — know the difference precisely.

### 2. Memory model

```
      Object (refcount)
        ↑          ↑
   Reference A   Reference B

GC handles cycles:
Generation0 → Generation1 → Generation2
```

CPython uses **reference counting** for each object plus a **generational garbage collector** to detect and clean cyclic references. Small objects are allocated via `pymalloc`, optimized for speed and locality. Understanding this matters for memory leaks (e.g., reference cycles with `__del__`), large object lifetimes, and performance tuning.

### 3. Asyncio event loop

```
EVENT LOOP
Task1 → await I/O → paused
Task2 → await I/O → paused
Task3 → CPU work → running
```

`asyncio` provides a **single-threaded event loop** that schedules coroutines (`async def`) cooperatively. Coroutines yield control with `await` when doing I/O, allowing thousands of concurrent tasks with low overhead. Use `asyncio` for high-concurrency I/O-bound systems (APIs, crawlers, LLM-calling services); avoid it for CPU-bound work unless you offload to threads/processes.

### 4. Generators

```
def gen():
    yield 1   <-- pause here
    yield 2   <-- resume here

start → yield 1 → resume → yield 2 → StopIteration
```

Generators produce values **lazily**, resuming execution at each `yield`. They implement the iterator protocol automatically and use **O(1) memory** regardless of the number of values produced. Ideal for streaming large files, pipelines, and infinite sequences. `yield from` allows delegation to sub-generators.

### 5. Decorators

```
@decorator
def func(): pass

decorator(func) → wrapper(func)
```

A decorator is a callable that takes a function/class and returns a wrapped callable, typically adding cross-cutting behavior (logging, auth, caching, retries):

```python
def deco(fn):
    def wrapper(*args, **kwargs):
        # pre
        result = fn(*args, **kwargs)
        # post
        return result
    return wrapper
```

With parameters, add another layer: `deco(config)(fn)`. **Near-guaranteed live-coding prompt**: write one that adds retry-with-backoff around an LLM SDK call.

### 6. Descriptors

```
class Field:
    def __get__(...): ...
    def __set__(...): ...

class Model:
    name = Field()

obj.name    → Field.__get__(obj)
obj.name = x → Field.__set__(obj, x)
```

A **descriptor** is any object defining `__get__`, `__set__`, or `__delete__`. They control attribute access and underpin `property`, `classmethod`, `staticmethod`, and many ORMs. Example: a validated field descriptor enforcing type/range on assignment. Key for declarative APIs (ORM models, form fields).

### 7. Metaclasses

```
class Meta(type):
    def __new__(...):
        # modify class

class A(metaclass=Meta): pass
```

A metaclass is the "class of a class" — it customizes class creation by overriding `__new__`/`__init__` on the metaclass. Common uses: automatic subclass registration, enforcing interfaces, injecting methods/attributes, building DSLs (ORM base classes, frameworks).

### 8. Context managers

```
with CM():
    do_work()

CM.__enter__()
CM.__exit__()
```

Context managers implement `__enter__` and `__exit__` to guarantee setup/teardown around a `with` block, ensuring deterministic cleanup (files, locks, transactions, DB connections, HTTP sessions, trace spans). `contextlib.contextmanager` lets you write them as generator functions. Relevant to patterns like an OpenTelemetry span-per-call.

### 9. Iterator protocol

```
iter(obj) → obj.__iter__()
next(obj) → obj.__next__()
```

An object with `__iter__` returning itself and `__next__` raising `StopIteration` when done. `for` loops and many built-ins rely on this. Generators are iterators automatically. Custom iterators are useful for streaming, pagination, and lazy transformations.

### 10. Concurrency models

```
Threads         → I/O-bound
Multiprocessing → CPU-bound
Asyncio         → High concurrency I/O
```

- **Threads:** good for I/O-bound tasks; limited by GIL for CPU-bound.
- **Multiprocessing:** true parallelism via multiple processes; higher overhead, inter-process communication.
- **Asyncio:** single-threaded cooperative concurrency for I/O-bound workloads.
- **concurrent.futures:** high-level API over threads/processes (`ThreadPoolExecutor`, `ProcessPoolExecutor`).

Choice depends on CPU vs I/O, latency requirements, and deployment constraints — e.g. an I/O-bound LLM-calling service (asyncio) vs. a CPU-bound embedding/reranking job (multiprocessing).

### 11. Type hints

```python
def add(a: int, b: int) -> int:
    return a + b
```

Type hints (PEP 484) annotate function signatures and variables, enabling static analysis (`mypy`) and better IDE support. They don't enforce types at runtime by default but significantly improve maintainability and API clarity. Senior fluency includes `Optional`, `Union`/`|`, `TypedDict`, `Protocol`, and generics — and knowing where they add noise vs. value (e.g., validating tool-call arguments and structured LLM outputs).

### 12. Dataclasses

```python
from dataclasses import dataclass

@dataclass
class User:
    id: int
    name: str
```

`@dataclass` auto-generates `__init__`, `__repr__`, `__eq__`, and more for classes that mainly store data. `frozen=True` gives immutability; `field(default=..., init=False, repr=False)` fine-tunes behavior. Senior judgment question: when to reach for `dataclass` vs. `NamedTuple` vs. a plain class vs. a **Pydantic model** — especially relevant for structured LLM outputs.

### 13. `__slots__`

```python
class Point:
    __slots__ = ("x", "y")
```

Restricts allowed attributes and removes the per-instance `__dict__`, reducing memory and sometimes speeding attribute access (`No __dict__ → smaller objects`). Useful for large numbers of small objects (AST nodes, high-volume models). Trade-off: no arbitrary attributes, some inheritance constraints.

### 14. Packaging

```
pyproject.toml
[build-system]
[project]
```

Modern packaging uses `pyproject.toml` to declare build system and metadata, with tools like `pip`, `build`, `setuptools`, `poetry`/`uv`. Distributions are typically **wheels** (pre-built) or **sdists** (source). Good packaging means reproducible installs, clear dependency boundaries, and pinning for reproducible Docker builds.

### 15. Virtual environments

```
project/
    venv/
        bin/python
        site-packages/
```

Virtual environments (`venv`, `virtualenv`, `conda`) create isolated Python environments with their own interpreter and site-packages, preventing dependency conflicts between projects. Standard practice: one venv per project, pinned dependencies in `requirements.txt` or `pyproject.toml`.

### 16. Exceptions

```
BaseException
   Exception
      ValueError
      TypeError
```

Python exceptions form a hierarchy rooted at `BaseException`/`Exception`. Catch specific exceptions rather than bare `Exception` to avoid masking bugs. Best practices: narrow `try` blocks, log with context, avoid exceptions for normal control flow in hot paths. Know `raise`, `raise ... from ...`, and bare `raise` inside `except` for exception chaining.

**Senior design question:** how do you design exception hierarchies for a service calling multiple external APIs (Anthropic, OpenAI, a ticketing system)? Build clean `try/except` boundaries — don't let raw provider exceptions leak into business logic.

### 17. Logging

```
logger → handler → formatter → output
```

```python
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
```

The `logging` module provides hierarchical loggers, handlers, and formatters for level/output/format configuration. In production: structured logging, correlation-ID propagation, never `print` for observability.

### 18. Testing (pytest, mocking)

```python
@pytest.fixture
def db():
    ...
```

`pytest` offers test discovery, **fixtures** for setup/teardown, **parametrization** for data-driven tests, and `unittest.mock` integration for external dependencies. Senior practice: isolate side effects, use factories/builders, keep tests fast and deterministic for CI.

**LLM-specific angle:** how do you write testable code around external LLM calls — mocking, dependency injection, recorded fixtures (VCR-style) — without making tests brittle or slow?

### 19. Performance profiling

```
cProfile → stats → optimize hotspots
```

Profile before optimizing — `cProfile`, `py-spy`, `line_profiler`, `timeit`, or logging timers. Common optimizations: reduce Python-level loops (vectorize with NumPy), cache expensive computations, avoid unnecessary allocations, move hot paths to C extensions/Cython. Algorithmic improvements usually beat micro-optimizations. Separates people who've debugged production latency from people who guess.

### 20. Memory leaks

```
Cycles + __del__
Global caches
Lingering references
```

Typical causes: reference cycles with `__del__`, global caches that never evict, large collections kept alive unintentionally, big objects held in closures. Detection: `tracemalloc`, `objgraph`, heap profilers. Fixes: break cycles, `weakref` for caches, tight variable scoping, explicit eviction policies. Directly relevant to a long-lived agent process accumulating conversation history or embeddings in memory.

### 21. Mutable default arguments

```python
def f(x, acc=[]):        # BAD — evaluated once, shared across calls
    ...

def f(x, acc=None):      # GOOD
    if acc is None:
        acc = []
```

Defaults are evaluated **once**, at function-definition time, so a mutable default is shared across all calls — a classic gotcha and a senior-level red flag to avoid entirely.

### 22. Import system

```
import module
   ↓
sys.meta_path
   ↓
sys.modules cache
```

Python's import system searches `sys.meta_path` finders and `sys.path`, loads modules, and caches them in `sys.modules` — subsequent imports reuse the cache. Enables lazy imports and custom loaders (zip files, remote sources); affects startup time and memory. Circular imports resolve via partially initialized modules, a source of subtle bugs. Know the difference between absolute and relative imports, and what `__init__.py` does when structuring a multi-module service.

### 23. Dunder methods

```
__str__, __repr__, __eq__, __len__, __iter__, __enter__, __exit__, __hash__
```

"Dunder" methods define how objects integrate with Python syntax and built-ins — operator overloading, custom containers, context managers. Implementing them correctly gives idiomatic APIs. Know why `__eq__` and `__hash__` must stay consistent (objects that compare equal must hash equal, or they break in sets/dicts).

### 24. ORM internals

```
Model fields → descriptors
Model class  → metaclass
Session      → identity map
```

ORMs like SQLAlchemy or Django ORM use **descriptors** for fields, **metaclasses** for model registration/table mapping, and reflection to generate SQL from Python models. They manage sessions, identity maps, and lazy loading. Understanding this helps avoid N+1 queries, manage transactions, and know when to drop to raw SQL.

### 25. REST APIs

```
Router → Handler → Service → Repository → DB
```

A scalable REST API in Python typically uses FastAPI or Django REST Framework: clear layer separation (routers/views, schemas/serializers, services, repositories), validation via Pydantic/DRF serializers, proper status codes, pagination, error handling, versioning, and security (auth, rate limiting, CORS, input sanitization). Design for idempotency, observability, and backward compatibility.

### 26. Async database access

```
asyncpg → connection pool → await queries
```

Async DB drivers (`asyncpg`, `databases`, SQLAlchemy async) integrate with `asyncio` to avoid blocking the event loop. **Connection pools** reuse connections and bound concurrency. Key concerns: transaction boundaries, backpressure, and ensuring blocking operations (CPU, sync I/O) never run directly in the event loop.

### 27. Caching strategies

```
LRU Cache
Redis Cache
TTL-based Cache
```

- **In-process**: `functools.lru_cache`, custom dict caches.
- **Distributed**: Redis/Memcached for shared cache across instances.
- **Patterns**: cache-aside (read-through), write-through, write-behind, TTLs, invalidation on change.

Balance freshness vs. performance; design cache keys and eviction carefully to avoid stale/inconsistent data. Know how to implement an LRU cache both via `functools.lru_cache` and by hand.

### 28. Message queues

```
Producer → Queue → Consumer
```

Python integrates with RabbitMQ, Kafka, SQS via `kombu`, `aio_pika`, `confluent-kafka`. Design producers/consumers, choose delivery semantics (at-least-once, at-most-once, exactly-once), handle retries and dead-letter queues. Queues decouple services, smooth load, and enable event-driven architectures.

### 29. CI/CD for Python

```
Lint → Test → Build → Deploy
```

1. **Lint & format:** `flake8`, `black`, `isort`, `mypy`.
2. **Tests:** `pytest` with coverage.
3. **Build & package:** wheels or containers.
4. **Deploy:** servers, containers, or serverless (e.g. AWS Lambda).

Enforce reproducible builds, environment parity (dev/stage/prod), and rollbacks. Secrets/config externalized (env vars, vaults) — never committed.

### 30. Clean architecture in Python

```
Entities → Use Cases → Interfaces → Adapters → Framework
```

Clean architecture emphasizes **layers** and **dependency inversion**: domain entities/use-cases at the core, interfaces (ports) for persistence/messaging/external APIs, adapters (repositories, controllers) implementing those interfaces, and frameworks (Django/FastAPI) at the outer layer. In Python: clear module boundaries, dependency injection, and keeping framework-specific code out of the domain layer.

---

## Bonus: LLM/AI-backend-flavored questions

Questions specific to senior AI/backend roles (e.g. FastAPI + LangGraph/MCP-style services) not fully covered above.

31. **`is` vs. `==`.** Identity vs. equality — distinguishes people who've debugged a subtle bug from people who haven't.

32. **LEGB scoping and `global`/`nonlocal`.** Baseline literacy for reasoning about closures and nested functions.

33. **Shallow copy vs. deep copy.** Practical relevance: copying conversation state/message history without aliasing bugs.

34. **List/dict/set comprehensions vs. generator expressions — when to choose which.** Tests memory-awareness, not just syntax fluency.

35. **`dict` insertion-order guarantee and dict/set lookup performance.** Tests whether "average-case O(1)" understanding is real, not memorized.

36. **`@staticmethod` vs. `@classmethod` vs. instance method.** Common in code review, expected fluency even if not asked directly.

37. **Pydantic v1 vs. v2 in practice**, and how to use it to validate/repair malformed LLM JSON output.

38. **Bounding concurrent async work** — running multiple tool calls or API requests concurrently with `asyncio`, and bounding concurrency with `asyncio.Semaphore` to avoid rate-limit errors.

39. **Race conditions in async code** — have you actually hit one (e.g. shared state across concurrent tool executions)? Tests real experience vs. definition recall.

40. **Timeouts and cancellation** — adding a timeout to an async LLM call, and what happens to the underlying task if cancellation isn't handled properly.

41. **Config/secrets management** — env vars, `pydantic-settings`, vault integration — and what you never do (commit secrets, log them, etc).

42. **Code review instincts** — reviewing a PR that adds a new LLM-calling code path: what are you looking for beyond "does it work"? (Error handling boundaries, retry/timeout behavior, cost/latency impact, observability, test coverage.)

43. **A production bug from Python's flexibility** — duck typing, dynamic attributes, metaprogramming causing a real incident: how did you find it, and how did you prevent a recurrence? Behavioral/technical hybrid — leverages real production experience and tests whether you've been burned by Python's looseness and adapted.

---

*Scope note:* this set assumes senior-level fluency in basic syntax already exists — no "what is a list" or "what is `def`." It skews toward patterns that show up in production and LLM/agent service code (async I/O around API calls, Pydantic validation, retry/backoff decorators, concurrency bounding) alongside the classic CPython-internals questions (GIL, memory model, descriptors, metaclasses) that separate senior candidates from mid-level ones.
