import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})

export class RecipesListComponent implements OnInit, OnDestroy {
  recipes : Recipe[];
  subscription : Subscription;

  //it needs to be included in the providers. In this case, it was included in the recipes.component.ts.
  constructor(private recipeService: RecipeService,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[])=>{
          this.recipes = recipes;
        }
      )
    this.recipes = this.recipeService.getRecipes(); // it will return just a copy of this list.
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo : this.route});   //we are already in the .../recipes, just need to include the 'new on it'
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
