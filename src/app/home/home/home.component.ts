import { Component, OnInit } from '@angular/core';
import { MenuFooterInt } from 'src/app/menufooter';
import { MenuFooter } from 'src/app/mock-menufooter';
import { Productos } from 'src/app/modelos/productos.model';
import { ProductosService } from 'src/app/servicios/productos.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private productosService: ProductosService) { }

  productes?: Productos[];
  micard: MenuFooterInt = (MenuFooter.filter(element => element.ruta == "/"))[0];

  ngOnInit(): void {
    this.getProductes();
  }

  getProductes(): void {
    this.productosService.getActual()
      .subscribe({
        next: (data) => {
          this.productes = data;

        },
        error: (e) => console.error(e)
      });

  }
}
