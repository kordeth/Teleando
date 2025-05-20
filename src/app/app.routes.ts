import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { BookingInfoComponent } from '@pages/booking-info/booking-info.component';
import { PaymentComponent } from '@pages/payment/payment.component';
import { SuccessComponent } from '@pages/success/success.component';
import { HotelListComponent } from '@pages/hotel-list/hotel-list.component';
import { HotelDetailComponent } from '@pages/hotel-detail/hotel-detail.component';
import { ContactUsComponent } from '@pages/contact-us/contact-us.component';
import { LoginComponent } from '@pages/login/login.component';
import { RegisterComponent } from '@pages/register/register.component';


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
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {   path: 'register', 
        component: RegisterComponent },
    {
        path: '**',
        component: HomeComponent
    }
];
