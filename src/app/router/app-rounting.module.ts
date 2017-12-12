import {NgModule} from "@angular/core";
import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {HomeComponent} from "../core/home/home.component";
import {RecipesModule} from "../recipes/recipes.module";

//Creating a rount for my app. This object is used to control all the rounting for the system, and in each module is possible to have
//an object of type rounting.
const appRoutes : Routes = [
  //It was changed to use the Lazy loading. So the recipes is not loaded in the beggining of the application.
  // { path : '', redirectTo : '/recipes', pathMatch : 'full' }, //Once the home is accessed, it is send to 'recipes'. It is basically the home.
  { path : '', component : HomeComponent},
  { path : 'recipes', loadChildren: '../recipes/recipes.module#RecipesModule'}, //loading lazylly. Only when enter in the url
  { path : 'shopping-list', component : ShoppingListComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy : PreloadAllModules})],   //Making the const of Routes the one that is used as the Route controller for the application.
  exports: [RouterModule]
})
export class AppRountingModule {}
