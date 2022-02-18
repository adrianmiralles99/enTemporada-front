import { Component,Input, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {
  @Input() rutaUser!: string;
  @Input() rutaLogo!: string;
   @Input() usuario!: Usuarios;
  constructor(private usuariosService: UsuarioService) {}
  nivel!: number;
  exp_res!: number;

  ngOnInit(): void {
 
  }


}
