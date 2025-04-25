# Hooks

Hooks in NodeArch allow you to execute code **when the application starts** and **when it shuts down**.  
They are ideal for managing resources like database connections, job schedulers, cache warmups, and other startup/shutdown tasks.

This guide will walk you through how to properly **create**, **decorate**, and **implement** a Hook in NodeArch.

---

## What Is a Hook?

A **Hook** in NodeArch is a class that:

- Implements the `IHook` interface
- Is decorated with the `@Hook()` class decorator

This allows NodeArch to automatically discover, instantiate, and execute your hook at the right time.

---

## Hook Interface

Here’s the official `IHook` interface:

```ts
export interface IHook {
  onStart?(): Promise<void>;
  onStop?(): Promise<void>;
}
```

You can implement either `onStart`, `onStop`, or both — they are **optional**.

---

## Hook Decorator

The `@Hook()` decorator marks your class as a lifecycle hook component.

It can accept optional options based on the `IComponentOptions` interface:

```ts
export interface IComponentOptions {
  scope?: ComponentScope;
  namespace?: string;
  export?: boolean;
}

export enum ComponentScope {
  REQUEST = 'Request',
  SINGLETON = 'Singleton',
  TRANSIENT = 'Transient'
}
```

**Common options** you can set:

| Option | Description | Default |
|:------|:------------|:--------|
| `export` | Whether to export this component to other apps | `false` |

---

## Example: Creating a Hook

Let’s create a simple hook that logs when the application starts and stops.

```ts
import { Hook } from '@nodearch/core';
import { IHook } from '@nodearch/core';

@Hook()
export class LoggerHook implements IHook {

  async onStart(): Promise<void> {
    console.log('🚀 Application has started.');
  }

  async onStop(): Promise<void> {
    console.log('🛑 Application is stopping.');
  }
}
```

✅ Because the class is decorated with `@Hook()` and implements `IHook`, NodeArch automatically detects it and calls `onStart` and `onStop` at the appropriate times.

---

## Best Practices

- Keep your hooks **focused** — each hook should manage a single responsibility (e.g., database, scheduler, cache).
- Avoid blocking operations in `onStart` and `onStop` — use `await` properly for async tasks.

---

## Summary

- Hooks manage logic during the app's lifecycle (start/stop).
- Hooks must:
  - Implement `IHook`
  - Be decorated with `@Hook()`
- NodeArch handles discovery and execution automatically.
- Use lifecycle hooks to manage database connections, start background workers, register external services, and more.

---

> **NodeArch Hooks are a clean, powerful way to control your app’s lifecycle — without manual boilerplate.**
