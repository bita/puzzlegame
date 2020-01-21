import { Injectable } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
/*  authSubject: Subject<boolean>;
  constructor() {
    this.authSubject = new Subject;
   }

  login(){
    this.isLoggedIn = true;
    this.authSubject.next(this.isLoggedIn);
    console.log("you are logged in")
  
}
  logout(){
    this.isLoggedIn = false;
    this.authSubject.next(this.isLoggedIn);

  }
  isAuthenticated() {
    this.authSubject.next(this.isLoggedIn);
      return this.authSubject;
  } */
isLoggedIn: boolean;
checkusernameandpassword(uname: string, pwd : string){

  if(uname == "admin" && pwd =="admin123"){
    localStorage.setItem('username',"admin");
    return this.isLoggedIn = true;
  }
  else{
    return this.isLoggedIn = false;
  }
    }
}
