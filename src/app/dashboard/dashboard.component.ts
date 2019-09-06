import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../Interfaces/food-items'
import { AdminServiceService } from 'app/admin-service.service';
import { Addons } from 'app/Interfaces/addons';
import { Offfers } from 'app/Interfaces/offers';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface x {
  name: string,
  price: number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  foods: FoodItem[];
  addon: Addons[];
  offer: Offfers[];
  newAddon: Addons;
  Id: number;
  name: String;
  price: Number;
  Edit: boolean = false;
  data: any;

  offerActive: string;
  isAdd: boolean = false;
  isAddOffer: boolean = false;

  addonName = new FormControl();
  addonPrice = new FormControl();
  aboutOffer = new FormControl();
  Discount = new FormControl();
  Upto = new FormControl();
  Orders = new FormControl();

  onPriceChange() {
    console.log(this.addonPrice.value);
  }



  onNameChange() {
    console.log(this.addonName.value);
  }


  constructor(private adminService: AdminServiceService, private http: HttpClient) {
    this.offerActive = "festival offer";
    this.foods = adminService.foodItems;
    this.addon = adminService.addons;
    this.offer = adminService.offers;
    this.http.get('/api/addons').subscribe((val) => {
      this.data = val;
      console.log(val);
    });
  }


  ngOnInit() {
    this.http.get('/api/addons').subscribe(val => console.log(val));

  }

  selectedOfferType(selected: string): void {
    this.offerActive = selected;
  }

  removeAddon(id: Addons): void {
    var index = this.adminService.addons.indexOf(id);
    this.adminService.addons.splice(index, index + 1);
    this.addon = this.adminService.addons;
  }

  addNewAddon(): void {
    this.isAdd = !this.isAdd;
    this.newAddon = {
      id: this.adminService.addons.length + 1,
      name: this.addonName.value,
      price: this.addonPrice.value
    }
    if (this.Edit) {
      this.newAddon = {
        id: this.Id,
        name: this.addonName.value,
        price: this.addonPrice.value
      }

      this.adminService.addons.forEach(element => {
        if (element.id == this.Id) {
          let index = this.adminService.addons.indexOf(element);
          this.adminService.addons[index] = this.newAddon;
        }
      });
    }
    else {
      this.adminService.addons.push(this.newAddon);
    }
    this.addon = this.adminService.addons;
  }

  setAddnewflag(): void {
    this.isAdd = !this.isAdd;
    this.name = null;
    this.price = null;
    this.addonName.clearAsyncValidators;
  }

  setEditvalue(value: Addons) {
    this.isAdd = !this.isAdd;
    this.Edit = true;
    this.Id = value.id;
    this.name = value.name;
    this.price = value.price;
  }

}