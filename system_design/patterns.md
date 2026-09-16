# Patterns

> **Purpose:** Interview reference for architectural patterns (MVC, UoW, Repository, CQRS), the Gang of Four design patterns, design principles (SOLID, KISS, DRY, YAGNI), and development practices (TDD, BDD).

## Architectural Patterns

### MVC

> "MVC is an architectural pattern that helps to create a separation of responsibilities between the data access layer, the business logic layer, and the user interface layer."
>
> "In the MVC pattern, the Model manages the data, the View presents the data, and the Controller handles user input and manages the flow of data between the Model and the View."

- **Model:** mainly contains the entities that represent the domain, the business logic, and the persistence mechanisms of our system.
- **View:** responsible for rendering the user interface and presenting the data to the user in a visually appealing and interactive way.
- **Controller:** acts as an intermediary and orchestrator. Controllers collect user requests, interact with the model, and decide which view should display the data.

**Advantages:**

- The separation of responsibilities with MVC allows for cleaner code and makes apps easier to maintain and more robust.
- Faster team development, as different programmers can handle each part in parallel. This makes it ideal for large application development.
- Multiple views from the same model.
- Ease of unit testing.

### Unit of Work (UoW)

> "The Unit of Work pattern deals with a set of operations in a transactional manner (commit or rollback) and coordinates the writing of changes and the resolution of concurrency problems." — Martin Fowler
>
> "The pattern is used to group one or more operations (usually database CRUD operations) into a single transaction or 'unit of work' so that all operations either pass or fail as one."

- **Concurrency:** when several objects want to make use of the same resource.

**Advantages:**

- Guarantees the cleanliness and integrity of the database.

### Repository

> "The repository pattern creates an abstraction layer between the data access layer and the business logic layer of an application. This abstraction is independent of the rest of the components of the architecture and allows us to work with entities without worrying about how the entities are stored."

**Benefits:**

- Implementing the repository pattern can help insulate your application from changes in the data store and can facilitate automated unit testing or test-driven development (TDD).
- `DbContext` represents a Unit of Work and `DbSet` represents a Repository.

### Event-Driven Architecture Style

- To Prepare

### CQRS

> "CQRS stands for Command and Query Responsibility Segregation, a pattern that separates read and update operations for a data store."
>
> "CQRS separates reads and writes into different models, using **commands** to update data, and **queries** to read data."

- Commands should be task-based, rather than data centric ("Book hotel room", not "set ReservationStatus to Reserved").
- Queries never modify the database. A query returns a DTO that does not encapsulate any domain knowledge.

> "You can physically separate the read data from the write data. For example, the write database might be relational, while the read database is a document database."
>
> "If separate read and write databases are used, they must be kept in sync. Typically this is accomplished by having the write model publish an event whenever it updates the database. Updating the database and publishing the event must occur in a single transaction." — See [Event-driven architecture style](https://docs.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven).

**Benefits:** implementing CQRS in your application can maximize its performance, scalability, and security.

### Dependency Injection (DI)

> "Dependency injection is a principle of object-oriented design. Our classes don't create the objects they need — they are supplied by another 'wrapper' class which will inject the desired implementation into our contract."
>
> "Autofac / Ninject / ServiceProvider are containers."

- **Transient:** a new instance is created every time you request a service.
- **Scoped:** a new instance is generated for every scope (each request is a scope). Within the scope, the service is reused.
- **Singleton:** the service is created only once, and used everywhere.

**Lifetime behavior:**

- With a transient service, a new instance is provided every time an instance is requested, whether it is in the scope of the same HTTP request or across different HTTP requests.
- With a scoped service we get the same instance within the scope of a given HTTP request, but a new instance across different HTTP requests.
- With a singleton service there is only a single instance. An instance is created when the service is first requested, and that single instance will be used by all subsequent HTTP requests throughout the application.

**Lifetime types:**

- **Transient:** transient lifetime services are created each time they are requested. This lifetime works best for lightweight, stateless services.
- **Scoped:** scoped lifetime services are created once per request.
- **Singleton:** singleton lifetime services are created the first time they are requested (or when ConfigureServices is run, if you specify an instance there), and then every subsequent request will use the same instance.

---

## Design Patterns

> "Design patterns are standard solutions to common problems in software development. They provide an already proven and documented solution to software development problems."

### Gang of Four — Creational Design Patterns

- [Abstract Factory](https://springframework.guru/gang-of-four-design-patterns/abstract-factory-design-pattern/). Creates objects without specifying their concrete type.
- [Builder](https://springframework.guru/gang-of-four-design-patterns/builder-pattern/). Used to create complex objects.
- [Factory Method](https://springframework.guru/gang-of-four-design-patterns/factory-method-design-pattern/). Creates objects without specifying the exact class to create.
- [Prototype](https://springframework.guru/gang-of-four-design-patterns/prototype-pattern/). Creates a new object from an existing object.
- [Singleton](https://springframework.guru/gang-of-four-design-patterns/singleton-design-pattern/). Ensures only one instance of an object is created.

### Gang of Four — Structural Design Patterns

- [Adapter](https://springframework.guru/gang-of-four-design-patterns/adapter-pattern/). Allows two incompatible classes to work together by wrapping an interface around one of the existing classes.
- [Bridge](https://springframework.guru/gang-of-four-design-patterns/bridge-pattern/). Decouples an abstraction so two classes can vary independently.
- [Composite](https://springframework.guru/gang-of-four-design-patterns/composite-pattern/). Takes a group of objects into a single object.
- [Decorator](https://springframework.guru/gang-of-four-design-patterns/decorator-pattern/). Allows an object's behavior to be extended dynamically at run time.
- [Facade](https://springframework.guru/gang-of-four-design-patterns/facade-pattern/). Provides a simple interface to a more complex underlying object.
- [Flyweight](https://springframework.guru/gang-of-four-design-patterns/flyweight-pattern/). Reduces the cost of complex object models.
- [Proxy](https://springframework.guru/gang-of-four-design-patterns/proxy-pattern/). Provides a placeholder interface to an underlying object to control access, reduce cost, or reduce complexity.

### Gang of Four — Behavioral Design Patterns

- [Chain of Responsibility](https://springframework.guru/gang-of-four-design-patterns/chain-of-responsibility-pattern/). Delegates commands to a chain of processing objects.
- [Command](https://springframework.guru/gang-of-four-design-patterns/command-pattern/). Creates objects which encapsulate actions and parameters.
- [Interpreter](https://springframework.guru/gang-of-four-design-patterns/interpreter-pattern/). Implements a specialized language.
- [Iterator](https://springframework.guru/gang-of-four-design-patterns/iterator-pattern/). Accesses the elements of an object sequentially without exposing its underlying representation.
- [Mediator](https://springframework.guru/gang-of-four-design-patterns/mediator-pattern/). Allows loose coupling between classes by being the only class that has detailed knowledge of their methods.
- [Memento](https://springframework.guru/gang-of-four-design-patterns/memento-pattern/). Provides the ability to restore an object to its previous state.
- [Observer](https://springframework.guru/gang-of-four-design-patterns/observer-pattern/). Is a publish/subscribe pattern which allows a number of observer objects to see an event.
- [State](https://springframework.guru/gang-of-four-design-patterns/state-pattern/). Allows an object to alter its behavior when its internal state changes.
- [Strategy](https://springframework.guru/gang-of-four-design-patterns/strategy-pattern/). Allows one of a family of algorithms to be selected on-the-fly at run-time.
- [Template Method](https://springframework.guru/gang-of-four-design-patterns/template-method-pattern/). Defines the skeleton of an algorithm as an abstract class, allowing its sub-classes to provide concrete behavior.
- [Visitor](https://springframework.guru/gang-of-four-design-patterns/visitor-pattern/). Separates an algorithm from an object structure by moving the hierarchy of methods into one object.

### Behavioral Design Patterns (Detail)

#### Command

Command turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method argument, delay or queue the request's execution, and support undoable operations.

#### Iterator

Iterator lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

#### Mediator

Mediators reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

#### Observer

Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they're observing.

#### State

State lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

### Anti-Corruption Layer

- To Prepare

### Event Sourcing

- To Prepare

### Circuit Breaker

- To Prepare

---

## Design Principles

### SOLID

Acronym that represents five basic principles of OOP. Robert C. Martin, 2000.

#### S — SRP (Single Responsibility Principle)

> "Classes, modules, or methods... should only have a single responsibility, and only one reason to change."

#### O — OCP (Open/Closed Principle)

> "Classes, modules, or methods... should be open for extension, but closed for modification."

#### L — LSP (Liskov Substitution Principle)

> "The principle defines that objects of a superclass shall be replaceable with objects of its subclasses without breaking the application."
>
> "**Liskov substitution principle:** if class B is a subtype of class A, then objects of type A can be replaced by objects of class B without modifying the behavior of our program."

#### I — ISP (Interface Segregation Principle)

> "Many client-specific interfaces are better than one general-purpose interface."
>
> "**Interface segregation principle:** no class should be forced to implement methods it does not use. Instead of fattening an interface with many methods, it is better to implement several and have the class inherit from the interface it needs."

#### D — DIP (Dependency Inversion Principle)

> "Depend upon abstractions, [not] concretions."
>
> "**Dependency inversion principle:** high-level modules must not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details — but vice versa."

### KISS

> "The **[KISS principle](https://es.wikipedia.org/wiki/Principio_KISS)** (from the English *Keep It Simple, Stupid!*) is an acronym used as a design principle."

### DRY

> "**Don't Repeat Yourself** (***DRY***, also known as 'once and only once') is a process-definition philosophy that promotes the reduction of duplication, especially in computing."

### YAGNI

> "**You Aren't Gonna Need It** (***YAGNI***) consists of never adding functionality except when it is necessary."

---

## TDD

### Test-Driven Development

> "Test-driven development is a practice where tests are written first — usually unit tests — then the code that makes the test pass is implemented, and afterwards the written code is refactored. It reduces the need to debug the code. The result is more robust, more secure, and more maintainable code, and greater development speed."

---

## BDD

### Behavior-Driven Development

- To Prepare
