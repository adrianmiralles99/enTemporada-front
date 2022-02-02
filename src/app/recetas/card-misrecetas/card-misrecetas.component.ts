import { Component, OnInit } from '@angular/core';
import { RECETAS } from '../../mock-recetas';

@Component({
  selector: 'app-card-misrecetas',
  templateUrl: './card-misrecetas.component.html',
  styleUrls: ['./card-misrecetas.component.scss']
})
export class CardMisrecetasComponent implements OnInit {

  constructor() { }
  recetas = RECETAS;
  
  hover = false;
  ngOnInit(): void {
  }

}
