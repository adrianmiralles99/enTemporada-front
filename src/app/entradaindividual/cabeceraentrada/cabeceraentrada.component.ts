import { Component, OnInit, Input } from '@angular/core';
import { Entradas } from 'src/app/modelos/entradas.model';
import { FavoritosEntradaService } from 'src/app/servicios/favoritos-entrada.service';
import { LikesEntradaService } from 'src/app/servicios/likes-entrada.service';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-cabeceraentrada',
  templateUrl: './cabeceraentrada.component.html',
  styleUrls: ['./cabeceraentrada.component.scss']
})
export class CabeceraentradaComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,private token: TokenStorageService, public likeService: LikesEntradaService, public favService: FavoritosEntradaService) { }
  @Input() entrada?: Entradas;
  id?: any;
  hover = false;
  sesion!: boolean;
  clicked!: boolean;
  fav!: boolean;
  ngOnInit(): void {
    console.log(this.entrada);
    if ((this.id = this.token.getId()) && this.entrada) {
      this.sesion = true;
        this.boolLike();
        this.boolLikeFav();
    } else {
      this.sesion = false;
    }
  }
  getFechabonita(fecha: Date): string{
    let fechabien = fecha.toString();
    let fechacool = fechabien.replace(" ", ", ")
    return fechacool;
  }
  cambiaLike(id: number) {
    if (this.sesion == true) {
      if (this.clicked) {
        // console.log("Lo borramos");
        this.clicked= false;
        this.likeService.delete(id).subscribe({
          next: (data) => {
           // console.log(data);
          }
        });
      }
      else {
        // console.log("Lo creamos");
        this.clicked= true;
        this.likeService.create(id).subscribe({
          next: (data) => {

          }
        });
      }
      window.location.reload();
    }else{
      let miSnackBar = this.snackBar.open("Para poder dar like a una entrada debe iniciar sesión", "Aceptar", { panelClass: 'alertsad' });
      miSnackBar.onAction().subscribe(() => {
      });
    }
  }
  cambiaFav(id: number) {
    if (this.sesion == true) {
      if (this.fav) {
        // console.log("Lo borramos");
        this.fav = false;
        this.favService.delete(id).subscribe({
          next: (data) => {
            // console.log(data);
          }
        });
      }
      else {
        // console.log("Lo creamos");
        this.fav= true;
        this.favService.create(id).subscribe({
          next: (data) => {
          }
        });
      }
    }
    else{
      let miSnackBar = this.snackBar.open("Para poder guardar una entrada debe iniciar sesión", "Aceptar", { panelClass: 'alertsad' });
      miSnackBar.onAction().subscribe(() => {
      });
    }

  }
  boolLike() {
    //console.log(this.entrada?.likes?.find(element => element.id_usuario));
    if (this.entrada?.likes?.find(element => element.id_usuario == this.id)) {
      this.clicked = true;
    }
    else {
      this.clicked = false;
    }
  }

  boolLikeFav() {
    if (this.entrada?.favoritos?.find(element => element.id_usuario == this.id)) {
      this.fav = true;
    }
    else {
      this.fav = false;
    }
  }

}
