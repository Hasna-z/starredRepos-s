# MyFirstApp {Gemography's}

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Description

This webapp lists the most starred Github repos that were created in the last 30 days related to date: 28/07/2021 

## Tools 

this webapp is created using Angular 10 and the Github API as a source of data (back-end) via this link (https://api.github.com/search/repositories?q=created:>2021-06-28&sort=stars&order=desc)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

if it's not loading change the port and run for example the port 4203 `ng serve --port 4203` then Navigate to `http://localhost:4203/`

## Functionalities

You are able to list the most starred Github repos that were created in the last 30 days.
and see the results as a list, One repository per row and you will be able to see the following details per repository:
.Repository name
.Repository description
.Number of stars for the repo.
.Number of issues for the repo.
.Username and avatar of the owner.

Each page contains 30 result and you are able to keep scroll through pagination to see all the results.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

