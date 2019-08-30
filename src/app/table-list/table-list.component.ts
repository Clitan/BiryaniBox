import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  orderData = [
    {
      id: 1,
      name: "clitan",
      phoneNumber: "9731327628",
      price: 300,
      status: "paid"
    },
    {
      id: 2,
      name: "clitan",
      phoneNumber: "9731327628",
      price: 300,
      status: "paid"
    },
    {
      id: 3,
      name: "clitan",
      phoneNumber: "9731327628",
      price: 300,
      status: "paid"
    },
    {
      id: 4,
      name: "clitan",
      phoneNumber: "9731327628",
      price: 300,
      status: "paid"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
