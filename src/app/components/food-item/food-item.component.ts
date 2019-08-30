import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit {
foods=[
  {
  name:"veg",
  rate:"10"
},
{
  name:"veg",
  rate:"10"
},
{
  name:"veg",
  rate:"10"
}
]
  constructor() { }

  ngOnInit() {
  }

}
