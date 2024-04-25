import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CreateuserComponent } from './dashboard/createuser/createuser.component';
import { UpdateuserComponent } from './dashboard/updateuser/updateuser.component';
import { DeleteuserComponent } from './dashboard/deleteuser/deleteuser.component';
import { RouterModule, Routes } from '@angular/router';
/*import { AuthRoutingRoutingModule } from './auth-routing/auth-routing-routing.module';*/

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "createnew", component: CreateuserComponent },
      { path: "update", component: UpdateuserComponent },
      { path: "delete", component: DeleteuserComponent },
      { path: "logout", redirectTo: "", pathMatch: 'full' },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CreateuserComponent,
    UpdateuserComponent,
    DeleteuserComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
