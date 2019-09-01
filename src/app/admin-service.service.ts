import { Injectable } from '@angular/core';
import { FoodItem } from '../app/Interfaces/food-items';
import { FOODITEMS } from './db/FOOD_ITEMS';
import { Addons } from './Interfaces/addons';
import { ADDONS } from './db/ADDONS';
import { Offfers } from './Interfaces/offers';
import { OFFERS } from './db/OFFERS';
import { DeliveryBoy } from './Interfaces/delivery-boy';
import { DELIVERYBOY } from './db/DELIVERY-BOY';

@Injectable({
  providedIn: 'root'
})

export class AdminServiceService {

  foodItems: FoodItem[];
  addons: Addons[];
  offers: Offfers[];
  deliveryboy:DeliveryBoy[];

  constructor() {
    this.foodItems = FOODITEMS;
    this.addons = ADDONS;
    this.offers = OFFERS;
    this.deliveryboy=DELIVERYBOY;
  }
}


