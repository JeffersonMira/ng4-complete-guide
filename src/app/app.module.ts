import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {AppRountingModule} from "./router/app-rounting.module";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [ AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    AppRountingModule, //It is used for the configuration of routing, using the app-rounting
    // RecipesModule, Not imported here as it is going to be imported using lazy initiation
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  providers: [], // All the providers are loaded eagerlly in core.module.tx
  bootstrap: [AppComponent]
})
export class AppModule { }
