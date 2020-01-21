import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

/*   constructor(private authService: AuthService) { }

  isLoggedIn = false;

  ngOnInit() {
    this.authService.isAuthenticated().subscribe(
      (data: boolean) => {
        this.isLoggedIn = data;
        console.log(this.isLoggedIn);
      })
  }  

  login(uname: string, pwd : string){
    if(uname == "admin" && pwd =="admin123"){
    localStorage.setItem('username',"admin");
    this.authService.login();
    console.log("you are logged in")
  }else{
    console.log("you are not logged in")
    this.isLoggedIn = false;
  }
}

  logout(){
    this.authService.logout();
  } */

constructor(public dialog: MatDialog, private routes : Router, private service : AuthService) { }
  ngOnInit() {
  }
  check(uname: string, p : string)
  {
    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.routes.navigate(['/home']);
      this.openAlertDialog('Welcome ' + uname)
    }
    else{
      this.openAlertDialog('Invalid username or password BABY!');
    }
 
 
}
openAlertDialog(message) {
  const dialogRef = this.dialog.open(AlertDialogComponent,{
    data:{
      message: message,
      buttonText: {
        cancel: 'Ok'
      }
    },
  });
}

}

