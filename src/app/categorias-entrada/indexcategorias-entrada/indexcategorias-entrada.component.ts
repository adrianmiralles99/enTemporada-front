import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/modelos/categorias.model';
import { CategoriasService } from 'src/app/servicios/categorias.service';

@Component({
  selector: 'app-indexcategorias-entrada',
  templateUrl: './indexcategorias-entrada.component.html',
  styleUrls: ['./indexcategorias-entrada.component.scss'],
  providers: []
})
export class IndexcategoriasEntradaComponent implements OnInit {

  titulo:string="Categorias del blog";
  categorias!: Categorias[];
  cantidadcategorias?: Number = 0;
  buscando = false;
  public nombrecat?: string;

  constructor(private categoriasservice: CategoriasService) { }

  ngOnInit(): void {
    this.getCategorias();



  }
  getCategorias(){
    this.buscando = false;
    this.categoriasservice.getAll().subscribe({
      next: (data) => {
        this.buscando = true;

        this.categorias = data;
        this.cantidadcategorias = this.categorias.length
      },
      error: (e) => console.error(e)
    });
  }

}
