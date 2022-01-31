import { Component, OnInit } from '@angular/core';
import { PRODUCTES } from '../../mock-articulos';
import { Articulo } from '../../articulo';
import { Temporadap } from 'src/app/mock-temporadap';

@Component({
  selector: 'app-datoscreacion',
  templateUrl: './datoscreacion.component.html',
  styleUrls: ['./datoscreacion.component.scss']
})
export class DatoscreacionComponent implements OnInit {

  constructor() { }

  misingredientes: string[] = [];
  cantidad: string = "";
  ingred: string = "";

  ingredientes: Array<Array<String>> = [];


  tipoActualT: Articulo[] = [];
  tipoActualN: Articulo[] = [];

  ngOnInit(): void {
    this.divideIngredientes();
  }

  selectTipo(tipo: string) {
    if (tipo == "F") {
      this.tipoActualT = PRODUCTES.filter(element => element.tipo == "F");
      this.tipoActualN = PRODUCTES.filter(element => element.tipo == "F");
    }
    else if (tipo == "V") {
      this.tipoActualT = PRODUCTES.filter(element => element.tipo == "V");
      this.tipoActualN = PRODUCTES.filter(element => element.tipo == "V");
    }

  }

  // COPIADO DE INTERNET :D
  visualizar() {
    var file = $('#inputIMG').prop("files")[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      if (e.target) {
        $("#img").css({
          "background-image": "url(" + e.target.result + ")",
          "background-size": "cover",
        });
      }
    }
    reader.readAsDataURL(file);
  }

  // DIVIDE LA LISTA DE INGREDIENTES EN DOS FILAS PARA PODER PARTIRLA POR LA MITAD
  divideIngredientes() {
    if (this.misingredientes.length % 2 == 0) {
      this.ingredientes[0] = this.misingredientes.slice(0, (this.misingredientes.length / 2));
    }
    else {
      this.ingredientes[0] = this.misingredientes.slice(0, (this.misingredientes.length / 2) + 1);
    }
    this.ingredientes[1] = this.misingredientes.slice(this.ingredientes[0].length, this.misingredientes.length);
  }

  crearIngrediente() {
    let c = this.cantidad;
    let i = this.ingred;

    if (this.cantidad.length >= 1 && this.ingred.length >= 1) {
      this.misingredientes.push(c + " " + i);
      this.divideIngredientes();
    }
    this.ingred = "";
    this.cantidad = "";
  }

  quitarIngrediente(fila: number, posicion: number) {

    if (fila == 0) {
      this.misingredientes.splice(posicion, 1);
    }
    else {
      this.misingredientes.splice(posicion + this.ingredientes[0].length, 1);
    }
    this.divideIngredientes();
  }
}

