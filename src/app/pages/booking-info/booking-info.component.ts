import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookingInfoModel } from '@models/booking-info-model';
import { BookingInfoService } from '@services/booking-info/booking-info.service';

@Component({
  selector: 'app-booking-info',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './booking-info.component.html',
  styleUrl: './booking-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BookingInfoComponent {

  data!: BookingInfoModel;
  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  constructor(
    private router: Router,
    private bookingInfoService: BookingInfoService
  ) { }
  
  ngOnInit(): void {
    this.bookingInfoService.getBookingInfo().subscribe(response => {
      this.data = response;
    });
  }

  submitForm() {
    this.router.navigate(['/payment'])
  }

  cancel() {
    this.router.navigate(['/']);
  }

}