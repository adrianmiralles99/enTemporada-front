import { Component, OnInit, Input } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';
import { RecetasService } from 'src/app/servicios/recetas.service';
import { Productos } from 'src/app/modelos/productos.model';
import { ProductosService } from 'src/app/servicios/productos.service';
@Component({
  selector: 'app-indexedicion',
  templateUrl: './indexedicion.component.html',
  styleUrls: ['./indexedicion.component.scss'],
  providers: [ProductosService, RecetasService]

})

export class IndexedicionComponent implements OnInit {


  constructor(private recetasservice: RecetasService,private productoService: ProductosService) { }

  recetas!: Recetas;
  productos?: Productos[];
  @Input() recetaid!: number;

  ngOnInit(): void {
    console.log(this.recetaid);
    this.getRecetas();
    this.getProductos();
  }

  getRecetas() {//cambiar la id por la que verdaderamente toca
    this.recetasservice.getById(1).subscribe({
      next: (data) => {
        console.log(data);
        this.recetas = data;
      },
      error: (e) => console.error(e)
    });
  }
  getProductos() {
    this.productoService.getCalendario().subscribe({
      next: (data) => {
        this.productos = data;
      }
    });
  }

}
