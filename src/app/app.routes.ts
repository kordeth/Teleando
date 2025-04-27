import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookingInfoComponent } from './pages/booking-info/booking-info.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { SuccessComponent } from './pages/success/success.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'booking',
        component: BookingInfoComponent
    },
    {
        path: 'payment',
        component: PaymentComponent
    },
    {
        path: 'success',
        component: SuccessComponent
    }
];
