import { Component, OnInit } from '@angular/core';
// import {Recipe} from "./recipe.model";


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService] //including it here will make possible for any child file to access this service.
  //                             //but if I navifate away it lose all the data that is loaded in the service.
})
export class RecipesComponent implements OnInit {

  // recipeSelected : Recipe;   NOT NECESSARY AS USING OBESERVABLE NOW
  // constructor(private recipeService : RecipeService) { }   NOT NECESSARY AS USING OBESERVABLE NOW

  constructor() { }

  ngOnInit() {
    // NOT NECESSARY AS USING OBESERVABLE NOW
    // this.recipeService.selectedRecipe.subscribe(
    //   (recipe : Recipe) => {
    //     this.recipeSelected = recipe;
    //   }
    // );
  }
}
