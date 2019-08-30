import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../Interfaces/food-items'
import { AdminServiceService } from 'app/admin-service.service';
import { Addons } from 'app/Interfaces/addons';
import { Offfers } from 'app/Interfaces/offers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  foods: FoodItem[];
  addon: Addons[];
  offer: Offfers[];

  offerActive: string;

  constructor(private adminService: AdminServiceService) {
    this.offerActive = "festival offer";
    this.foods = adminService.foodItems;
    this.addon = adminService.addons;
    this.offer = adminService.offers;
  }

  selectedOfferType(selected: string): void {
    this.offerActive = selected;
  }

  ngOnInit() {


  }
}
