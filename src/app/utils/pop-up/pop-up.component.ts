import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  firstName: string = "";
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.firstName = data.name;
  }

  ngOnInit(): void {
  }

}

