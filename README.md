## generator-studio-api

Quickly scaffold your new API by using a [Yeoman generator](http://yeoman.io/)! 

Steps:
1. Install yeoman
    ```bash
    $ npm i -g yo
    ```
1. Install [generator-studio-api]
    ```bash
    $ npm i -g generator-studio-api
    ```
1. Run the generator with your app name!
    ```bash
    $ yo studio-api <<app-name>>
    ```
1. **Profit!** Or at least have your API scaffolded out so you can start doing all of the things.

The package.json version defaults to 1.0.0, but this can be overridden using:
```bash
$ yo studio-api <<app-name>> --ver=<<version>>
```

Please see CraftNinja's extensive work on the [exp-starter-api](https://github.com/craftninja/exp-starter-api/tree/f/swagger) project for more details.

Note that this project uses Swagger for a spec-first API development workflow! Get to know the [Swagger 2.0 specification](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md).

After the spec is authored, use `$ npm run spec:build` to create a spec.json file. The [swagger-tools](https://github.com/apigee-127/swagger-tools/blob/master/docs/Middleware.md) middleware will automagically handle Express routing based on the spec.json file. Which is pretty cool.



This is brand new, so bear with us as we add more functionality:
- [ ] DB implementation should be scripted to create a new database with the project name - currently this still targets the 'exp-starter-api' database
- [ ] Not quite sure how we want to handle .env
- [ ] Eventually I'd like the user to set a swagger or vanilla Express option