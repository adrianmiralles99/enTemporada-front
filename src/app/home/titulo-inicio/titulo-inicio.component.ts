import { Component, OnInit } from '@angular/core';
  //prueba
  import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
  import { PruebamodalComponent } from '../../pruebamodal/pruebamodal.component';
@Component({
  selector: 'app-titulo-inicio',
  templateUrl: './titulo-inicio.component.html',
  styleUrls: ['./titulo-inicio.component.scss']
})
export class TituloInicioComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "450px";
    dialogConfig.width = "800px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(PruebamodalComponent, dialogConfig);
  }


}
