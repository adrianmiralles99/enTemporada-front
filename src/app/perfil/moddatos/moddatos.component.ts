import { Component, Input, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-moddatos',
  templateUrl: './moddatos.component.html',
  styleUrls: ['./moddatos.component.scss']
})
export class ModdatosComponent implements OnInit {
  @Input() id_usuario!: number;
  @Input() exp_res!: number;
  constructor(private usuariosService: UsuarioService) { }
  nombreuser= "";//this.usuario.nick;  //acá habrá que poner el nombre real del user con el $_session que exista
  infouser = "";//this.usuario.descripcion;
  usuario!: Usuarios
  ngOnInit(): void {
    this.getUser();
  }
  visualizar() {
    var file = $('#fotousuario').prop("files")[0];
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
  getUser(): void{
    this.usuariosService.getById(this.id_usuario).subscribe({
      next: (data) => {
        this.usuario = data;
        this.nombreuser = this.usuario.nick as string;
        this.infouser = this.usuario.descripcion as string;
      }
    })
  }


}
