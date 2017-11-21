import {Ingredient} from "../shared/ingredient.model";
import { EventEmitter } from '@angular/core';
import {Subject} from "rxjs";

export class ShoppingListService{

  ingredientsChanged = new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addShoppingItem(ingredient : Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addShoppingItems(ingredients : Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.addShoppingItem(ingredient);
    // }

    this.ingredients.push(...ingredients); //This operator transforms each element of array in an different object, turning it from
                                            // an array in a List.
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
