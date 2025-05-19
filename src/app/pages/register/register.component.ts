import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    nombres: '',
    apellidos: '',
    documentoIdentidad: '',
    direccion: '',
    telefono: '',
    correo: '',
    passwordUsuario: '',
    confirmPassword: '' 
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.user.passwordUsuario !== this.user.confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, verifica.');
      return;
    }
  
    const { confirmPassword, ...body } = this.user;
  
    this.authService.register(body).subscribe({
      next: (res) => {
        if (res.isSuccess) {
          alert('Registro exitoso');
          this.router.navigate(['/login']);
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
