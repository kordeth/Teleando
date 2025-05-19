import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelItemModel } from '@models/hotel-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hotel-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './hotel-item.component.html',
  styleUrl: './hotel-item.component.css',
})

export class HotelItemComponent { 
   item = input.required<HotelItemModel>();
}
