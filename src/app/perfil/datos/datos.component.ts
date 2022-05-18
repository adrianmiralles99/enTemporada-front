import { Component, Input, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {
  @Input() exp_res!: number;
  @Input() rutaUser!: string;
  @Input() rutaLogo!: string;
  @Input() usuario!: Usuarios;
  constructor(private usuariosService: UsuarioService) { }


  ngOnInit(): void {
  }
  explicacion():void{
    if ($(".explicacion").is(':visible')) {
      $(".explicacion").hide();

    }else{
      $(".explicacion").show();
    }
  }


}
