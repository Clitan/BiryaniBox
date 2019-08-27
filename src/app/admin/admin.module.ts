import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AppRoutingModule } from '../app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [AdminDashBoardComponent, AdminLoginComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ]
})
export class AdminModule { }
