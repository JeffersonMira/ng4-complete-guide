import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import {AuthService} from "../auth/auth.service";

//This guy is necessary because it will need to receive another service - the HTTPService
@Injectable()
export class DataStorageService {

  //To use this guy, the HttpModule must be imported in app.module.ts
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService : AuthService){}

  storeRecipes(){

    const token = this.authService.getToken();
    //1) When you use put in firebase, it 'updates or saves'. If you use POST it just inserts a new register, doenst matter if it already exists.
    //2) This method returs an observable that needs to be 'subscribed' by the services that are going to use it.
    console.log(this.recipeService.getRecipes());
    return this.http.put('https://ng-recipe-book-d4b97.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipes());
  }

  getRecipes(){
    const token = this.authService.getToken();

    this.http.get('https://ng-recipe-book-d4b97.firebaseio.com/recipes.json?auth='+token)
      .map(
        (response : Response) =>{
          // it will transform the data into a json. It works very fine with firebase, that stores the data
          // just like a json.
          const recipes : Recipe[] = response.json();

          //It is possible to exists recipes in DB that doesnt have ingredients. It is necessary to include a new empty array on it.
          for(let recipe of recipes){
            if(!recipe['ingredients']){
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ).subscribe(
        (recipes : Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

}
