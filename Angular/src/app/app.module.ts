import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from'./components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserHomeComponent } from './components/userhome/userhome.component';

import {AuthGuardService} from './services/authguard.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

const appRoutes: Routes =  [
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'userhome', component: UserHomeComponent, canActivate:[AuthGuardService]},

]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
	LoginComponent,
	UserHomeComponent
  ],
  imports: [//i guess this is for like big packages
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(appRoutes),
	FlashMessagesModule

  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
