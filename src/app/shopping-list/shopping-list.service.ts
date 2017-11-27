import {Ingredient} from "../shared/ingredient.model";
import { EventEmitter } from '@angular/core';
import {Subject} from "rxjs/Subject";

export class ShoppingListService{

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index : number){
    return this.ingredients[index];
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

  updateIngredient(index : number, newIngredient : Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index,1); //it will some items (number passed as second parameter) from the index passed.
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
