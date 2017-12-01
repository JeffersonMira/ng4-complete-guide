import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase'; //import everything from package 'firebase' and name it 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  feature : string;

  constructor(){ }

  ngOnInit(){
    //Para descobrir esses valores, tem que ir no firebase -> Authentication -> Configuração da web.
    firebase.initializeApp({
      apiKey: "AIzaSyAyeoJFUUEGZn_zvB9Hx5TMyUF9-dbxasY",
      authDomain: "ng-recipe-book-d4b97.firebaseapp.com"
    });
  }

  setFeature(feature : string){
    this.feature = feature;

  }
}
