import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HotelDetailModel } from '@models/hotel-detail';

@Injectable({
    providedIn: 'root',
})

export class HotelDetailService {

    detail: HotelDetailModel[] = [
        {
            id: 1,
            name: 'Gran Hotel Imperial',
            location: 'San Bartolo, Lima',
            description: `Un hotel de lujo, donde la elegancia clásica se combina con el confort moderno`,
            pricePerHour: 80,
            images: [
                'assets/hotels/items/item-1.svg',
                'assets/detail/detail-2.svg',
                'assets/detail/detail-3.svg',
            ],
            amenities: [
                { icon: 'bed', label: 'Cama Queen' },
                { icon: 'air', label: 'Aire acondicionado' },
                { icon: 'wifi', label: 'WiFi rápido' },
                { icon: 'tv', label: 'TV pantalla plana' },
                { icon: 'shower', label: 'Baño privado' },
                { icon: 'amenities', label: 'Shampoo y Jabón' },
                { icon: 'parking', label: 'Estacionamiento' },
                { icon: 'fridge', label: 'Mini refrigerador' },
                { icon: 'desk', label: 'Escritorio pequeño' },
                { icon: 'safe', label: 'Caja de seguridad' },
                { icon: 'room-service', label: 'Servicio a la habitación' },
                { icon: 'clock', label: 'Check-in flexible' }
            ]
        }
    ]
 
    constructor() { }

    getHotelDetail(): Observable<HotelDetailModel[]> {
        //const response = await fetch('https://api.example.com/productos');
        // if (!response.ok) {
        //   throw new Error('Error al obtener los productos');
        // }
        return of(this.detail)
    }
}