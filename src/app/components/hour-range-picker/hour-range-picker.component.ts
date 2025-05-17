import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hour-range-picker',
  imports: [
    ReactiveFormsModule,
    MatTimepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    CommonModule,
  ],
  templateUrl: './hour-range-picker.component.html',
  styleUrl: './hour-range-picker.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HourRangePickerComponent implements OnInit, OnChanges {
  @Input() selectedDate: Date = new Date();
  @Output() packSelected = new EventEmitter<string>();
  @Output() dateTimeSelected = new EventEmitter<Date>();

  selectedPack: string = '3';
  startControl = new FormControl<Date | null>(null);
  minTime: string = '';

  ngOnInit(): void {
    this.setInitialTime();

    this.startControl.valueChanges.subscribe((selectedTime) => {
      if (selectedTime instanceof Date) {
        this.emitSelectedDateTime(selectedTime);
      }
    });
  }

  onPackChange(value: string) {
    const cleanValue = value.replace('h', '');
    this.selectedPack = cleanValue;
    this.packSelected.emit(cleanValue);
  }

  private setInitialTime(): void {
    const now = new Date();
    now.setHours(now.getHours() + 1, 0, 0, 0);
    this.startControl.setValue(now, { emitEvent: false });
    this.emitSelectedDateTime(now);
  }

  private emitSelectedDateTime(selectedTime: Date): void {
    const combinedDateTime = new Date(this.selectedDate);
    combinedDateTime.setHours(
      selectedTime.getHours(),
      selectedTime.getMinutes(),
      0,
      0
    );
    this.dateTimeSelected.emit(combinedDateTime);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDate']) {
      setTimeout(() => this.updateMinTime(), 0);
    }
  }

  private updateMinTime(): void {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selected = new Date(this.selectedDate);
    selected.setHours(0, 0, 0, 0);

    let minDateTime = new Date(this.selectedDate);

    if (selected.getTime() === today.getTime()) {
      const now = new Date();
      now.setHours(now.getHours() + 1, 0, 0, 0);
      this.minTime = `${now.getHours().toString().padStart(2, '0')}:00`;
      minDateTime = now;
    } else {
      this.minTime = '00:00';
      minDateTime.setHours(0, 0, 0, 0);
    }

    this.startControl.setValue(minDateTime, { emitEvent: false });
    this.emitSelectedDateTime(minDateTime);
  }
}