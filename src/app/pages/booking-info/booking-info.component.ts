import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-booking-info',
  imports: [ FormsModule, RouterModule ],
  templateUrl: './booking-info.component.html',
  styleUrl: './booking-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BookingInfoComponent { 
  selectedDate: string = '';
  selectedHours: number = 0;
  name: string = '';
  location: string = '';
  image: string = '';
  pricePerHour: number = 0;
  totalPrice: number = 0;
  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as {
      selectedDate: string;
      selectedHours: number;
      name: string;
      location: string;
      image: string;
      pricePerHour: number;
      totalPrice: number;
    };

    if (state) {
      this.selectedDate = state.selectedDate;
      this.selectedHours = state.selectedHours;
      this.name = state.name;
      this.location = state.location;
      this.image = state.image;
      this.pricePerHour = state.pricePerHour;
      this.totalPrice = state.totalPrice;
    }
  }

  submitForm() {
    this.router.navigate(['/payment'], {
      state: {
        booking: {
          selectedDate: this.selectedDate,
          selectedHours: this.selectedHours,
          name: this.name,
          location: this.location,
          image: this.image,
          pricePerHour: this.pricePerHour,
          totalPrice: this.totalPrice
        },
        userInfo: this.form
      }
    });
  }

  cancel() {
    this.router.navigate(['/']);
  }
  
}