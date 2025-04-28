import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HotelDetailModel } from '@models/hotel-detail';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'hotel-booking-card',
  imports: [ FormsModule, RouterModule ],
  templateUrl: './hotel-booking-card.component.html',
  styleUrl: './hotel-booking-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelBookingCardComponent {
  
  detail = input.required<HotelDetailModel>();
  selectedDate: string = '';
  today: string = '';

  hours: number = 3;

  constructor(private router: Router) {
    const now = new Date();
    this.today = now.toISOString().split('T')[0];
    this.selectedDate = this.today;
  }

  readonly minHours: number = 3;
  readonly maxHours: number = 12; 

  get totalPrice(): number {
    return this.detail().pricePerHour * this.hours;
  }

  increment(): void {
    if (this.hours < this.maxHours) {
      this.hours++;
    }
  }

  decrement(): void {
    if (this.hours > this.minHours) {
      this.hours--;
    }
  }

  goToCheckout(): void {
    this.router.navigate(['/booking'], {
      state: {
        selectedDate: this.selectedDate,
        selectedHours: this.hours,
        name: this.detail().name,
        location: this.detail().location,
        image: this.detail().images[1],
        pricePerHour: this.detail().pricePerHour,
        totalPrice: this.totalPrice
      }
    });
  }

 }
