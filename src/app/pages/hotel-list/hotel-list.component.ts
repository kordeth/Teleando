import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelItemModel } from '@models/hotel-item';
import { HotelItemComponent } from '@components/hotel-item/hotel-item.component';
import { HotelListService } from '@services/hotel-list/hotel-list.servive';

@Component({
  selector: 'hotel-list',
  imports: [ HotelItemComponent, CommonModule ],
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
          this.list = data;
          console.log(this.list);
        });
    }
}
