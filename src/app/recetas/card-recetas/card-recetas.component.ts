import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Recetas } from 'src/app/modelos/recetas.model';
import { FavoritosService } from 'src/app/servicios/favoritos.service';
import { LikesSevice } from 'src/app/servicios/likes.service';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { PopUpComponent } from 'src/app/utils/login/pop-up.component';
@Component({
  selector: 'app-card-recetas',
  templateUrl: './card-recetas.component.html',
  styleUrls: ['./card-recetas.component.scss'],
  providers: [TokenStorageService]
})
export class CardRecetasComponent implements OnInit {

  constructor(private token: TokenStorageService, public dialogRef: MatDialog, public likeService: LikesSevice, public favService: FavoritosService) { }

  @Input() recetas?: Recetas[];
  hover = false;
  id?: any;
  sesion!: boolean;
  cont = 0;
  clicked: Array<boolean> = [];
  fav: Array<boolean> = [];

  ngOnInit(): void {
    if ((this.id = this.token.getId()) && this.recetas) {
      this.sesion = true;
      for (let i = 0; i < this.recetas.length; i++) {
        this.boolLike(this.recetas[i].id)
      }

    } else {
      this.sesion = false;
    }
  }


  openDialog() {
    this.dialogRef.open(PopUpComponent, {
      position: { top: "100px" },
      panelClass: 'custom-modalbox',
      backdropClass: 'fondo'
    });
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


  boolLike(id: number) {
    var aux = this.recetas?.find(element => element.id == id)?.likes?.find(element => element.id_usuario == this.id);
    if (aux) {
      this.clicked[id] = true;
      this.fav[id] = true;
    }
    else {
      this.clicked[id] = false;
      this.fav[id] = false;

    }
  }



}
