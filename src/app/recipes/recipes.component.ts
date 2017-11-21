import { Component, OnInit } from '@angular/core';
// import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] //including it here will make possible for any child file to access this service.
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
