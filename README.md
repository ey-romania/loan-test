
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
For any candidate that was invited for the technical interview the challenge is:

You will have to create a frontend application that communicates with this fake backend. You can choose to implement the login done with Jwt token(just use the login route and you will get the token needed), or skip this one and use the non-secure web api.
Mockups will be found on the UI Mockup section. The mockups are mandatory to be implemented in desktop and mobile version. If you go on the secure path, you will have to implement the login screen as well and no page should be availbe to non-logged-in user. 

All the fields in the mockup are mandatory and their type and shape can be found via the swagger definition of the api. There is no server-side validation so the validation must be done on the client-side. 

## Information
For getting access for the api definitions via swagger please go the following address:
http://localhost:3000/api/

There are two ways of communicating with the api:
1. Via user login using the following credentials: email: test@abc.abc password:testTalentQ. And there you will use a jwt token that will last for an hour. If you need to increase the the lifetime of the jwt token go to: src/auth/auth.module.ts and replace the signOptions:{expiresIn:'your value in seconds'}
2. If you decide to go on the route without taking user login into account then the loanpublic schema will be used.

This backend is an in-memory list of loan applications and each restart will cause to remove all the previous entries. Also there aren't any validations done on server side, so any validation strategy will have to be implemented only on the frontend part. However if you want to implement validations on server side, you can do it on the app.service.ts and it will be applied for all the controllers.

For getting the loan types value that are going to populate the dropdown please use the route: api/public/loan/types which is available without any credentials.

## UI Mockup
Mockup for figma will be found
1. [Mobile](https://www.figma.com/proto/vNbvxh6FlXgZBdMzsMSRHO/Lo-fi-Wireframe-Kit-(Community)?node-id=19%3A2226&scaling=min-zoom&page-id=12%3A16)
2. [Desktop](https://www.figma.com/proto/vNbvxh6FlXgZBdMzsMSRHO/Lo-fi-Wireframe-Kit-(Community)?node-id=1%3A5648&scaling=min-zoom&page-id=1%3A5647)

## Special mentions
At the time of writing this documentation the nodejs version that will work without any problem is: v14.16.1. 
