import { Component, Input, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { Router } from '@angular/router';
// import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-moddatos',
  templateUrl: './moddatos.component.html',
  styleUrls: ['./moddatos.component.scss'],
  providers: [UsuarioService]
})
export class ModdatosComponent implements OnInit {
  @Input() usuario!: Usuarios;
  @Input() exp_res!: number;
  @Input() rutaUser!: string;
  @Input() rutaLogo!: string;
  constructor(private router: Router, private usuariosService: UsuarioService, private token: TokenStorageService) { }
  nombreuser = ""//this.usuario.nick as string;  //acá habrá que poner el nombre real del user con el $_session que exista
  infouser = ""//this.usuario.descripcion as string;
  imagen!: File;
  id_user = Number(this.token.getId());
  nivel!: number;
  error = new Map();

  ngOnChanges(): void {
    this.infouser = this.usuario.descripcion as string;
    this.nombreuser = this.usuario.nick as string;

  }
  ngOnInit(): void {
  }

  visualizar(e: any) {
    this.imagen = e.target.files[0];


    var file = e.target.files[0];

    var reader = new FileReader();
    reader.onload = function (e) {
      if (e.target) {
        $(".usuario").css({
          "background-image": "url(" + e.target.result + ")",
          "background-size": "cover",
        });
      }
    }
    reader.readAsDataURL(file);

  }

  modUser() {
    if (this.nombreuser == "") {
      this.error.set("nombreuser", "El nombre de usuario debe estar lleno");
    } else {

      this.usuariosService.modificarUsuario(this.id_user, this.nombreuser, this.imagen, this.infouser).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/perfil']);
        }
      })
    }

  }
}


