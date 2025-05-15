import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MostPopularModel } from '@models/home-model';
import { HomeService } from '@services/home/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hotel-card',
  providers: [ HomeService ],
  imports: [ CommonModule ],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HotelCardComponent { 
  popular = input.required<MostPopularModel>(); 
}
