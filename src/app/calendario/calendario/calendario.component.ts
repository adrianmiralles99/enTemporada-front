import { Component, OnInit } from '@angular/core';
import { MenuFooterInt } from 'src/app/menufooter';
import { MenuFooter } from 'src/app/mock-menufooter';
import { Productos } from 'src/app/modelos/productos.model';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  providers: [ProductosService],

})
export class CalendarioComponent implements OnInit {

  constructor(private productosService: ProductosService) { }

  micard: MenuFooterInt = (MenuFooter.filter(element => element.ruta == "/calendario"))[0];
  productes!: Productos[];

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productosService.getCalendario().subscribe({
      next: (data) => {
        this.productes = data;

      }
    })
  }


}
