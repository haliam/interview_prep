# Top 20 React Interview Questions

> **Purpose:** Senior-level React interview Q&A — rendering, hooks, performance, state management, data fetching, TypeScript, and Next.js — with concise answers and TypeScript/JSX snippets.

---

## **1) How does React rendering and reconciliation work?**

**Answer:** React builds a Virtual DOM tree. When state/props change, it computes a diff and updates the real DOM efficiently. Fiber (React’s scheduler) breaks work into units, prioritizes tasks, and may interrupt/restart rendering for responsiveness.

---

## **2) What triggers re-renders and how do you prevent unnecessary ones?**

**Answer:** Re-renders happen when **state**, **props**, or **context** change, or a parent re-renders. Prevent by splitting components, stabilizing references (useCallback, useMemo), React.memo, selectors for context/global stores, and moving heavy work off render paths.

```typescript
const Child = React.memo(({ onSubmit }: { onSubmit: () => void }) => { /* ... */ });

function Parent() {
  const onSubmit = useCallback(() => { /* ... */ }, []); // stable ref prevents Child re-render
  return <Child onSubmit={onSubmit} />;
}
```

---

## **3) Explain Hooks internals and the Rules of Hooks**

**Answer:** Hooks rely on **call order** across renders; React assigns state/effect slots by position. Rules: **Only call hooks at top-level** and **inside React functions**, never conditionally. They close over values; manage deps to avoid stale closures.

---

## **4) useEffect: best practices & common pitfalls**

**Answer:** Keep effects **idempotent**, add **all deps** (use ESLint plugin), do **cleanup** on unmount/change, avoid doing **data fetches** in render, beware **stale closures** and **double-invocation** in Strict Mode (for dev). Prefer *event-driven updates* or data libraries over ad‑hoc effects.

```typescript
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id); // cleanup
}, [tick]);
```

---

## **5) Key performance strategies in React**

**Answer:** Component splitting, React.memo, stable callbacks (useCallback), computed values (useMemo), **list virtualization** (e.g., react-window), **code splitting**, **transition updates** (startTransition), and profiling to target real hotspots.

---

## **6) React 18 concurrency: startTransition, useDeferredValue, Suspense**

**Answer:** Mark non-urgent updates with startTransition to keep UI responsive; useDeferredValue defers expensive recalculations; **Suspense** orchestrates loading states for code/data boundaries.

```typescript
import { startTransition } from "react";

startTransition(() => setFilter(input)); // non-urgent; preserves typing responsiveness
```

---

## **7) Server Components vs Client Components; SSR & hydration**

**Answer:** **Server Components (RSC)** run on the server, can access data securely, and don’t ship JS to clients; **Client Components** run in the browser ("use client"). SSR renders HTML on server; hydration attaches event handlers on the client; streaming improves TTFB.

```jsx
// Server Component (Next.js App Router)
export default async function Page() {
  const data = await fetchData();
  return <List data={data} />; // no "use client"
}
```

---

## **8) State management: Redux Toolkit vs Zustand vs Context**

**Answer:**

- **RTK**: Structured, predictable, devtools, good for complex workflows/caching.

- **Zustand**: Minimal, lightweight, selector-based performance.

- **Context**: Fine for **static/config** or narrow state; can re-render widely—use selectors or splitting.

```typescript
// Zustand
const useStore = create<{ count: number; inc: () => void }>((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
}));
```

---

## **9) Data fetching: Effects vs TanStack Query (React Query)**

**Answer:** Prefer **TanStack Query** for caching, retries, deduping, background refetch, mutations, and optimistic updates. Ad-hoc useEffect fetches often reinvent cache logic and error states.

```typescript
const { data, isLoading, error } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });
```

---

## **10) Error Boundaries: when and how?**

**Answer:** Catch **render**, **lifecycle**, and **commit** errors in child trees; not events or async by default. Use class components or wrapper libs; reset with keys or explicit boundaries per feature.

```typescript
class Boundary extends React.Component<{ fallback: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
```

---

## **11) Controlled vs Uncontrolled components**

**Answer:** **Controlled** use React state as the source of truth; good for validation and complex forms. **Uncontrolled** rely on DOM refs; lighter and performant for simple inputs. Mix based on UX/perf needs.

```jsx
// Controlled
<input value={value} onChange={e => setValue(e.target.value)} />
```

---

## **12) Keys in lists and reconciliation**

**Answer:** Keys must be **stable and unique** across siblings to preserve item identity. Avoid using array indices for mutable lists—causes state bugs and re-mounting glitches.

```jsx
{items.map(item => <Row key={item.id} item={item} />)}
```

---

## **13) Code splitting & lazy loading with Suspense**

**Answer:** Split large bundles to reduce initial load; use React.lazy for route/feature components and wrap with Suspense.

```jsx
const Settings = React.lazy(() => import("./Settings"));

<Suspense fallback={<Spinner />}>
  <Settings />
</Suspense>
```

---

## **14) Testing React components effectively**

**Answer:** Use **React Testing Library** to test behavior via user interactions and visible output; avoid testing internals. Mock network boundaries, test accessibility (roles/labels), and write integration tests for flows.

```jsx
render(<Login />);

await user.click(screen.getByRole('button', { name: /submit/i }));
expect(screen.getByText(/welcome/i)).toBeInTheDocument();
```

---

## **15) Accessibility (a11y) essentials**

**Answer:** Use semantic HTML, proper **roles**, labels, and keyboard navigation. Manage **focus** on route changes and dialogs, ensure color contrast, and validate with tools (axe, Lighthouse).

---

## **16) Context performance patterns**

**Answer:** Context value changes re-render **all consumers**. Optimize with **context selectors**, split providers by domain, memoize value, or move dynamic state into external stores (Zustand/Redux).

```typescript
const ThemeContext = createContext<'light' | 'dark'>('light');

// Split: Theme, Auth, Config contexts instead of one global context
```

---

## **17) Designing robust custom hooks**

**Answer:** Encapsulate **one responsibility**, expose minimal API, accept inputs as **stable values** (or refs), and return values/events tailored to the use case. Keep hooks **pure** (no DOM) and test them in isolation.

```typescript
function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn(v => !v), []);
  return { on, toggle };
}
```

---

## **18) TypeScript patterns in React**

**Answer:** Prefer **explicit prop types**, **discriminated unions** for variant components, avoid React.FC for default children inference. Type hooks and contexts carefully (non-null assertions or runtime guards).

```typescript
type ButtonProps =
  | { kind: 'primary'; onClick: () => void }
  | { kind: 'link'; href: string };
```

---

## **19) Next.js (App Router) architecture basics**

**Answer:** Use **nested layouts**, **Server Components** for data-heavy UI, Client Components for interactivity ("use client"). Prefer **streaming SSR**, cache with fetch options, and colocate data logic in server layers for security/perf.

```jsx
// Client component when interactivity is needed
"use client";

export function InteractiveCounter() { /* ... */ }
```

---

## **20) Profiling & diagnosing performance issues**

**Answer:** Use **React DevTools Profiler** to measure commit times and re-render counts; check flamegraphs, analyze props/context churn, and validate improvements with repeatable benchmarks. Guard expensive work behind memoization and split boundaries.

---

### **Final Tips for Senior Interviews**

- Tie answers to **trade-offs** (perf vs complexity).

- Show **measurement mindset** (profiling, budgets, KPIs).

- Prefer **patterns over tools** (e.g., selectors, boundaries, split responsibilities).

- Reference **React 18 features** (Concurrent Rendering, Suspense for data/code) and **RSC** when relevant.
