import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { Recetas } from 'src/app/modelos/recetas.model';
@Component({
  selector: 'app-indexmisrecetas',
  templateUrl: './indexmisrecetas.component.html',
  styleUrls: ['./indexmisrecetas.component.scss']
})
export class IndexmisrecetasComponent implements OnInit {

  constructor(private token: TokenStorageService, private usuarioService: UsuarioService) { }

  titulo?: string = "Mis recetas"
  nick?: string;
  imagen?: string;
  recetas?: Recetas[];
  ngOnInit(): void {
    this.GetrecetasById();
  }
  
  GetrecetasById() {
    this.usuarioService.getrecetasById(this.token.getId()).subscribe({
      next: (data) => {
        console.log(data);
        this.nick = (String(data.nick));
        this.imagen = (String(data.imagen));
        this.recetas = (data.recetas);
      },
      error: (e) => console.error(e)
    });
  }

}
