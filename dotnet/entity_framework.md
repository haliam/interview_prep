# Entity Framework

> **Purpose:** Entity Framework fundamentals and related data-transfer concepts (POCO, DTO, WCF), plus an EF Core vs Dapper comparison, for interview preparation.

## POCO vs DTO

> "The main difference between DTO and POCO is that DTOs do not contain any methods. They only contain public members. Thus, sending the data using a DTO is easy because they are lightweight objects."

- **POCO:** stands for Plain Old C# Object, and refers to simple classes that do not depend on any framework. It is a term derived from the Java-world concept: POJO.
- **EF (Entity Framework):** an ORM designed by Microsoft; it converts a relational database into an object-oriented language (like C#). In its latest versions it allows the use of POCOs as database entities.
- **DTO:** stands for Data Transfer Object, and it is an object that by definition is sent and received within a service. Our colleague [@pbousan](https://twitter.com/pbousan) references [this article by Martin Fowler](http://martinfowler.com/eaaCatalog/dataTransferObject.html) where he explains the concept.
- **WCF:** stands for Windows Communication Foundation, which is a Microsoft API for creating service-oriented applications (SOA). From this we deduce that the objects sent or received in these services are DTOs.

## DTO Use Cases

> "The subset of a model is usually referred to as a Data Transfer Object (DTO)."

A DTO may be used to:

- Prevent over-posting.
- Hide properties that clients are not supposed to view.
- Omit some properties in order to reduce payload size.
- Flatten object graphs that contain nested objects. Flattened object graphs can be more convenient for clients.

---

## EF vs Dapper

> "In summary, both Dapper and EF Core are popular ORM frameworks for .NET applications. Dapper is a lightweight and efficient framework that is optimized for performance, while EF Core is a more feature-rich framework that is optimized for developer productivity. Dapper is a good choice for applications that require high performance, more control over SQL statements, or need to work with older versions of SQL Server. EF Core is a good choice for applications that need to work with a wide variety of databases and data sources, or require features like change tracking, lazy loading, and query translation. Ultimately, the choice between Dapper, EF Core, or a combination of both will depend on the specific needs of your application and your personal preferences as a developer."
