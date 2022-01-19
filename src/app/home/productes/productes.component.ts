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
