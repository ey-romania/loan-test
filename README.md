
## Description
A mockup backend written in [Nest](https://github.com/nestjs/nest) framework that will be used for technical interviews.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Challenge
For any candidate that was invited for the technical interview, the challenge is:

You will have to create a frontend application(an independent javascript application in any library framework you are confortable with) that communicates with this fake backend. You can choose to implement the login done with the Jwt token(use the login route and get the token needed), or skip this one and use the non-secure web API. Mockups will be found in the UI Mockup section. The mockups are mandatory to be implemented in desktop and mobile versions. If you go on the secure path, you will have to implement the login screen as well, and all the pages must not be available for non-logged-in users.

All the fields in the mockup are mandatory and their type and shape can be found via the swagger definition of the API. There is no server-side validation, so the validation must be done on the client-side.

## Information
For getting access to the API definitions via swagger, please go to the following address:
http://localhost:3000/api/

There are two ways of communicating with the API:
1. Via user login using the following credentials: email: test@abc.abc password:testTalentQ. And there, you will use a Jwt token that will last for an hour. If you need to increase the lifetime of the Jwt token, go to src/auth/auth.module.ts and replace the signOptions: {expiresIn:'your value in seconds'}
2. If you decide to go on the route without taking the user login into the account, the public loan schema will be used.

This backend is an in-memory list of loan applications, and each restart will cause to remove all the previous entries. Also, there aren't any validations done on the server-side, so any validation strategy will have to be implemented only on the frontend part. However, if you want to implement validations on the server-side, you can do it on the app.service.ts, and it will be applied to all the controllers.

For getting the loan types value that will populate the dropdown, please use the route: api/public/loan/types that are available without any credentials.

## UI Mockup
Mockup for figma will be found
1. [Mobile](https://www.figma.com/proto/vNbvxh6FlXgZBdMzsMSRHO/Lo-fi-Wireframe-Kit-(Community)?node-id=19%3A2226&scaling=min-zoom&page-id=12%3A16)
2. [Desktop](https://www.figma.com/proto/vNbvxh6FlXgZBdMzsMSRHO/Lo-fi-Wireframe-Kit-(Community)?node-id=1%3A5648&scaling=min-zoom&page-id=1%3A5647)

## Special mentions
At the time of writing this documentation, the nodejs version that will work without any problem is v14.16.1. 
