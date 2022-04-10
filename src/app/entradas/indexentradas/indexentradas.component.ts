import { Component, OnInit } from '@angular/core';
import { Entradas } from 'src/app/modelos/entradas.model';
import { EntradasService } from 'src/app/servicios/entradas.service';
import { Categorias } from 'src/app/modelos/categorias.model';
import { CategoriasService } from 'src/app/servicios/categorias.service';
@Component({
  selector: 'app-indexentradas',
  templateUrl: './indexentradas.component.html',
  styleUrls: ['./indexentradas.component.scss']
})
export class IndexentradasComponent implements OnInit {

  constructor(private entradasservice: EntradasService, private categoriasservice: CategoriasService) { }
  titulo: string = "Blog en temporada";
  entradas?: Entradas[];

  categorias?: Categorias[];
  cantidad?: number = 0;
  cantidadcategorias?: number = 0;

  textofiltro: string = "";
  filterPost: string = "";
  opcion:string = "";
  id_entrada:number = 0;

  sort?: string;
  buscando = false;

  ngOnInit(): void {
    this.getEntradas();
    this.getCategorias();
  }
  getEntradas(){
    this.buscando = false;
    this.entradasservice.getAll().subscribe({
      next: (data) => {
        this.buscando = true;
        this.entradas = data;
        this.cantidad = this.entradas.length
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
    this.entradasservice.getfiltro(this.id_entrada,this.opcion).subscribe({
      next: (data) => {
        this.entradas = data;
        this.cantidad = this.entradas?.length;

      },
      error: (e) => console.error(e)
    });
  }

}
