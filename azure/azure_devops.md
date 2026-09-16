# Azure DevOps

> **Purpose:** DevOps and Azure services interview Q&A — DevOps fundamentals (CI/CD, IaC, configuration management, KPIs) and Azure messaging/storage services (Event Grid, Event Hub, Service Bus, Redis, SignalR).

## What is DevOps?

DevOps stands for Development and Operations. It is a software engineering practice that focuses on bringing together the development team and the operations team for the purpose of automating the project at every stage. DevOps is a methodology aimed at increased productivity and quality of product development, inspired by the Agile process.

## DevOps Pros

- Frequent feature deployments.
- Reduced time between bug fixes.
- Reduced failure rate of releases.
- Quicker recovery time in case of release failures.

## Benefits of DevOps

- Customer satisfaction.
- More engaged and collaborative Development and Operations teams.
- Code deployed faster to the market through Continuous Integration and Continuous Delivery.
- Faster operational support.
- Strong infrastructure and IT performance.
- Fewer failures and continuous improvement.
- Transparency between the team.
- Constant monitoring and better adaptation.
- Increased efficiency.

## DevOps Tools

- **Version Control System tools:** e.g. git.
- **Continuous Integration tools:** e.g. Jenkins.
- **Continuous Testing tools:** e.g. Selenium.
- **Configuration Management and Deployment tools:** e.g. Puppet, Chef, Ansible.
- **Continuous Monitoring tools:** e.g. Nagios.
- **Containerization tools:** e.g. Docker.

## DevOps Engineer

A DevOps engineer is someone who has an understanding of the SDLC (Software Development Lifecycle) and of automation tools for developing CI/CD pipelines.

---

## What is the Use of SSH?

SSH stands for Secure Shell and is an administrative protocol that lets users have access and control over remote servers over the Internet to work using the command line.

## What is Configuration Management?

Configuration management is a set of practices and tools used in software development and IT operations to ensure consistency and control over the configuration of systems, applications, and infrastructure components.

1. **Consistency:** configuration management ensures that system configurations remain consistent across different environments and stages, avoiding discrepancies and potential issues.
2. **Control:** it provides organizations with control over their IT infrastructure and applications by tracking and auditing changes, enforcing policies, and maintaining a known state of systems.
3. **Change Management:** configuration management includes change management practices to document, test, and approve modifications to configurations, reducing the risk of unauthorised or problematic changes.
4. **Automation:** configuration management involves using automation tools to provision, configure, and manage systems and applications in a consistent and repeatable manner, improving efficiency and reliability.

## What is Continuous Integration (CI)?

Continuous Integration (CI) is a software development practice that makes sure developers integrate their code into a shared repository as and when they are done working on the feature. Each integration is verified by means of an automated build process that allows teams to detect problems in their code at a very early stage rather than finding them after the deployment.

## What is Continuous Deployment (CD)?

The next step after CI. It is a practice where the software is automatically deployed to production environments after passing the necessary tests in the CI pipeline. CD aims to automate the release process, ensuring that changes are quickly and reliably deployed to production. It enables faster feedback loops, reduces manual intervention, and supports frequent and iterative releases.

## What is Infrastructure as Code (IaC)?

IaC is an approach where infrastructure resources (servers, networks, etc.) are defined and managed through machine-readable code. It enables automation, reproducibility, and scalability of infrastructure provisioning and management.

## What is Continuous Testing (CT)?

Continuous Testing (CT) is that phase of DevOps which involves the process of running the automated test cases as part of an automated software delivery pipeline with the sole aim of getting immediate feedback regarding the quality and validation of business risks associated with the automated build of code developed by the developers.

## What Are the Three Important DevOps KPIs?

KPI (key performance indicator):

- Reduce the average time taken to recover from a failure.
- Increase the deployment frequency in which the deployment occurs.
- Reduce the percentage of failed deployments.

---

## Azure Services

### Event Grid

A fully managed event routing service that simplifies the development of event-driven applications. It allows you to react to events from various sources and route them to different Azure services or custom endpoints.

### Event Hub

A highly scalable and real-time event ingestion service designed for big data streaming scenarios. It can handle millions of events per second and is commonly used for collecting, transforming, and storing large amounts of event data.

### Storage

A cloud-based storage solution that provides secure and durable storage for various types of data, including blobs, files, queues, and tables. It offers high availability, scalability, and integration with other Azure services.

### Queues

A messaging service for asynchronous communication between different components of an application. It enables decoupling of components and helps to handle intermittent or bursty traffic by storing messages in a queue for later processing.

### Service Bus

A fully managed messaging service that provides reliable and secure asynchronous communication between distributed applications and services. It supports different communication patterns, such as publish/subscribe, request/response, and message queuing.

### Redis

A fully managed, high-performance, and in-memory caching service. It allows you to store and retrieve data quickly, reducing the load on backend systems. It is often used to improve application performance and scalability.

### SignalR

A real-time messaging service that simplifies the development of real-time web applications. It enables bi-directional communication between clients and servers, facilitating features like live chat, notifications, and real-time updates.
