import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminLoginComponent } from './admin-login.component';

@NgModule({
  declarations: [AdminLoginComponent, AdminSignupComponent],
  imports: [
    CommonModule
  ]
})
export class AdminLoginModule { }
