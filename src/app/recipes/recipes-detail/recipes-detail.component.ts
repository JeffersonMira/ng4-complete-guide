import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe : Recipe;
  id : number;

  constructor(private recipeService : RecipeService,
              private route : ActivatedRoute, //This guy is used to get the route values that are active in that moment
              private router : Router  ) {   //This guy can control the route.
  }

  ngOnInit() {
    // const id = this.route.snapshot.params['id']; the problem with this is it just gets the value on the load of the screen. Not dinamically.

    ///the following approach uses an observable, where this method subscrive to the event that is created.
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];  //this '+' transforms in a number dinamically. no need to other casts.
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  addToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    //TWO VALID APPROACHS
      this.router.navigate(['edit'], {relativeTo : this.route});
    // this.router.navigate(['../', this.id, 'edit'],{relativeTo : this.route});
  }
}
