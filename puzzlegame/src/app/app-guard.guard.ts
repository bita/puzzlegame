import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service'
import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';


@Injectable()

export class AppGuard implements CanActivate{
/*     
    guardObservable: Observable<boolean>;

    constructor(private authService: AuthService,
                private router: Router
                ){

                }

    canActivate(activatedRoutSnapshot: ActivatedRouteSnapshot, 
                routerStateSnapshot: RouterStateSnapshot): Observable<boolean>{
                       this.authService.isAuthenticated().subscribe(
                           (data) => {
                            this.guardObservable = Observable.create((observer: Observer<boolean>) => {

                            if( data == true){
                                observer.next(true);

                            }else{
                                observer.next(false);
                                this.router.navigate(['login']);
                            }
                        })
                    })
                    return this.guardObservable;
                }
 */

    constructor(public dialog: MatDialog,
                private routes : Router,
                private authService: AuthService,
                ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('username')!= null && this.authService.isLoggedIn){
        return true;
              
          }else if(!this.authService.isLoggedIn){
            this.openAlertDialog('Please login first!')
            return false;
          }

          else{
            this.routes.navigate(['/login']);
            return false;
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