import { Component, OnInit } from '@angular/core';
import { RECETAS } from '../../mock-recetas';

@Component({
  selector: 'app-card-recetas',
  templateUrl: './card-recetas.component.html',
  styleUrls: ['./card-recetas.component.scss']
})
export class CardRecetasComponent implements OnInit {

  constructor() { }
  recetas = RECETAS;
  
  hover = false;
  
  ngOnInit(): void {
  }

 

}
