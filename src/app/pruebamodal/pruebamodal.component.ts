import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-pruebamodal',
  templateUrl: './pruebamodal.component.html',
  styleUrls: ['./pruebamodal.component.scss']
})
export class PruebamodalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PruebamodalComponent>) { }

  ngOnInit(): void {
  }
  actionFunction() {
    alert("You have logged out.");

    this.closeModal();
  }

  // If the user clicks the cancel button a.k.a. the go back button, then\
  // just close the modal
  closeModal() {
    this.dialogRef.close();
  }

}
