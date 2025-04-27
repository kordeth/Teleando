import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { BookingInfoComponent } from '@pages/booking-info/booking-info.component';
import { PaymentComponent } from '@pages/payment/payment.component';
import { SuccessComponent } from '@pages/success/success.component';
import { HotelListComponent } from '@pages/hotel-list/hotel-list.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'list',
        component: HotelListComponent
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
    },
    {
        path: '**',
        component: HomeComponent
    }
];
