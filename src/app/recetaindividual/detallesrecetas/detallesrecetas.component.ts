import { Component, Input, OnChanges } from '@angular/core';

import { TokenStorageService } from '../../servicios/token-storage.service';
import { Recetas } from '../../modelos/recetas.model';
@Component({
  selector: 'app-detallesrecetas',
  templateUrl: './detallesrecetas.component.html',
  styleUrls: ['./detallesrecetas.component.scss']
})
export class DetallesrecetasComponent {

  ingredientes: Array<Array<String>> = [[]];
  like: boolean = false;
  guardado: boolean = false;

  constructor(private token: TokenStorageService) { }

  @Input() receta?: Recetas;
  @Input() misingredientes?: string[] = [];

  ngOnInit(){
   // this.like= true;
  }
  ngOnChanges(): void {
    
    if (this.misingredientes) {
      this.divideIngredientes();
    }
  }
  likedelete(){
    if(this.token.getId()){

    }
  }
  likeset(){
    if(this.token.getId()){
      
    }
  }
  guardadodelete(){
    if(this.token.getId()){
      
    }
  }
  guardadoset(){
    if(this.token.getId()){
      
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
