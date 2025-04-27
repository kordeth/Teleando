import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HotelCardComponent } from "@components/hotel-card/hotel-card.component";
import { HotelOfferCardComponent } from '@components/hotel-offer-card/hotel-offer-card.component';
import { OfferModel } from '@models/home-model';
import { MostPopularModel } from '@models/home-model';
import { HomeService } from '@services/home/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HotelCardComponent, HotelOfferCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .swiper {
      width: 100%;
      height: 500px;
    }
  `,
  
})
export class HomeComponent { 
  offers: OfferModel[] = [];
  populars: MostPopularModel[] = [];
  
  constructor(
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.homeService.getCurrentOffers().subscribe(
      (data) => {
        this.offers = data;
      });
      this.homeService.getMostPopular().subscribe(
        (data) => {
          this.populars = data;
        }
      );
  }
  
}
