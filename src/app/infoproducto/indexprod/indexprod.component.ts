import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/modelos/productos.model';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-indexprod',
  templateUrl: './indexprod.component.html',
  styleUrls: ['./indexprod.component.scss'],
  providers: [ProductosService]
})
export class IndexprodComponent implements OnInit {
  constructor(private productosService: ProductosService, private rutaActiva: ActivatedRoute) { }

  articulo!: Productos;

  getIndividual(): void {
    this.productosService.getRelacionadas(this.rutaActiva.snapshot.paramMap.get('id'))
      .subscribe({
        next: (data) => {
          this.articulo = data;
          console.log(data);
          
        },
        error: (e) => console.error(e)
      })
  }

  ngOnInit(): void {
    this.getIndividual();
  }




}
