import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookingModel } from '@models/booking-info-model';
import { BookingRequestBody } from '@models/booking-info-model';
import { BookingInfoService } from '@services/booking-info/booking-info.service';
import { LoaderService } from '@services/loader/loader.service';
import { ErrorService } from '@services/error/error.service';
import { PrePaymentModel } from '@models/prepayment-model';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-booking-info',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './booking-info.component.html',
  styleUrl: './booking-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BookingInfoComponent {

  bookingData!: BookingModel;
  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  get imageUrl(): string {
    return `assets/hotels/${this.bookingData.hotelId}.png`
  }

  constructor(
    private router: Router, 
    private bookingInfoService: BookingInfoService, 
    private loaderService: LoaderService,
    private errorService: ErrorService,
    private authService: AuthService
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { booking: BookingModel };

    if (state?.booking) {
      this.bookingData = state.booking;
      console.log('Booking Data:', this.bookingData);
    } else {
      console.warn('No booking data received.');
    }
  }

  ngOnInit() {
    const user = this.authService.getCurrentUser(); 
    if (user) {
      this.form.firstName = user.nombres;
      this.form.lastName = user.apellidos;
      this.form.email = user.correo;
      this.form.phone = user.telefono;
    }
  }

  submitForm() {
    const bookingBody: BookingRequestBody = {
      HabitacionID: this.bookingData.roomId,
      NombreCliente: `${this.form.firstName} ${this.form.lastName}`,
      FechaInicio: this.bookingData.startDate,
      FechaFin: this.bookingData.endDate
    };
    this.loaderService.show();
    this.bookingInfoService.createBooking(bookingBody).subscribe({
      next: (response: any) => {
        this.loaderService.hide();
        // Paso 1: Parsear el string JSON
        const body = JSON.parse(response.body);
        this.goToPayment(body.reserva_id);
      },
      error: (err) => {
        this.loaderService.hide();
        this.errorService.show();
        console.error('Error al crear la reserva:', err);
      }
    });
  }

  get dateMessage(): string {
    const startDate = new Date(this.bookingData.startDate);
    const endDate = new Date(this.bookingData.endDate);
    return this.formatBookingRange(startDate.toISOString(), endDate.toISOString());
  }

  formatBookingRange(startDateStr: string, endDateStr: string): string {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
  
    const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
  
    const startTime = startDate.toLocaleTimeString('es-PE', options);
    const endTime = endDate.toLocaleTimeString('es-PE', options);
  
    const sameDay = startDate.toDateString() === endDate.toDateString();
  
    const startDay = startDate.toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' });
    const endDay = endDate.toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' });
  
    if (sameDay) {
      return `Reserva para el ${startDay} de ${startTime} a ${endTime}`;
    } else {
      return `Reserva desde el ${startDay} ${startTime} hasta el ${endDay} ${endTime}`;
    }
  }

  goToPayment(bookingId: number) {
    const prepaymentModel: PrePaymentModel = {
      hotelId: this.bookingData.hotelId,
      roomId: this.bookingData.roomId,
      hotelName: this.bookingData.hotelName,
      hotelLocation: this.bookingData.hotelLocation,
      customerName: `${this.form.firstName} ${this.form.lastName}`,
      customerEmail: this.form.email,
      roomType: this.bookingData.roomType,
      roomNumber: this.bookingData.roomNumber,
      totalPrice: this.bookingData.totalPrice,
      totalHours: this.bookingData.totalHours,
      bookingId: bookingId 
    }
    console.log('booking id',bookingId);
    this.router.navigate(['/payment'], { state: { prepayment: prepaymentModel } });
  }

  cancel() {
    this.router.navigate(['/']);
  }

}