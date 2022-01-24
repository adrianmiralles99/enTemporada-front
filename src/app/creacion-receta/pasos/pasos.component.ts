import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.scss']
})
export class PasosComponent implements OnInit {

  constructor() { }

  // pasos: Array<Array<String>> = [];
  pasos = [["Paso 1", ""], ["Supercalifragilisticexpialidocious", ""], ["Pancacke con muchas cosas", ""]];

  ngOnInit(): void { }

  agregarPaso() {
    var titulo = $("#titulo").val()?.toString().trim() ?? "";
    var descripcion = $("#descripcion").val()?.toString().trim() ?? "";
    $("#titulo").val("");
    $("#descripcion").val("");

    if ((titulo.length > 0 || titulo.length < 50) && descripcion.length > 0) {
      this.pasos.push([titulo, descripcion]);
    }
  }

  quitarPaso(e: Event) {
    if (e.target) {
      console.log($(e.target).parent().parent().prop("id"));
      this.pasos.splice($(e.target).parent().parent().prop("id"), 1);

    }
  }

}
