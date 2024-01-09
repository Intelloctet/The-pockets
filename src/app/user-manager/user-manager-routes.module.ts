import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuardUserManager } from '../auth/guards/user-manager/auth.guard';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';

const routes:Routes = [
  {path:'', redirectTo:'dashboard',pathMatch:'prefix'},
  {path:'dashboard',canActivate: [authGuardUserManager],component:DashboardUserComponent},
  {path:'login', component:LoginComponent},
 
]

@NgModule({
  declarations: [
   
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserManagerRoutesModule { }
