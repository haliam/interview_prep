# EF Core Interview Questions and Answers

> **Purpose:** Concise answers to 15 EF Core interview questions — loading strategies, concurrency, query translation, inheritance mapping, and migrations.

---

## Questions and Answers

### 1. Difference between Eager, Explicit, and Lazy Loading?

- **Eager:** loads related data immediately
- **Explicit:** loads manually via `Load()`
- **Lazy:** loads on access, needs proxies

### 2. How does EF Core handle cascade delete?

Uses `DeleteBehavior` in relationships. Can be `Cascade`, `Restrict`, or `SetNull`.

### 3. What are shadow properties?

Properties not defined in entity class but tracked by EF Core via model builder.

### 4. How does EF Core handle concurrency conflicts?

Uses concurrency tokens and `DbUpdateConcurrencyException` to detect and resolve conflicts.

### 5. Purpose of AsSplitQuery?

Executes separate SQL queries for related data to avoid Cartesian explosion.

### 6. How does EF Core translate LINQ to SQL?

Via expression trees and query providers that generate SQL commands.

### 7. What are global query filters?

Filters applied to all queries for an entity, e.g., soft delete or multi-tenancy.

### 8. What are owned types?

Complex types with no identity, owned by a single entity, configured via `OwnsOne()`.

### 9. How to execute raw SQL?

Use `FromSqlRaw()` or `ExecuteSqlRaw()` for queries and commands.

### 10. How to optimize EF Core for high-traffic reads?

Use compiled queries, projections, no-tracking queries, and caching.

### 11. How do compiled queries help?

Precompiled LINQ queries reduce overhead and improve performance.

### 12. How to implement soft delete?

Add `IsDeleted` flag and use global query filters to exclude deleted records.

### 13. Table-per-Hierarchy vs Table-per-Type vs Table-per-Concrete-Type?

- **TPH:** single table, discriminator column
- **TPT:** separate table per type
- **TPC:** each type has its own table with all fields

### 14. How to apply migrations in production?

Use `dotnet ef database update` or apply via CI/CD pipeline with proper backups.

### 15. How does connection pooling behave?

Managed by ADO.NET; reuses connections to reduce overhead and improve performance.
