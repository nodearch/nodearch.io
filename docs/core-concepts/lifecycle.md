# Lifecycle


Draft the doc talking about the framework lifecycle. 

When you run nodearch start: 

- Cli look for app in the current directory by scanning for file called nodearch
- When found it is loaded, and the main entry point is called which is the main.ts file
- The main.ts file is expected to export a class that extends the App class from @nodearch/core
- Cli creates an instace from the loaded app, and then calls two main built-in functions on App
- calls init() which:
  - Loads and init core components (Logger, AppContext, ConfigManager)
  - Loads extensions if any, keeping in mind that extensions are just nodearch apps like yours, so it will be doing the same logic to load them as what we're explaining now.
  - Registring the extentions in the main app.
  - Loading the main app (your app):
    - Using components.url specified in your app, scans the directory recursivel and load all ts/js files based on the mode.
    - Load these files using nodejs import. 
    - Filter the loaded files to keep only components which are classes that uses a nodearch builtin or custome component decorator, e.g., Controller, Service, etc.
  - Registring hooks from both the main app and any extension that exports a hook e.g. has `@Hook({ export: true })
- calls start() which:
  - Calls and await on onStart() for all registered hooks
- and finally when the app exit it will call stop() which calls onStop() on all registered hooks.



// Add the scope part