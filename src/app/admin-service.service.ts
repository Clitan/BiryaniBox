import { Injectable } from '@angular/core';
import { FoodItem } from '../app/Interfaces/food-items';
import { FOODITEMS } from './db/FOOD_ITEMS';
import { Addons } from './Interfaces/addons';
import { Offfers } from './Interfaces/offers';
import { OFFERS } from './db/OFFERS';
import { DeliveryBoy } from './Interfaces/delivery-boy';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
export interface Hero {
  name: string;
  price:number;
}


@Injectable({
  providedIn: 'root'
})

export class AdminServiceService {

  foodItems: FoodItem[];
  addons: Addons[];
  offers: Offfers[];
  deliveryboy: DeliveryBoy[];

  constructor(private Http: HttpClient) {
    this.foodItems = FOODITEMS;
    this.offers = OFFERS;

  }

}


