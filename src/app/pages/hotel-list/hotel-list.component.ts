import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelItemModel } from '@models/hotel-item';
import { HotelPositionModel } from '@models/hotel-item';
import { HotelItemComponent } from '@components/hotel-item/hotel-item.component';
import { HotelListService } from '@services/hotel-list/hotel-list.service';
import { GoogleMap, MapAdvancedMarker, GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'hotel-list',
  imports: [ HotelItemComponent, CommonModule, GoogleMap, GoogleMapsModule, MapAdvancedMarker, FormsModule],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HotelListComponent {
  list: HotelItemModel[] = [];
  filteredList: HotelItemModel[] = [];
  searchQuery: string = '';

  center: google.maps.LatLngLiteral = { lat: -12.5581348, lng: -76.547841 };
  center2: google.maps.LatLngLiteral = { lat: -12.5815826, lng: -76.6739182 };
  height: number = 100;
  zoom: number = 11.04;
  zoom2: number = 9.5;

  constructor(private hotelListService: HotelListService) {}

  ngOnInit() {
    this.hotelListService.getHotelList().subscribe(data => {
      this.list = data;
      this.filteredList = data;
    });
  }

  convertToLatLngLiteral(position: HotelPositionModel): google.maps.LatLngLiteral {
    return {
      lat: position.latitude,
      lng: position.longitude
    };
  }

  filtrarHoteles() {
    const query = this.searchQuery.toLowerCase().trim();

    this.filteredList = this.list.filter(item => {
      const nombre = item.name.toLowerCase();
      const lugar = item.location?.toLowerCase() || ''; // Asegúrate de tener esta propiedad
      return nombre.includes(query) || lugar.includes(query);
    });
  }
}
