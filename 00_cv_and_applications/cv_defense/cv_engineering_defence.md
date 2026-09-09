# Extended Software Engineering Knowledge Table

This document expands your previous table and fills in all missing descriptions with complete, consistent, professional definitions.

## Core Technologies & Principles

| Topic                            | Description                                                  |
| -------------------------------- | ------------------------------------------------------------ |
| C#                               | Modern, object-oriented programming language developed by Microsoft, widely used for backend, desktop, and cloud applications. |
| .NET Core                        | Cross-platform, open-source framework for building high-performance applications, successor to the .NET Framework. |
| .NET Framework                   | Windows-only, monolithic framework used in enterprise applications. |
| ASP.NET Core (C#, MVC, Razor)    | Cross-platform framework for building web apps and APIs using MVC, Razor Pages, and minimal APIs. |
| OOP, SOLID, DDD, CQRS            | Core software engineering principles and patterns for maintainable, scalable, domain-focused applications. |
| Clean Architecture               | Software design approach that separates concerns into layers, ensuring independence from frameworks, UI, and databases. |
| Clean Code                       | Meaningful names, small functions, SRP, DRY, KISS, consistent formatting, avoid magic numbers/strings, proper error handling, comments for why (not what), YAGNI, readability, testability. |
| Design Patterns & Best Practices | Reusable solutions to common software problems, improving structure, flexibility, and maintainability. |

## Agile & Collaboration

| Topic                      | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| Agile                      | Iterative software development methodology focused on collaboration, adaptability, and delivering value quickly. |
| Scrum                      | Agile framework for iterative, incremental software delivery. |
| Kanban                     | Visual workflow method to manage and improve work in progress. |
| Jira                       | Agile project management and issue tracking tool.            |
| Miro                       | Online collaborative whiteboard for brainstorming and planning. |
| [Draw.io](https://Draw.io) | Diagramming tool for workflows, architectures, and processes. |
| Telerik                    | UI component library for building rich web applications.     |

## Architectures

| Topic              | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| Microservices      | Architectural style where applications are composed of small, independent services communicating over APIs. |
| Modular Monolith   | Monolithic application structured into independent, well-defined modules. |
| Vertical Slice     | Feature-based architecture delivering full-stack functionality per slice. |
| Hexagonal          | Ports-and-adapters architecture for decoupled, testable systems. |
| Clean Architecture | Layered design separating concerns for maintainability.      |
| Monolithic         | Single-tiered application where all components are unified.  |
| MVC                | Model-View-Controller pattern for separating UI, logic, and data. |
| CQRS               | Architectural pattern separating read (query) and write (command) operations for scalability and performance. |

## Domain-Driven Design (DDD) & Related Concepts

| Topic                         | Description                                                  |
| ----------------------------- | ------------------------------------------------------------ |
| Domain-Driven Design (DDD)    | Models software based on complex business domains.           |
| Test-Driven Development (TDD) | Write tests before code to guide development.                |
| Mediator Pattern              | Centralizes communication between components.                |
| Repository Pattern            | Abstracts data access logic from business logic.             |
| EF Code First                 | Entity Framework approach where the database schema is generated from C# classes. |

## API Development & Security

| Topic         | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| REST APIs     | Web service architecture style using HTTP methods for stateless communication. |
| Web API       | Framework for building HTTP-based APIs in .NET.              |
| FastEndpoints | High-performance .NET API framework.                         |
| Minimal APIs  | Lightweight API approach in .NET.                            |
| JWT           | Token-based authentication for secure API access.            |
| OAuth         | Open standard for secure authorization without sharing user credentials. |
| Okta          | Identity and access management service.                      |
| Swagger       | API documentation and testing framework.                     |
| Postman       | API development, testing, and collaboration tool.            |

## Azure Cloud & DevOps

| Topic                | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| Azure Cloud          | Microsoft’s cloud computing platform offering hosting, storage, databases, AI, and DevOps services. |
| Azure DevOps         | CI/CD pipelines, repositories, boards, and release management. |
| DevOps (CI/CD)       | Practices and tools for automating software delivery and infrastructure management. |
| Azure Functions      | Serverless compute service for event-driven apps.            |
| Azure B2C            | Identity management for customer-facing apps.                |
| Microsoft Entra ID   | Cloud-based identity and access management.                  |
| Application Insights | Telemetry and monitoring for app performance.                |
| Azure OpenAI         | Azure-hosted version of OpenAI models enabling GPT-powered features. |

## Artificial Intelligence

| Topic                | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| OpenAI               | AI research and deployment company; in your CV context, refers to integrating Azure OpenAI services. |
| GitHub Copilot       | AI-powered coding assistant suggesting code completions in real time. |
| Speech-to-Text (STT) | Converts spoken language into written text.                  |
| Text-to-Speech (TTS) | Converts written text into natural-sounding speech.          |

## Databases & Data Access

| Topic                 | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| SQL Server            | Microsoft’s relational database management system for structured data. |
| Entity Framework (EF) | ORM for .NET that maps objects to database tables.           |
| Dapper                | Lightweight ORM for high-performance data access.            |
| LINQ (Object, SQL)    | Query syntax for collections and databases in .NET.          |
| Stored Procedures     | Precompiled SQL code for database operations.                |
| Cosmos DB             | Globally distributed, multi-model NoSQL database service on Azure. |

## Dependency Injection & Testing

| Topic                                        | Description                                                  |
| -------------------------------------------- | ------------------------------------------------------------ |
| DI & IoC (Ninject, ServiceProvider, Autofac) | Dependency injection frameworks for managing object lifetimes and decoupling components. |
| xUnit                                        | Popular unit testing framework for .NET applications.        |
| MSTest                                       | Microsoft’s unit testing framework.                          |
| Moq                                          | Mocking library used to simulate dependencies in unit tests. |

## Logging & Monitoring

| Topic   | Description                          |
| ------- | ------------------------------------ |
| NLog    | Flexible logging framework for .NET. |
| Serilog | Structured logging library for .NET. |

## Frontend Development

| Topic                      | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| HTML/CSS                   | Core web technologies for structuring and styling web pages. |
| Bootstrap                  | CSS framework for responsive, mobile-first design.           |
| SASS                       | CSS preprocessor with variables and nesting.                 |
| JavaScript                 | Core programming language for web interactivity.             |
| jQuery                     | JavaScript library simplifying DOM manipulation and events.  |
| Angular 17                 | TypeScript-based frontend framework.                         |
| React 18                   | JavaScript library for building UI components.               |
| Microfrontend Architecture | Splits frontend into independent, composable apps.           |
| Razor                      | Server-side C# syntax for dynamic web pages.                 |

## Version Control Systems

| Topic             | Description                                               |
| ----------------- | --------------------------------------------------------- |
| CVS (Git, GitHub) | Distributed version control and cloud repository hosting. |
| Git               | Distributed version control system.                       |
| GitHub            | Cloud-based Git repository hosting and collaboration.     |
| TFS               | Microsoft’s on-premises version control and ALM tool.     |

## IDEs & Development Tools

| Topic              | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| Visual Studio      | Full-featured IDE for .NET and more.                         |
| Visual Studio Code | Lightweight, extensible code editor by Microsoft.            |
| SonarQube          | Code quality and security analysis tool detecting bugs, vulnerabilities, and code smells. |