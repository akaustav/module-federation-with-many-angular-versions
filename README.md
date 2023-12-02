# module-federation-with-many-angular-versions

## Commands Used

1. Install v15 Long Term Support (LTS) version of `@angular/cli` globally

    ```shell
    npm -g i @angular/cli@v15-lts
    ```

2. Initialize a git repo

    ```shell
    git init
    ```

3. Generate the shell application:

    ```shell
    ng new shell --skip-git --no-create-application
    cd shell
    ng generate application shell --routing --style scss
    ```
