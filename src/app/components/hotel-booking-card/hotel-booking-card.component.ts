import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'hotel-booking-card',
  imports: [ FormsModule ],
  templateUrl: './hotel-booking-card.component.html',
  styleUrl: './hotel-booking-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelBookingCardComponent {
  // 💬 El precio por 1 hora, lo recibimos como input del hotel
  @Input({ required: true }) pricePerHour!: number;
  selectedDate: string = '';
  today: string = '';

  // 💬 Cuántas horas va a reservar el usuario
  hours: number = 3; // Empezamos mostrando mínimo 3 horas (como en hoteles por horas)

  constructor() {
    const now = new Date();
    this.today = now.toISOString().split('T')[0]; 
    // ejemplo: "2025-04-28"
  }

  // 💬 Mínimo de horas permitidas
  readonly minHours: number = 3;

  // 💬 Si quieres poner un máximo (opcional), podrías agregar esto:
  readonly maxHours: number = 12; // ejemplo: máximo 12 horas

  // 💬 Calcula automáticamente el total
  get totalPrice(): number {
    return this.pricePerHour * this.hours;
  }

  // 🚀 Aumenta las horas
  increment(): void {
    if (this.hours < this.maxHours) {
      this.hours++;
    }
  }

  // 🚀 Disminuye las horas (mínimo 3)
  decrement(): void {
    if (this.hours > this.minHours) {
      this.hours--;
    }
  }
 }
