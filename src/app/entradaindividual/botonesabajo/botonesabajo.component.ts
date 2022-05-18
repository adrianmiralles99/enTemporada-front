import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { Entradas } from 'src/app/modelos/entradas.model';
import { EntradasService } from 'src/app/servicios/entradas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-botonesabajo',
  templateUrl: './botonesabajo.component.html',
  styleUrls: ['./botonesabajo.component.scss']
})
export class BotonesabajoComponent implements OnInit {

  @Input() entradaid!: number;
  entradas!: Entradas;

  mostrar = false;
  constructor(private router:Router,private token: TokenStorageService, private entradasservice: EntradasService) {
  }

  ngOnInit(): void {
    this.getEntradas();

  }
  mostrarBoton(idusuario: Number) {
    if (idusuario == Number(this.token.getId())) {
      this.mostrar = true;
    }
  }
  getEntradas() {//cambiar la id por la que verdaderamente toca
    this.entradasservice.getById(this.entradaid).subscribe({
      next: (data) => {
        this.entradas = data;
        this.mostrarBoton(this.entradas.id_usuario);
      },
      error: (e) => console.error(e)
    });
  }
  deleteEntrada(){

    this.entradasservice.borrarEntrada(this.entradaid).subscribe({
      next:(data) =>{
      }
    })
    this.router.navigate(['entradas']);
  }


}
