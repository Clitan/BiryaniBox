import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../Interfaces/food-items'
import { AdminServiceService } from 'app/admin-service.service';
import { Addons } from 'app/Interfaces/addons';
import { Offfers } from 'app/Interfaces/offers';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface postData {
  success: boolean,
  payload: [
    {
      name: string,
      price: number
    }
  ]
}

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
  EditAddon: any;
  Edit: boolean = false;
  data: any;
  name: string;
  price: number;
  editid: string;

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
  addNewAddons = {
    name: "hello",
    price: 0
  }

  constructor(private adminService: AdminServiceService, private http: HttpClient) {
    this.offerActive = "festival offer";
    this.foods = adminService.foodItems;
    this.offer = adminService.offers;
    this.getAddonsData();
  }

  getAddonsData(){
    this.http.get('/api/addons').subscribe((val) => {
      this.data = val;
    });
  }

  ngOnInit() {
  }

  selectedOfferType(selected: string): void {
    this.offerActive = selected;
  }

  removeAddon(id: string): void {
    this.http.delete('/api/addons/' + id).subscribe((val) => {
    });
    this.getAddonsData();
  }

  addNewAddon(): void {
    this.isAdd = !this.isAdd;
    console.log(this.addonName.value)
    if (this.Edit) {
      this.http.put('/api/addons/' + this.editid, { name: this.addonName.value, price: this.addonPrice.value }).subscribe((val) => {
      });
      this.name = null;
    this.price = null;
    this.editid = null;
    this.getAddonsData();
    }
    else {
      this.http.post('/api/addons', { name: this.addonName.value, price: this.addonPrice.value }).subscribe((val) => {
      });
      this.getAddonsData();
    }
    this.getAddonsData();
  }

  setAddnewflag(): void {
    this.isAdd = !this.isAdd;
    this.addonName.clearAsyncValidators;
    if(this.isAdd){
    this.name = null;
    this.price = null;
    this.editid = null;
    }
  }

  setEditvalue(EAddon) {
    this.isAdd = !this.isAdd;
    this.Edit = true;
    this.name = EAddon.name;
    this.price = EAddon.price;
    this.editid = EAddon._id;
  }
}