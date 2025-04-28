import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HotelItemModel } from '@models/hotel-item';

@Injectable({
    providedIn: 'root',
})

export class HotelListService {

    list: HotelItemModel[] = [
        {
            id: 1,
            name: 'Hotel 1',
            location: 'Location 1',
            image: 'assets/hotels/items/item-1.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4.5,
            pricePerHour: 100,
            availableRooms: 5,
            amenities: ['WiFi', 'Pool', 'Gym'],
            isPopular: true
        },
        {
            id: 2,
            name: 'Hotel 2',
            location: 'Location 2',
            image: 'assets/hotels/items/item-2.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4.8,
            pricePerHour: 90,
            availableRooms: 4,
            amenities: ['WiFi', 'Pool', 'Gym'],
            isPopular: true
        },
        {
            id: 3,
            name: 'Hotel 3',
            location: 'Location 3',
            image: 'assets/hotels/items/item-3.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4,
            pricePerHour: 60,
            availableRooms: 4,
            amenities: ['WiFi'],
            isPopular: false
        },
        {
            id: 4,
            name: 'Hotel 4',
            location: 'Location 4',
            image: 'assets/hotels/items/item-4.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4.1,
            pricePerHour: 70,
            availableRooms: 5,
            amenities: ['WiFi', 'Pool'],
            isPopular: false
        },
    ]

    constructor() { }

    getHotelList(): Observable<HotelItemModel[]> {
        //const response = await fetch('https://api.example.com/productos');
        // if (!response.ok) {
        //   throw new Error('Error al obtener los productos');
        // }
        return of(this.list)
    }
}