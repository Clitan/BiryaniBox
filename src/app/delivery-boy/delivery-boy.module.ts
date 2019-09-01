import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryBoyDetailsComponent } from './delivery-boy-details/delivery-boy-details.component';
import { DeliveryBoyComponent } from './delivery-boy.component';
import { MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [DeliveryBoyDetailsComponent,DeliveryBoyComponent],
  imports: [
    CommonModule,
  ]
})
export class DeliveryBoyModule { }
