import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelItemModel } from '@models/hotel-item';
import { HotelListModel} from '@models/hotel-item';
import { HotelItemComponent } from '@components/hotel-item/hotel-item.component';
import { HotelListService } from '@services/hotel-list/hotel-list.service';
import { GoogleMap, MapAdvancedMarker, GoogleMapsModule } from '@angular/google-maps';
import { LoaderService } from '@services/loader/loader.service';

@Component({
  selector: 'hotel-list',
  imports: [ HotelItemComponent, CommonModule, GoogleMap, GoogleMapsModule, MapAdvancedMarker, FormsModule],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css',
})

export class HotelListComponent {
  list: HotelItemModel[] = [];
  filteredList: HotelItemModel[] = [];
  searchQuery: string = '';

  center: google.maps.LatLngLiteral = { lat: -12.0455959, lng: -77.0322017 };
  center2: google.maps.LatLngLiteral = { lat: -12.0472121, lng: -77.0412855 };
  height: number = 100;
  zoom: number = 11.04;
  zoom2: number = 11;

  constructor(private hotelListService: HotelListService, private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.show()
    this.hotelListService.getHotelList().subscribe((rest: HotelListModel) => {
      this.loaderService.hide()
      this.list = rest.data;
      this.filteredList = rest.data;
      console.log(this.list);
    });
  }

  convertToLatLngLiteral(lat: number, lng: number): google.maps.LatLngLiteral {
    return {
      lat: lat,
      lng: lng
    };
  }

  filtrarHoteles() {
    const query = this.searchQuery.toLowerCase().trim();

    this.filteredList = this.list.filter(item => {
      const nombre = item.nombre.toLowerCase();
      const lugar = item.distrito?.toLowerCase() || '';
      return nombre.includes(query) || lugar.includes(query);
    });
  } 
}
