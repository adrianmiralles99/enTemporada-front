import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detallesrecetas',
  templateUrl: './detallesrecetas.component.html',
  styleUrls: ['./detallesrecetas.component.scss']
})
export class DetallesrecetasComponent implements OnInit {

  misingredientes = [
    "8-10 hojas de Kale o de Espinacas frescas",
    "150-200g quinoa",
    "2 dientes ajo",
    "2-3 ramas apio",
    "1 granada o 4-5 fresas",
    "2 limones",
    "2 cdta. mostaza antigua",
    "2 cdta. mostaza antigua",
    "100g frambuesas",
    "100g frambuesas",
    "Sal",
    "Pimienta",
    "Aceite de oliva extra virgen",
  ];
  ingredientes: Array<Array<String>> = [];

  constructor() { }

  ngOnInit(): void {
    this.divideIngredientes();
  }

  divideIngredientes() {
    if (this.misingredientes.length % 2 == 0) {
      this.ingredientes[0] = this.misingredientes.slice(0, (this.misingredientes.length / 2));
    }
    else {
      this.ingredientes[0] = this.misingredientes.slice(0, (this.misingredientes.length / 2) + 1);
    }
    this.ingredientes[1] = this.misingredientes.slice(this.ingredientes[0].length, this.misingredientes.length);
  }
}
