import { Component } from '@angular/core';
import { HotelCardComponent } from "@components/hotel-card/hotel-card.component";
import { HotelOfferCardComponent } from '@components/hotel-offer-card/hotel-offer-card.component';
import { HomeService } from '@services/home/home.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { HomeModel, Oferta } from '@models/home-model';
import { LoaderService } from '@services/loader/loader.service';
import { ErrorService } from '@services/error/error.service';

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
    private homeService: HomeService,
    private loaderService: LoaderService,
    private errorService: ErrorService,
    private router: Router
  ) { }

  ofertas: Oferta[] = []
  populares: Oferta[] = []
  isLoading = false;

  __getData() {
    this.loaderService.show();
    this.isLoading = true;
    this.homeService.listar_Ofertas_Populares().subscribe({
      next: (rest: HomeModel) => {
        this.isLoading = false;
        this.loaderService.hide();
        this.ofertas = rest.data[0].ofertas;
        this.populares = rest.data[0].populares;
        console.log(this.ofertas);
      },
      error: (err) => {
        this.loaderService.hide();
        this.errorService.show();
        console.error('Error al cargar las ofertas:', err);
      }
    });
  }

  ngOnInit(): void {
    this.__getData();
  }

  goToDetail(id: number) {
    this.router.navigate(['/hotel', id]);
  }

}