import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/receta';

@Component({
  selector: 'app-detallesrecetas',
  templateUrl: './detallesrecetas.component.html',
  styleUrls: ['./detallesrecetas.component.scss']
})
export class DetallesrecetasComponent implements OnInit {

  ingredientes: Array<Array<String>> = [];

  @Input() receta!: Receta;

  constructor() {
  }

  ngOnInit(): void {
    this.divideIngredientes();
  }

  divideIngredientes() {
    if (this.receta.ingredientes.length % 2 == 0) {
      this.ingredientes[0] = this.receta.ingredientes.slice(0, (this.receta.ingredientes.length / 2));
    }
    else {
      this.ingredientes[0] = this.receta.ingredientes.slice(0, (this.receta.ingredientes.length / 2) + 1);
    }
    this.ingredientes[1] = this.receta.ingredientes.slice(this.ingredientes[0].length, this.receta.ingredientes.length);
  }
}
