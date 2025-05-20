import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  activeTab: string = 'profile';
  editableUser: any;

  constructor(private authService: AuthService, private router: Router) {
    this.loadEditableUser();
  }

  loadEditableUser() {
    this.editableUser = { ...this.authService.getCurrentUser() };
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  get user() {
    return this.authService.getCurrentUser(); 
  }

  saveChanges() {
    const updateData = {
      idUsuario: this.editableUser.idusuario,
      nombres: this.editableUser.nombres,
      apellidos: this.editableUser.apellidos,
      documentoIdentidad: this.editableUser.documentoidentidad,
      direccion: this.editableUser.direccion,
      telefono: this.editableUser.telefono,
      correo: this.editableUser.correo
    };

    this.authService.updateUser(updateData).subscribe({
      next: (res) => {
        alert('Datos actualizados correctamente');
        this.authService.updateCurrentUser(this.editableUser); 
      },
      error: (err) => {
        alert('Error al actualizar datos');
        console.error(err);
      }
    });
  }

  deleteAccount() {
    if (confirm('¿Estás seguro de eliminar tu cuenta? Esta acción no se puede deshacer.')) {
      this.authService.deleteUser(this.editableUser.idusuario).subscribe({
        next: () => {
          alert('Cuenta eliminada correctamente');
          this.logout();
        },
        error: (err) => {
          alert('Error al eliminar cuenta');
          console.error(err);
        }
      });
    }
  }
}
