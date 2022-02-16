import { Component, Input, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-indiceperfil',
  templateUrl: './indiceperfil.component.html',
  styleUrls: ['./indiceperfil.component.scss']
})
export class IndiceperfilComponent implements OnInit {
  usuario!: Usuarios;
  constructor(private usuariosService: UsuarioService) { }
  id_usuario = 2;
  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void{
    this.usuariosService.getById(this.id_usuario).subscribe({
      next: (data) => {
        this.usuario = data;
      }
    })
  }

}
