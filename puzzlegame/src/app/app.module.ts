import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { LatestScoreComponent } from './latest-score/latest-score.component';
import { BestScoreComponent } from './best-score/best-score.component';
import { RankComponent } from './rank/rank.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AppGuard } from './app-guard.guard';
import {MatInputModule} from '@angular/material/input';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component'; 
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LatestScoreComponent,
    BestScoreComponent,
    RankComponent,
    HomeComponent,
    LoginComponent,
    AlertDialogComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AppGuard],
  bootstrap: [AppComponent],
  entryComponents: [AlertDialogComponent],
})
export class AppModule { }
