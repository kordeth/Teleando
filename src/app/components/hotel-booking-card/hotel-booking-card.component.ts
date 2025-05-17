import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HourRangePickerComponent } from '@components/hour-range-picker/hour-range-picker.component';
import { input } from '@angular/core';
import { HotelDetailModel } from '@models/hotel-detail';
import { parse } from 'path';

@Component({
  selector: 'hotel-booking-card',
  imports: [FormsModule, RouterModule, HourRangePickerComponent, CommonModule],
  templateUrl: './hotel-booking-card.component.html',
  styleUrl: './hotel-booking-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelBookingCardComponent {

  hotel = input.required<HotelDetailModel>();
  roomSelected = input.required<number>();

  // selectedDate: Date = new Date();
  errorInHourPicker = false;
  hours: number = 3;
  selectedPack: string = '';

  selectedDate: Date = new Date();
  minDate: string = '';
  formattedSelectedDate: string = '';

  selectedRooms: number = 1;
  availableRooms: number[] = [];

  constructor(private router: Router) { }

  handleDateTimeSelected(dateTime: Date) {
    console.log('Fecha y hora seleccionada:', dateTime);
    // Aquí ya tienes un Date completo con fecha y hora combinadas.
  }

  handlePackSelection(selectedValue: string) {
    console.log('Pack seleccionado (número):', selectedValue);
    this.hours = parseInt(selectedValue, 10);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['detail'] && this.detail()) {
  //     const availability = this.detail().availability.map((d: { date: string }) => new Date(d.date));
  //     const today = new Date();

  //     const todayAvailable = availability.some(date => this.isSameDay(date, today));
  //     this.selectedDate = todayAvailable ? today : availability[0] || today;
  //   }
  // }

  // selectRooms(count: number): void {
  //   this.selectedRooms = count;
  // }

  ngOnInit(): void {
    const today = new Date();
    this.minDate = this.formatDate(today);
    this.selectedDate = today;
    this.formattedSelectedDate = this.formatDate(today); // Formato correcto para input
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`
  }

  onDateChange(event: any): void {
    const [year, month, day] = event.target.value.split('-').map(Number);
    this.selectedDate = new Date(year, month - 1, day); // Hora local, sin desfase de zona
  }

  onErrorChanged(hasError: boolean): void {
    this.errorInHourPicker = hasError;
  }

  get pricePerHour(): number {
    const hotel = this.hotel?.();
    const roomIndex = this.roomSelected?.();
  
    if (!hotel || roomIndex === undefined || !hotel.tipoHabitacion[roomIndex]) {
      return 0; 
    }
  
    return hotel.tipoHabitacion[roomIndex].precio;
  }

  get totalPrice(): number {
    // convertir a 2 decimales
    const total = this.pricePerHour * this.hours;
    return Math.round(total * 100) / 100;
  }

  goToBooking(): void {
    this.router.navigate(['/booking']);
  }

}