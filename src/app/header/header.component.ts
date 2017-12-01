import {Component, Output, EventEmitter} from "@angular/core";
import {DataStorageService} from "../shared/data-storage.service";
import {Response} from "@angular/http";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{

  // IT WAS NECESSARY WHEN NOT USING THE ROUTING APPROACH.
  // @Output() featureChanged = new EventEmitter<string>();
  // changeFeature(feature : string){
  //     this.featureChanged.emit(feature);
  // }

  constructor(private dataStorageService : DataStorageService,
              private authService : AuthService){  }
  onSaveData(){
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response : Response)=>{
          console.log(response);
        }
      );
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }

  onLogout(){
    this.authService.logout();
  }
}
