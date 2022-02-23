import { Component, Input, OnChanges } from '@angular/core';

import { TokenStorageService } from '../../servicios/token-storage.service';
import { Recetas } from '../../modelos/recetas.model';
import { LikesService } from 'src/app/servicios/likes.service';
import { FavoritosService } from 'src/app/servicios/favoritos.service';
@Component({
  selector: 'app-detallesrecetas',
  templateUrl: './detallesrecetas.component.html',
  styleUrls: ['./detallesrecetas.component.scss']
})
export class DetallesrecetasComponent {

  ingredientes: Array<Array<String>> = [[]];
  like: boolean = false;
  guardado: boolean = false;

  constructor(private token: TokenStorageService, public likeService: LikesService, public favService: FavoritosService) { }

  clicked: boolean = false;
  fav: boolean = false;
  id?: any;
  sesion!: boolean;

  @Input() receta?: Recetas;
  @Input() misingredientes?: string[] = [];

  ngOnInit() {
    if (this.misingredientes) {
      this.divideIngredientes();
    }

    if ((this.id = this.token.getId())) {
      this.sesion = true;
      if (this.receta?.likes?.find(element => element.id_usuario == this.id)) {
        this.clicked = true;
      }
      else {
        this.clicked = false;
      }
      if (this.receta?.favoritos?.find(element => element.id_usuario == this.id)) {
        this.fav = true;
      }
      else {
        this.fav = false;
      }
    }
    else {
      this.sesion = false;
    }

  }

  cambiaLike() {
    if (this.sesion == true) {
      if (this.clicked) {
        // console.log("Lo borramos");
        this.clicked = false;
        this.likeService.delete(this.receta?.id).subscribe({
          next: (data) => {
          }
        });
      }
      else {
        // console.log("Lo creamos");
        this.clicked = true;
        this.likeService.create(this.receta?.id).subscribe({
          next: (data) => {
          }
        });

      }
    }
  }

  cambiaFav() {
    if (this.sesion == true) {
      if (this.fav) {
        // console.log("Lo borramos");
        this.fav = false;
        this.favService.delete(this.receta?.id).subscribe({
          next: (data) => {
          }
        });
      }
      else {
        // console.log("Lo creamos");
        this.fav = true;
        this.favService.create(this.receta?.id).subscribe({
          next: (data) => {

          }
        });

      }
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
