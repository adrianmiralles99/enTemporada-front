import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.scss']
})
export class PasosComponent implements OnInit {
  pasos = [
    "Cocemos la quinoa según la información del fabricante.",
    "Lavamos y troceamos las hojas de kale o de espinacas.",
    "Frotamos las hojas con unas gotas de limón, aceite de oliva extra virgen y sal.",
    "Frotamos las hojas con unas gotas de limón, aceite de oliva extra virgen y sal.",
    "Introducimos los granos en un bol con agua y retiramos las pieles blancas que flotan con un colador.",
    "Lavamos las ramas de apio y las cortamos en rodajitas.",
    "Troceamos las frambuesas y los arándanos.",
    "Troceamos las frambuesas y los arándanos.",
    "En un frasco colocamos el zumo de limón, la mostaza, sal, pimienta y aceite de oliva extra virgen. Tapamos y agitamos hasta que se forme una vinagreta.",
    "Reservamos un par de cucharadas de granada, frutos rojos y almendras para después y mezclamos el resto de los ingredientes en un bol.",
    "Aliñamos con la vinagreta y servimos.",
    "Para terminar, adornamos con el resto de granada, frutos rojos y almendras.",
  ];
  constructor() { }

  ngOnInit(): void {
  }


}
