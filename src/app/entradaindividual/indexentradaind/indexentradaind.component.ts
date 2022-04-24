import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntradasService } from 'src/app/servicios/entradas.service';
import { Entradas } from 'src/app/modelos/entradas.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
@Component({
  selector: 'app-indexentradaind',
  templateUrl: './indexentradaind.component.html',
  styleUrls: ['./indexentradaind.component.scss']
})
export class IndexentradaindComponent implements OnInit {

  constructor(private router: Router,private token: TokenStorageService,private usservice: UsuarioService,private entradasService: EntradasService, private rutaActiva: ActivatedRoute) { }

  id = this.rutaActiva.snapshot.paramMap.get('id');
  entradaid = Number(this.rutaActiva.snapshot.paramMap.get('id'));
  entrada?:  Entradas;
  idPropietarioEntrada?: number;
  ngOnInit(): void {
    this.getEntrada();
  }
  ngOnchanges():void{
    console.log(this.entrada);

  }
  getEntrada(){
    this.entradasService.getById(this.entradaid).subscribe({
      next: (data) => {
        console.log(data);
        if (data) {
          this.entrada = data;
          this.idPropietarioEntrada=data?.usuario?.id;
        }
        else {
          this.router.navigate(['entradas'])
        }

      },
      error: (e) => {
        this.router.navigate(['entradas'])
      }
    })
  }

}
