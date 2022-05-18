import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/modelos/categorias.model';
import { CategoriasService } from 'src/app/servicios/categorias.service';

@Component({
  selector: 'app-indexcreacionentrada',
  templateUrl: './indexcreacionentrada.component.html',
  styleUrls: ['./indexcreacionentrada.component.scss'],
  providers: [CategoriasService]

})
export class IndexcreacionentradaComponent implements OnInit {
  categorias?: Categorias[];

  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.getCategorias();
  }
  getCategorias(){
    this.categoriasService.getAll().subscribe({
      next: (data) => {
        this.categorias = data;
      },
      error: (e) => console.error(e)
    });
  }

}
