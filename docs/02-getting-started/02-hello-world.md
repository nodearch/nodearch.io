# 👋 Hello World

Let’s build your first NodeArch application! In just a few steps, you’ll scaffold a new project, create a controller, and run a simple Express-powered server that responds to HTTP requests.

This guide assumes you’ve already [installed NodeArch](./installation.md) and have the CLI ready.

---

## 🧱 Step 1: Create a New Project

Run the following command in your terminal:

```bash
nodearch new hello-world
```

Select the `express` template when prompted. This will scaffold a basic project structure using Express and TypeScript.

---

## 📁 Step 2: Explore the Project

Your new project will have a structure like this:

```
hello-world/
├── public/
├── src/
│   └── components/
│       └── hello.controller.ts
├── .gitignore
├── tsconfig.json
├── package.json
└── nodearch.json
```

> All your logic lives inside `components/`. Let’s add a controller there.

---

## ✍️ Step 3: Create a Controller

Create a file at `src/components/hello.controller.ts` with the following content:

```ts
import { Controller } from '@nodearch/core';
import { HttpGet, HttpPath } from '@nodearch/express';

@Controller()
@HttpPath('hello')
export class HelloController {

  @HttpGet('/')
  sayHello() {
    return { message: 'Hello, NodeArch!' };
  }
}
```

This controller exposes a `GET /hello` route that returns a friendly JSON response.

---

## 🚀 Step 4: Start the App

To run the app in watch mode (auto-reload on changes):

```bash
nodearch start -w
```

You should see something like:

```
🚀 Server is running at http://localhost:3000
```

Now visit [http://localhost:3000/hello](http://localhost:3000/hello) in your browser or use `curl`:

```bash
curl http://localhost:3000/hello
```

Response:

```json
{
  "message": "Hello, NodeArch!"
}
```

---

## ✅ Congratulations!

You've just created and run your first NodeArch app! 🎉

From here, you can:

- Add services for business logic
- Use dependency injection
- Add middleware and validation
- Explore lifecycle hooks (`onStart`, `onStop`)
- Test your controller with Mocha

> NodeArch gives you a solid structure from day one — now go build something awesome.
