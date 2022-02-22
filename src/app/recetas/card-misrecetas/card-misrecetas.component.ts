import { Component, OnInit, Input } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';
@Component({
  selector: 'app-card-misrecetas',
  templateUrl: './card-misrecetas.component.html',
  styleUrls: ['./card-misrecetas.component.scss']
})
export class CardMisrecetasComponent implements OnInit {
  @Input()nick?:String;
  @Input()imagen?:String;

  @Input()recetas?:Recetas[];

  constructor() { }
  // recetas = RECETAS;
  // misrecetas = RECETAS.filter(element => element.autor==this.usuario);//con string si va, con variable no
  hover = false;
  ngOnInit(): void {
    console.log(this.recetas);
  }
  ngOnChanges(){
    console.log(this.imagen);

  }

}
