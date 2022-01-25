import { Component, OnInit } from '@angular/core';
import { never } from 'rxjs';
// import { FRUTAS } from '../../mock-articulos';
// import { VERDURAS } from '../../mock-articulos';
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

  cambiaColor(id: number) {
    var element = $("#" + id);

    if (element) {
      element.children().css("background-color", this.productes.find(element => element.id == id)?.color ?? "")
    }
  }

  quitaColor(id: number) {
    var element = $("#" + id);
    if (element) {
      element.children().css("background-color", "")
    }
  }

}
