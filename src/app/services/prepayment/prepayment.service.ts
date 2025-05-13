import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PrePaymentModel } from '@models/prepayment-model';

@Injectable({
    providedIn: 'root',
})

export class PrePaymentService {

    prepayment: PrePaymentModel = {
        transactionId: '123456789',
        amount: 203.39,
        taxes: 36.61,
        totalAmount: 240.00,
        currency: 'PEN',
        customerName: 'Juan',
        customerLastName: 'Pérez',
        customerEmail: 'juanperez@gmail.com',
        customerPhone: '987654321',
        bookingInfo:
        {
            selectedDate: '2025-05-08',
            selectedHours: 3,
            name: 'Gran Hotel Imperial',
            location: 'San Bartolo, Lima',
            roomType: 'Estándar',
            image: 'assets/hotels-mock/items/item-1.svg',
            pricePerHour: 80,
            totalPrice: 240.00,
            rangeFormatted: '10:00 AM  - 01:00 PM',
            currency: 'PEN',
        }

    }

    constructor() { }

    getPrepaymentInfo(): Observable<PrePaymentModel> {
        //const response = await fetch('https://api.example.com/productos');
        // if (!response.ok) {
        //   throw new Error('Error al obtener los productos');
        // }
        return of(this.prepayment)
    }

}