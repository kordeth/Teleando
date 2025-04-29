import { Component } from '@angular/core';
import { GoogleMap, MapAdvancedMarker} from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  imports: [GoogleMap, MapAdvancedMarker],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.css'
})

export class GoogleMapComponent {

  center: google.maps.LatLngLiteral = { lat: -12.0464, lng: -77.0428 }; // Puedes cambiarlo

  hotels = [
    { name: 'Hotel A', position: { lat: -12.0464, lng: -77.0428 }, label: 'A' },
    { name: 'Hotel B', position: { lat: -12.0454, lng: -77.0438 }, label: 'B' },
    { name: 'Hotel C', position: { lat: -12.0444, lng: -77.0448 }, label: 'C' }
  ];

}
