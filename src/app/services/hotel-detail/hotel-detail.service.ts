import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HotelDetailResponse } from '@models/hotel-detail';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
    providedIn: 'root',
})

export class HotelDetailService {
 
    constructor(private http: HttpClient) { }

    getHotelDetail(hotelId: string): Observable<HotelDetailResponse> {
      return this.http.get<HotelDetailResponse>(`${baseUrl}/hotel?HotelID=${hotelId}`);
    }
}