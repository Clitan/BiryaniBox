import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { AdminLoginComponent } from './admin-login.component';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AdminLoginComponent, AdminSignupComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
  ]
})
export class AdminLoginModule { }
