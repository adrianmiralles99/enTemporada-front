import { Component,Input, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  @Input() id_usuario!: number;
  constructor(private usuariosService: UsuarioService) {}
  usuario!: Usuarios;
  nivel!: number;
  exp_res!: number;
  rutaUser = "../../../assets/IMG/Usuarios/";
  ngOnInit(): void {
    this.getUser()
  }


  getUser(): void{
    this.usuariosService.getById(this.id_usuario).subscribe({
      next: (data) => {
        this.usuario = data;
        console.log(data);
        this.getLvl(this.usuario.exp)
        this.fotoUser()
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

fotoUser(){
  
  //"../../../assets/IMG/Niveles/lvl_4-removebg-preview.png"
  $(".foto > .usuario").css("background-image", 'url('+this.rutaUser + this.usuario.imagen+')')
  $(".foto > .b_usuario").css("background-image","url('../../../assets/IMG/Niveles/lvl_"+this.nivel+"-removebg-preview.png')" )
}

}
