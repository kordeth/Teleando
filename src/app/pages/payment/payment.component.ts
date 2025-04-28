import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  imports: [ FormsModule ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent { 
  hotelName: string = '';
  hotelLocation: string = '';
  hotelImage: string = '';
  customerName: string = '';
  customerEmail: string = '';
  customerPhone: string = '';
  totalPrice: number = 0;
  taxes: number = 0;
  totalPayment: number = 0;
  payment = {
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      booking: {
        selectedDate: string;
        selectedHours: number;
        name: string;
        location: string;
        image: string;
        pricePerHour: number;
        totalPrice: number;
      };
      userInfo: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
      };
    };
  
    if (state) {
      this.hotelName = state.booking.name;
      this.hotelLocation = state.booking.location;
      this.hotelImage = state.booking.image;
      this.totalPrice = state.booking.totalPrice;
      this.taxes = state.booking.totalPrice * 0.18;
      this.totalPayment = state.booking.totalPrice * 1.18;
      this.customerName = `${state.userInfo.firstName} ${state.userInfo.lastName}`;
      this.customerEmail = state.userInfo.email;
      this.customerPhone = state.userInfo.phone;
      console.log('Datos de reserva:', state.booking);
      console.log('Datos del usuario:', state.userInfo);
    }
  }

  submitPayment() {
    this.router.navigate(['/success'])
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
