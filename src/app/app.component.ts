import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  feature : string;

  constructor(){ }

  setFeature(feature : string){
    console.log(feature);
    this.feature = feature;

  }
}
