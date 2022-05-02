import { Component, OnInit } from '@angular/core';
import { Entradas } from 'src/app/modelos/entradas.model';
import { EntradasService } from 'src/app/servicios/entradas.service';
import { Categorias } from 'src/app/modelos/categorias.model';
import { CategoriasService } from 'src/app/servicios/categorias.service';
@Component({
  selector: 'app-indexmisentradas',
  templateUrl: './indexmisentradas.component.html',
  styleUrls: ['./indexmisentradas.component.scss']
})
export class IndexmisentradasComponent implements OnInit {
  titulo?: string = "Mis entradas"
  entradas?: Entradas[];
  cantidad?: number;

  categorias?: Categorias[];
  cantidadcategorias?: number = 0;

  textofiltro: string = "";
  filterPost: string = "";
  opcion:string = "";
  id_entrada:number = 0;

  sort?: string;
  buscando = false;
  constructor(private entradasService:EntradasService,private categoriasservice: CategoriasService) { }

  ngOnInit(): void {
    this.getmisEntradas();
    this.getCategorias();
    console.log(this.entradas);
  }
  ngOnChanges():void{
    console.log("ola");
    console.log(this.entradas);

  }
  getmisEntradas() {
    this.buscando = false;

    this.entradasService.getMias().subscribe({
      next: (data) => {
        this.buscando = true;

        this.entradas = data;
        this.cantidad = data.length;
      },
      error: (e) => console.error(e)
    });
  }
  getCategorias(){
    this.categoriasservice.getAll().subscribe({
      next: (data) => {
        this.categorias = data;
        this.cantidadcategorias = this.categorias.length
      },
      error: (e) => console.error(e)
    });
  }
  filtrar() {
    this.filterPost = this.textofiltro;
  }

  filtrarTipo() {
    this.entradasService.getfiltro(this.id_entrada,this.opcion).subscribe({
      next: (data) => {
        this.entradas = data;
        this.cantidad = this.entradas?.length;

      },
      error: (e) => console.error(e)
    });
  }

}
