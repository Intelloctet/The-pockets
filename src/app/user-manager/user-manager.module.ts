import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagerComponent } from './user-manager.component';
import { UserManagerRoutesModule } from './user-manager-routes.module';
import { LoginComponent } from './login/login.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';



@NgModule({
  declarations: [
    UserManagerComponent,
    LoginComponent,
    DashboardUserComponent
  ],
  imports: [
    CommonModule,
    UserManagerRoutesModule
  ]
})
export class UserManagerModule { }
