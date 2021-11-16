# Hello World


**Your very first NodeArch app!**

We'll build, configure, and extend Apps from scratch in the Guides section, but here, we'll just do our usual introductory piece of code. The good old **Hello, world!**

We'll generate a template app using the CLI as our playground to take a look at the basic structure of a NodeArch App.

```sh
nodearch new
```
You'll be asked for the project name, which will be used as the directory name for your project. You'll also be asked to choose between one of the available templates. We'll use express just to try things out. Next, the CLI will start generating your new app and install all the required dependencies.

Once done, open up the new app directory, and you should see something like this:

```
+-- src
|   +-- components
|   |   +-- user.controller.ts
|   |   +-- user.spec.ts
|   +-- main.ts
|   +-- start.ts
+-- .gitignore
+-- package.json
+-- tsconfig.json
```

* [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) Specifies the root files and the compiler options required to compile the project.
* [`package.json`](https://nodejs.dev/learn/the-package-json-guide) Your Node.JS package info, like name, version, and dependencies, etc.
* [`.gitignore`](https://git-scm.com/docs/gitignore) Specifies intentionally untracked files to ignore.
* `src` The project source code root directory.
* `main.ts` That is where we define and configure our app. It works as the entry point for the CLI to load and start our app.
* `start.js` Used to start the app directly instead of using the CLI. It's useful in production as it's faster and doesn't require the CLI to be installed.
* `components` An optional directory to group the project components away from non-components source code.
* `user.spec.ts` an example suite of test cases.
* `user.controller.ts` an example controller.

Let's take a look at how the `main.ts` file looks like.

```typescript title="main.ts"
import { App, LogLevel } from '@nodearch/core';
import { ExpressServer, ExpressHook, OpenAPICli } from '@nodearch/express';
import path from 'path';
import express from 'express';
import http from 'http';

// Extending the base class App to create our new App
export default class MyApp extends App {

  constructor() {
    /**
     * Create and configure Express instance
     * to pass it to the Express Extension  
    */ 
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    // Create an HTTP server out of the Express instance
    const server = http.createServer(app);

    /** 
     * The super() call is to init and configure the base class
     * That we inherited, that is where we configure the new
     * App instance that will be created. 
    */
    super({
      // specify where the framework will look for the components
      classLoader: {
        classpath: path.join(__dirname, 'components')
      },
      // logging configurations
      logging: {
        logLevel: LogLevel.Debug
      },
      /**
       * extensions are also apps provided locally or through
       * npm modules to extend our app. 
       */ 
      extensions: [
        { 
          app: new ExpressServer({ 
            expressApp: app,
            server,
            port: 3001
          }), 
          include: [ExpressHook, OpenAPICli] 
        }
      ]
    });
  }

}
```

Now, to start the app

```sh
nodearch start
```

The app will load and starts an express server. If you go to `http://localhost:3000/users` in your browser, you should now see `Hello, World!`.