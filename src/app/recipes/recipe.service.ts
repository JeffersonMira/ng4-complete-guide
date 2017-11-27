import {Recipe} from "./recipe.model";
import { Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService{

  // selectedRecipe = new EventEmitter<Recipe>(); NOT NECESSARY AS USING OBSERVABLE

  recipesChanged = new Subject<Recipe[]>();

  private recipes : Recipe[] = [
    new Recipe('Feijoada',
      'Brazilian? food',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRRFKgMLyXo5jFZ2XomxiwQ-rnHTuTtb1X-zz9AMtstxeTwtg',
      [new Ingredient("Beans (kilo)", 1),
        new Ingredient("Pork meat (kilo)", 1)]
    ),
    new Recipe('Maminha assada',
      'Brazilian food',
      'https://abrilclaudia.files.wordpress.com/2017/07/receita-maminha-assada-manjericao.jpg?quality=85&strip=info&w=620',
        [new Ingredient("Brazilian maminha meat (kilo)", 1),
        new Ingredient("Potatoes", 5)]
      )
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  constructor(private slservice : ShoppingListService){}

  addIngredientsToShoppingList(ingredients : Ingredient[]){
    this.slservice.addShoppingItems(ingredients);
  }

  addRecipe(recipe : Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index : number, newRecipe : Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
