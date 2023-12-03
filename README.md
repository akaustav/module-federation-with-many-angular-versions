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

1. Generate a Micro Front End (MFE) in Angular 13

    ```shell
    npx -y -p @angular/cli@v13-lts ng new ng-13-mf --skip-git --no-create-application
    cd ng-13-mf
    npx -y -p @angular/cli@v13-lts ng generate application mfe13 --routing --style scss
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

1. 