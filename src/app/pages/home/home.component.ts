import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HotelCardComponent } from "@components/hotel-card/hotel-card.component";
import { HotelOfferCardComponent } from '@components/hotel-offer-card/hotel-offer-card.component';
import { OfferModel } from '@models/home-model';
import { MostPopularModel } from '@models/home-model';
import { HomeService } from '@services/home/home.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor, HotelCardComponent, HotelOfferCardComponent, CommonModule, RouterModule],
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
  // offers: OfferModel[] = [];
  // populars: MostPopularModel[] = [];

  constructor(
    private homeService: HomeService
  ) { }

  ofertas: any = []
  populares: any = []

  __listar_Ofertas() {
  this.homeService.listar_Ofertas_Populares().subscribe((rest: any) => {
    this.ofertas = rest.data[0].ofertas;
    console.log(this.ofertas);
    });
  }

  __listar_Populares() {
    this.homeService.listar_Ofertas_Populares().subscribe((rest: any) => {
      this.populares = rest.data[0].populares;
      console.log(this.populares);
    });
  }

  ngOnInit(): void {
    this.__listar_Ofertas();
    this.__listar_Populares();
  }


}

  // goToOffers() { 
  //   console.log('Go to offers');
  //   // TODO: Implement navigation to offers page
  // }

  // goToRecommendations() {
  //   console.log('Go to recommendations');
  //   // TODO: Implement navigation to recommendations page
  // }

// }
