import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDetailModel } from '@models/hotel-detail';
import { HotelDetailService } from '@services/hotel-detail/hotel-detail.service';
import { AMENITY_ICON_MAP } from '@constants/amenity-icon-map';
import { HotelCarouselComponent } from "@components/hotel-carousel/hotel-carousel.component";
import { HotelBookingCardComponent } from '@components/hotel-booking-card/hotel-booking-card.component';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-hotel-detail',
  imports: [CommonModule, MatChipsModule, HotelCarouselComponent, HotelBookingCardComponent],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelDetailComponent {

  isSelected: boolean = false;
  selectedRoomIndex: number = 0;
  hotel!: HotelDetailModel;

  constructor(
    private hoteDetailService: HotelDetailService
  ) { }

  ngOnInit() {
    this.hoteDetailService.getHotelDetail().subscribe(
      (data) => {
        this.hotel = data
      });
  }

  get amenityIconMap() {
    return AMENITY_ICON_MAP;
  }

  get uniqueRoomTypes(): string[] {
    return [...new Set(this.hotel?.rooms.map(r => r.type))];
  }

  get selectedRoom() {
    return this.hotel?.rooms[this.selectedRoomIndex];
  }

  onChipSelect(type: string): void {
    const index = this.hotel.rooms.findIndex(r => r.type === type);
    if (index !== -1) {
      this.isSelected = true;
      this.selectedRoomIndex = index;
    } else {
      this.isSelected = false;
    }
  }

}
