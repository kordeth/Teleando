import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { HomeModel } from '@models/home-model';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
    providedIn: 'root',
})

export class HomeService {

    constructor(
        private readonly http: HttpClient
    ){}

    listar_Ofertas_Populares(): Observable<HomeModel> {
        return this.http.get<HomeModel>(`${baseUrl}/home`, {responseType: 'json'});
    }

}