import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryBoyDetailsComponent } from './delivery-boy-details/delivery-boy-details.component';
import { DeliveryBoyComponent } from './delivery-boy.component';
import {MatTableModule, MatHeaderRow, MatHeaderCell} from '@angular/material/table';


@NgModule({
  declarations: [DeliveryBoyDetailsComponent,DeliveryBoyComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class DeliveryBoyModule { }
