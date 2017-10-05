import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{

   @Output() featureChanged = new EventEmitter<string>();

  changeFeature(feature : string){
      this.featureChanged.emit(feature);
  }
}
