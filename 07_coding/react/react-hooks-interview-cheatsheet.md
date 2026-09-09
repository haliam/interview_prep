# React Hooks Comparison – Technical Interview Cheat Sheet

> **Purpose:** Interview cheat sheet comparing four commonly discussed React Hooks — `useState`, `useEffect`, `useMemo`, and `useCallback` — what they are, when to use them, and common mistakes.

This document compares four commonly discussed React Hooks in interviews:

- `useState`
- `useEffect`
- `useMemo`
- `useCallback`

The goal is to explain **what they are**, **when to use them**, and **common mistakes**, in a clear, interview-friendly way.

---

## 1. useState

### What it is
`useState` is used to **store and update component state**.

### Key characteristics
- Holds **mutable data**
- Updating state **triggers a re-render**
- State persists across renders
- Used for UI and application state

### Example
```jsx
const [count, setCount] = useState(0);

setCount(count + 1);
```

### When to use
- User interactions (clicks, inputs)
- Async data results
- UI state (modals, toggles, forms)

### Interview one-liner
> “`useState` manages mutable state that causes a re-render when updated.”

---

## 2. useEffect

### What it is
`useEffect` is used to run **side effects after rendering**.

### Key characteristics
- Runs **after render**
- Can re-run based on dependencies
- Can return a cleanup function
- Does not return a value

### Example
```jsx
useEffect(() => {
  fetchData();
  return () => cleanup();
}, [id]);
```

### When to use
- Data fetching
- Subscriptions / unsubscriptions
- Timers
- Syncing external systems

### Interview one-liner
> “`useEffect` runs side effects in response to state or prop changes.”

---

## 3. useMemo

### What it is
`useMemo` **memoizes the result of a computation** to avoid unnecessary recalculations.

### Key characteristics
- Caches a **computed value**
- Recomputes only when dependencies change
- Does **not** trigger re-renders
- Purely a **performance optimization**

### Example
```jsx
const total = useMemo(() => {
  return items.reduce((sum, i) => sum + i.price, 0);
}, [items]);
```

### When to use
- Expensive calculations
- Derived data from props/state
- Performance bottlenecks

### Interview one-liner
> “`useMemo` avoids recomputing expensive derived values unless inputs change.”

---

## 4. useCallback

### What it is
`useCallback` **memoizes a function reference**.

### Key characteristics
- Returns a stable function
- Prevents unnecessary re-renders
- Mainly used with `React.memo`
- Equivalent to `useMemo` for functions

### Example
```jsx
const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);
```

### When to use
- Passing callbacks to memoized child components
- Stable dependencies for `useEffect`
- Preventing re-renders due to new function references

### Interview one-liner
> “`useCallback` memoizes functions to keep their reference stable between renders.”

---

## 5. Side-by-Side Comparison

| Hook | Purpose | Triggers Re-render | Stores |
|----|----|----|----|
| useState | Manage state | ✅ Yes | Mutable value |
| useEffect | Run side effects | ❌ No | Nothing |
| useMemo | Cache calculation | ❌ No | Computed value |
| useCallback | Cache function | ❌ No | Function reference |

---

## 6. Common Interview Pitfalls

### ❌ Using `useState` for derived data

Creating extra state that can go out of sync.

✅ Prefer `useMemo` for derived values.

---

### ❌ Using `useMemo` as state

`useMemo` values cannot be updated manually.

✅ Use `useState` for mutable data.

---

### ❌ Overusing `useCallback`

Adds complexity with no real benefit.

✅ Use only when function identity matters.

---

## 7. Decision Guide

- “Does the value change over time?” → **useState**
- “Do I need to do something after render?” → **useEffect**
- “Is this an expensive derived value?” → **useMemo**
- “Do I need a stable function reference?” → **useCallback**

---

## 8. Final Summary

> `useState` manages state,
> `useEffect` handles side effects,
> `useMemo` optimizes expensive calculations,
> and `useCallback` optimizes function references.
> Each hook solves a different problem and should be used intentionally.
