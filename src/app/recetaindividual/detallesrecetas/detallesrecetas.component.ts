import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RECETAS } from '../../mock-recetas';

@Component({
  selector: 'app-detallesrecetas',
  templateUrl: './detallesrecetas.component.html',
  styleUrls: ['./detallesrecetas.component.scss']
})
export class DetallesrecetasComponent implements OnInit {

  ingredientes: Array<Array<String>> = [];
  id = this.rutaActiva.snapshot.paramMap.get('id');
  receta = RECETAS.filter(element => element.id == (this.id ?? -1))[0];

  constructor(private rutaActiva: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.divideIngredientes();
  }

  divideIngredientes() {
    console.log(this.receta.ingredientes[0]);
    if (this.receta.ingredientes.length % 2 == 0) {
      this.ingredientes[0] = this.receta.ingredientes.slice(0, (this.receta.ingredientes.length / 2));
    }
    else {
      this.ingredientes[0] = this.receta.ingredientes.slice(0, (this.receta.ingredientes.length / 2) + 1);
    }
    this.ingredientes[1] = this.receta.ingredientes.slice(this.ingredientes[0].length, this.receta.ingredientes.length);
  }
}
