import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    correo: '',
    passwordUsuario: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.user).subscribe({
      next: (res) => {
        if (res.isSuccess) {
          
          this.authService.setSession(res.data);

          alert('¡Inicio de sesión exitoso!');

          this.router.navigate(['/']);
        } else {
          alert('Error: ' + res.errorMessage);
        }
      },
      error: (err) => {
        console.error(err);
        alert('Error de conexión con el servidor');
      }
    });
  }
}
