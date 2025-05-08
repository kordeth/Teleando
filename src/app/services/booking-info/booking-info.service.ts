import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookingInfoModel } from '@models/booking-info-model';

@Injectable({
    providedIn: 'root',
})

export class BookingInfoService {

    info: BookingInfoModel = {
        selectedDate: '2025-05-08',
        selectedHours: 3,
        name: 'Gran Hotel Imperial',
        location: 'San Bartolo, Lima',
        roomType: 'Estándar',
        image: 'assets/hotels/items/item-1.svg',
        pricePerHour: 80,
        totalPrice: 240,
        rangeFormatted: '10:00 - 13:00',
        currency: 'PEN',
    }

    constructor() { }

    getBookingInfo(): Observable<BookingInfoModel> {
        //const response = await fetch('https://api.example.com/productos');
        // if (!response.ok) {
        //   throw new Error('Error al obtener los productos');
        // }
        return of(this.info)
    }

}