import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hotel-detail',
  imports: [],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelDetailComponent { }
