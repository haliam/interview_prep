# Object-Oriented Programming

> **Purpose:** OOP interview reference — the four principles (Abstraction, Encapsulation, Inheritance, Polymorphism) and Composition vs Inheritance.

## What is Object-Oriented Programming (OOP)?

Object-Oriented Programming is the strategy or style of developing applications based on objects.

[Principles of Object-Oriented Programming](https://www.interviewbit.com/blog/principles-of-oops/#principles-of-object-oriented-programming):

- [Abstraction](https://www.interviewbit.com/blog/principles-of-oops/#abstraction)
- [Encapsulation](https://www.interviewbit.com/blog/principles-of-oops/#encapsulation)
- [Inheritance](https://www.interviewbit.com/blog/principles-of-oops/#inheritance)
- [Polymorphism](https://www.interviewbit.com/blog/principles-of-oops/#polymorphism)

---

## Abstraction

> "Abstraction is the process of capturing the essential characteristics and behavior of an object, eliminating all information that is not necessary at a certain level of knowledge."

**Example:** ATM (cash machine).

---

## Encapsulation

> "Encapsulation is the process by which a group of related properties, methods, and other members are treated as a single unit or object."

**Encapsulation = Data Hiding + Abstraction.**

**Data Hiding:** hiding the data of the class and restricting access to the outside world. Example: using access-specifier keywords like `private` that restrict the data to only being accessible and modifiable in the same class. Outside users cannot access the data.

**Example:** Car.

---

## Inheritance

> "Inheritance is the process of creating new classes based on an existing class. It allows code reuse, facilitates application maintainability, and enables faster development."

- **Base Class (parent):** the class being inherited from.
- **Derived Class (child):** the class that inherits from another class.
- **Single Inheritance:** when there is only one derived class.
- **Multiple Inheritance:** when a child class inherits from more than one base class.
- **Multilevel Inheritance:** when there is a level of inheritance — from class A to class B to class C.
- **Hierarchical Inheritance:** when more than one derived class inherits from one base class.

---

## Polymorphism

> "Polymorphism is the ability of a class or object to behave in different ways."
>
> "Polymorphism describes a pattern in object-oriented programming in which classes have different functionality while sharing a common interface."

**Example:** Animal.

---

## Composition vs Inheritance

> "Classes should achieve [polymorphic](https://en.wikipedia.org/wiki/Polymorphism_(computer_science)) behavior and [code reuse](https://en.wikipedia.org/wiki/Code_reuse) by their [composition](https://en.wikipedia.org/wiki/Object_composition) (by containing instances of other classes that implement the desired functionality) rather than [inheritance](https://en.wikipedia.org/wiki/Inheritance_(computer_science)) from a base or parent class."

**Example:** the problem with class Animal and derived classes Dog, Cat, Fish, Bird.
