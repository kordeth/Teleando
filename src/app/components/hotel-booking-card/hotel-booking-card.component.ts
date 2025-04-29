import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotelDetailModel } from '@models/hotel-detail';
import { RouterModule, Router } from '@angular/router';
import { HourRangePickerComponent } from '@components/hour-range-picker/hour-range-picker.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hotel-booking-card',
  standalone: true,
  imports: [FormsModule, RouterModule, HourRangePickerComponent, CommonModule],
  templateUrl: './hotel-booking-card.component.html',
  styleUrl: './hotel-booking-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelBookingCardComponent {

  detail = input.required<HotelDetailModel>();

  selectedDate: string = '';
  today: string = '';
  errorInHourPicker = false;
  hours: number = 0;
  rangeFormatted: string = '';

  constructor(private router: Router) {
    const now = new Date();
    this.today = now.toLocaleDateString('en-CA');; // Formato YYYY-MM-DD
    this.selectedDate = this.today;
  }

  onErrorChanged(hasError: boolean) {
    this.errorInHourPicker = hasError;
  }

  get totalPrice(): number {
    return this.detail().pricePerHour * this.hours;
  }

  onHoursChanged(newHours: number): void {
    this.hours = newHours;
  }

  onRangeFormatted(range: string): void {
    this.rangeFormatted = range;
  }

  goToBooking(): void {
    this.router.navigate(['/booking'], {
      state: {
        selectedDate: this.selectedDate,
        selectedHours: this.hours,
        name: this.detail().name,
        location: this.detail().location,
        image: this.detail().images[1],
        pricePerHour: this.detail().pricePerHour,
        totalPrice: this.totalPrice,
        rangeFormatted: this.rangeFormatted
      }
    });
  }

}