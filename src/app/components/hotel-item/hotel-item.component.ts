import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hotel-item',
  imports: [],
  templateUrl: './hotel-item.component.html',
  styleUrl: './hotel-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelItemComponent { }
