import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pockets/user/signin/signin.component';
import { SignupComponent } from './pockets/user/signup/signup.component';
import { DashboardComponent } from './pockets/dashboard/dashboard.component';
import { ContactComponent } from './pockets/contact/contact.component';
import { authGuardUserManager } from './auth/guards/user-manager/auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'pockets/contacts', component: ContactComponent },
  { path: 'user/manager', loadChildren: () => import('src/app/user-manager/user-manager.module').then(m => m.UserManagerModule) },
  { path: 'user/organization', loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule) },
  { path: '**', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
