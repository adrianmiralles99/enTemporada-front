import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.scss']
})
export class PasosComponent implements OnInit {

  constructor() { }

  // pasos: Array<String> = [];
  pasos: Array<String> = ["hola"];
  descripcion: string = "";

  ngOnInit(): void { }

  agregarPaso() {
    var descripcion = this.descripcion;
    this.descripcion = "";

    if (descripcion.length > 0) {
      this.pasos.push(descripcion);
    }

    setTimeout(() => {
      document.getElementById("descripcion")?.scrollIntoView({ behavior: "smooth" });
    }, 1);
  }

  quitarPaso(pos: number) {
    this.pasos.splice(pos, 1);
  }

  getNumeroPaso() {
    return this.pasos.length + 1;
  }

}
