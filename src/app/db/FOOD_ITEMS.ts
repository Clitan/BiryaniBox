import { FoodItem } from '../Interfaces/food-items';

export const FOODITEMS : FoodItem[]= [
    {
        id:1,
        name: "Total Sale",
        rate: 450,
        Icon: "../../assets/img/baker.png",
        class: "card-header card-header-warning card-header-icon"
    },
    {
        id:2,
        name: "Veg Biryani",
        rate: 50,
        Icon: "../../assets/img/diet.png",
        class: "card-header card-header-success card-header-icon"
    },
    {
        id:3,
        name: "Egg Biryani",
        rate: 75,
        Icon: "../../assets/img/eggs.png",
        class: "card-header card-header-danger card-header-icon"
    },
    {
        id:4,
        name: "Chicken Biryani",
        rate: 100,
        Icon: "../../assets/img/fried-chicken.png",
        class: "card-header card-header-info card-header-icon"
    }
]