import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentResquestBody, PaymentResponse } from '@models/prepayment-model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
    providedIn: 'root',
})

export class PaymentService {

    constructor(private http: HttpClient) { }

    confirmBooking(body: PaymentResquestBody): Observable<PaymentResponse> {
        return this.http.put<PaymentResponse>(`${baseUrl}/reserva`, body);
    }

}