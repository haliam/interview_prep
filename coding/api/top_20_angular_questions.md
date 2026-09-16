# Top 20 Angular Interview Questions

> **Purpose:** Senior-level Angular interview Q&A — change detection, RxJS, signals, DI, architecture, performance, testing, and production readiness — with concise, interview-ready answers.

---

## **1) How does Angular change detection work, and how do you optimize it?**

**Answer:**

- Default strategy checks a whole component subtree; it’s triggered by async events (Zone.js) or explicit signals.

- Use OnPush + immutable inputs, avoid template-heavy computations, and split components.

- Prefer async pipe and pure pipes; measure with profiler and runtime metrics.

---

## **2) What is Zone.js and what does “zoneless” Angular mean?**

**Answer:**

- Zone.js patches async APIs to trigger change detection automatically.

- Zoneless removes Zone.js reliance and shifts to explicit reactivity (signals) or manual triggers.

- Trade-off: potentially better perf/clarity, but you must handle update boundaries correctly.

---

## **3) Explain Angular’s DI system (providers, scopes, and common pitfalls).**

**Answer:**

- DI resolves tokens via hierarchical injectors (root/component/module scopes).

- Provider scope impacts lifecycle and singleton-ness; don’t accidentally create multiple instances.

- Use providedIn: 'root' for true singletons; avoid injecting services into services that create cycles.

---

## **4) Standalone components: why, when, and how does it change architecture?**

**Answer:**

- Standalone reduces NgModule complexity and improves feature encapsulation.

- Prefer feature routes that loadComponent/loadChildren and colocate dependencies.

- Keep public APIs per feature; avoid deep cross-feature imports.

---

## **5) What are Angular signals, and how do they compare to RxJS?**

**Answer:**

- Signals model synchronous reactive state with fine-grained reactivity.

- RxJS excels at async streams, composition, backpressure, and cancellation.

- Use signals for local UI state; RxJS for async workflows and cross-cutting event streams (often together).

---

## **6) RxJS: how do you prevent memory leaks and manage subscriptions?**

**Answer:**

- Prefer async pipe; it subscribes/unsubscribes automatically.

- Use takeUntilDestroyed() (or equivalent) for imperative subscriptions.

- Avoid nested subscriptions; use operators (switchMap, concatMap, mergeMap) appropriately.

---

## **7) RxJS operator trade-offs: when do you use switchMap vs concatMap vs mergeMap?**

**Answer:**

- switchMap: cancel previous request (typeahead/search).

- concatMap: queue requests (order matters).

- mergeMap: parallel requests (order doesn’t matter) with concurrency control.

---

## **8) How does Angular’s template compilation work (AOT/Ivy), and why does it matter?**

**Answer:**

- AOT compiles templates at build time → faster startup and earlier errors.

- Ivy (modern renderer) improves build/runtime characteristics and debugging.

- Impacts bundle size, tree-shaking, and template type checking.

---

## **9) Routing: guards vs resolvers vs interceptors—where should logic live?**

**Answer:**

- Guards: access control/navigation decisions.

- Resolvers: prefetch data for routes (when you truly need blocking navigation).

- Interceptors: cross-cutting HTTP concerns (auth headers, retries, logging).

---

## **10) How do you structure a large Angular app (feature boundaries, monorepo, libs)?**

**Answer:**

- Prefer domain/feature libraries (e.g., Nx) with clear dependency rules.

- Keep UI components, data-access, and domain logic separated.

- Enforce boundaries with lint rules; define a small public API per library.

---

## **11) State management: NgRx vs signals stores vs services with RxJS.**

**Answer:**

- NgRx: strong patterns, devtools, predictable workflows for complex apps.

- Signals-based stores: simpler local/global state with fine-grained updates.

- Services + RxJS: good for medium complexity; keep it disciplined (single source of truth).

---

## **12) HTTP: how do you handle caching, retries, cancellation, and error handling?**

**Answer:**

- Use HttpClient + interceptors for shared policies.

- RxJS enables cancellation (unsubscribe) and retries with backoff.

- Define typed APIs, consistent error models, and avoid silent failures.

---

## **13) Forms: Template-driven vs Reactive forms—what do you choose and why?**

**Answer:**

- Reactive forms for complex validation, dynamic controls, testability.

- Template-driven for simple forms.

- Use custom validators, async validators, and ControlValueAccessor for reusable inputs.

---

## **14) Performance: how do you optimize large lists and expensive UI?**

**Answer:**

- Virtual scrolling (CDK), pagination/infinite scroll.

- trackBy for *ngFor, avoid function calls in templates.

- Defer non-critical UI (deferrable views like @defer) and lazy-load features.

---

## **15) How do you debug change detection issues and “ExpressionChangedAfterItHasBeenCheckedError”?**

**Answer:**

- It usually indicates state mutation after a check (timing/lifecycle mismatch).

- Fix by moving mutations to the right lifecycle, using signals/observables properly, or triggering CD explicitly.

- Avoid hacky setTimeout; understand the underlying cause.

---

## **16) Security: how does Angular mitigate XSS, and where can you still get it wrong?**

**Answer:**

- Angular sanitizes dangerous bindings; templates escape values by default.

- Risks remain with bypassSecurityTrust..., unsafe URLs, and server-side rendering injection.

- Use CSP, validate/sanitize user content, and avoid trusting raw HTML.

---

## **17) Accessibility (a11y): what do you check in Angular apps?**

**Answer:**

- Semantic HTML, ARIA only when needed, keyboard navigation, focus management.

- Use Angular CDK a11y utilities (focus trap, live announcer) when relevant.

- Automate checks with axe/Lighthouse; test with screen readers.

---

## **18) Testing strategy: unit vs integration vs e2e in Angular.**

**Answer:**

- Unit: pure services, pipes, reducers/effects.

- Integration: components with TestBed, harnesses, and DOM queries; mock HTTP boundaries.

- E2E: critical journeys with Playwright/Cypress; keep them stable and few.

---

## **19) SSR/SSG with Angular Universal (or modern SSR): what are the common pitfalls?**

**Answer:**

- Don’t access browser-only APIs on the server; guard with platform checks.

- Hydration issues: non-deterministic rendering, timing, and mismatched state.

- Cache appropriately and be explicit about what runs server vs client.

---

## **20) Production readiness (UK senior signal): DX, CI, observability, and delivery.**

**Answer:**

- DX: linting, formatting, strict TS, consistent patterns, documentation/onboarding.

- CI: fast tests, build reproducibility, dependency audits, PR quality gates.

- Observability: logging, tracing, error reporting, Core Web Vitals, and actionable dashboards.

---

### **Quick follow-ups (when the interviewer goes deeper)**

- Performance: OnPush, trackBy, CDK virtual scroll, zoneless/signal boundaries.

- RxJS: cancellation patterns, operator choice, leak prevention.

- Architecture: feature libraries, dependency rules, public APIs.

- Quality: testing pyramid, a11y, security, SSR/hydration.
