import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { LoaderService } from '@services/loader/loader.service';
import { ErrorService } from '@services/error/error.service';

@Component({
  selector: 'app-login',
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
    private router: Router,
    private loaderService: LoaderService,
    private errorService: ErrorService
  ) {}

  onSubmit() {
    this.loaderService.show();
    this.authService.login(this.user).subscribe({
      next: (res) => {
        this.loaderService.hide();
        if (res.isSuccess) {
          this.authService.setSession(res.data);
          alert('¡Inicio de sesión exitoso!');
          this.router.navigate(['/']);
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
