import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AddonsListComponent } from './addons-list/addons-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [DashboardComponent, AddonsListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpModule
  ]
})
export class DashboardModule { }
