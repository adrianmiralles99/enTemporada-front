import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelos/productos.model';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.scss']
})


export class ProductesComponent implements OnInit {
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.getProductes();
  }


  productes: Productos[] = [];
  frutas: Productos[] = [];
  verduras: Productos[] = [];


  meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  mes = ["E", "F", "Mr", "Ab", "My", "Jn", "Jl", "Ag", "Sp", "O", "N", "D"];
  mesActual = this.meses[new Date().getMonth()];



  getProductes(): void {
    this.productosService.getCard()
      .subscribe({
        next: (data) => {
          this.productes = data;
          this.frutas = this.productes.filter(element => element.tipo == "F");
          this.verduras = this.productes.filter(element => element.tipo == "V");

        },
        error: (e) => console.error(e)
      });

  }


  cambiaColor(id: number): void {
    var element = $("#" + id);

    if (element) {
      var articulo = this.productes.find(element => element.id == id);
      element.children().css("background-color", articulo?.color ?? "");
      element.find(".card-img-top").prop("src", "../../assets/IMG/Frutas/background/" + articulo?.nombre + ".png");
    }
  }

  quitaColor(id: number): void {
    var element = $("#" + id);
    var articulo = this.productes.find(element => element.id == id);

    if (element) {
      element.children().css("background-color", "");
      element.find(".card-img-top").prop("src", "../../assets/IMG/Frutas/basic/" + articulo?.nombre + ".png");
    }
  }

}
