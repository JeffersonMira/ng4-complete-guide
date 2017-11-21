import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit {
  recipes : Recipe[];

  //it needs to be included in the providers. In this case, it was included in the recipes.component.ts.
  constructor(private recipeService: RecipeService,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes(); // it will return just a copy of this list.
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo : this.route});   //we are already in the .../recipes, just need to include the 'new on it'

  }
}
