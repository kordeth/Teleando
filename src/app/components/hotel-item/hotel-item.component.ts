import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelItemModel } from '@models/hotel-item';

@Component({
  selector: 'hotel-item',
  imports: [CommonModule],
  templateUrl: './hotel-item.component.html',
  styleUrl: './hotel-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelItemComponent { 
   item = input.required<HotelItemModel>();
}
