import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MostPopularModel } from '@models/home-model';
import { OfferModel } from '@models/home-model';
import { response } from 'express';

@Injectable({
    providedIn: 'root',
})

export class HomeService {

    popular: MostPopularModel[] = [
        {
            id: 1,
            name: 'Las Bahias',
            location: 'Cineguilla, Lima',
            image: 'assets/hotels/popular/popular-1.svg',
            isPopular: true
        },
        {
            id: 2,
            name: 'La isla',
            location: 'San Bartolo, Lima',
            image: 'assets/hotels/popular/popular-2.svg',
            isPopular: true
        },
        {
            id: 3,
            name: 'Laguna Azul',
            location: 'Gineguilla, Lima',
            image: 'assets/hotels/popular/popular-3.svg',
            isPopular: false
        },
        {
            id: 4,
            name: 'Garden Inn',
            location: 'Asia, Lima',
            image: 'assets/hotels/popular/popular-4.svg',
            isPopular: false
        }
    ]

    offer: OfferModel[] = [
        {
            id: 1,
            name: 'Sol y Mar',
            location: 'Punta negra, Lima',
            image: 'assets/hotels/offers/offer-1.svg',
            offer: '20% off'
        },
        {
            id: 2,
            name: 'Gran Hotel Imperial',
            location: 'San Bartolo, Lima',
            image: 'assets/hotels/offers/offer-2.svg',
            offer: '30% off'
        },
        {
            id: 3,
            name: 'Costa Dorada',
            location: 'Punta Hermosa, Lima',
            image: 'assets/hotels/offers/offer-3.svg',
            offer: '50% off'
        },
        {
            id: 4,
            name: 'Paraíso',
            location: 'Punta Hermosa, Lima',
            image: 'assets/hotels/offers/offer-4.svg',
            offer: '50% off'
        },
        {
            id: 5,
            name: 'Villa Serena',
            location: 'Cineguilla, Lima',
            image: 'assets/hotels/offers/offer-5.svg',
            offer: '50% off'
        }
    ]

        // getMostPopular(): Observable<MostPopularModel[]> {
    //     //const response = await fetch('https://api.example.com/productos');
    //     // if (!response.ok) {
    //     //   throw new Error('Error al obtener los productos');
    //     // }
    //     return of(this.popular)
    // }

    // getCurrentOffers(): Observable<OfferModel[]> {
    //     //const response = await fetch('https://api.example.com/productos');
    //     // if (!response.ok) {
    //     //   throw new Error('Error al obtener los productos');
    //     // }
    //     return of(this.offer)
    // }