import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { AdminaddComponent } from './adminadd/adminadd.component';
import { UsesviewsComponent } from './usesviews/usesviews.component';
import { AdminsearchComponent } from './adminsearch/adminsearch.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { NavuserComponent } from './navuser/navuser.component';

const myrout:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"adminadd",
    component:AdminaddComponent
  },
  {
    path:"adminsearch",
    component:AdminsearchComponent
  },
  {
    path:"adminview",
    component:AdminviewComponent
  },
  {
    path:"userlogin",
    component:UserloginComponent
  },
  {
    path:"usersignup",
    component:UsersignupComponent
  },
  {
    path:"userview",
    component:UsesviewsComponent
  },
  {
    path:"viewprofile",
    component:ViewprofileComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserloginComponent,
    UsersignupComponent,
    AdminviewComponent,
    AdminaddComponent,
    UsesviewsComponent,
    AdminsearchComponent,
    NavComponent,
    ViewprofileComponent,
    NavuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myrout),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
