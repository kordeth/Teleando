import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { ActivatedRoute } from '@angular/router';
import { AMENITY_LABEL_MAP } from '@constants/amenity-icon-map';
import { HotelDetailResponse, HotelDetailModel } from '@models/hotel-detail';
import { HotelDetailService } from '@services/hotel-detail/hotel-detail.service';
import { LoaderService } from '@services/loader/loader.service';
import { ErrorService } from '@services/error/error.service';
import { HotelCarouselComponent } from "@components/hotel-carousel/hotel-carousel.component";
import { HotelBookingCardComponent } from '@components/hotel-booking-card/hotel-booking-card.component';

@Component({
  selector: 'app-hotel-detail',
  imports: [CommonModule, MatChipsModule, HotelCarouselComponent, HotelBookingCardComponent],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.css'
})
export class HotelDetailComponent {

  hotelId: string = '';
  isSelected: boolean = false;
  selectedRoomIndex: number = 0;
  detail?: HotelDetailModel;
  isLoading = false;

  constructor(
    private hoteDetailService: HotelDetailService,
    private loaderService: LoaderService,
    private errorService: ErrorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const hotelId = this.route.snapshot.paramMap.get('id');
    this.isLoading = true;
    this.loaderService.show();
  
    if (hotelId) {
      this.hoteDetailService.getHotelDetail(hotelId).subscribe({
        next: (rest: HotelDetailResponse) => {
          this.isLoading = false;
          this.loaderService.hide();
          this.detail = rest.data[0];
          this.hotelId = hotelId;
        },
        error: (err) => {
          this.loaderService.hide();
          this.errorService.show(); // Muestra el modal de error
          console.error('Error al obtener detalles del hotel:', err);
        }
      });
    } else {
      this.isLoading = false;
      this.loaderService.hide();
      console.error('Hotel ID is null');
      this.errorService.show(); // Error porque no hay hotelId
    }
  }

  get uniqueRoomTypes(): string[] {
    return [...new Set(this.detail?.tipoHabitacion.map(r => r.nombre))];
  }

  get selectedRoom() {
    return this.detail?.tipoHabitacion[this.selectedRoomIndex];
  }

  get selectedRoomImage() {
    const mainImage = this.selectedRoom?.imagenRuta || '';
    const images = [mainImage, `assets/hotels/${this.hotelId}.png`];
    return images;
  }

  get amenityLabel() {
    return AMENITY_LABEL_MAP;
  }

  onChipSelect(type: string): void {
    const index = this.detail?.tipoHabitacion.findIndex(r => r.nombre === type);
    if (index !== -1) {
      this.isSelected = true;
      this.selectedRoomIndex = index ?? 0;
    } else {
      this.isSelected = false;
    }
  }

}
