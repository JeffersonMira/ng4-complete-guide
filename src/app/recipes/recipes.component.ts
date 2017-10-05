import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService] //including it here will make possible for any child file to access this service.
})
export class RecipesComponent implements OnInit {

  recipeSelected : Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe : Recipe) => {
        this.recipeSelected = recipe;
      }
    );
  }
}
