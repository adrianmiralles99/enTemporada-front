import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/modelos/productos.model';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-indexprod',
  templateUrl: './indexprod.component.html',
  styleUrls: ['./indexprod.component.scss']
})
export class IndexprodComponent implements OnInit {
  constructor(private productosService: ProductosService, private rutaActiva: ActivatedRoute) { }

  articulo!: Productos;

  id = this.rutaActiva.snapshot.paramMap.get('id');
  getIndividual(): void {
    this.productosService.getRelacionadas(this.id)
      .subscribe({
        next: (data) => {
          console.log(data);

          this.articulo = data;

        },
        error: (e) => console.error(e)
      })
  }

  ngOnInit(): void {
    this.getIndividual();
  }




}
