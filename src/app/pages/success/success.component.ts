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
  bookingId: string = this.generateBookingId();

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation(); 
  }

  generateBookingId(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  goToHome() {
    this.router.navigate(['/']);
  }

}
