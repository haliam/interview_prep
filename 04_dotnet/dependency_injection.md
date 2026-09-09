# Dependency Injection — Service Lifetimes

> **Purpose:** Reference for .NET dependency injection service lifetimes — Singleton, Scoped, and Transient — with examples and when to use each.

---

## Quick Guide

- Use **Singleton** for reusable and global services like **cache** or **configuration**.
- Use **Scoped** to maintain data and transaction consistency within a single request, such as a database context or authentication.
- Use **Transient** for stateless services that perform quick tasks like **validations** or **notifications**.

---

## Lifetimes Comparison

| Lifecycle | Description | Service Examples | When to Use |
|---|---|---|---|
| **Singleton** | A single instance shared throughout the entire application's lifetime. Ideal for global data or services that don't change frequently or are costly to initialize. | Global configuration service (reads app settings, third-party endpoints); Appointment cache service (stores appointments that don't change often); Logger for tracking application events; Distributed database connection. | Services with shared state that should remain consistent across all requests. When initialization is expensive (e.g., external connections). When resource synchronization or caching is necessary across the application. |
| **Scoped** | Creates a new instance per HTTP request. All consumers within the same request get the same instance. | `DbContext` for handling appointment and user data (Entity Framework); Transaction management services to ensure the entire appointment booking operation is consistent; Authentication management service (validating user tokens for the current request); Unit of Work for grouped database operations. | When **consistency** is required throughout a single request or transaction. Authenticated user data that needs to persist during the entire operation (e.g., user booking an appointment). Services that share temporary data during the request. |
| **Transient** | Creates a new instance every time it is requested. Ideal for stateless, lightweight services. | Data validation services (checking if appointment fields are complete or correct); Notification services (sending emails or SMS when an appointment is confirmed); Data formatting services (for correctly displaying appointment dates or times); Report generator for users' appointment history (generated on demand). | When the service is **stateless** and **lightweight**. For processes that run quickly and finish, such as validations. When there's no need to share state between requests. |
