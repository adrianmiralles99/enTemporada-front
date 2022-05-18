import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-datoslogin',
  templateUrl: './datoslogin.component.html',
  styleUrls: ['./datoslogin.component.scss']
})
export class DatosloginComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  error = new Map();


  isSuccessful = false;
  isSignUpFailed = false;

  usuario!: Usuarios;
  nombre: string = "";
  apellidos: string = "";
  nick: string = "";
  correo: string = "";
  password: string = "";
  password2: string = "";
  localidad: string = "";
  direccion: string = "";

  onSubmit(): void {
    this.comprobarErrores();
    if(this.error.size==0){
      this.authService.register(this.nick, this.nombre, this.apellidos, this.correo, this.password, this.direccion, this.localidad).subscribe({
        next: data => {
        }
      });
      const miSnackBar = this.snackBar.open("Registro realizado completamente", "Aceptar",{panelClass:'alertcool'});
      miSnackBar.onAction().subscribe(() => {
        this.router.navigate(['']);
      });
    }


  }
  comprobarErrores(){
    this.error = new Map();
    //campos arriba
    if(!this.nick){
      this.error.set("nick", "El campo nombre de usuario debe estar completado");
    }
    if(!this.correo){
      this.error.set("correo", "El campo correo debe estar completado");
    }
    if(!this.password){
      this.error.set("password", "El campo contraseña debe estar completado");
    }
    if(!this.password2){
      this.error.set("password2", "El campo repetir contraseña debe estar completado");
    }
    if(this.password != this.password2){
      this.error.set("password2", "Las contraseñas deben coincidir");
    }
    if(!this.nombre){
      this.error.set("nombre", "El campo nombre debe estar completado");
    }
    if(!this.apellidos){
      this.error.set("apellidos", "El campo apellidos debe estar completado");
    }
    if(!this.localidad){
      this.error.set("localidad", "El campo localidad debe estar completado");
    }

  }
}
