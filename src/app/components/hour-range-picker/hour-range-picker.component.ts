import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hour-range-picker',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatTimepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    CommonModule
  ],
  templateUrl: './hour-range-picker.component.html',
  styleUrl: './hour-range-picker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HourRangePickerComponent implements OnInit {

  @Output() hoursChanged = new EventEmitter<number>();
  @Output() hasError = new EventEmitter<boolean>();
  @Output() rangeFormatted = new EventEmitter<string>(); // 🔥 Nuevo output

  startControl!: FormControl<Date | null>;
  endControl!: FormControl<Date | null>;

  errorMessage: string | null = null;

  private isCorrecting = false;
  private initialized = false;

  constructor() {
    const now = new Date();
    const startHour = now.getHours() + 1;
    const endHour = startHour + 2;
    this.startControl = new FormControl(new Date());
    this.endControl = new FormControl(new Date());
    this.startControl.setValue(new Date(now.setHours(startHour, 0, 0)));
    this.endControl.setValue(new Date(now.setHours(endHour, 0, 0)));
  }

  ngOnInit(): void {
    combineLatest([
      this.startControl.valueChanges,
      this.endControl.valueChanges
    ]).subscribe(() => this.calculateHours());

    setTimeout(() => this.initialized = true, 0);
  }

  private calculateHours(): void {
    const start = this.startControl.value;
    const end = this.endControl.value;

    if (start && end) {
      const startTime = start.getHours() + start.getMinutes() / 60;
      const endTime = end.getHours() + end.getMinutes() / 60;
      const diffHours = endTime - startTime;

      if (!this.isCorrecting) {
        if (startTime >= endTime) {
          if (this.initialized) {
            this.errorMessage = 'La hora de salida debe ser posterior a la de llegada.';
            this.hasError.emit(true);
          }
          this.correctEndTime(start);
          return;
        } else if (diffHours < 1) {
          if (this.initialized) {
            this.errorMessage = 'La reserva mínima es de 1 hora.';
            this.hasError.emit(true);
          }
          this.correctEndTime(start);
          return;
        } else {
          if (this.initialized) {
            this.errorMessage = null;
            this.hasError.emit(false);
          }
        }
      }

      const finalHours = Math.max(diffHours, 0);
      this.hoursChanged.emit(finalHours);

      // 🔥 Formatear y emitir el rango horario
      const formatted = `${this.formatHour(start)} - ${this.formatHour(end)}`;
      this.rangeFormatted.emit(formatted);
    }
  }

  private correctEndTime(start: Date): void {
    const correctedEnd = new Date(start);
    correctedEnd.setHours(correctedEnd.getHours() + 1);

    this.isCorrecting = true;
    this.endControl.setValue(correctedEnd, { emitEvent: false });
    this.endControl.markAsTouched();
    this.endControl.updateValueAndValidity();

    setTimeout(() => this.isCorrecting = false, 0);
  }

  private formatHour(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes} ${ampm}`;
  }
}