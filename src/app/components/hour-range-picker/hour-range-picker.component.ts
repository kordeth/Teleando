import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';
import {
  MatTimepickerModule
} from '@angular/material/timepicker';
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
export class HourRangePickerComponent implements OnInit, OnChanges {

  @Input() availableStartHour: number = 0;
  @Input() availableEndHour: number = 23;

  @Output() hoursChanged = new EventEmitter<number>();
  @Output() hasError = new EventEmitter<boolean>();
  @Output() rangeFormatted = new EventEmitter<string>();

  startControl = new FormControl<Date | null>(null);
  endControl = new FormControl<Date | null>(null);
  errorMessage: string | null = null;

  private isCorrecting = false;
  private initialized = false;

  ngOnInit(): void {
    combineLatest([
      this.startControl.valueChanges,
      this.endControl.valueChanges
    ]).subscribe(() => this.calculateHours());

    this.initialized = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['availableStartHour'] ||
      changes['availableEndHour']
    ) {
      this.setDefaultRange();
    }
  }

  private setDefaultRange(): void {
    const now = new Date();
    const start = new Date(now.setHours(this.availableStartHour, 0, 0, 0));
    const end = new Date(now.setHours(this.availableStartHour + 1, 0, 0, 0));

    this.startControl.setValue(new Date(start));
    this.endControl.setValue(new Date(end));
  }

  private calculateHours(): void {
    const start = this.startControl.value;
    const end = this.endControl.value;

    if (start && end) {
      const startTime = start.getHours() + start.getMinutes() / 60;
      const endTime = end.getHours() + end.getMinutes() / 60;
      const diffHours = endTime - startTime;

      // Validaciones
      if (startTime < this.availableStartHour || endTime > this.availableEndHour) {
        const startFormatted = this.formatHour(new Date().setHours(this.availableStartHour, 0, 0));
        const endFormatted = this.formatHour(new Date().setHours(this.availableEndHour, 0, 0));
        this.errorMessage = `Selecciona entre ${startFormatted} y ${endFormatted}`;
        this.hasError.emit(true);
        return;
      }

      if (!this.isCorrecting) {
        if (startTime >= endTime) {
          if (this.initialized) {
            this.errorMessage = 'La hora de salida debe ser posterior a la de llegada.';
            this.hasError.emit(true);
          }
          return;
        } else if (diffHours < 1) {
          if (this.initialized) {
            this.errorMessage = 'La reserva mínima es de 1 hora.';
            this.hasError.emit(true);
          }
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
      const formatted = `${this.formatHour(start)} - ${this.formatHour(end)}`;
      this.rangeFormatted.emit(formatted);
    }
  }

  private formatHour(input: number | Date): string {
    const date = typeof input === 'number' ? new Date(input) : input;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes.toString().padStart(2, '0');
    return `${displayHours}:${displayMinutes} ${ampm}`;
  }

  get availableHourRange(): string {
    const start = this.formatHour(new Date().setHours(this.availableStartHour, 0, 0));
    const end = this.formatHour(new Date().setHours(this.availableEndHour, 0, 0));
    return `${start} - ${end}`;
  }

}