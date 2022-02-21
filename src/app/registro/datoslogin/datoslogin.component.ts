import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuarios } from 'src/app/modelos/usuarios.model';
@Component({
  selector: 'app-datoslogin',
  templateUrl: './datoslogin.component.html',
  styleUrls: ['./datoslogin.component.scss']
})
export class DatosloginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


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
    if (this.password === this.password2) {
      this.authService.register(this.nick, this.nombre, this.apellidos, this.correo, this.password, this.direccion, this.localidad).subscribe({
        next: data => {
          console.log(data);
        }
      });
    }
    else {

    }
  }

}
