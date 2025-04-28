import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { BookingInfoComponent } from '@pages/booking-info/booking-info.component';
import { PaymentComponent } from '@pages/payment/payment.component';
import { SuccessComponent } from '@pages/success/success.component';
import { HotelListComponent } from '@pages/hotel-list/hotel-list.component';
import { HotelDetailComponent } from '@pages/hotel-detail/hotel-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'hotels',
        component: HotelListComponent
    },
    {
        path: 'hotel/:id',
        component: HotelDetailComponent
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
