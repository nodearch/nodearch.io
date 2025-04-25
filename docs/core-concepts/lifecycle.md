# Lifecycle

NodeArch applications follow a well-defined lifecycle that ensures your app and its extensions are loaded, initialized, and started in a consistent and extensible way. This document explains what happens when you run `nodearch start` and how the framework manages your app's lifecycle.

## 1. CLI Bootstrapping

When you run `nodearch start`:

- The CLI scans the current directory for a file named `nodearch` to locate your app.
- Once found, it loads the app and looks for the main entry point, typically `main.ts`.
- The `main.ts` file should export a class that extends the `App` class from `@nodearch/core`.
- The CLI creates an instance of your app and invokes two main built-in methods: `init()` and `start()`.

## 2. Initialization Phase (`init()`)

The `init()` method is responsible for setting up the core of your application:

- **Core Components**: Loads and initializes essential components such as Logger, AppContext, and ConfigManager.
- **Extensions**: Loads any extensions. Extensions are themselves NodeArch apps, so the same loading logic applies recursively.
- **Registering Extensions**: Integrates loaded extensions into the main app.
- **Component Loading**:
  - Uses the `components.url` specified in your app to scan directories recursively for `.ts`/`.js` files (depending on the mode).
  - Loads these files using Node.js dynamic import.
  - Filters loaded files to keep only components (classes decorated with NodeArch built-in or custom decorators, e.g., `@Controller`, `@Service`).
- **Hook Registration**: Registers hooks from both the main app and any extension that exports a hook (e.g., decorated with `@Hook({ export: true })`).
- **Dependency Injection & Scopes**:
  - When a component is injected into another, the framework resolves dependencies based on the defined component scope, either globally (via `components.scope`) or per component (via the decorator, e.g., `@Service({ scope: ComponentScope.SINGLETON })`).
  - **Scopes:**
    - `ComponentScope.SINGLETON`: The component is created once and shared across the app (default).
    - `ComponentScope.TRANSIENT`: A new instance is created each time the component is injected. Useful for stateless components.
    - `ComponentScope.REQUEST`: A new instance is created for each request (not limited to HTTP requests; could be a message, scheduled task, etc.).

## 3. Startup Phase (`start()`)

- The `start()` method is called after initialization.
- It calls and awaits `onStart()` for all registered hooks.
- This is where the main logic of your app and extensions runs. For example, a hook from `@nodearch/express` may retrieve all controllers, parse routes and middlewares, register them in an Express app, and start the HTTP server.

## 4. Shutdown Phase (`stop()`)

- When the app is about to exit, the `stop()` method is called.
- This triggers `onStop()` on all registered hooks, allowing for graceful shutdown and cleanup.

---

By following this lifecycle, NodeArch ensures that your app and its extensions are loaded, initialized, started, and stopped in a predictable and extensible manner.
