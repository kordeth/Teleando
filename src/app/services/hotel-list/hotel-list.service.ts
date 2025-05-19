import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelListModel } from '@models/hotel-item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})

export class HotelListService {

  constructor(private http: HttpClient) { }

  getHotelList(): Observable<HotelListModel> {
    return this.http.get<HotelListModel>(`${baseUrl}/hoteles`, { responseType: 'json' });
  }

}