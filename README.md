# module-federation-with-many-angular-versions

## Commands Used

1. Install v15 Long Term Support (LTS) version of `@angular/cli` globally

    ```shell
    npm -g i @angular/cli@v15-lts
    ```

1. Initialize a git repo

    ```shell
    git init
    ```

1. Generate the shell application:

    ```shell
    ng new shell --skip-git --no-create-application
    cd shell
    ng generate application shell --routing --style scss
    cd ..
    ```

1. Modify the `app.component.ts` and `app.component.html` to display the a simple page with the version of angular being used.

1. Generate an Angular 13 project

    ```shell
    npx -y -p @angular/cli@v13-lts ng new ng-13-mf --skip-git --no-create-application
    cd ng-13-mf
    npx -y -p @angular/cli@v13-lts ng generate application mfe13 --routing --style scss
    cd ..
    ```

1. Set the Angular 13 MFE application to use port `4201`. In the `ng-13-mf\angular.json` file, add an `options` object under `projects -> mfe13 -> architect -> serve` and set the value of `port` to `4201`. Full JSON path is `$.projects.mfe13.architect.serve.options.port = 4201`

    ```json
    {
      "projects": {
        "your-project-name": {
          "architect": {
            "serve": {
              "options": {
                "port": 4201
              }
            }
          }
        }
      }
    }
    ```

1. Generate an Angular 14 project

    ```shell
    npx -y -p @angular/cli@v14-lts ng new ng-14-mf --skip-git --no-create-application
    cd ng-14-mf
    npx -y -p @angular/cli@v14-lts ng generate application mfe14 --routing --style scss
    cd ..
    ```

1. Generate an Angular 15 project

    ```shell
    npx -y -p @angular/cli@v15-lts ng new ng-15-mf --skip-git --no-create-application
    cd ng-15-mf
    npx -y -p @angular/cli@v15-lts ng generate application mfe15 --routing --style scss
    cd ..
    ```

1. Initialize Micro Front Ends using `@angular-architects/module-federation`:

```shell
cd ng-13-mf
npm i -DE @angular-architects/module-federation@14.2.3
npx -y -p @angular/cli@v13-lts ng g @angular-architects/module-federation:init --project mfe13 --port 4201
cd ..

cd ng-14-mf
npm i -DE @angular-architects/module-federation@14.3.14
npx -y -p @angular/cli@v14-lts ng g @angular-architects/module-federation:init --project mfe14 --port 4202 --type remote
cd ..

cd ng-15-mf
npm i -DE @angular-architects/module-federation@15.0.3
npx -y -p @angular/cli@v15-lts ng g @angular-architects/module-federation:init --project mfe15 --port 4203 --type remote
cd ..

cd shell
npm i -DE @angular-architects/module-federation@15.0.3
npx -y -p @angular/cli@v15-lts ng g @angular-architects/module-federation:init --project shell --port 4200 --type host
cd ..
```
