# Understanding the .NET Collections Framework

> **Purpose:** Reference guide to .NET collection types — how to choose the right data structure for performance, scalability, and readability.

---

## Choosing the Right Data Structure

The .NET Collections Framework provides a rich set of data structures designed to store, manage, and manipulate data efficiently. Selecting the right collection can significantly improve performance, scalability, and code readability.

---

## List Collections

- `List<T>` — A dynamic array that allows fast indexed access and resizes automatically.
- `LinkedList<T>` — A doubly linked list optimized for frequent insertions and removals.
- `ObservableCollection<T>` — Notifies UI elements when items are added, removed, or updated, commonly used in MVVM applications.

---

## Dictionary Collections

- `Dictionary<TKey, TValue>` — Stores key-value pairs with fast lookup using hash-based access.
- `SortedDictionary<TKey, TValue>` — Maintains elements in sorted order by key using a balanced tree.
- `SortedList<TKey, TValue>` — Stores sorted key-value pairs with faster access but slower insertions compared to `SortedDictionary`.

---

## Set Collections

- `HashSet<T>` — Stores unique elements with fast lookup and no guaranteed order.
- `SortedSet<T>` — Maintains unique elements in sorted order.

---

## Stack Collections

- `Stack<T>` — Follows Last-In-First-Out (LIFO) behavior, commonly used for undo operations and expression evaluation.

---

## Queue Collections

- `Queue<T>` — Follows First-In-First-Out (FIFO) behavior, ideal for task scheduling and buffering.

---

## Concurrent Collections

- `ConcurrentDictionary<TKey, TValue>` — Thread-safe dictionary optimized for multi-threaded environments.
- `ConcurrentQueue<T>` — Thread-safe FIFO collection.
- `ConcurrentStack<T>` — Thread-safe LIFO collection.
- `BlockingCollection<T>` — Provides blocking and bounding capabilities for producer-consumer scenarios.
