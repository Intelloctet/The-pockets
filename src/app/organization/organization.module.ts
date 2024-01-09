import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { SignupOrgComponent } from './signup-org/signup-org.component';
import { SigninOrgComponent } from './signin-org/signin-org.component';


@NgModule({
  declarations: [
    OrganizationComponent,
    SignupOrgComponent,
    SigninOrgComponent,
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule { }
