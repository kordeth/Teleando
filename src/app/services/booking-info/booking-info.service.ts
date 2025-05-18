import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BookingRequestBody } from '@models/booking-info-model';

const baseUrl = environment.baseUrl;

@Injectable({
    providedIn: 'root',
})

export class BookingInfoService {

    constructor(private http: HttpClient) {}
  
    createBooking(body: BookingRequestBody): Observable<any> {
        return this.http.post<any>(`${baseUrl}/reserva`, body);
    }

}