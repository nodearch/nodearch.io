# Extensions

Extensions in NodeArch are modular packages or apps that add new features, capabilities, or integrations to your main application. They allow you to compose your app from reusable building blocks, making it easy to add support for things like HTTP servers, validation, OpenAPI, authentication, testing, and more.

## What is an Extension?

An extension is simply another NodeArch app that can be loaded and integrated into your main app. Extensions follow the same structure and lifecycle as your main app, and can:
- Register their own components (controllers, services, etc.)
- Provide hooks to extend or modify app behavior
- Register middleware, routes, or other integrations
- Export configuration, providers, or utilities

## Using Extensions

To use an extension, add it to the `extensions` array in your app's constructor:

```ts
import { App } from '@nodearch/core';
import { ExpressApp } from '@nodearch/express';
import { JoiApp } from '@nodearch/joi';

export default class MyApp extends App {
  constructor() {
    super({
      components: {
        url: new URL('components', import.meta.url)
      },
      extensions: [
        new ExpressApp(),
        new JoiApp()
      ]
    });
  }
}
```

## How Extensions Work

- When your app is initialized, each extension is loaded and initialized in the same way as your main app.
- Extensions can register their own hooks (e.g., to add routes, middleware, or other logic).
- Hooks exported from extensions (using `@Hook({ export: true })`) are registered in the main app and participate in the app lifecycle (e.g., `onStart`, `onStop`).
- Extensions can export any component e.g., `@Service({ export: true })`, making them available for injection in the main app.
- Extensions can also depend on other extensions, allowing for deep composition.

## Writing Your Own Extension

To create a custom extension:

1. Create a new class that extends `App` from `@nodearch/core`.
2. Register any components, hooks, or configuration needed.
3. Export your extension class so it can be imported and used in other apps.

Example:

```ts
import { App } from '@nodearch/core';

export class MyCustomExtension extends App {
  constructor() {
    super({
      components: {
        url: new URL('components', import.meta.url)
      }
    });
  }
}
```

## Best Practices

- Keep extensions focused and modular—each extension should do one thing well.
- Use hooks to expose extension logic to the main app.
- Document any configuration or setup required for your extension.
- Reuse and share extensions across multiple projects for consistency and maintainability.

## Examples of Official Extensions

- `@nodearch/express`: Adds HTTP server and routing capabilities.
- `@nodearch/joi`: Adds validation support using Joi.
- `@nodearch/openapi`: Adds OpenAPI (Swagger) documentation generation.
- `@nodearch/swagger`: Serves Swagger UI for API docs.
- `@nodearch/mocha`: Adds testing support with Mocha.

---

Extensions are a powerful way to compose and scale your NodeArch applications. By leveraging and creating extensions, you can build modular, maintainable, and feature-rich apps with minimal effort.