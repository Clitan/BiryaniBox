import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'app/admin-service.service';
import { DeliveryBoy } from 'app/Interfaces/delivery-boy';


@Component({
  selector: 'app-delivery-boy',
  templateUrl: './delivery-boy.component.html',
  styleUrls: ['./delivery-boy.component.scss']
})
export class DeliveryBoyComponent implements OnInit {

  showDetails = true;
  index = 0;
  deliverboys: DeliveryBoy[];
  deliveryboyDetails: DeliveryBoy;


  constructor(private adminService: AdminServiceService) {
    this.deliverboys = adminService.deliveryboy;
  }

  display_DeliveryBoy_details(id: number): void {
    this.showDetails = false;
    this.adminService.deliveryboy.forEach(element => {
      if (element.id == id)
        this.deliveryboyDetails = element;
    });
  }

  ngOnInit() {
  }

}
