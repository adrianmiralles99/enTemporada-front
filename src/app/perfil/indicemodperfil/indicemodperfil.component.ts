import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-indicemodperfil',
  templateUrl: './indicemodperfil.component.html',
  styleUrls: ['./indicemodperfil.component.scss'],
  providers:[UsuarioService,TokenStorageService]
})
export class IndicemodperfilComponent implements OnInit {

  usuario!: Usuarios;

  constructor(private usuariosService: UsuarioService, private token: TokenStorageService) { }
  exp_res = 0;
  nivel = 0;
  rutaLogo= "";
  rutaUser = "";
  id_usuario = this.token.getId();
  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void{
    this.usuariosService.getById(this.id_usuario).subscribe({
      next: (data) => {
        this.usuario = data;

        this.getLvl(this.usuario.exp);
        this.rutaUser = "../../../assets/IMG/Usuarios/" + this.usuario.imagen;
        this.rutaLogo = "../../../assets/IMG/Niveles/lvl_"+this.nivel+"-removebg-preview.png";

        
      }
    })
  }
  getLvl(expe: number){
    if(expe / 100 > 0){
      this.nivel = Math.floor(expe / 100) + 1;
      this.exp_res = ((expe / 100) % 1) * 100;
      // console.log("Nivel = " + this.nivel)
      // console.log("Exp = " + this.exp_res)
    }if(expe >= 400){
      this.nivel = 5;
      this.exp_res = 100;
  
    }if (expe / 100 == 0) {
      this.nivel = 1;
    }
  }

  
}
  


