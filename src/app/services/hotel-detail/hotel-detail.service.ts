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
            name: 'Hotel 1',
            location: 'Lima, Peru',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.`,
            pricePerHour: 50,
            images: [
                'assets/detail/detail-1.svg',
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