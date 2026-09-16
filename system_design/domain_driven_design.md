# Domain-Driven Design

> **Purpose:** Core Domain-Driven Design (DDD) vocabulary and concepts for interview preparation — entities, value objects, aggregates, domain events, services, and strategic design.

## Core Concepts

### What is Domain-Driven Design?

> "It is an approach to software development that seeks to solve domain problems in a semantic way."

### Greenfield Projects

Projects starting from scratch.

### Domain Entities

An entity is an object with a unique identity that persists over time. For example, in a banking application, customers and accounts would be entities.

### Domain Events

Domain events can be used to notify other parts of the system when something happens. As the name suggests, domain events should mean something within the domain. For example, "a record was inserted into a table" is not a domain event. "A delivery was cancelled" is a domain event.

### Value Objects

> "A value object has no identity. It is defined only by the values of its attributes. Value objects are also immutable. To update a value object, you always create a new instance to replace the old one. Value objects can have methods that encapsulate domain logic, but those methods should have no side-effects on the object's state. Typical examples of value objects include colors, dates and times, and currency values."

### Aggregates

An aggregate defines a consistency boundary around one or more entities. Exactly one entity in an aggregate is the root. Lookup is done using the root entity's identifier. Any other entities in the aggregate are children of the root, and are referenced by following pointers from the root. The purpose of an aggregate is to model transactional invariants. An aggregate might consist of a single entity, without child entities. What makes it an aggregate is the transactional boundary.

---

## Services

### Domain Services

- To Prepare

### Application Services

- To Prepare

---

## Strategic Design

### Context Mapping

- To Prepare

### Bounded Context

- To Prepare

### Ubiquitous Language

- To Prepare
