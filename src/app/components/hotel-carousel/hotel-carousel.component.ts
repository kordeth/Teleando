import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hotel-carousel',
  imports: [ CommonModule ],
  templateUrl: './hotel-carousel.component.html',
  styleUrl: './hotel-carousel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelCarouselComponent { 
  @Input({ required: true }) images!: string[];
}
