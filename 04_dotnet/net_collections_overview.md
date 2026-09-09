# .NET Collections Framework Overview

> **Purpose:** Categorized overview of the main collection types available in the .NET Framework — when to use each collection and how to initialize it in C#.

---

## **📕 List Data Structures**

### **List\<T\>**

- **Use case**: A dynamic array for ordered elements with index-based access.

- **Initialization**:

```csharp
var list = new List<int> { 1, 2, 3 };
```

### **LinkedList\<T\>**

- **Use case**: Efficient insertions and deletions at any position.

- **Initialization**:

```csharp
var linkedList = new LinkedList<string>();
linkedList.AddLast("first");
```

### **ObservableCollection\<T\>**

- **Use case**: Collection that notifies UI elements of changes (commonly used in WPF).

- **Initialization**:

```csharp
var observable = new ObservableCollection<double> { 1.1, 2.2 };
```

---

## **🔶 Projection / Set**

### **HashSet\<T\>**

- **Use case**: Stores unique elements with fast lookup.

- **Initialization**:

```csharp
var hashSet = new HashSet<string> { "apple", "banana" };
```

### **SortedSet\<T\>**

- **Use case**: Stores unique elements in sorted order.

- **Initialization**:

```csharp
var sortedSet = new SortedSet<int> { 3, 1, 2 };
```

---

## **🟨 Dictionary Structures**

### **Dictionary\<TKey, TValue\>**

- **Use case**: Key-value pairs with fast access by key.

- **Initialization**:

```csharp
var dictionary = new Dictionary<string, int>
{
    { "one", 1 },
    { "two", 2 }
};
```

### **SortedDictionary\<TKey, TValue\>**

- **Use case**: Key-value pairs sorted by key.

- **Initialization**:

```csharp
var sortedDictionary = new SortedDictionary<int, string>
{
    { 2, "two" },
    { 1, "one" }
};
```

### **SortedList\<TKey, TValue\>**

- **Use case**: Sorted key-value pairs with index access.

- **Initialization**:

```csharp
var sortedList = new SortedList<string, int>
{
    { "a", 1 },
    { "b", 2 }
};
```

---

## **💗 Stack**

### **Stack\<T\>**

- **Use case**: Last-in, first-out (LIFO) collection.

- **Initialization**:

```csharp
var stack = new Stack<char>();
stack.Push('A');
```

---

## **🔵 Queue**

### **Queue\<T\>**

- **Use case**: First-in, first-out (FIFO) collection.

- **Initialization**:

```csharp
var queue = new Queue<string>();
queue.Enqueue("message");
```

---

## **🟩 Concurrent Collections**

### **ConcurrentDictionary\<TKey, TValue\>**

- **Use case**: Thread-safe dictionary.

- **Initialization**:

```csharp
var concurrentDict = new ConcurrentDictionary<int, string>();
concurrentDict.TryAdd(1, "one");
```

### **ConcurrentQueue\<T\>**

- **Use case**: Thread-safe FIFO queue.

- **Initialization**:

```csharp
var concurrentQueue = new ConcurrentQueue<int>();
concurrentQueue.Enqueue(10);
```

### **ConcurrentStack\<T\>**

- **Use case**: Thread-safe LIFO stack.

- **Initialization**:

```csharp
var concurrentStack = new ConcurrentStack<string>();
concurrentStack.Push("data");
```

### **BlockingCollection\<T\>**

- **Use case**: Thread-safe collection with blocking and bounding capabilities.

- **Initialization**:

```csharp
var blockingCollection = new BlockingCollection<int>();
blockingCollection.Add(5);
```
