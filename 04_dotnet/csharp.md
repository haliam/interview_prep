# C\#

> **Purpose:** Core C# interview reference — the type system, classes, interfaces, methods and parameters, error handling, and resource management (using / Dispose / yield).

## Part 1 — Core Types

### What is C#? (11.0)

> "It is a strongly typed, object-oriented programming language created by Microsoft that runs on .NET."

### Value Type vs Reference Type

> "**Value types** (by value) are simple types that store a specific piece of data and are stored on the stack."
>
> "**Reference types** are all other types — in particular all object classes in .NET, as well as some primitive types that do not have a given size (such as strings). They are stored on the heap."

### Class

> "A class is like a blueprint or template of a specific object."

All classes in C# contain a default constructor and inherit by default from the `object` class. They provide the following functionalities:

- **Equals:** allows comparing two objects to know whether they are equal.
- **ToString():** by default returns the name of the class.
- **GetHashCode:** returns a number that makes the object unique.

### Class Members

Constructors / Attributes / Constants / Properties / Methods.

### Object

The instance of a class.

### Struct vs Class

> "A struct is a value type while a class is a reference type. Unlike a class, a struct cannot be inherited, cannot be abstract, and cannot be instantiated."

### Abstract Class

> "An abstract class cannot be instantiated and contains at least one abstract method. It is normally used as the base class in the hierarchy, defining common functionality for the inheriting classes."

### Sealed Class

Prevents other classes from inheriting from it.

### Static Class

- It provides functionalities that do not depend on an instance.
- It cannot be instantiated and it cannot be inherited (it is sealed).
- All its members have to be static.
- It cannot contain constructors or instance members.
- Its methods can be called with `ClassName.MemberName`.

**Examples:** Console / Math / Convert.

---

## Part 2 — Interfaces & Inheritance

### Delegate vs Anonymous Method

- To Prepare

### Interface

> "Defines a contract (functionalities) without exposing the how. Does not contain code."
>
> "Facilitates multiple inheritance, testing, and mocking."

### Interface vs Abstract Class

- An abstract class can have implemented methods, while the interface does not.
- A class can implement multiple interfaces but can only inherit from one other class.
- In an abstract class, as in all classes, the members are private by default, while in an interface they are all public.

### Virtual vs Abstract

- A **virtual** method contains an implementation, and classes that inherit from it may or may not override it.
- An **abstract** method does not contain an implementation, and the classes that inherit from it and want to be instantiated have to define an implementation (override); otherwise they would have to be abstract as well.

---

## Part 3 — Methods & Control Flow

### continue vs break vs return

- **continue:** jumps over one iteration.
- **break:** jumps out of a loop.
- **return:** jumps out of a method.

### Can You Return Multiple Values from a Function in C#?

No — you can never return more than one value. It can be worked around with:

1. **(PRO)** Build an object with as many properties as fields you want to return.
2. Use `ref` and `out` parameters.
3. Use `Tuple` — not recommended, since tuples carry no semantics like an object.

### is vs as

- **is (bool):** checks at run time whether the type of the result of an expression is compatible with a given type.
- **as (type):** converts the result of an expression to a given type at run time. If the conversion is not possible, the `as` operator returns null.

### ref vs out Parameters

- **ref:** it has to be initialized, and any modification inside the method will be reflected outside of it.
- **out:** it is not initialized, but a value must be assigned before exiting the method.

### Overloading vs Overriding Methods

- **Overloading:** methods with the same name but different signatures (parameters).
- **Overriding:** methods with behavior modification in inheritance (virtual, abstract).

### Constants and Readonly

- **const:** declared and initialized at compile time, and then it doesn't change.
- **readonly:** assigns the value at run time (constructor), and then it doesn't change.

### Constructor vs Destructor Methods

- **Constructor:** used to instantiate objects.
- **Destructor (finalizers):** cleans up memory and releases the objects' resources.

---

## Part 4 — Language & Runtime

### IQueryable vs IEnumerable vs ICollection

- **IEnumerable** is a collection of objects in memory that you can enumerate.
  - Returns all elements in memory and then does the filtering.
  - Recommended for in-memory collections like List, Array, etc.
- **IQueryable** — LINQ to SQL queries (database queries).
  - Returns only the elements that match a query to the database.
  - For querying out-of-memory collections such as databases, services, etc.

**Usage guide:**

- `IQueryable<T>` — to execute LINQ operations on remote data sources.
- `ICollection<T>` — to add or remove items in the collection.
- `IEnumerable<T>` — for all other scenarios.

### Access Modifiers

**internal** = default access modifier of a class or struct.
**private** = default access modifier for class members.

- **private:** access only from the same class or struct.
- **protected:** access from the same class, or a derived class.
- **internal:** access from the same assembly, but not from a different assembly.
- **public:** access from the same assembly or another assembly that references it.

### Property

> "Used to manage the writing and modification of attributes."

### Exception Handling

- **try:** contains the block of code where an exception can be raised.
- **catch:** defines and processes the type of exception caught.
- **finally:** block of code that executes regardless of the exception. Used to clean up resources, free memory, and log exceptions.
- **throw:** raises an exception.

### using

**using to import namespaces:**

```csharp
using System;
```

**using to import static members:**

```csharp
using static System.Console;
using static System.Math;
```

**using to create an alias** — used to solve name collisions:

```csharp
using Consola = System.Console;
```

**using with classes that implement IDisposable:**

- Defines a scope at the end of which an object is disposed.
- Ensures the Dispose method executes even if an exception occurs in the using block.
- Inside the using block, the object is read-only and cannot be modified or reassigned.
- Dispose is used to release unmanaged resources such as a file, a network connection, or a database connection.

### Dispose Pattern

The Dispose pattern is used only with objects that implement the [IDisposable](https://docs.microsoft.com/en-us/dotnet/api/system.idisposable) interface. It provides a mechanism to release unmanaged resources.

### yield

Use a `yield return` statement to return each element one at a time in an iteration. You can use a `yield break` statement to end the iteration.

```csharp
yield return <expression>;
yield break;
```

### Garbage Collector

- To Prepare

### Delegates & LINQ

> "They are used to write functions that can be passed as arguments and are very useful for writing LINQ expressions."
