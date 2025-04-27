import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  imports: [],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelCardComponent { }
