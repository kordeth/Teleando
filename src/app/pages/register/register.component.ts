import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { LoaderService } from '@services/loader/loader.service';
import { ErrorService } from '@services/error/error.service';

@Component({
  selector: 'app-register',
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
    private router: Router,
    private loaderService: LoaderService,
    private errorService: ErrorService
  ) {}

  onSubmit() {
    if (this.user.passwordUsuario !== this.user.confirmPassword) {
      alert('Las contraseñas no coinciden. Por favor, verifica.');
      return;
    }
  
    const { confirmPassword, ...body } = this.user;
  
    this.authService.register(body).subscribe({
      next: (res) => {
        this.loaderService.hide();
        if (res.isSuccess) {
          alert('Registro exitoso');
          this.router.navigate(['/login']);
        } else {
          this.errorService.show();
        }
      },
      error: (err) => {
        this.loaderService.hide();
        console.error(err);
        this.errorService.show();
      }
    });
  }
  
}
