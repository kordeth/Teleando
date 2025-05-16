import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { HomeModel } from '@models/home-model';

@Injectable({
    providedIn: 'root',
})

export class HomeService {

    constructor(
        private readonly http: HttpClient
    ){}

    listar_Ofertas_Populares(): Observable<HomeModel> {
        return this.http.get<HomeModel>('https://acgjo5022j.execute-api.us-east-1.amazonaws.com/v1/home', {responseType: 'json'});
    }

}