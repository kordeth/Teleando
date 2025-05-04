import { ChangeDetectionStrategy, Component, input, OnInit, Signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotelDetailModel, DayAvailability } from '@models/hotel-detail';
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
export class HotelBookingCardComponent implements OnInit {

  detail = input.required<HotelDetailModel>();

  selectedDate: string = '';
  today: string = '';
  errorInHourPicker = false;
  hours: number = 0;
  rangeFormatted: string = '';
  minDate: string = '';

  availableDates: string[] = [];
  availableStartHour: number = 0;
  availableEndHour: number = 0;

  constructor(private router: Router) {
    const now = new Date();
    this.today = now.toLocaleDateString('en-CA');
    this.selectedDate = this.today;
  }

  ngOnInit(): void {
    const availability = this.detail().availability;
    this.availableDates = availability.map(d => d.date);
    if (this.availableDates.includes(this.today)) {
      this.selectedDate = this.today;
    } else {
      this.selectedDate = this.availableDates[0];
    }
    this.minDate = this.availableDates[0];
    this.updateHourRange(this.selectedDate);
  }

  updateHourRange(date: string): void {
    const match = this.detail().availability.find(d => d.date === date);
    if (match) {
      this.availableStartHour = match.startHour;
      this.availableEndHour = match.endHour;
    }
  }

  onDateChange(date: string): void {
    this.selectedDate = date;
    this.updateHourRange(date);
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