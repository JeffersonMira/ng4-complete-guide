import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RecipesComponent} from "../recipes/recipes.component";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {RecipeStartComponent} from "../recipes/recipe-start/recipe-start.component";
import {RecipesDetailComponent} from "../recipes/recipes-detail/recipes-detail.component";
import {RecipeEditComponent} from "../recipes/recipe-edit/recipe-edit.component";
import {SignupComponent} from "../auth/signup/signup.component";
import {SigninComponent} from "../auth/signin/signin.component";
import {AuthGuard} from "../auth/auth-guard.service";


//Creating a rount for my app. This object is used to control all the rounting for the system, and in each module is possible to have
//an object of type rounting.
const appRoutes : Routes = [
  { path : '', redirectTo : '/recipes', pathMatch : 'full' }, //Once the home is accessed, it is send to 'recipes'. It is basically the home.
                                                              //Only redirect if the full path matchs.
  { path : 'recipes', component : RecipesComponent, children:[  //Everytime the path  'recipes' is called, the RecipesComponent is called.
          {path: '', component: RecipeStartComponent },
          {path : 'new', component: RecipeEditComponent, canActivate : [AuthGuard]}, //defines what is the rule to access it.
          {path : ':id', component: RecipesDetailComponent, canActivate : [AuthGuard]},
          {path : ':id/edit', component: RecipeEditComponent}
  ]},
  { path : 'shopping-list', component : ShoppingListComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],   //Making the const of Routes the one that is used as the Route controller for the application.
  exports: [RouterModule]
})
export class AppRountingModule {}
