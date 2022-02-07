import { Component, OnInit, Input } from '@angular/core';
import { RECETAS } from '../../mock-recetas';
@Component({
  selector: 'app-card-misrecetas',
  templateUrl: './card-misrecetas.component.html',
  styleUrls: ['./card-misrecetas.component.scss']
})
export class CardMisrecetasComponent implements OnInit {
  @Input()usuario:String="";
  constructor() { }
  recetas = RECETAS;
  misrecetas = RECETAS.filter(element => element.autor==this.usuario);//con string si va, con variable no
  hover = false;
  ngOnInit(): void {
    console.log(this.usuario === "adrimigo");
  }

}
