import { Component, OnInit } from '@angular/core';
import { PRODUCTES } from '../../mock-articulos';

@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.scss']
})
export class ProductesComponent implements OnInit {
  frutas = PRODUCTES.filter(element => element.tipo == "F");
  verduras = PRODUCTES.filter(element => element.tipo == "V");
  productes = PRODUCTES;

  constructor() { }

  ngOnInit(): void {
  }
  meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  mes = ["E", "F", "Mr", "Ab", "My", "Jn", "Jl", "Ag", "Sp", "O", "N", "D"];
  mesActual = this.meses[new Date().getMonth()];

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
      console.log("url(../../assets/IMG/Frutas/basic/" + articulo?.nombre + ".png)");

      element.find(".card-img-top").prop("src", "../../assets/IMG/Frutas/basic/" + articulo?.nombre + ".png");
    }
  }

}
