# 003-oopsmails-angular-lib

## Configure local version of @angular/cli

### Remove global angular if there is

- check angular/cli verions, _ng version_
- npm uninstall -g @angular/cli
- (Optional) If you want to remove the configuration and cache files associated with the Angular CLI, you can also delete the following directories:
  On Windows: %APPDATA%\npm\node_modules\@angular\cli
  On macOS/Linux: ~/npm/node_modules/@angular/cli
- You can use the following command to delete the directories:
  npm cache verify
- check angular/cli verions, _ng version_, should see nothing

### Install angular/cli in workspace at specific version

- create new, or go to /c/oopsmails/999-workspace
- npm install @angular/cli@14
- run ng under current folder using `./node_modules/.bin/ng <command>`
- ./node_modules/.bin/ng version

### Generate new angular app using ng under current folder

- ./node_modules/.bin/ng new 003-oopsmails-angular-lib --skip-install

### Copy the generated angular app to an existing github repo

Note, normally, don't copy README.md and .gitignore, etc.

## Run angular app to verify

Now, go to the github project folder, e.g, /c/oopsmails/003-oopsmails-angular-lib

Open in VS Code, check the angular version in package.json

change from css to scss .... in angular.json, sytles.css and app.component.css ....

npm i

npm start

## Change some configuration

```
- When generating individual component:
./node_modules/.bin/ng generate component <component-name> --style=scss

- Change globally to use scss:
./node_modules/.bin/ng config schematics.@schematics/angular:component.style scss

or add following in angular.json

  "newProjectRoot": "projects",
  "schematics": {
    "@schematics/angular:component": {
      "style": "scss"
    }
  },

```
