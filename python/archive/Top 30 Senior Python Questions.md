

# **Top 30 Senior Python Questions**



### 1. Python GIL

The **Global Interpreter Lock** ensures only one thread executes Python bytecode at a time in CPython. It simplifies memory management (reference counting) but prevents true CPU‑bound parallelism with threads; for CPU‑bound workloads use `multiprocessing` or native extensions (C, Cython, NumPy). For I/O‑bound tasks, threads and `asyncio` still work well because the GIL is released during blocking I/O.

### 2. Memory model

CPython uses **reference counting** for each object plus a **generational garbage collector** to detect and clean cyclic references. Small objects are allocated via `pymalloc`, optimized for speed and locality. Understanding this matters for memory leaks (e.g., reference cycles with `__del__`), large object lifetimes, and performance tuning.

### 3. Asyncio and event loop

`asyncio` provides a **single‑threaded event loop** that schedules coroutines (`async def`) cooperatively. Coroutines yield control with `await` when doing I/O or other awaitable operations, allowing thousands of concurrent tasks with low overhead. Use `asyncio` for high‑concurrency I/O‑bound systems (APIs, crawlers, chat servers); avoid it for CPU‑bound work unless you offload to threads/processes.

### 4. Generators

Generators (`def f(): yield x`) produce values **lazily**, resuming execution at each `yield`. They implement the iterator protocol automatically and use **O(1) memory** regardless of the number of values produced. Ideal for streaming large files, pipelines, and infinite sequences. Features like `yield from` allow delegation to sub‑generators.

### 5. Decorators

A decorator is a callable that takes a function/class and returns a wrapped callable, typically adding cross‑cutting behavior (logging, auth, caching, retries). Implemented as:

python

```
def deco(fn):
    def wrapper(*args, **kwargs):
        # pre
        result = fn(*args, **kwargs)
        # post
        return result
    return wrapper
```

With parameters, you add another layer: `deco(config)(fn)`.

### 6. Descriptors

A **descriptor** is any object defining `__get__`, `__set__`, or `__delete__`. They control attribute access and underpin `property`, `classmethod`, `staticmethod`, and many ORMs. Example: a validated field descriptor that enforces type or range on assignment. They’re key for building declarative APIs (ORM models, form fields).

### 7. Metaclasses

A metaclass is the “class of a class”—it customizes class creation by overriding `__new__`/`__init__` on the metaclass. Common uses: automatic registration of subclasses, enforcing interfaces, injecting methods/attributes, or building DSLs (ORM base classes, frameworks). You specify them with `class MyClass(metaclass=MyMeta): ...`.

### 8. Context managers

Context managers implement `__enter__` and `__exit__` to guarantee setup/teardown around a `with` block:

python

```
class CM:
    def __enter__(self): ...
    def __exit__(self, exc_type, exc, tb): ...
```

They ensure deterministic cleanup (files, locks, transactions). You can also use `contextlib.contextmanager` to write them as generator functions.

### 9. Iterators

The **iterator protocol** is: an object with `__iter__` returning itself and `__next__` raising `StopIteration` when done. `for` loops and many built‑ins rely on this. Generators are iterators automatically. Custom iterators are useful for streaming, pagination, and lazy transformations.

### 10. Concurrency models

- **Threads:** Good for I/O‑bound tasks; limited by GIL for CPU‑bound.
- **Multiprocessing:** True parallelism via multiple processes; higher overhead, inter‑process communication.
- **Asyncio:** Single‑threaded cooperative concurrency for I/O‑bound workloads.
- **concurrent.futures:** High‑level API over threads/processes (`ThreadPoolExecutor`, `ProcessPoolExecutor`).

Choice depends on CPU vs I/O, latency requirements, and deployment constraints.

### 11. Type hints

Type hints (PEP 484) annotate function signatures and variables, enabling static analysis with tools like `mypy` and better IDE support:

python

```
def add(a: int, b: int) -> int: ...
```

They don’t enforce types at runtime by default but significantly improve maintainability, refactoring safety, and API clarity, especially in large codebases.

### 12. Dataclasses

`@dataclass` auto‑generates `__init__`, `__repr__`, `__eq__`, and more for classes that mainly store data:

python

```
from dataclasses import dataclass

@dataclass
class User:
    id: int
    name: str
```

Options like `frozen=True` give immutability; `field(default=..., init=False, repr=False)` fine‑tunes behavior. They reduce boilerplate and integrate well with typing.

### 13. `__slots__`

Defining `__slots__` on a class restricts allowed attributes and removes the per‑instance `__dict__`, reducing memory and sometimes speeding attribute access:

python

```
class Point:
    __slots__ = ("x", "y")
```

Useful in large numbers of small objects (e.g., AST nodes, models in high‑volume systems). Trade‑off: less flexibility (no arbitrary attributes, some inheritance constraints).

### 14. Packaging

Modern packaging uses `pyproject.toml` to declare build system and metadata, with tools like `pip`, `build`, `setuptools`, `poetry`. Distributions are typically **wheels** (pre‑built) or **sdists** (source). Good packaging means reproducible installs, clear dependency boundaries, and compatibility across environments.

### 15. Virtual environments

Virtual environments (`venv`, `virtualenv`, `conda`) create isolated Python environments with their own interpreter and site‑packages. They prevent dependency conflicts between projects and keep system Python clean. Standard practice: one venv per project, pinned dependencies in `requirements.txt` or `pyproject.toml`.

### 16. Exception hierarchy and handling

Python exceptions form a hierarchy rooted at `BaseException` and `Exception`. You typically catch specific exceptions (`ValueError`, `TypeError`, `IOError`, `HTTPError`) rather than `Exception` to avoid masking bugs. Best practices: narrow `try` blocks, log with context, avoid using exceptions for normal control flow in hot paths.

### 17. Logging

The `logging` module provides hierarchical loggers, handlers, and formatters. You configure log levels, outputs (console, file, syslog, JSON), and formats centrally:

python

```
import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
```

In production, you use structured logging, propagate correlation IDs, and avoid `print` for observability.

### 18. Testing (pytest, mocking)

`pytest` offers simple test discovery, powerful **fixtures** for setup/teardown, **parametrization** for data‑driven tests, and integration with `unittest.mock` for mocking external dependencies. Senior‑level practice includes isolating side effects, using factories/builders, and keeping tests fast and deterministic to fit CI pipelines.

### 19. Performance and profiling

You profile before optimizing—using `cProfile`, `profile`, `timeit`, or line‑profilers to find hotspots. Common optimizations: reduce Python‑level loops (use vectorized NumPy), cache expensive computations, avoid unnecessary allocations, and move critical paths to C extensions or `cython`. Algorithmic improvements usually beat micro‑optimizations.

### 20. Memory leaks

Typical causes: reference cycles involving objects with `__del__`, global caches that never evict, large lists/dicts kept alive unintentionally, or holding onto big objects in closures. Detection tools include `tracemalloc`, `objgraph`, and heap profilers. Fixes: break cycles, use `weakref` for caches, scope variables tightly, and design explicit eviction policies.

### 21. Mutable default arguments

Defaults are evaluated **once** at function definition time:

python

```
def f(x, acc=[]): ...
```

This means `acc` is shared across calls, causing surprising behavior. Correct pattern:

python

```
def f(x, acc=None):
    if acc is None:
        acc = []
```

Senior engineers treat this as a red‑flag and avoid mutable defaults entirely.

### 22. Import system

Python’s import system searches `sys.meta_path` finders and `sys.path` for modules, loads them, and caches them in `sys.modules`. Subsequent imports reuse the cached module. This enables lazy imports, custom loaders (zip files, remote sources), and affects startup time and memory. Circular imports are resolved via partially initialized modules, which can cause subtle bugs.

### 23. Dunder methods

“Dunder” methods (`__str__`, `__repr__`, `__eq__`, `__hash__`, `__len__`, `__iter__`, `__enter__`, `__exit__`, etc.) define how objects integrate with Python syntax and built‑ins. Implementing them correctly gives natural, idiomatic APIs: custom containers, numeric types, context managers, and more. They’re the backbone of operator overloading and protocol adherence.

### 24. ORM internals

ORMs like SQLAlchemy or Django ORM use **descriptors** for fields, **metaclasses** for model registration and table mapping, and reflection/introspection to generate SQL from Python models. They manage sessions, identity maps, and lazy loading. Understanding this helps you avoid N+1 queries, manage transactions, and know when to drop down to raw SQL.

### 25. REST APIs (FastAPI/Django REST)

A scalable REST API in Python typically uses FastAPI or Django REST Framework:

- Clear separation of layers: routers/views, schemas/serializers, services, repositories.
- Validation via Pydantic (FastAPI) or DRF serializers.
- Proper status codes, pagination, error handling, and versioning.
- Security: auth, rate limiting, CORS, input sanitization.

You design for idempotency, observability, and backward compatibility.

### 26. Async database access

Async DB drivers (e.g., `asyncpg`, `databases`, `SQLAlchemy` async) integrate with `asyncio` to avoid blocking the event loop. You use **connection pools** to reuse connections and limit concurrency. Key concerns: transaction boundaries, backpressure, and ensuring that blocking operations (CPU, sync I/O) don’t run in the event loop.

### 27. Caching strategies

Common strategies:

- **In‑process**: `functools.lru_cache`, custom dict caches.
- **Distributed**: Redis/Memcached for shared cache across instances.
- **Patterns**: cache‑aside (read‑through), write‑through, write‑behind, TTLs, invalidation on change.

You balance freshness vs performance and design cache keys and eviction carefully to avoid stale or inconsistent data.

### 28. Queue systems

Python integrates with message queues like RabbitMQ, Kafka, SQS via libraries (`kombu`, `aio_pika`, `confluent-kafka`). You design producers/consumers, choose semantics (at‑least‑once, at‑most‑once, exactly‑once), and handle retries and dead‑letter queues. Queues decouple services, smooth load, and enable event‑driven architectures.

### 29. CI/CD for Python

A typical pipeline:

1. **Lint & format:** `flake8`, `black`, `isort`, `mypy`.
2. **Tests:** `pytest` with coverage.
3. **Build & package:** wheels or containers.
4. **Deploy:** to servers, containers, or serverless (e.g., AWS Lambda).

You enforce reproducible builds, environment parity (dev/stage/prod), and rollbacks. Secrets and config are externalized (env vars, vaults).

### 30. Clean architecture in Python

Clean architecture emphasizes **layers** and **dependency inversion**:

- Domain entities and use‑cases at the core.
- Interfaces (ports) for persistence, messaging, external APIs.
- Adapters (repositories, controllers) implementing those interfaces.
- Frameworks (Django/FastAPI) at the outer layer.

In Python, you enforce this via clear module boundaries, dependency injection, and avoiding framework‑specific code in the domain layer.

If you want, next step could be: turn these into a **mock interview script** or a **flashcard set** for spaced repetition.