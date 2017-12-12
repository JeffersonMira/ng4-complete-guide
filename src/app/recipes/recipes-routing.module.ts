import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {AuthGuard} from "../auth/auth-guard.service";
import {RecipesDetailComponent} from "./recipes-detail/recipes-detail.component";

const recipesRoutes : Routes = [
  { path : '', component : RecipesComponent, children:[  //Everytime the path  'recipes' is called, the RecipesComponent is called.
    {path: '', component: RecipeStartComponent },
    {path : 'new', component: RecipeEditComponent, canActivate : [AuthGuard]}, //defines what is the rule to access it.
    {path : ':id', component: RecipesDetailComponent, canActivate : [AuthGuard]},
    {path : ':id/edit', component: RecipeEditComponent}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes) //just call the 'forRoot' in the root module. We are in the child module.
  ],
  exports:[RouterModule],
  providers : [AuthGuard] // /the authentication is just used here, so there is no reason to have it in the main module at all.
                          // it just makes sense to do something like this because recipes is lazy loaded
})
export class RecipesRoutingModule{

}
