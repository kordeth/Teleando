import { Component,OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
}) 

export class RegisterComponent {
  constructor(private fb: FormBuilder) {
    // Constructor logic can be added here if needed
    //"nombres": "Sofía",
    //"apellidos": "García Mendoza",
    //"documentoIdentidad": "87654321",
    //"direccion": "Calle Falsa 456",
   // "telefono": "912345678",
    //"correo": "sofia.garcia@example.com",
    //"passwordUsuario": "ClaveSegura!2025"
  }
    registerForm = this.fb.group({
      nombres: ['',Validators.required],
      apellidos: ['',Validators.required],
      documentoIdentidad: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      direccion: ['',Validators.required],
      telefono: ['',Validators.required],
      correo: ['',Validators.email],
      passwordUsuario: [''],  
    });
  submit() {
    console.log(this.registerForm.value);
    // Aquí puedes agregar la lógica para enviar el formulario al servidor
  if (this.registerForm.valid) {
      // Lógica para enviar el formulario al servidor
      alert('Formulario enviado correctamente');
      console.log('Formulario enviado:', this.registerForm.value);
    }
    else {
      console.log('Formulario inválido');
      console.log(this.registerForm.errors);
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
}
