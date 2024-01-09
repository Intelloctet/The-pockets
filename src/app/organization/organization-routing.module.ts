import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { SigninOrgComponent } from './signin-org/signin-org.component';
import { SignupOrgComponent } from './signup-org/signup-org.component';

const routes: Routes = [
  { path: '', component: OrganizationComponent },
  { path: 'signin', component: SigninOrgComponent },
  { path: 'signup', component: SignupOrgComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
