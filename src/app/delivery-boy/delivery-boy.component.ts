import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminServiceService } from 'app/admin-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-delivery-boy',
  templateUrl: './delivery-boy.component.html',
  styleUrls: ['./delivery-boy.component.scss']
})
export class DeliveryBoyComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'firstName', 'phoneNumber', 'salary', 'isAvailable'];
  dataSource;


  formOrData = true;
  showDetails = true;
  deliverboys: any;
  deliveryboyDetails:any;


  constructor(private adminService: AdminServiceService, private http: HttpClient) {
    this.http.get('/api/delivery_boy').subscribe((val) => {
      this.deliverboys = val;
      this.dataSource = this.deliverboys.payload;
      console.log(this.dataSource);
    });
  }

  ngOnInit() {
  }

  display_DeliveryBoy_details(dataToDisplay): void {
    this.showDetails = false;
    this.deliveryboyDetails = dataToDisplay;
  }

  showForm(): void {
    this.formOrData = !this.formOrData;
  }

}
