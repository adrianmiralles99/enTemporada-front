import { Component, Input, OnChanges } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';

@Component({
  selector: 'app-detallesrecetas',
  templateUrl: './detallesrecetas.component.html',
  styleUrls: ['./detallesrecetas.component.scss']
})
export class DetallesrecetasComponent {

  ingredientes: Array<Array<String>> = [[]];

  constructor() { }

  @Input() receta?: Recetas;
  @Input() misingredientes?: string[] = [];

  ngOnChanges(): void {
    if (this.misingredientes) {
      this.divideIngredientes();
      console.log("aqui");
      
    }
  }

  divideIngredientes() {
    if (this.misingredientes) {

      if (this.misingredientes.length % 2 == 0) {

        this.ingredientes[0] = (this.misingredientes?.slice(0, (this.misingredientes?.length / 2)));
      }
      else {
        this.ingredientes[0] = (this.misingredientes?.slice(0, (this.misingredientes?.length / 2) + 1));
      }
      this.ingredientes[1] = (this.misingredientes?.slice(this.ingredientes[0].length, this.misingredientes?.length));

    }

  }


}
