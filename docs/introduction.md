---
sidebar_position: 1
slug: /
---

# Introduction

<img align="right" src="https://github.com/AhmedAli7O1/nodearch/raw/master/assets/isolated-layout.svg" style={{height: 200, width: 300}} alt="NodeArch Logo" />

## Welcome to NodeArch

[![Programming Language](https://img.shields.io/badge/typescript-100%25-blue.svg)](https://nodearch.io)
[![Version](https://img.shields.io/npm/v/@nodearch/core.svg?label=Version)](https://www.npmjs.com/package/@nodearch/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/nodearch/nodearch/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dt/@nodearch/core.svg)](https://https://www.npmjs.com/package/@nodearch/core)
[![Code Coverage](https://coveralls.io/repos/github/BlueMax-IO/nodearch/badge.svg?branch=master)](https://coveralls.io/github/nodearch/core?branch=master)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@nodearch/core.svg)](https://img.shields.io/snyk/vulnerabilities/npm/@nodearch/core)
[![Build Status](https://img.shields.io/github/workflow/status/AhmedAli7o1/nodearch/Deploy/master?label=Build)](https://img.shields.io/github/workflow/status/nodearch/nodearch/Deploy/master)
[![Star on GitHub](https://img.shields.io/github/stars/AhmedAli7o1/nodearch?style=social)](https://github.com/AhmedAli7O1/nodearch/stargazers)

NodeArch is a powerful Node.js backend framework designed to help developers solve common design and architectural challenges when building backend applications. Built with TypeScript and a focus on dependency injection, NodeArch brings the concepts and patterns commonly found in Java and C# to the world of Node.js development. This allows developers to create scalable and maintainable applications using familiar patterns, while still leveraging the flexibility and non-blocking I/O model of Node.js.

At its core, NodeArch is designed to be the glue that links together the many tools and libraries that make up the Node.js and JavaScript ecosystems. Rather than reinventing the wheel or creating entirely new tools, NodeArch is designed to help developers wire everything together in a way that is intuitive, readable, and easy to maintain.

This documentation is intended to provide a comprehensive guide to NodeArch, from installation and setup to advanced topics like middleware and routing. It is designed for developers who are already familiar with Node.js and backend development, but who are new to NodeArch or looking to learn more about its features and advantages.

In the following sections, you'll find detailed information on how to use NodeArch to build powerful, scalable, and maintainable applications. We'll start with the basics, like installing the NodeArch command-line interface and generating a new project. From there, we'll dive into topics like dependency injection, middleware, routing, and more. Whether you're just getting started with NodeArch or looking to take your skills to the next level, this documentation is the perfect resource to help you achieve your goals.

## Getting started

### 📦 Install

You need to install the NodeArch command-line interface to be able to generate new apps. Start by Running the following command in your terminal to install the CLI globally.

```sh
npm i -g @nodearch/cli
```

Once installed, you can generate a quick template to get started with the framework.
```sh
nodearch new
```

To view the full CLI usage, run the following:
```sh
nodearch -h
```

## Contributing
Contributions, issues and feature requests are welcome! If you like the idea and want to improve, add, or suggest something, please use the GitHub Issue tracker to communicate your thoughts with us.

### 👷 Development
### Prerequisites
* [Node.js](https://nodejs.org/en/download/)
* [Microsoft Rush](https://rushjs.io/pages/intro/get_started/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Setup
Clone the project on your local machine, using the following command.
```bash
git clone https://github.com/BlueMax-IO/nodearch.git
```

Switch to the repo directory, and then install dependencies
```bash
rush install
```

Now build the project
```bash
rush build
```

### Usage

```bash
# Build the project
rush build

# Run test cases
rush test

# Add NPM package as a dependency
rush add
```

For more details on how to use Rush to add packages, commands, build and run stuff. check it on the official [Rush website](https://rushjs.io/pages/intro/welcome/)

## ⭐️ Support

Give a ⭐️ if this project helped you! 

[![Star on GitHub](https://img.shields.io/github/stars/ahmedali7o1/nodearch?style=social)](https://github.com/ahmedali7o1/nodearch/stargazers)

## 📝 License

Open Source Software made with ❤️ for the Node.js Community and developed under [MIT](https://github.com/AhmedAli7O1/nodearch/blob/master/LICENSE) license.