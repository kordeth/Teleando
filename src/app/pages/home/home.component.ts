import { Component } from '@angular/core';
import { HotelCardComponent } from "@components/hotel-card/hotel-card.component";
import { HotelOfferCardComponent } from '@components/hotel-offer-card/hotel-offer-card.component';
import { HomeService } from '@services/home/home.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { HomeModel, Oferta } from '@models/home-model';

@Component({
  selector: 'app-home',
  imports: [NgFor, HotelCardComponent, HotelOfferCardComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  styles: `
    .swiper {
      width: 100%;
      height: 500px;
    }
  `,

})
export class HomeComponent {

  constructor(
    private homeService: HomeService
  ) { }

  ofertas: Oferta[] = []
  populares: Oferta[] = []

  __getData() {
  this.homeService.listar_Ofertas_Populares().subscribe((rest: HomeModel) => {
    this.ofertas = rest.data[0].ofertas;
    this.populares = rest.data[0].populares;
    console.log(this.ofertas);
    });
  }

  ngOnInit(): void {
    this.__getData();
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
