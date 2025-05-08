import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrePaymentModel } from '@models/prepayment-model';
import { PrePaymentService } from '@services/prepayment/prepayment.service';

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
    private prePaymentService: PrePaymentService
  ) { }

  ngOnInit(): void {
    this.prePaymentService.getPrepaymentInfo().subscribe(response => {
      this.data = response;
    });
  }

  submitPayment() {
    // TODO: Implement payment processing logic with a simple encryptation
    // For now, we will just log the payment data
    console.log('Payment data:', this.payment);
    this.router.navigate(['/success'])
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
