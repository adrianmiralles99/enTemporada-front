import { Component, Input, OnInit } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';

@Component({
  selector: 'app-detallesrecetas',
  templateUrl: './detallesrecetas.component.html',
  styleUrls: ['./detallesrecetas.component.scss']
})
export class DetallesrecetasComponent implements OnInit {

  ingredientes: Array<Array<String>> = [[]];

  @Input() misingredientes?: string[];
  @Input() receta?: Recetas;

  constructor() { }

  ngOnInit(): void {
    
    this.divideIngredientes();
  }

  // NO SE PORQUE NO VA ESTA CHUCHA
  divideIngredientes() {
    if (this.misingredientes?.length ?? 0 % 2 == 0) {
      this.ingredientes[0] = (this.misingredientes?.slice(0, (this.misingredientes?.length / 2)) ?? []);
    }
    else {
      this.ingredientes[0] = (this.misingredientes?.slice(0, (this.misingredientes?.length / 2 + 1)) ?? []);
    }
    this.ingredientes[1] = (this.misingredientes?.slice(this.ingredientes[0].length, this.misingredientes?.length) ?? []);
    console.log(". ", this.misingredientes);

  }
}
