# Azure Functions Triggers

> **Purpose:** Quick-reference overview of the most common Azure Functions triggers — what starts a function and when to use each one.

---

In Azure Functions, a **trigger** is what starts the execution of a function. It defines **when** and **how** the function runs, based on an external event or schedule.

---

## 🔹 Common Azure Function Triggers

1. **HTTP Trigger**
   - Activated by an HTTP request.
   - Perfect for building APIs or webhooks.
   - Supports GET, POST, PUT, DELETE, etc.

2. **Timer Trigger**
   - Runs on a schedule using a CRON expression.
   - Useful for background jobs like data cleanup or periodic tasks.

3. **Blob Trigger**
   - Fires when a new file is added or updated in Azure Blob Storage.
   - Great for processing uploaded files.

4. **Queue Trigger**
   - Executes when a new message appears in an Azure Storage Queue.
   - Ideal for decoupled, asynchronous processing.

5. **Service Bus Trigger**
   - Responds to messages in Azure Service Bus (Queue or Topic).
   - Suitable for enterprise-grade messaging systems.

6. **Event Grid Trigger**
   - Reacts to events from Azure services (e.g., blob creation, resource changes).
   - Enables event-driven architectures.

7. **Cosmos DB Trigger**
   - Runs when documents in a Cosmos DB collection are inserted or updated.
   - Useful for real-time data processing.
