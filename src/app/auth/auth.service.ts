import * as firebase from 'firebase';
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  token : string;

  constructor(private router: Router){

  }

  signupUser(email : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email : string, password : string){
    //noinspection TypeScriptUnresolvedFunction
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
       response => {
         this.router.navigate(['/']);
         firebase.auth().currentUser.getToken()
           .then(
             (token : string) => this.token = token
           )
       }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }

  getToken(){
    //Only returns a promisse, as the token can be expired, that is why it asked here just as the sign.
    //It doesnt wait for the token to be resolved, but returns it anyway.
    firebase.auth().currentUser.getToken()
      .then(
        (token : string) => this.token = token
      );

    return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }
}
