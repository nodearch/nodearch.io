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

NodeArch is a Node.js backend framework targeting to solve the design and architectural problems when creating Node.js APPs for the backend. Using Typescript and dependency injection, we bring the concepts we used to in languages like Java, C# etc. While still getting the best out of Javascript flexibility and Node.js non-blocking I/O model. There is also a big focus on wiring everything together, so our intention is not to reinvent/rewrite the tools/frameworks we already know and use. Instead, our target is to wire everything together and leverage the open-source community behind Node.js and Javascript. You can think of NodeArch as the glue that links all your tools and libraries together and helps create a readable, maintainable and scalable application architecture.

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