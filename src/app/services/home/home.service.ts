import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MostPopularModel } from '@models/home-model';
import { OfferModel } from '@models/home-model';

@Injectable({
    providedIn: 'root',
})

export class HomeService {

    popular: MostPopularModel[] = [
        {
            id: 1,
            name: 'Hotel 1',
            location: 'Location 1',
            image: 'assets/hotels/popular/popular-1.svg',
            isPopular: true
        },
        {
            id: 2,
            name: 'Hotel 2',
            location: 'Location 2',
            image: 'assets/hotels/popular/popular-2.svg',
            isPopular: true
        },
        {
            id: 3,
            name: 'Hotel 3',
            location: 'Location 3',
            image: 'assets/hotels/popular/popular-3.svg',
            isPopular: false
        },
        {
            id: 4,
            name: 'Hotel 4',
            location: 'Location 4',
            image: 'assets/hotels/popular/popular-4.svg',
            isPopular: false
        }
    ]

    offer: OfferModel[] = [
        {
            id: 1,
            name: 'Hotel 1',
            location: 'Location 1',
            image: 'assets/hotels/offers/offer-1.svg',
            offer: '20% off'
        },
        {
            id: 2,
            name: 'Hotel 2',
            location: 'Location 2',
            image: 'assets/hotels/offers/offer-2.svg',
            offer: '30% off'
        },
        {
            id: 3,
            name: 'Hotel 3',
            location: 'Location 3',
            image: 'assets/hotels/offers/offer-3.svg',
            offer: '50% off'
        },
        {
            id: 4,
            name: 'Hotel 4',
            location: 'Location 4',
            image: 'assets/hotels/offers/offer-4.svg',
            offer: '50% off'
        },
        {
            id: 5,
            name: 'Hotel 5',
            location: 'Location 5',
            image: 'assets/hotels/offers/offer-5.svg',
            offer: '50% off'
        }
    ]

    constructor() { }

    getMostPopular(): Observable<MostPopularModel[]> {
        //const response = await fetch('https://api.example.com/productos');
        // if (!response.ok) {
        //   throw new Error('Error al obtener los productos');
        // }
        return of(this.popular)
    }

    getCurrentOffers(): Observable<OfferModel[]> {
        //const response = await fetch('https://api.example.com/productos');
        // if (!response.ok) {
        //   throw new Error('Error al obtener los productos');
        // }
        return of(this.offer)
    }
}