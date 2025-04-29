import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelItemModel } from '@models/hotel-item';
import { HotelItemComponent } from '@components/hotel-item/hotel-item.component';
import { HotelListService } from '@services/hotel-list/hotel-list.service';
import { GoogleMapComponent} from '@components/google-map/google-map.component';
import { GoogleMap, MapAdvancedMarker, GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'hotel-list',
  imports: [ HotelItemComponent, CommonModule, GoogleMapComponent, GoogleMap, GoogleMapsModule, MapAdvancedMarker],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HotelListComponent { 

    list: HotelItemModel[] = [];
  
    constructor(
      private hotelListService: HotelListService
    ) { }
  
    ngOnInit() {
      this.hotelListService.getHotelList().subscribe(
        (data) => {
          this.list = data
        });
    }

    center: google.maps.LatLngLiteral = { lat: -12.5581348, lng: -76.547841 };
    center2: google.maps.LatLngLiteral = { lat: -12.5815826, lng: -76.6739182 };
    height: number = 100; // Altura del mapa en píxeles
    zoom: number = 11.04; // Nivel de zoom del mapa
    zoom2: number = 9.5; // Nivel de zoom del mapa

    hotels = [
      { name: 'Gran Hotel Imperial', position: { lat: -12.386125, lng: -76.776057 }, label: 'Imperial' },
      { name: 'Costa Dorada', position: { lat: -12.309120, lng: -76.795136 }, label: 'Dorada' },
      { name: 'La Isla', position: { lat: -12.391228, lng: -76.776851 }, label: 'Isla' },
      { name: 'Garden Inn', position: { lat: -12.786194, lng: -76.556476 }, label: 'Garden' }
    ];
}
