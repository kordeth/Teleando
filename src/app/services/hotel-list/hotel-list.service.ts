import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelItemModel, HotelListModel } from '@models/hotel-item';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})

export class HotelListService {

    private jsonUrl = 'https://acgjo5022j.execute-api.us-east-1.amazonaws.com/v1/hoteles'; // Cambia esto por tu URL real

    constructor(private http: HttpClient) { }

    getHotelList(): Observable<HotelListModel> {
    return this.http.get<HotelListModel>(this.jsonUrl, {responseType: 'json'});
  }

}

    // list: HotelItemModel[] = [
    //     {
    //         id: 1,
    //         name: 'Gran Hotel Imperial',
    //         location: 'San Bartolo, Lima',
    //         image: 'assets/hotels-mock/items/item-1.svg',
    //         description: 'Un hotel de lujo, donde la elegancia clásica se combina con el confort moderno',
    //         rating: 4.5,
    //         minPricePerHour: 80,
    //         currency: 'PEN',
    //         isPopular: true,
    //         position: {
    //             latitude: -12.386125,
    //             longitude: -76.776057
    //         }
    //     },
    //     {
    //         id: 2,
    //         name: 'Costa Dorada',
    //         location: 'Punta Hermosa, Lima',
    //         image: 'assets/hotels-mock/items/item-2.svg',
    //         description: 'Un lugar único con encanto histórico.',
    //         rating: 4.8,
    //         minPricePerHour: 49,
    //         currency: 'PEN',
    //         isPopular: true,
    //         position: {
    //             latitude: -12.309120,
    //             longitude: -76.795136
    //         }
    //     },
    //     {
    //         id: 3,
    //         name: 'La Isla',
    //         location: 'San Bartolo, Lima',
    //         image: 'assets/hotels-mock/items/item-3.svg',
    //         description: 'Disfruta frente al océano en un ambiente relajado y acogedor',
    //         rating: 4,
    //         minPricePerHour: 35,
    //         currency: 'PEN',
    //         isPopular: false,
    //         position: {
    //             latitude: -12.391228,
    //             longitude: -76.776851
    //         }
    //     },
    //     {
    //         id: 4,
    //         name: 'Garden Inn',
    //         location: 'Asia, Lima',
    //         image: 'assets/hotels-mock/items/item-4.svg',
    //         description: 'Rodeado de naturaleza, este refugio ofrece tranquilidad absoluta.',
    //         rating: 4.1,
    //         minPricePerHour: 35,
    //         currency: 'PEN',
    //         isPopular: false,
    //         position: {
    //             latitude: -12.786194,
    //             longitude: -76.556476
    //         }
    //     },
    // ]

    // constructor() { }

    // getHotelList(): Observable<HotelItemModel[]> {
    //     //const response = await fetch('https://api.example.com/productos');
    //     // if (!response.ok) {
    //     //   throw new Error('Error al obtener los productos');
    //     // }
    //     return of(this.list)
    // }