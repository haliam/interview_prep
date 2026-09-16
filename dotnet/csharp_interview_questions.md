# C# Interview Questions and Answers

> **Purpose:** Concise answers to 15 C# interview questions — LINQ, concurrency, async patterns, and language features.

---

## Questions and Answers

### 1. When is a static constructor called?

Before the first instance or static member access.

### 2. How to create a date with specific timezone?

Use `DateTimeOffset` with `TimeZoneInfo.ConvertTime()`.

### 3. Purpose of ToLookup?

Creates a one-to-many dictionary from a sequence.

### 4. Explain deferred execution in LINQ

Query execution is delayed until results are enumerated.

### 5. What are Channels?

Thread-safe data structures for producer-consumer scenarios in async code.

### 6. Name thread-safe collections

`ConcurrentDictionary`, `ConcurrentQueue`, `BlockingCollection`, `ImmutableList`

### 7. How to lock async code?

Use `SemaphoreSlim` or the `AsyncLock` pattern.

### 8. Ways to create a new thread

`Thread`, `Task`, `ThreadPool`, `BackgroundWorker`

### 9. Execute multiple async tasks at once?

Use `Task.WhenAll()`.

### 10. Auto vs Manual reset events?

Auto resets after release; Manual stays signaled until manually reset.

### 11. Volatile vs Interlocked?

`volatile` ensures visibility; `Interlocked` provides atomic operations.

### 12. Task.Run vs TaskFactory.StartNew?

`Task.Run`: simple, default options; `StartNew`: more control over scheduling.

### 13. Method overloading vs overriding?

Overloading: same name, different signature; Overriding: derived class redefines base method.

### 14. Difference between ref, in, out?

- `ref`: read/write
- `in`: read-only
- `out`: must be assigned before return

### 15. How do Async Streams work?

Use `IAsyncEnumerable<T>` with `await foreach` for streaming async data.
