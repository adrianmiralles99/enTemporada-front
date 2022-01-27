import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';


@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss']
})
export class BarraComponent implements OnInit {
  @Input() oscura: boolean = false;

  constructor(public dialogRef: MatDialog) { }

  openDialog() {
    
    this.dialogRef.open(PopUpComponent, {
      data: {
        name: "Carlos"
      }
    });
  }


  sesion = false;
  ngOnInit(): void {
  }

}
