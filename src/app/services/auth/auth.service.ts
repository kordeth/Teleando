import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const loginUrl = environment.loginUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = signal<any>(null);

  constructor(private http: HttpClient) {
    const stored = localStorage.getItem('user');
    if (stored) {
      this.currentUser.set(JSON.parse(stored));
    }
  }

  login(user: { correo: string; passwordUsuario: string }): Observable<any> {
    return this.http.post<any>(`${loginUrl}/login`, user);
  }

  setSession(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser.set(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(`${loginUrl}/usuario`, user);
  }
  

}
