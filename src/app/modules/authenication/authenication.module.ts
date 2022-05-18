import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenicationRoutingModule } from './authenication-routing.module';
import { LoginComponent } from 'src/app/components/authentication/login/login.component';
import { SignupComponent } from 'src/app/components/authentication/signup/signup.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthenicationRoutingModule
  ]
})
export class AuthenicationModule { }
