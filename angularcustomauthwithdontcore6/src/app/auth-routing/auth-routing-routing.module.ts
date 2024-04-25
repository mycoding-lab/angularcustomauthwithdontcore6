import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { CreateuserComponent } from '../dashboard/createuser/createuser.component';
import { DashboardComponent } from '../dashboard/dashboard/dashboard.component';
import { DeleteuserComponent } from '../dashboard/deleteuser/deleteuser.component';
import { UpdateuserComponent } from '../dashboard/updateuser/updateuser.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "logout", redirectTo: "login", pathMatch: 'full' },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "createnew", component: CreateuserComponent },
      { path: "update", component: UpdateuserComponent },
      { path: "delete", component: DeleteuserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingRoutingModule { }
