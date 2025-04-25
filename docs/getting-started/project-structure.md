# Project Structure

A well-organized project structure is essential for building scalable and maintainable NodeArch applications. This section explains the typical layout of a NodeArch project, the purpose of each directory and file, and best practices for structuring your codebase.

## Typical Project Layout

```
your-app/
├── public/
│   └── docs/
│       └── openapi.json
├── src/
│   ├── main.ts
│   └── components/
│       ├── user.controller.ts
│       ├── user.service.ts
│       ├── user.repository.ts
│       ├── user.interface.ts
│       ├── user-inputs.validation.ts
│       ├── user.middleware.ts
│       └── user.test.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── nodearch
```

### Key Directories and Files

- **public/**: Static files served by your app. The `docs/` subfolder contains the generated OpenAPI (Swagger) documentation.
- **src/**: Main source code for your application.
  - **main.ts**: The entry point that bootstraps your NodeArch app.
  - **components/**: Contains all your business logic, organized by feature (controllers, services, repositories, interfaces, validation, middleware, and tests).
- **package.json**: Project metadata and dependencies.
- **tsconfig.json**: TypeScript configuration.
- **nodearch**: NodeArch configuration file for app metadata and settings.

## The Components Folder

The `components/` directory is the heart of your application. It is typically organized by feature or domain, and contains:

- **Controllers**: Define HTTP endpoints and handle incoming requests (When using express).
- **Services**: Contain business logic and orchestrate data flow.
- **Repositories**: Manage data access and persistence.
- **Interfaces**: Define TypeScript interfaces for type safety.
- **Validation**: Centralize input validation schemas (e.g., Joi).
- **Middleware**: Implement cross-cutting concerns (e.g., authentication, logging).
- **Tests**: Unit and integration tests for your features.

### Example: Feature-Based Organization

```
src/components/
├── user/
│   ├── user.controller.ts
│   ├── user.service.ts
│   ├── user.repository.ts
│   ├── user.interface.ts
│   ├── user-inputs.validation.ts
│   ├── user.middleware.ts
│   └── user.test.ts
├── product/
│   ├── product.controller.ts
│   ├── product.service.ts
│   └── ...
```

Organizing by feature keeps related files together, making it easier to scale and maintain your codebase as your application grows.

## Best Practices

- **Keep features isolated**: Group related files by feature/domain.
- **Use dependency injection**: Leverage NodeArch's DI to keep code modular and testable.
- **Document your API**: Use OpenAPI decorators and generate docs for easy API exploration.
- **Write tests**: Place tests alongside the code they cover for clarity.


> A clear project structure is the foundation for productivity and maintainability in NodeArch projects.
