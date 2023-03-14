# 003-oopsmails-angular-lib

## Simple Way

This will also generate with git repo, i.e, .git folder will also be generated, which means, can generate Angular application first, then create remote github repository after.

```
npx -p @angular/cli@14 ng new 002-oopsmails-angular-lib-a14 --skip-install
```

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

> to make _ng_ as the shortcut to _./node_modules/.bin/ng_

Run the following command to create an alias for ng:

- For Bash (Linux or macOS):

```
alias ng="./node_modules/.bin/ng"
```

- For Command Prompt or PowerShell (Windows):

```
doskey ng=node_modules\.bin\ng.cmd $*
```

This will create an alias that points the ng command to the local installation of the Angula

> can also add alias in ~/.bashrc or ~/.zshrc or /c/"Program Files"/Git/etc/bash.bashrc

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

## Generate Library

ng g library oops-lib003 --prefix oopslib003

## Work on Library

- Put in all shared things in lib

e.g, C:\oopsmails\003-oopsmails-angular-lib\projects\oops-lib003\src\lib\shared\services

- Export

projects\oops-lib003\src\public-api.ts

- Build the Library

At the top level, run, `ng build oops-lib003`.
This will generate, dist\oops-lib003, at top level

- Pack to tgz if needed

Go to dist\oops-lib003  
ng pack // check the version of .tgz file is update!!!  
../../node_modules/.bin/ng pack

ERROR: Error: Unknown command. Did you mean cache?

possible reason, because of angular/cli was NOT installed globally ... will NOT pack for now.

## Using npm link to debug live!

There is a command for this: link. Like publish, you must run it from your library dist directory. It'll create a symlink in npm local registry pointing to your compiled library.

- Ref:

https://indepth.dev/posts/1193/create-your-standalone-angular-library-in-10-minutes

<>
$ cd ./dist/my-lib
$ npm link

$ cd my-app
$ npm link my-lib
The last step is to make your app using the npm local registry for your library. Run npm link again but specify your library name. Check the node_modules for your app. You must see my-link which a symlink pointing to your library dist directory.

Let's use our library in the app component

```
$ cd my-lib
$ ng build --watch

cd /c/oopsmails/003-oopsmails-angular-lib/projects/oops-lib003

../../node_modules/.bin/ng build --watch

$ cd my-app
$ ng serve

npm start

or

./node_modules/.bin/ng serve

```

## Errors

- Error DecimalPipe, NullInjectorError

main.ts:11 ERROR NullInjectorError: R3InjectorError(AppModule)[CountryDataServiceLib003 -> DecimalPipe -> DecimalPipe -> DecimalPipe]:
NullInjectorError: No provider for DecimalPipe!

Add `providers: [DecimalPipe],` in app.module.ts.

Add it in library will not work! ... Why?

see ref: https://stackoverflow.com/questions/58277592/nullinjectorerror-no-provider-for-decimalpipe

> You need to provide the DecimalPipe in the Module that provides your Service. For example, if your service is "providedIn: 'root'" then you should provide the DecimalPipe in your AppModule like that:
