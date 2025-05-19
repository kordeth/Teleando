import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private errorSubject = new BehaviorSubject<boolean>(false);
  error$ = this.errorSubject.asObservable();

  show(): void {
    this.errorSubject.next(true);
  }

  hide(): void {
    this.errorSubject.next(false);
  }

}
