# Hello World

Before you start, make sure you have completed the [installation steps](./installation.md) for NodeArch and have the CLI ready to use.

Let’s build your first NodeArch application! In just a few steps, you’ll scaffold a new project, and run a simple Express-powered server that responds to HTTP requests.

---

## Step 1: Create a New Project

Run the following command in your terminal:

```shell
nodearch new
```

Enter your project name and then select the `express` template when prompted. This will scaffold a basic project structure using Express and TypeScript.

```shell
? Your project name? hello-world
? Select an app template
❯ express
  socket.io
  aws-sqs-listener
```

---

## Step 2: Explore the Project

Your new project will have a structure like this:

```text
hello-world/
├── public/docs/openapi.json
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

- `public/` - Contains static files and OpenAPI documentation.
- `nodearch` – nodearch configuration file for your app metadata.
- `src/` – The main source code directory.
- `src/main.ts` – The entry point of your application. This is where the server starts and listens for incoming requests.
- `src/components/` – Where all your logic lives.

---

## Step 3: User Management Example

The generated project includes a simple user management API. Here’s a summary of the main files:

- `user.controller.ts`: Defines HTTP endpoints for user operations (list, get by id, add user) and applies validation and middleware.
- `user.service.ts`: Contains business logic for user operations.
- `user.repository.ts`: Handles in-memory user data storage and queries.
- `user.interface.ts`: Defines the `IUser` interface.
- `user-inputs.validation.ts`: Contains validation rules for user input.
- `user.middleware.ts`: Example middleware for user routes.
- `user.test.ts`: Contains unit tests for the user service.

### Example: `user.controller.ts`

This controller class defines the HTTP API for user management. It uses several decorators:

- `@Controller()` marks the class as a controller component.
- `@Tags(['User Management'])` adds OpenAPI tags for documentation.
- `@Use(UserMiddleware)` applies middleware to all routes in this controller.
- `@HttpPath('users')` sets the base path for all endpoints in this controller.
- `@HttpGet`, `@HttpPost`, `@HttpParam`, `@HttpQuery`, and `@HttpBody` are used to define HTTP methods, route parameters, query parameters, and request bodies.
- `@Use(ValidationMiddleware, createUserValidation)` applies validation to the POST endpoint.

The controller delegates business logic to the injected `UserService` and handles request/response mapping.

```ts
import { Controller, Use } from '@nodearch/core';
import { HttpBody, HttpGet, HttpParam, HttpPath, HttpPost, HttpQuery } from '@nodearch/express';
import { ValidationMiddleware } from '@nodearch/joi-express';
import { Tags } from '@nodearch/openapi';
import { UserMiddleware } from './user.middleware.js';
import { IUser } from './user.interface.js';
import { UserService } from './user.service.js';
import { createUserValidation } from './user-inputs.validation.js';

@Controller()
@Tags(['User Management'])
@Use(UserMiddleware)
@HttpPath('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @HttpGet('/')
  async getUsers(@HttpQuery() user?: Partial<IUser>) {
    return await this.userService.getUsers(user);
  }

  @HttpGet('/:id')
  async getUserById(@HttpParam('id') id: string) {
    return (await this.userService.getUsers({ id: parseInt(id) }))[0] || {};
  }

  @HttpPost('/')
  @Use(ValidationMiddleware, createUserValidation)
  async addUser(@HttpBody() user: Omit<IUser, 'id'>) {
    await this.userService.addUser(user);
    return 'ok';
  }
}
```

### Example: `user.service.ts`

This service class contains the business logic for user operations. Decorated with `@Service()`, it is automatically registered as an injectable service. The constructor injects the `UserRepository` dependency. The service provides methods to get users, add a user, and get a user by ID, abstracting away data access details from the controller.

```ts
import { Service } from '@nodearch/core';
import { IUser } from './user.interface.js';
import { UserRepository } from './user.repository.js';

@Service()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers(criteria?: Partial<IUser>) {
    return await this.userRepository.getUsers(criteria);
  }

  async addUser(user: Omit<IUser, 'id'>) {
    const newUserId = await this.userRepository.getUsersCount() + 1;
    await this.userRepository.addUser({
      ...user,
      id: newUserId
    });
  }

  async getUserById(id: number) {
    const users = await this.userRepository.getUsers({ id });
    return users[0];
  }
}
```

### Example: `user.repository.ts`

This repository class is decorated with `@Repository()`, making it available for dependency injection. It manages an in-memory array of users and provides methods to query, add, count, and clear users. The repository abstracts data storage and retrieval, allowing the service to remain agnostic of the underlying data source.

```ts
import { Repository } from '@nodearch/core';
import { IUser } from './user.interface.js';

@Repository()
export class UserRepository {
  private users: IUser[];

  constructor() {
    this.users = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@email.com',
        age: 30,
        role: 'admin',
        language: 'en'
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@email.com',
        age: 25,
        role: 'user',
        language: 'fr'
      }
    ];
  }

  async getUsers(criteria?: Partial<IUser>) {
    if (!criteria || !Object.keys(criteria).length) {
      return this.users;
    }

    return this.users.filter(user => {
      return Object.keys(criteria).every(key => user[key as keyof IUser] === criteria[key as keyof IUser]);
    });
  }

  async addUser(user: IUser) {
    this.users.push(user);
  }

  async getUsersCount() {
    return this.users.length;
  }

  async removeAll() {
    this.users = [];
  }
}
```

### Example: `user.middleware.ts`

This middleware class is decorated with `@Middleware()`, allowing it to be applied to controllers or routes. The `handler` method is executed before the request reaches the controller, and can be used for cross-cutting concerns such as authentication, logging, or request modification.

```ts
import { Middleware } from '@nodearch/express';

@Middleware()
export class UserMiddleware {
  async handler() {
    // Do something
  }
}
```

### Example: `user-inputs.validation.ts`

This file defines a Joi schema for validating incoming user data. The schema is used with the `ValidationMiddleware` in the controller to ensure that requests to create users meet the required structure and constraints. This approach centralizes validation logic and keeps controllers clean.

```ts
import Joi from 'joi';

export const createUserValidation = Joi.object({
  body: Joi.object({ 
    fullName: Joi.string().required(), 
    age: Joi.number().required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid('admin', 'user').required(),
    language: Joi.string().valid('en', 'fr', 'es').default('en')
  }).required()
});
```

### Example: `user.test.ts`

This test class uses NodeArch's Mocha integration and is decorated with `@Test()`. The constructor injects the `UserService` and `UserRepository` for testing. The `@BeforeEach()` decorator resets the data before each test case. The `@Case()` decorator defines individual test cases, including parameterized tests for different user IDs. This structure enables organized and maintainable unit tests for your business logic.

```ts
import { BeforeEach, Case, Test } from '@nodearch/mocha';
import { UserService } from './user.service.js';
import { expect } from 'chai';
import { IUser } from './user.interface.js';
import { UserRepository } from './user.repository.js';

@Test()
export class UserTest {
  constructor(
    private userService: UserService,
    private userRepository: UserRepository
  ) {}

  @BeforeEach()
  cleanupData() {
    this.userRepository.removeAll();
    this.userRepository.addUser({
      id: 1,
      name: 'John Doe',
      email: 'john.d@email.com',
      age: 20,
      role: 'admin',
      language: 'en'
    });
  }

  @Case()
  async getUsers() {
    const users = await this.userService.getUsers();
    expect(users).length(1);
    expect(users[0].name).to.be.equal('John Doe');
  }

  @Case()
  async addUser() {
    const data: Omit<IUser, "id">  = {
      name: 'Jane Doe', 
      email: 'jane.d@email.com',
      age: 20,
      role: 'admin',
      language: 'fr' 
    };

    await this.userService.addUser(data);

    expect(await this.userRepository.getUsersCount()).to.be.equal(2);
  }

  @Case('Get User by existing Id', {params: { id: 1 }})
  @Case('Get User by non-existing Id', {params: { id: 2 }})
  async getUserById({ id }: { id: number }) {
    const user = await this.userService.getUserById(id);
    
    if (id === 1) {
      expect(user.name).to.be.equal('John Doe');
    }
    else if (id === 2) {
      expect(user).to.be.undefined;
    }
  }
}
```

### Example: `user.interface.ts`

This file defines the `IUser` TypeScript interface, specifying the shape and types of user objects throughout the application. Using interfaces ensures type safety and consistency across services, repositories, and controllers.

```ts
export interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
  role: 'user' | 'admin';
  language: 'en' | 'fr' | 'es';
}
```

---

## Step 4: Start the App

To run the app in watch mode (auto-reload on changes):

```shell
nodearch start -w
```

You should see something like:

```shell
[INFO] [Express] Server running at: localhost:3000
```

Swagger (OpenAPI) documentation will be available at [http://localhost:3000/docs](http://localhost:3000/docs) after starting the app. You can also generate or update the OpenAPI docs at any time by running:

```bash
nodearch openapi
```

Now try the following endpoints:

- `GET http://localhost:3000/api/users` – List all users
- `GET http://localhost:3000/api/users/1` – Get user by ID
- `POST http://localhost:3000/api/users` – Add a new user (with JSON body)

Example request:

```shell
curl http://localhost:3000/api/users
```

Response:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@email.com",
    "age": 30,
    "role": "admin",
    "language": "en"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "jane.doe@email.com",
    "age": 25,
    "role": "user",
    "language": "fr"
  }
]
```

---

## Build for Production

When you're ready to build your app for production:

```shell
nodearch build
```

This outputs a compiled version of your app into the `dist/` directory.

---

## Running Tests

NodeArch supports **Mocha** for writing and running tests:

```shell
nodearch test
```

---

## Congratulations!

You've just created and run your first NodeArch app! 🎉

From here, you can:

- Add more services, repositories, and controllers
- Use dependency injection
- Add middleware and validation
- Explore lifecycle hooks (`onStart`, `onStop`)
- Test your API with Mocha

> NodeArch gives you a solid structure from day one — now go build something awesome.
