import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';


@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss']
})
export class BarraComponent implements OnInit {
  @Input() color: string = "";

  constructor(public dialogRef: MatDialog) { }

  openDialog() {

    const dialog = this.dialogRef.open(PopUpComponent, {
      position: { top: "100px" },
      width: "40%",
      maxWidth: "1000px",
      panelClass: 'custom-modalbox',
      backdropClass: 'fondo'
    });


  }


  sesion = true;
  ngOnInit(): void {
  }

}
