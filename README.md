# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##%% Comment about ANGULAR 2%%##

NG ->
NPM -> Node P? M? 
CLI -> https://github.com/angular/angular-cli/wiki
TypeScript :  the same as JS but with more features, like classes, interfaces, types (strong). IT is compiled to JS (as it runs in the server) using CLI
databindding = communication between the typeScript code (business logic) and the template (HTML)
String interpolation {{data }}
property binding [property] = "data"
Directives are Instructions in the DOM

#comandos#
ng new my-project
cd my-project
ng serve : run the application
ng generate component <name> (or ng g c <name>) : criar component usando comandos 

npm install -g @angular/cli -> começar projeto

# Including bootstrap #
npm install --save bootstrap
After doing it, you should go to .angular-cli.json and add the following line at styles: "../node_modules/bootstrap/dist/css/bootstrap.min.css",
Then it is necessary to restart the application.

#watch again#
2.13 how an angular app gets loaded and started

#Debugging#
download augury extension for chrome. it will help on debbuging


@Input faz com que a variável seja acessível de outros components.
Também é necessário  fazer um 'cast' no outro component, usando o [] (i.e [element])


bind events you have to create an object and define it as an EventEmitter. Also needs to mark it as @Output
@Output 
ViewEncapsulation : Modo que o Angular trabalha para que as configurações aplicadas em um módulo não influenciem em outros módulos indesejados.


attribute directives 
look like a normal HTML attribute (possible with databinding or event binding)
only affect/change the element thry are added to
[ngClass] [ngStyle]

Structural Directives
Look like a normal HTML attribute but have a leading * 
affect a whole area of DOM (elements get added/removed)
cant have more than one in the same element


#Services and dependency injections

# To learn more about observables on Angular - http://reactivex.io/rxjs
