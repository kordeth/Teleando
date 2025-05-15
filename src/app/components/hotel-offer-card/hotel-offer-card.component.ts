import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Oferta } from '@models/home-model';
import { HomeService } from '@services/home/home.service';

@Component({
  selector: 'hotel-offer-card',
  providers: [HomeService],
  templateUrl: './hotel-offer-card.component.html',
  styleUrl: './hotel-offer-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelOfferCardComponent {
  offer = input.required<Oferta>();
  ngOnInit() {
    console.log('Oferta recibida en el card:', this.offer());
  }
}
