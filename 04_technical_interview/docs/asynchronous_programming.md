# Asynchronous Programming

> **Purpose:** async/await interview reference — keyword features, pros and cons, and the key differences (article-style notes with external references).

## Async vs Await

The async and await keywords are fundamental to asynchronous programming in C#. They work together to simplify the process of writing non-blocking code, making it easier to read and maintain. Let's take a closer look at its explanation:

### Async Keyword

The async keyword is used to mark a method as asynchronous. It indicates that the method can perform a non-blocking operation and return a Task or Task\<TResult\> object. Here are some features of the async keyword:

- It can be applied to methods, lambda expressions, and anonymous methods.
- It cannot be used with properties or constructors.
- An async method should contain at least one await expression.
- An async method can have multiple await expressions, allowing for multiple non-blocking operations.
- Async methods can be chained together, allowing for complex asynchronous workflows.

### Await Keyword

The await keyword is used within an async method to temporarily suspend its execution and yield control back to the calling method until the awaited task is completed. This allows other tasks to continue executing in the meantime, ensuring that the application remains responsive. Some features of the await keyword include:

- It can only be used within an async method.
- It can be applied to any expression that returns a Task or Task\<TResult\> object.
- It unwraps the result of the Task\<TResult\> object, allowing you to work with the result directly.
- It automatically handles [exceptions](https://www.bytehide.com/blog/5-good-practices-for-error-handling-in-c/) thrown by the awaited task, allowing you to catch and handle them in the calling async method.
- It can be used with using, [foreach](https://www.bytehide.com/blog/foreach-loop-csharp/), and lock statements in C# 8.0 and later.

---

## Pros and Cons of Async and Await

Using async and await in C# offers several benefits, including:

- **Simplified asynchronous code:** async and await make writing asynchronous code much simpler and more readable, resembling synchronous code while still providing the benefits of asynchronous execution.
- **Improved application responsiveness:** by offloading time-consuming tasks to separate threads, async and await can help make your application more responsive and user-friendly.
- **Efficient resource utilization:** asynchronous programming allows your application to make better use of system resources, such as CPU, memory, and I/O.
- **Easier exception handling:** the await keyword automatically handles exceptions thrown by awaited tasks, simplifying exception handling in asynchronous code.

However, there are also some potential drawbacks to consider:

- **Overhead:** using async and await can introduce a small performance overhead compared to synchronous code, as it involves creating and managing tasks. However, this overhead is usually negligible compared to the benefits of improved responsiveness and resource utilization.
- **Potential for deadlocks:** incorrect use of async and await can lead to deadlocks, especially when mixing synchronous and asynchronous code. It is essential to follow best practices and avoid common pitfalls to prevent deadlocks.
- **Learning curve:** asynchronous programming can be challenging to learn and understand, especially for developers who are new to the concept. It requires a [solid](https://www.bytehide.com/blog/solid-principles-in-csharp/) understanding of tasks, threading, and other related concepts.

---

## Key Differences Between Async and Await

- The async keyword is used to mark a method as asynchronous, while the await keyword is used to temporarily suspend the execution of an async method and yield control back to the calling method until the awaited task is completed.
- The async keyword is applied to methods, lambda expressions, and anonymous methods, whereas the await keyword is used within an async method and can be applied to any expression returning a Task or Task\<TResult\> object.
- The async keyword indicates that a method can perform non-blocking operations, whereas the await keyword enables other tasks to continue executing while the async method's execution is temporarily suspended.
