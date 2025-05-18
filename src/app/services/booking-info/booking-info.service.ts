import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BookingRequestBody, BookingResponse } from '@models/booking-info-model';

const baseUrl = environment.baseUrl;

@Injectable({
    providedIn: 'root',
})

export class BookingInfoService {

    constructor(private http: HttpClient) {}
  
    createBooking(body: BookingRequestBody): Observable<BookingResponse> {
        return this.http.post<BookingResponse>(`${baseUrl}/reserva`, body);
    }

}