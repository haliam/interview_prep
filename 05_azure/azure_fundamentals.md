# Azure Fundamentals

> **Purpose:** Azure fundamentals interview reference — cloud concepts, the shared responsibility model, cloud models, consumption-based pricing, and the benefits of the cloud (AZ-900 style).

## What is Azure?

Microsoft Azure is a cloud computing platform with an ever-expanding set of services to help you build solutions to meet your business goals.

## What is Cloud Computing?

Cloud computing is the delivery of computing services over the internet. Computing services include common IT infrastructure such as virtual machines, storage, databases, and networking.

## What is a Virtual Machine?

A virtual machine (VM) is a digital version of a physical computer. Virtual machine software can run programs and operating systems, store data, connect to networks, and do other computing functions, and requires maintenance such as updates and system monitoring.

---

## Describe the Shared Responsibility Model

Infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS). IaaS places the most responsibility on the consumer, with the cloud provider being responsible for the basics of physical security, power, and connectivity. On the other end of the spectrum, SaaS places most of the responsibility with the cloud provider. PaaS, being a middle ground between IaaS and SaaS, rests somewhere in the middle and evenly distributes responsibility between the cloud provider and the consumer.

**You'll always be responsible for:**

- The information and data stored in the cloud.
- Devices that are allowed to connect to your cloud (cell phones, computers, and so on).
- The accounts and identities of the people, services, and devices within your organization.

**The cloud provider is always responsible for:**

- The physical datacenter.
- The physical network.
- The physical hosts.

**Your service model will determine responsibility for things like:**

- Operating systems.
- Network controls.
- Applications.
- Identity and infrastructure.

---

## Define Cloud Models

- Private cloud.
- Public cloud.
- Hybrid cloud.
- Multi-cloud.
- Azure Arc.
- Azure VMware Solution.

---

## Describe the Consumption-Based Model

When comparing IT infrastructure models, there are two types of expenses to consider: capital expenditure (CapEx) and operational expenditure (OpEx).

Cloud computing falls under OpEx because cloud computing operates on a consumption-based model.

Cloud computing is the delivery of computing services over the internet by using a pay-as-you-go pricing model. You typically pay only for the cloud services you use.

---

## Describe the Benefits of High Availability and Scalability in the Cloud

### High Availability

High availability focuses on ensuring maximum availability, regardless of disruptions or events that may occur.

### Scalability

Scalability refers to the ability to adjust resources to meet demand.

### Vertical Scaling

With vertical scaling, if you need more processing power, you could vertically scale up to add more CPUs or RAM to the virtual machine — or scale down if you need less.

### Horizontal Scaling

With horizontal scaling, if you suddenly experienced a steep jump in demand, your deployed resources could be scaled out (either automatically or manually).

---

## Describe the Benefits of Reliability and Predictability in the Cloud

### Reliability

Reliability is the ability of a system to recover from failures and continue to function.

### Predictability

Predictability can be focused on performance predictability or cost predictability.

### Performance

Performance predictability focuses on predicting the resources needed to deliver a positive experience for your customers. Autoscaling, load balancing, and high availability are just some of the cloud concepts that support performance predictability.

### Cost

Cost predictability is focused on predicting or forecasting the cost of the cloud spend.

---

## Describe the Benefits of Security and Governance in the Cloud

### Security

The cloud provides robust protection of data and infrastructure through advanced security measures, such as encryption, access controls, and threat detection, ensuring the confidentiality, integrity, and availability of resources.

### Governance

The cloud enables businesses to establish policies, compliance standards, and control mechanisms, facilitating centralized management, risk mitigation, and adherence to regulatory requirements for enhanced operational efficiency and accountability.

---

## Describe the Benefits of Manageability in the Cloud

### Management of the Cloud

Management of the cloud speaks to managing your cloud resources in the cloud.

### Management in the Cloud

Management in the cloud speaks to how you're able to manage your cloud environment and resources.

---

## Describe Cloud Service Types

### Infrastructure as a Service (IaaS)

In an IaaS model, the cloud provider is responsible for maintaining the hardware, network connectivity (to the internet), and physical security. You're responsible for everything else: operating system installation, configuration, and maintenance; network configuration; database and storage configuration; and so on.

### Platform as a Service (PaaS)

In a PaaS environment, the cloud provider maintains the physical infrastructure, physical security, and connection to the internet. They also maintain the operating systems, middleware, development tools, and business intelligence services that make up a cloud solution. In a PaaS scenario, you don't have to worry about the licensing or patching for operating systems and databases.

### Software as a Service (SaaS)

SaaS is the most complete cloud service model from a product perspective. With SaaS, you're essentially renting or using a fully developed application. Email, financial software, messaging applications, and connectivity software are all common examples of a SaaS implementation.
