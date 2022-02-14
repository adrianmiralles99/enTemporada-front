import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelos/productos.model';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-indexcreacion',
  templateUrl: './indexcreacion.component.html',
  styleUrls: ['./indexcreacion.component.scss']
})
export class IndexcreacionComponent implements OnInit {
  constructor(private productoService: ProductosService) { }

  productos?: Productos[];

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getCalendario().subscribe({
      next: (data) => {
        this.productos = data;
      }
    });
  }

}
