
# demo-tickets

## Context

This is a system created to propose a solution for a challenge made from [Byrd](http://getbyrd.com). The original task can be found at /challenge folder.


## Proposal Solution

### Requirements

To run this project you will need globally installed [Node.js](https://nodejs.org) and their package manager called *npm*. I tested the system for node version 6.9.5 and npm version 5.6.0.

It also needed [angular-cli](https://cli.angular.io/) version 1.6.8

### Language and Tools

As this project is a Front-End only and the proposition is also about Typescript, I choose Angular to get ahead with it.

In this context, make sense use the best tools available to accelerate the development and in Angular, the *must have* is angular-cli. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

I have 2 diferent reasons to choose Boostrap 4 to improve the design. The most obvious is that Byrd is using it in their tech stack and the other is that it is a very popular framework. 

With this choices I have the complete range of requested languages (HTML, CSS and Javascript,Typescript) covered.

### Architecture

### Additions / Tradeoffs

### Technical Decisions

### Limitations

* Since I am negotiating a Front-End position with them, I decided to not develop the Back-End of the system, for now. It can be done in the future, for demonstration purposes.

## Running and Testing

### How to run the code

The code can be run using the development server. To do this, first you need to install the libraries using `npm install` and then `ng test`will make the trick.

The website will be acessible at `http://localhost:4200/`.

### How to run unit tests

#### Unit tests
As any angular-cli projectsm this one uses [Karma](https://karma-runner.github.io) as testing mechanism. You can just run `ng test` to execute the tests.

#### end-to-end tests
Because e2e tests are very time consumming to develop and not even mentioned in original proposition, I made the option to don't do it. It can be done, if needed.
