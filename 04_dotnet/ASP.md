# ASP.NET Core Interview Questions and Answers

> **Purpose:** Concise answers to 15 advanced ASP.NET Core interview questions — routing, middleware, dependency injection, configuration, security, caching, and background services.

---

## Questions and Answers

### 1. How does routing work internally in ASP.NET Core?

Routing maps incoming requests to route handlers using middleware. It builds a route table during app startup and matches requests based on URL patterns.

### 2. What is middleware and how does the pipeline execute?

Middleware are components that handle requests/responses. They execute in order and can short-circuit by not calling `next()`.

### 3. How can a Scoped service be used inside a Singleton safely?

Use `IServiceProvider.CreateScope()` to resolve scoped services within a singleton.

### 4. Explain appsettings.json configuration layering.

Configuration is layered: `appsettings.json` < `appsettings.{Environment}.json` < Environment Variables < Command Line.

### 5. Difference between IOptionsMonitor, IOptionsSnapshot, and IOptions?

- `IOptions`: static config
- `IOptionsSnapshot`: per-request scoped
- `IOptionsMonitor`: supports change notifications

### 6. How do you validate configuration?

Use `IValidateOptions<T>` or manual validation in Startup.

### 7. Why are Minimal APIs faster than Controllers?

They skip MVC overhead like model binding and filters, using direct routing and lightweight handlers.

### 8. How does JWT + Refresh Token rotation work?

Access token is short-lived; refresh token is stored securely and rotated on use to prevent reuse.

### 9. How to implement permissions-based authorization?

Use `IAuthorizationHandler` with resource-based policies and custom requirements.

### 10. How does Output Caching work?

Caches response output based on route/data. Invalidate using tags or programmatic eviction.

### 11. How to add API versioning?

Use `Microsoft.AspNetCore.Mvc.Versioning`. Deprecated URLs can be supported via custom routing.

### 12. How to log request/response safely?

Use middleware with buffering and redact sensitive fields before logging.

### 13. How to stop a BackgroundService gracefully?

Override `StopAsync`, use `CancellationToken`, and clean up resources.

### 14. How to return a file with chunked response?

Use `FileStreamResult` with `Response.Body.WriteAsync` for streaming.

### 15. What is Method Injection in Controllers?

Inject services directly into action methods using `[FromServices]`. Unlike constructor injection, it's per-method.
