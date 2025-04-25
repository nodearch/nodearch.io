# App

The `App` class is the main entry point for any NodeArch application. It provides the foundation for configuring your app, loading components, and integrating extensions. Below is an example of how to define your own app by extending the `App` class and configuring its options.

## Example

```ts
import { App } from '@nodearch/core';
import { ExpressApp } from '@nodearch/express';


export default class MyApp extends App {
  constructor() {
    super({
      components: {
        url: new URL('components', import.meta.url)
      },
      extensions: [
        new ExpressApp()
      ],
      logs: {
        prefix: 'MyApp'
      }
    });
  }
}
```

## App Options

The `App` constructor accepts an options object to configure your application. Here are the main options:

### `components`

- **url**: The directory to scan for components (controllers, services, etc.).
- **scope** (optional): The default component scope (e.g., `ComponentScope.SINGLETON`).
- **classes**, **depth**, **include**, **exclude**: Advanced options for class loading.

### `extensions`

- An array of other `App` instances (extensions) to load and integrate into your app. Extensions can add features such as HTTP servers, validation, OpenAPI, Swagger UI, testing, and more.

### `logs`

- **prefix**: Prefix for log messages.
- **logger**, **logLevel**, **getTimestamp**, **disable**, **disableColors**: Advanced logging options.

### `config`

- Any custom configuration object to be made available to your app and its components.

## Summary

- Extend the `App` class to define your application.
- Configure components, extensions, logging, and custom config in the constructor.
- Use extensions to add features and integrate with other NodeArch modules.
- The `App` class is the foundation for building modular, extensible NodeArch applications.
