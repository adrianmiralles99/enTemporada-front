import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.scss']
})
export class PasosComponent implements OnInit {

  constructor() { }

  pasos: Array<String> = [];
  // pasos = ["Hola buenas", "adios"];
  editar = "";
  ngOnInit(): void { }

  agregarPaso() {
    var descripcion = $("#descripcion").val()?.toString().trim() ?? "";
    $("#descripcion").val("");

    if (descripcion.length > 0) {
      this.pasos.push(descripcion);
    }

    setTimeout(() => {
      document.getElementById("descripcion")?.scrollIntoView({ behavior: "smooth" });
    }, 1);


  }

  quitarPaso(e: Event) {
    if (e.target) {
      this.pasos.splice($(e.target).parent().parent().prop("id"), 1);
    }
  }

  getNumeroPaso() {
    return this.pasos.length + 1;
  }

}
