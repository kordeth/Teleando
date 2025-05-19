import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessComponent { 
  // bookingId sea igual a una cadena de 10 caracteres alfanumericos
  bookingId: string = '';


  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation(); 
    const state = navigation?.extras.state as { bookingId: string };
    if (state?.bookingId) {
      this.bookingId = state.bookingId;
      console.log('PrePayment Data:', this.bookingId);
    } else {
      console.warn('No prepayment data received.');
    }

  }

  goToHome() {
    this.router.navigate(['/']);
  }

}
