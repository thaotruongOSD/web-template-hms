# WEB-TEMPLATE-HMS - SUPPORT BASIC LAYOUT FOR WEBSITE

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Getting help](#getting-help)


## Features
- Header (support render menu and dynamic logo, avatar,..)
- Sidebar (support render menu)
- Footer
- Login form

## Demo

Please check all components we have in action at https://ng-bootstrap.github.io

## Dependencies

The only two dependencies are [Angular](https://angular.io) and [Bootstrap 4](https://getbootstrap.com) CSS.

## Installation

You need to have an Angular project with the supported Angular version. We strongly recommend using [Angular CLI](https://cli.angular.io) for this.

You also need to add Bootstrap 4 CSS to your application by using your preferred way (it really depends on the setup you're using). Ex. for Angular CLI you can [get Bootstrap from npm](https://www.npmjs.com/package/bootstrap) and update your `angular.json` with something like:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
]

 "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ],
```

After installing the above dependencies, install `web-template-hms` via:
```shell
npm i web-template-hms
```
Once installed you need to import our main module:
```js
import {WebLayoutModule } from 'web-template-hms';

@NgModule({
  ...
  imports: [WebLayoutModule, ...],
  ...
})
export class YourAppModule {
}
```


## Getting help

So if you are in trouble, here's where you can look for help.



