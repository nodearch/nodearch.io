# 🧠 Design Principles

NodeArch was built with a clear mission: to make backend development in Node.js **structured, maintainable, and scalable** — without sacrificing the flexibility developers love.

It draws inspiration from enterprise frameworks like **Spring (Java)** and **.NET (C#)** while embracing the asynchronous, lightweight nature of Node.js. Here's a deeper look at the core philosophy and design principles that guide NodeArch.

---

## 🔁 Convention Over Configuration

NodeArch encourages consistency and simplicity through **conventions**.

- Projects follow a standard structure with intuitive file and module organization.
- Decorators simplify configuration, reducing boilerplate.
- Developers can focus more on building features and less on wiring things together.

---

## 🔗 Dependency Injection as a Foundation

Everything in NodeArch is designed around **Dependency Injection (DI)** — enabling loosely coupled, testable, and modular components.

- Services are registered and resolved through a centralized container.
- The DI system supports multiple lifetimes: `singleton`, `request scoped`, and `transient`.
- Encourages clean separation between infrastructure and business logic.

---

## 🧩 Modular by Design

NodeArch is built on the concept of a **Component**, which is a class that could be a Controller, Service, Repository, Config, Hook, or a generic Component.

- You organize components into folders that represent modules/domains.
- Then, you create a NodeArch **App** by pointing it to the root folder of these components.
- Apps can also be extended using other **Apps** — which may be:
  - Official extensions published as npm modules
  - Internal or external reusable apps created by the developer
- This enables recursive composition: apps can be built on top of other apps which themselves can use other apps — creating powerful reusable systems.

---

## 🧘 Balanced Opinionation

NodeArch provides **just enough structure** to guide you — without locking you in.

- It’s opinionated about architecture, not about your tech stack.
- Supports Express (via `@nodearch/express`) but leaves room for other integrations in the future.
- You can use any database, ORM, or library — NodeArch won't stand in your way.

---

## 🧠 TypeScript First

NodeArch is built entirely with **TypeScript**, offering a modern and type-safe developer experience.

- Full type safety across services, controllers, routes, and decorators.
- Leverages TypeScript decorators to provide a clean and declarative API.
- Eliminates common runtime bugs with powerful compile-time validation.

---

## 🧪 Testability at Every Layer

Testability is not an afterthought — it’s **baked into the design**.

- Every service, controller, and middleware can be unit tested in isolation.
- DI container makes mocking and injection straightforward.
- **Mocha** is supported out of the box as the test runner.

---

## 🔌 Integration, Not Reinvention

NodeArch aims to **integrate seamlessly with the existing ecosystem**.

- Works with Express, TypeORM, Prisma, Redis, Kafka, and more.
- Supports OpenAPI decorators, validation tools like Joi, and more.
- Encourages composition over reinvention.

---

## 🪝 Clear Lifecycle Management

NodeArch includes a **lifecycle hook system** that allows developers to plug into application startup and shutdown routines.

- Use `onStart` and `onStop` to handle background jobs, connections, or logging.
- Easily manage resource cleanup and startup tasks.

---

## 📦 Lightweight and Production-Ready

NodeArch apps compile into **lean, production-ready builds**.

- Minimal runtime footprint
- Easy to deploy in containers, VMs, or serverless environments
- Designed with CI/CD and DevOps best practices in mind

---

## 🎯 Philosophy in One Sentence

> **“Empower developers to build clean, scalable, and maintainable backend applications — without reinventing the wheel.”**
