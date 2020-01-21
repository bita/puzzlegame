import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppGuard } from './app-guard.guard'


const routes: Routes = [
  {  path: '', component: LoginComponent },
  {  path: 'login', component: LoginComponent},
  {  path: 'home', component: HomeComponent, canActivate:[AppGuard]},
  {  path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
