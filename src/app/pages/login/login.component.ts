import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private fb: FormBuilder) {
    // Constructor logic can be added here if needed
  }

loginForm = this.fb.group({ 
  correo: ['',Validators.required,Validators.email],
  passwordUsuario: ['',Validators.required],  
});

submit() {
  console.log(this.loginForm.value);
  // Aquí puedes agregar la lógica para enviar el formulario al servidor
if (this.loginForm.valid) {
    // Lógica para enviar el formulario al servidor
    alert('Inicio de session enviado correctamente');
    console.log('Inicio Session enviado:', this.loginForm.value);
  }
  else {
    console.log('Inicio de Session inválido');
    console.log(this.loginForm.errors);
    alert('Por favor, completa todos los campos requeridos.');
  }
}

}
