import { Offfers } from "app/Interfaces/offers";


export const OFFERS: Offfers[] = [
    {
        id: 1,
        type: "festival offer",
        offer: [
            {
                discount:30,
                upto:100,
                orders:1
            },
            {
                discount:30,
                upto:100,
                orders:1
            }
          
            // "Get 2 coke Free on purchase of Rs. 299 or above",
            // "Get upto 30% off on everyday essentials",
            // "Get upto 30% off on everyday essentials"
        ]
    },
    {
        id: 2,
        type: "Daily offer",
        offer: [
            {
                discount:30,
                upto:50,
                orders:2
            }
        ]
    },
    {
        id: 3,
        type: "B-BOX offer",
        offer: [
            {
                discount:50,
                upto:100,
                orders:5
            }
        ]

    }
]
