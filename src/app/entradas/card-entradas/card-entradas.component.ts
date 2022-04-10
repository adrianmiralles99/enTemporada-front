import { Component, OnInit, Input } from '@angular/core';
import { Entradas } from 'src/app/modelos/entradas.model';
import { MatDialog } from '@angular/material/dialog';
import { FavoritosEntradaService } from 'src/app/servicios/favoritos-entrada.service';
import { LikesEntradaService } from 'src/app/servicios/likes-entrada.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { PopUpComponent } from 'src/app/utils/login/pop-up.component';

@Component({
  selector: 'app-card-entradas',
  templateUrl: './card-entradas.component.html',
  styleUrls: ['./card-entradas.component.scss']
})
export class CardEntradasComponent implements OnInit {
  @Input() entradas?: Entradas[];
  @Input() filterPost?: string;
  id?: any;

  hover = false;
  sesion!: boolean;
  clicked: Array<boolean> = [];
  fav: Array<boolean> = [];
  constructor(private token: TokenStorageService, public dialogRef: MatDialog, public likeService: LikesEntradaService, public favService: FavoritosEntradaService) { }

  ngOnInit(): void {
    if ((this.id = this.token.getId()) && this.entradas) {
      this.sesion = true;
      for (let i = 0; i < this.entradas.length; i++) {
        this.boolLike(this.entradas[i].id)
        this.boolLikeFav(this.entradas[i].id)
      }

    } else {
      this.sesion = false;
    }
  }
  ngOnChanges(): void {
    //console.log("Post -> " + this.filterPost);
  }
  cambiaLike(id: number) {

    if (this.sesion == true) {
      if (this.clicked[id]) {
        // console.log("Lo borramos");
        this.clicked[id] = false;
        this.likeService.delete(id).subscribe({
          next: (data) => {
            console.log(data);
          }
        });
      }
      else {
        // console.log("Lo creamos");
        this.clicked[id] = true;
        this.likeService.create(id).subscribe({
          next: (data) => {

          }
        });

      }
    }
    window.location.reload();

  }

  cambiaFav(id: number) {
    if (this.sesion == true) {
      if (this.fav[id]) {
        // console.log("Lo borramos");
        this.fav[id] = false;
        this.favService.delete(id).subscribe({
          next: (data) => {
            // console.log(data);
          }
        });
      }
      else {
        // console.log("Lo creamos");
        this.fav[id] = true;
        this.favService.create(id).subscribe({
          next: (data) => {

          }
        });

      }
    }

  }

  openDialog() {
    this.dialogRef.open(PopUpComponent, {
      position: { top: "100px" },
      panelClass: 'custom-modalbox',
      backdropClass: 'fondo'
    });
  }


  boolLike(id: number) {
    var aux = this.entradas?.find(element => element.id == id)?.likes?.find(element => element.id_usuario == this.id);
    if (aux) {
      this.clicked[id] = true;
    }
    else {
      this.clicked[id] = false;
    }
  }

  boolLikeFav(id: number) {
    var aux = this.entradas?.find(element => element.id == id)?.favoritos?.find(element => element.id_usuario == this.id);
    if (aux) {
      this.fav[id] = true;
    }
    else {
      this.fav[id] = false;
    }
  }

}
