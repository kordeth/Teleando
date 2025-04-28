import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDetailModel } from '@models/hotel-detail';
import { HotelDetailService } from '@services/hotel-detail/hotel-detail.service';
import { AMENITY_ICON_MAP } from '@constants/amenity-icon-map';
import { HotelCarouselComponent } from "@components/hotel-carousel/hotel-carousel.component";
import { HotelBookingCardComponent } from '@components/hotel-booking-card/hotel-booking-card.component';

@Component({
  selector: 'app-hotel-detail',
  imports: [CommonModule, HotelCarouselComponent, HotelBookingCardComponent],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelDetailComponent { 

    detail: HotelDetailModel[] = [];
  
    constructor(
      private hoteDetailService: HotelDetailService
    ) { }
  
    ngOnInit() {
      this.hoteDetailService.getHotelDetail().subscribe(
        (data) => {
          this.detail = data
        });
    }

    get amenityIconMap() {
      return AMENITY_ICON_MAP;
    }

}
