import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HotelDetailModel } from '@models/hotel-detail';

@Injectable({
    providedIn: 'root',
})

export class HotelDetailService {

    hotel: HotelDetailModel = {
        id: 1,
        name: 'Gran Hotel Imperial',
        location: 'San Bartolo, Lima',
        description: 'Un hotel de lujo, donde la elegancia clásica se combina con el confort moderno',
        rooms: [
          {
            id: 101,
            type: 'Básica',
            description: 'Habitación cómoda con servicios esenciales.',
            pricePerHour: 50,
            currency: 'PEN',
            images: [
                'assets/hotels/rooms/basic-1.svg',
                'assets/hotels/items/item-1.svg'
            ],
            amenities: [
              { icon: 'bed', label: 'Cama individual' },
              { icon: 'fan', label: 'Ventilador' },
              { icon: 'wifi', label: 'WiFi básico' }
            ],
            availability: [
              { date: '2025-05-04', startHour: 9, endHour: 18 },
              { date: '2025-05-05', startHour: 9, endHour: 16 },
              { date: '2025-05-06', startHour: 9, endHour: 21 }
            ]
          },
          {
            id: 102,
            type: 'Estándar',
            description: 'Un espacio ideal para estancias más cómodas.',
            pricePerHour: 80,
            currency: 'PEN',
            images: [
                'assets/hotels/rooms/standard-1.svg',
                'assets/hotels/items/item-1.svg'
            ],
            amenities: [
              { icon: 'bed', label: 'Cama Queen' },
              { icon: 'air', label: 'Aire acondicionado' },
              { icon: 'tv', label: 'TV pantalla plana' }
            ],
            availability: [
              { date: '2025-05-08', startHour: 10, endHour: 20 }
            ]
          },
          {
            id: 103,
            type: 'Premium',
            description: 'Lujo y comodidad con vista al mar.',
            pricePerHour: 120,
            currency: 'PEN',
            images: [
                'assets/hotels/rooms/premium-1.svg',
                'assets/hotels/items/item-1.svg'
            ],
            amenities: [
              { icon: 'bed', label: 'Cama King' },
              { icon: 'jacuzzi', label: 'Jacuzzi privado' },
              { icon: 'balcony', label: 'Balcón con vista al mar' }
            ],
            availability: [
              { date: '2025-05-05', startHour: 11, endHour: 22 }
            ]
          }
        ]
      };
 
    constructor() { }

    getHotelDetail(): Observable<HotelDetailModel> {
        //const response = await fetch('https://api.example.com/productos');
        // if (!response.ok) {
        //   throw new Error('Error al obtener los productos');
        // }
        return of(this.hotel)
    }
}