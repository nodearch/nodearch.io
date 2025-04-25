# Installation

Getting started with NodeArch is simple. With just a few steps, you’ll have everything you need to build structured, scalable, and maintainable Node.js applications.

---

## Prerequisites

Before installing NodeArch, make sure you have the following tools installed:

- **Node.js** `>= 20.x`
- **npm** or **yarn**
- A basic understanding of TypeScript is recommended

To check your versions:

```bash
node -v
npm -v
```

---

## Installing the CLI

NodeArch provides a powerful CLI that helps you create, build, and run applications.

Install it globally via npm:

```bash
npm install -g @nodearch/cli
```

Once installed, you can confirm it’s working with:

```bash
nodearch -h
```

This will display all available commands and options.

---

## Quick Check

To ensure the CLI is correctly installed, try running:

```bash
nodearch -v
```

You should see the currently installed version of the CLI.

---

## Creating a New Project

To generate a new NodeArch app, run:

```bash
nodearch new
```

You’ll be prompted to select a template (e.g. `express`) and the project will be scaffolded automatically.

---

## Project Structure

After creating your app, you’ll see a structure like this:

```
my-app/
├── public/
├── src/
│   ├── components/
│   └── main.ts
├── .gitignore
├── tsconfig.json
├── package.json
└── nodearch
```

- `components/` – contains your controllers, services, repositories, and other building blocks
- `nodearch` – nodearch configuration file for your app metadata

---

## Running Your App

To start your app in development mode:

```bash
nodearch start -w
```

Or to run it once (without watching for changes):

```bash
nodearch start
```

---

## Build for Production

When you're ready to build your app for production:

```bash
nodearch build
```

This outputs a compiled version of your app into the `dist/` directory.

---

## Running Tests

NodeArch supports **Mocha** for writing and running tests:

```bash
nodearch test
```

---

> ✅ That’s it — you’re ready to build with NodeArch!
