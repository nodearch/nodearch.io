# Testing

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Basic Test Case Structure](#basic-test-case-structure)
- [Decorators](#decorators)
  - [@Test](#test)
  - [@BeforeEach](#beforeeach)
  - [@Case](#case)
- [Writing Test Cases](#writing-test-cases)
  - [Example: User Service Tests](#example-user-service-tests)
- [Mocking Dependencies](#mocking-dependencies)
  - [Example: Mocking User Repository](#example-mocking-user-repository)

## Introduction

NodeArch provides a robust framework for writing and running test cases. Using decorators like `@Test`, `@BeforeEach`, and `@Case`, you can structure your tests in a clear and maintainable manner.

## Setup

Before writing your test cases, ensure you have NodeArch and the necessary dependencies installed.

```sh
npm install @nodearch/mocha chai
```

Import the required modules in your test files:

```javascript
import { BeforeEach, Case, Test } from '@nodearch/mocha';
import { expect } from 'chai';
```

## Basic Test Case Structure

A typical test case in NodeArch involves creating a test class and using decorators to define test methods.

```javascript
@Test()
export class MyTest {
  constructor(private myService: MyService) {}

  @BeforeEach()
  setup() {
    // Setup code here
  }

  @Case()
  async myTestCase() {
    // Test case code here
    expect(true).to.be.true;
  }
}

```

## Decorators

### @Test

The @Test decorator marks a class as a test suite. This class can contain multiple test cases.

```javascript
@Test()
export class MyTest { ... }
```

### @BeforeEach

The @BeforeEach decorator marks a method to be executed before each test case in the class. It is typically used to set up preconditions.

```javascript
@BeforeEach()
setup() {
  // Code to run before each test
}
```

### @Case

The @Case decorator marks a method as a test case. You can also pass parameters to customize the test case.

```javascript
@Case()
async myTestCase() {
  // Test case code
}
```

### @Mock

The @Mock decorator is used to mock a class or a service. This is useful for isolating the unit under test.

```javascript
@Mock(SampleComponent)
export class SampleMock { ... }
```

### @Override

The @Override decorator is used to replace the real implementation of a dependency with a mock implementation in the test class.

```javascript
@Override(SampleMock)
export class SampleTest { ... }
```

## Writing Test Cases

### Example: User Service Tests

Below is an example of writing test cases for a UserService class. This example includes tests for fetching users, adding a user, and getting a user by ID.

```javascript
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
    const data: Omit<IUser, "id"> = {
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
    } else if (id === 2) {
      expect(user).to.be.undefined;
    }
  }
}
```

## Mocking Dependencies

In some cases, you might need to mock dependencies to isolate the unit being tested. NodeArch allows you to override dependencies using the @Override decorator.

### Example: Mocking User Repository

```javascript
import { Case, Override, Test } from '@nodearch/mocha';
import { UserService } from './user.service.js';
import { expect } from 'chai';
import { UserRepoMock } from './user-repo.mock.js';

@Test()
@Override(UserRepoMock)
export class UserTest {
  constructor(
    private userService: UserService,
  ) {}

  @Case()
  async getUsers() {
    const users = await this.userService.getUsers();
    expect(users).length(1);
    expect(users[0].name).to.be.equal('Mocked User'); // The value is from UserRepoMock
  }
}
```

#### user-repo.mock.js

Below is the implementation of the mock user repository:

```javascript
import { Mock } from '@nodearch/mocha';
import { UserRepository } from './user.repository.js';

@Mock(UserRepository)
export class UserRepoMock {
  async getUsers() {
    return [
      {
        id: 1000,
        name: 'Mocked User',
        email: 'mocked.user@email.com',
        age: 1,
        role: 'admin',
        language: 'en'
      },
    ];
  }
}
```