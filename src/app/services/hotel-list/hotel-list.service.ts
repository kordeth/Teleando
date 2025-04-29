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
            name: 'Gran Hotel Imperial',
            location: 'San Bartolo, Lima',
            image: 'assets/hotels/items/item-1.svg',
            description: 'Un hotel de lujo, donde la elegancia clásica se combina con el confort moderno',
            rating: 4.5,
            pricePerHour: 80,
            isPopular: true
        },
        {
            id: 2,
            name: 'Costa Dorada',
            location: 'Punta Hermosa, Lima',
            image: 'assets/hotels/items/item-2.svg',
            description: 'Un lugar único con encanto histórico.',
            rating: 4.8,
            pricePerHour: 49,
            isPopular: true
        },
        {
            id: 3,
            name: 'La Isla',
            location: 'San Bartolo, Lima',
            image: 'assets/hotels/items/item-3.svg',
            description: 'Disfruta frente al océano en un ambiente relajado y acogedor',
            rating: 4,
            pricePerHour: 35,
            isPopular: false
        },
        {
            id: 4,
            name: 'Garden Inn',
            location: 'Asia, Lima',
            image: 'assets/hotels/items/item-4.svg',
            description: 'Rodeado de naturaleza, este refugio ofrece tranquilidad absoluta.',
            rating: 4.1,
            pricePerHour: 35,
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