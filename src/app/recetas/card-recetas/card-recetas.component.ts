import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Favoritos } from 'src/app/modelos/favoritos.model';
import { Recetas } from 'src/app/modelos/recetas.model';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { PopUpComponent } from 'src/app/utils/login/pop-up.component';
@Component({
  selector: 'app-card-recetas',
  templateUrl: './card-recetas.component.html',
  styleUrls: ['./card-recetas.component.scss'],
  providers: [TokenStorageService]
})
export class CardRecetasComponent implements OnInit {

  constructor(private token: TokenStorageService, public dialogRef: MatDialog) { }

  @Input() recetas?: Recetas[];
  hover = false;

  sesion!: boolean;
  ngOnInit(): void {
    if (this.token.getId()) {
      this.sesion = true;
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

  

}
