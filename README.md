# module-federation-with-many-angular-versions

## Commands Used

1. **OPTIONAL:** Install v15 Long Term Support (LTS) version of `@angular/cli` globally.

    ```shell
    npm -g i @angular/cli@v15-lts
    ```

1. Initialize a git repo

    ```shell
    git init
    ```

1. Generate an Angular 15 project to be used as the MFE host:

    ```shell
    npx -y -p @angular/cli@v15-lts ng new shell --skip-git --no-create-application
    cd shell
    npx -y -p @angular/cli@v15-lts ng generate application shell --routing --style scss
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

1. **OPTIONAL:** Set the Angular 13 MFE application to use port `4201`. In the `ng-13-mf\angular.json` file, add an `options` object under `projects -> mfe13 -> architect -> serve` and set the value of `port` to `4201`. Full JSON path is `$.projects.mfe13.architect.serve.options.port = 4201`

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

1. Initialize Angular 13 Micro Front End Remote using `@angular-architects/module-federation`:

    ```shell
    cd ng-13-mf
    npm i -DE @angular-architects/module-federation@14.2.3
    npx -y -p @angular/cli@v13-lts ng g @angular-architects/module-federation:init --project mfe13 --port 4201
    cd ..
    ```

1. Edit various files

    1. Replace tabs with spaces in `ng-13-mf/angular.json`.
    1. Insert newline at the bottom of `ng-13-mf/angular.json`.
    1. Insert newline at the bottom of `ng-13-mf/package.json`.
    1. Restore comment atop `ng-13-mf/tsconfig.json`.
    1. Insert newline at the bottom of `ng-13-mf/tsconfig.json`.
    1. Restore comment atop `ng-13-mf/projects/mfe13/tsconfig.app.json`.
    1. Insert newline at the bottom of `ng-13-mf/projects/mfe13/tsconfig.app.json`.
    1. Replace double quotes with single quotes in `ng-13-mf/projects/mfe13/webpack.config.js`.
    1. Uncomment the section for remotes in `ng-13-mf/projects/mfe13/webpack.config.js`.
    1. Reformat white-spaces in `ng-13-mf/projects/mfe13/webpack.config.js`.
    1. Reformat `ng-13-mf/projects/mfe13/src/bootstrap.ts`.
    1. Reformat `ng-13-mf/projects/mfe13/src/main.ts`.
    1. Modify the `ng-13-mf/projects/mfe13/src/app/app.component.ts` and `ng-13-mf/projects/mfe13/src/app/app.component.html` to display the a simple page with the version of angular being used.

1. Run the application to verify there are no errors.

    ```shell
    npm start
    <Ctrl + C>
    npm run run:all
    <Ctrl + C>
    cd ..
    ```

1. Initialize Angular 14 Micro Front End Remote using `@angular-architects/module-federation`:

    ```shell
    cd ng-14-mf
    npm i -DE @angular-architects/module-federation@14.3.14
    npx -y -p @angular/cli@v14-lts ng g @angular-architects/module-federation:init --project mfe14 --port 4202 --type remote
    ```

1. Edit various files

    1. Replace tabs with spaces in `ng-14-mf/angular.json`.
    1. Insert newline at the bottom of `ng-14-mf/angular.json`.
    1. Insert newline at the bottom of `ng-14-mf/package.json`.
    1. Restore comment atop `ng-14-mf/tsconfig.json`.
    1. Insert newline at the bottom of `ng-14-mf/tsconfig.json`.
    1. Restore comment atop `ng-14-mf/projects/mfe14/tsconfig.app.json`.
    1. Insert newline at the bottom of `ng-14-mf/projects/mfe14/tsconfig.app.json`.
    1. Reformat white-spaces in `ng-14-mf/projects/mfe14/webpack.config.js`.
    1. Reformat `ng-14-mf/projects/mfe14/src/bootstrap.ts`.
    1. Reformat `ng-14-mf/projects/mfe14/src/main.ts`.
    1. Modify the `ng-14-mf/projects/mfe14/src/app/app.component.ts` and `ng-14-mf/projects/mfe14/src/app/app.component.html` to display the a simple page with the version of angular being used.

1. Run the application to verify there are no errors.

    ```shell
    npm start
    <Ctrl + C>
    npm run run:all
    <Ctrl + C>
    cd ..
    ```

1. Initialize Angular 15 Micro Front End Remote using `@angular-architects/module-federation`:

    ```shell
    cd ng-15-mf
    npm i -DE @angular-architects/module-federation@15.0.3
    npx -y -p @angular/cli@v15-lts ng g @angular-architects/module-federation:init --project mfe15 --port 4203 --type remote
    ```

1. Edit various files

    1. Replace tabs with spaces in `ng-15-mf/angular.json`.
    1. Insert newline at the bottom of `ng-15-mf/angular.json`.
    1. Insert newline at the bottom of `ng-15-mf/package.json`.
    1. Restore comment atop `ng-15-mf/tsconfig.json`.
    1. Insert newline at the bottom of `ng-15-mf/tsconfig.json`.
    1. Restore comment atop `ng-15-mf/projects/mfe15/tsconfig.app.json`.
    1. Insert newline at the bottom of `ng-15-mf/projects/mfe15/tsconfig.app.json`.
    1. Reformat `ng-15-mf/projects/mfe15/src/bootstrap.ts`.
    1. Reformat `ng-15-mf/projects/mfe15/src/main.ts`.
    1. Modify the `ng-15-mf/projects/mfe15/src/app/app.component.ts` and `ng-15-mf/projects/mfe15/src/app/app.component.html` to display the a simple page with the version of angular being used.

1. Run the application to verify there are no errors.

    ```shell
    npm start
    <Ctrl + C>
    npm run run:all
    <Ctrl + C>
    cd ..
    ```

1. Initialize Angular 15 Micro Front End Host using `@angular-architects/module-federation`:

    ```shell
    cd shell
    npm i -DE @angular-architects/module-federation@15.0.3
    npm i -E @angular-architects/module-federation-tools@15.0.3
    npx -y -p @angular/cli@v15-lts ng g @angular-architects/module-federation:init --project shell --port 4200 --type host
    cd ..
    ```

1. Edit various files

    1. Replace tabs with spaces in `shell/angular.json`.
    1. Insert newline at the bottom of `shell/angular.json`.
    1. Insert newline at the bottom of `shell/package.json`.
    1. Restore comment atop `shell/tsconfig.json`.
    1. Insert newline at the bottom of `shell/tsconfig.json`.
    1. Restore comment atop `shell/projects/shell/tsconfig.app.json`.
    1. Insert newline at the bottom of `shell/projects/shell/tsconfig.app.json`.
    1. Reformat `shell/projects/shell/webpack.config.js`.
    1. Reformat `shell/projects/shell/src/bootstrap.ts`.
    1. Reformat `shell/projects/shell/src/main.ts`.
    1. Modify the `shell/projects/shell/src/app/app.component.ts` and `shell/projects/shell/src/app/app.component.html` to display the a simple page with the version of angular being used.

1. **Possibly OPTIONAL:** Add the list of remotes within `shell/projects/shell/webpack.config.js`.

    ```javascript
    remotes: {
      "mfe13": "http://localhost:4201/remoteEntry.js",
      "mfe14": "http://localhost:4202/remoteEntry.js",
      "mfe15": "http://localhost:4203/remoteEntry.js",
    },
    ```

1. Install `@angular/elements` as a production dependency in each remote MFE:

    ```shell
    cd ng-13-mf
    npm i -E @angular/elements@13.3.12
    cd ../ng-14-mf
    npm i -E @angular/elements@v14-lts
    cd ../ng-15-mf
    npm i -E @angular/elements@v15-lts
    cd ..
    ```

1. Expose web components from the `app.module.ts` within each remote MFE in:

    1. `ng-13-mf\projects\mfe13\src\app\app.module.ts`

        ```typescript
        import { NgModule, Injector, DoBootstrap } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { NgElementConstructor, createCustomElement } from '@angular/elements';
        import { AppRoutingModule } from './app-routing.module';
        import { AppComponent } from './app.component';

        @NgModule({
          declarations: [AppComponent],
          imports: [BrowserModule, AppRoutingModule],
          bootstrap: [AppComponent],
        })
        export class AppModule implements DoBootstrap {
          constructor(private injector: Injector) {}
    
          public ngDoBootstrap(): void {
            const ce: NgElementConstructor<void> = createCustomElement<void>(
              AppComponent,
              { injector: this.injector }
            );
            customElements.define('angular13-element', ce);
          }
        }
        ```

    1. `ng-14-mf\projects\mfe14\src\app\app.module.ts`

        ```typescript
        import { NgModule, Injector, DoBootstrap } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { NgElementConstructor, createCustomElement } from '@angular/elements';
        import { AppRoutingModule } from './app-routing.module';
        import { AppComponent } from './app.component';

        @NgModule({
          declarations: [AppComponent],
          imports: [BrowserModule, AppRoutingModule],
          bootstrap: [AppComponent],
        })
        export class AppModule implements DoBootstrap {
          constructor(private injector: Injector) {}
    
          public ngDoBootstrap(): void {
            const ce: NgElementConstructor<void> = createCustomElement<void>(
              AppComponent,
              { injector: this.injector }
            );
            customElements.define('angular14-element', ce);
          }
        }
        ```

    1. `ng-15-mf\projects\mfe15\src\app\app.module.ts`

        ```typescript
        import { NgModule, Injector, DoBootstrap } from '@angular/core';
        import { BrowserModule } from '@angular/platform-browser';
        import { NgElementConstructor, createCustomElement } from '@angular/elements';
        import { AppRoutingModule } from './app-routing.module';
        import { AppComponent } from './app.component';

        @NgModule({
          declarations: [AppComponent],
          imports: [BrowserModule, AppRoutingModule],
          bootstrap: [AppComponent],
        })
        export class AppModule implements DoBootstrap {
          constructor(private injector: Injector) {}
    
          public ngDoBootstrap(): void {
            const ce: NgElementConstructor<void> = createCustomElement<void>(
              AppComponent,
              { injector: this.injector }
            );
            customElements.define('angular15-element', ce);
          }
        }
        ```

1. Open the `shell`'s router config (`shell\projects\shell\src\app\app-routing.module.ts`) and add the routes to load each of the microfrontends:

    ```typescript
    const routes: Routes = [
      {
        path: 'angular13',
        component: WebComponentWrapper,
        data: {
          type: 'module',
          remoteEntry: 'http://localhost:4201/remoteEntry.js',
          exposedModule: './Component',
          elementName: 'angular13-element',
        } as WebComponentWrapperOptions,
      },

      {
        path: 'angular14',
        component: WebComponentWrapper,
        data: {
          type: 'module',
          remoteEntry: 'http://localhost:4202/remoteEntry.js',
          exposedModule: './Component',
          elementName: 'angular14-element',
        } as WebComponentWrapperOptions,
      },

      {
        path: 'angular15',
        component: WebComponentWrapper,
        data: {
          type: 'module',
          remoteEntry: 'http://localhost:4203/remoteEntry.js',
          exposedModule: './Component',
          elementName: 'angular15-element',
        } as WebComponentWrapperOptions,
      },
    ];
    ```

1. Run the application to verify there are no errors.

    ```shell
    npm start
    <Ctrl + C>
    npm run run:all
    <Ctrl + C>
    cd ..
    ```
