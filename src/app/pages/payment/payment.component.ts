import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentResquestBody, PrePaymentModel } from '@models/prepayment-model';
import { PaymentService } from '@services/prepayment/payment.service';
import { LoaderService } from '@services/loader/loader.service';

@Component({
  selector: 'app-payment',
  imports: [FormsModule, CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent {

  data!: PrePaymentModel
  payment = {
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  };

  constructor(
    private router: Router,
    private paymentService: PaymentService,
    private loaderService: LoaderService
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { prepayment: PrePaymentModel };
    if (state?.prepayment) {
      this.data = state.prepayment;
      console.log('PrePayment Data:', this.data);
    } else {
      console.warn('No prepayment data received.');
    }
  }

  get priceWithoutTaxes(): number {
    return Math.round(this.data?.totalPrice / 1.18 * 100) / 100;
  }

  // function for taxes amount
  get taxesAmount(): number {
    // redondear a 2 decimales
    return Math.round((this.data?.totalPrice - this.priceWithoutTaxes) * 100) / 100;
  }

  submitPayment() {

    const paymentBody: PaymentResquestBody = {
      ReservaID: this.data.bookingId,
    }

    console.log('Payment Body:', paymentBody);

    this.loaderService.show();
    this.paymentService.confirmBooking(paymentBody).subscribe({
      next: (response) => {
        this.loaderService.hide();
        console.log('Pago creado con éxito:', response);
        this.goToSuccess();
      },
      error: (err) => {
        this.loaderService.hide();
      }
    });    
  }

  goToSuccess() {
    this.router.navigate(['/success'], { state: { bookingId: this.data.bookingId } });
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
