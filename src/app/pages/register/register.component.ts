import { NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/register/user.service'; // Adjust the path as needed
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
}) 

export class RegisterComponent {
  constructor(private fb: FormBuilder,
     private readonly ps: UserService,
     private router : Router
  ) {
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
      passwordUsuario: ['',Validators.required],  
    });
  
    get nombreInvalido() {
      return this.registerForm.get('nombres')?.invalid && this.registerForm.get('nombres')?.touched;
    }
    get apellidoInvalido() {
      return this.registerForm.get('apellidos')?.invalid && this.registerForm.get('apellidos')?.touched;
    }
    get documentoInvalido() {
      return this.registerForm.get('documentoIdentidad')?.invalid && this.registerForm.get('documentoIdentidad')?.touched;
    }
    get direccionInvalido() {
      return this.registerForm.get('direccion')?.invalid && this.registerForm.get('direccion')?.touched;
    }
    get telefonoInvalido() {
      return this.registerForm.get('telefono')?.invalid && this.registerForm.get('telefono')?.touched;
    }
    get correoInvalido() {
      return this.registerForm.get('correo')?.invalid && this.registerForm.get('correo')?.touched;
    }
    get passwordUsuarioInvalido() {
      return this.registerForm.get('passwordUsuario')?.invalid && this.registerForm.get('passwordUsuario')?.touched;
    }

insertarUsuario(data: any) {
  this.ps.registerUser(data).subscribe((rest:any) => {
    console.log(rest);
    alert('Usuario registrado correctamente');
    this.router.navigate(['/home']);
  })
}

  submit() {
    console.log(this.registerForm.value);
    // Aquí puedes agregar la lógica para enviar el formulario al servidor
  if (this.registerForm.valid) {
      // Lógica para enviar el formulario al servidor
      this.insertarUsuario(this.registerForm.value);
      alert('Formulario enviado correctamente');
      console.log('Formulario enviado:', this.registerForm.value);
    }
    else {
      console.log('Formulario inválido');
      console.log(this.registerForm.value);
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
}
