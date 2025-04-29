import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment',
  imports: [FormsModule, CommonModule],
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
  totalPrice: string = '0.00';
  taxes: string = '0.00';
  totalPayment: string = '0.00';
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
      this.totalPrice = state.booking.totalPrice.toFixed(2);
      this.taxes = (state.booking.totalPrice * 0.18).toFixed(2);
      this.totalPayment = (state.booking.totalPrice * 1.18).toFixed(2);
      this.customerName = `${state.userInfo.firstName} ${state.userInfo.lastName}`;
      this.customerEmail = state.userInfo.email;
      this.customerPhone = state.userInfo.phone;
    }
  }

  submitPayment() {
    this.router.navigate(['/success'])
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
