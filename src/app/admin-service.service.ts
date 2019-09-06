import { Injectable } from '@angular/core';
import { FoodItem } from '../app/Interfaces/food-items';
import { FOODITEMS } from './db/FOOD_ITEMS';
import { Addons } from './Interfaces/addons';
import { ADDONS } from './db/ADDONS';
import { Offfers } from './Interfaces/offers';
import { OFFERS } from './db/OFFERS';
import { DeliveryBoy } from './Interfaces/delivery-boy';
import { DELIVERYBOY } from './db/DELIVERY-BOY';
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


  heroesUrl = 'api/addons';  // URL to web api

  constructor(private Http: HttpClient) {
    this.foodItems = FOODITEMS;
    this.addons = ADDONS;
    this.offers = OFFERS;
    this.deliveryboy = DELIVERYBOY;

  }

  getHeroes (): Observable<any[]> {
    return this.Http.get<any[]>(this.heroesUrl);
  }

//   storedata(data) {
//     return this.HttpClient.post("url",data, {
//       headers: new HttpHeaders({
//            'Content-Type':  'application/json',
//          })
//     }).map(a=>
//      a);
// }
}


