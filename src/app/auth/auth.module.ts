import {NgModule} from '@angular/core';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AuthRoutesModule} from './auth-routes.module';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutesModule
  ]
})

export class AuthModule { }
