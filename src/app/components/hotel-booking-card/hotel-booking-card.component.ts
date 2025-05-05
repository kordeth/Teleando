import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HourRangePickerComponent } from '@components/hour-range-picker/hour-range-picker.component';
import { HotelRoom } from '@models/hotel-detail';

@Component({
  selector: 'hotel-booking-card',
  imports: [FormsModule, RouterModule, HourRangePickerComponent, CommonModule],
  templateUrl: './hotel-booking-card.component.html',
  styleUrl: './hotel-booking-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HotelBookingCardComponent implements OnChanges {

  @Input() name!: string;
  detail = input.required<HotelRoom>();

  selectedDate: string = '';
  today: string = '';
  minDate: string = '';
  errorInHourPicker = false;
  hours: number = 0;
  rangeFormatted: string = '';
  roomType: string = '';

  availableDates: string[] = [];
  availableStartHour: number = 0;
  availableEndHour: number = 0;

  constructor(private router: Router) {
    const now = new Date();
    this.today = now.toLocaleDateString('en-CA');
    this.selectedDate = this.today;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['detail'] && this.detail()) {
      const availability = this.detail().availability;
      const todayIsAvailable = this.availableDates.includes(this.today);
      this.availableDates = availability.map(d => d.date);
      this.selectedDate = todayIsAvailable ? this.today : this.availableDates[0];
      this.minDate = this.availableDates[0];
      this.updateHourRange(this.selectedDate);
    }
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
        type: this.detail().type,
        image: this.detail().images[1],
        pricePerHour: this.detail().pricePerHour,
        totalPrice: this.totalPrice,
        rangeFormatted: this.rangeFormatted,
        name: this.name,
        roomType: this.detail().type
      }
    });
  }
}