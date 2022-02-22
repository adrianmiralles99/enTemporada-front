import { Component, Input, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelos/productos.model';
@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.scss']
})


export class ProductesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.frutas = this.productes?.filter(element => element.tipo == "F");
    this.verduras = this.productes?.filter(element => element.tipo == "V");
    this.mesActual = this.meses[new Date().getMonth()];
  }


  @Input() productes?: Productos[];
  frutas?: Productos[];
  verduras?: Productos[];
  meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  mes = ["E", "F", "Mr", "Ab", "My", "Jn", "Jl", "Ag", "Sp", "O", "N", "D"];
  mesActual!: string;


  cambiaColor(id: number): void {
    var element = $("#" + id);
    if (element) {
      var articulo = this.productes?.find(element => element.id == id);
      element.children().css("background-color", articulo?.color ?? "");
      element.find(".card-img-top").prop("src", "/assets/IMG/Articulos/background/" + articulo?.imagen);
    }
  }

  quitaColor(id: number): void {
    var element = $("#" + id);
    var articulo = this.productes?.find(element => element.id == id);

    if (element) {
      element.children().css("background-color", "");
      element.find(".card-img-top").prop("src", "/assets/IMG/Articulos/basic/" + articulo?.imagen);
    }
  }

}
