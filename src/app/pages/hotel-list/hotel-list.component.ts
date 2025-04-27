import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hotel-list',
  imports: [],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelListComponent { }
