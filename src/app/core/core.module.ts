import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "../shared/shared.module";
import {AppRountingModule} from "../router/app-rounting.module";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {RecipeService} from "../recipes/recipe.service";
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service";

@NgModule({
  declarations : [HeaderComponent, HomeComponent],

  imports : [
    SharedModule, //have to import this because it have the 'dropdown' feature imported.
    AppRountingModule //The header needs it to make the links work
  ],
  exports : [
    AppRountingModule,
    HeaderComponent    //needs to be exported because the main module uses this selector.
  ],
  providers : [ShoppingListService, RecipeService, DataStorageService, AuthService]
})
export class CoreModule {

}
