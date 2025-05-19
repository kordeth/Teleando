import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ErrorService } from '@services/error/error.service';

@Component({
  selector: 'error-view',
  imports: [CommonModule],
  templateUrl: './error-view.component.html',
  styleUrl: './error-view.component.css'
})
export class ErrorViewComponent { 

  constructor(public errorService: ErrorService, private router: Router) {}

  closeAndRedirect(): void {
    this.errorService.hide();
    this.router.navigate(['/contact-us']);
  }

}
