import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'app/admin-service.service';
import { DeliveryBoy } from 'app/Interfaces/delivery-boy';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-delivery-boy',
  templateUrl: './delivery-boy.component.html',
  styleUrls: ['./delivery-boy.component.scss']
})
export class DeliveryBoyComponent implements OnInit {
  formOrData = true;
  showDetails = true;
  index = 0;
  deliverboys: any=null;
  deliveryboyDetails: any=null;


  constructor(private adminService: AdminServiceService, private http: HttpClient) {
    this.http.get('/api/delivery_boy').subscribe((val) => {
      this.deliverboys = val;
      console.log(val);
    });

  }

  display_DeliveryBoy_details(id: String): void {
    var url = '/api/delivery_boy/'+id;
    console.log(id);
    this.showDetails = false;
    this.http.get(url).subscribe((val) => {
      this.deliveryboyDetails = val;
      console.log(val);
    });
  }

  ngOnInit() {
  }

  showForm() {
    this.formOrData = !this.formOrData;
  }

}
