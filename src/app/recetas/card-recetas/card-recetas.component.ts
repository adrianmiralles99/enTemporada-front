import { Component, OnInit, Input } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';

@Component({
  selector: 'app-card-recetas',
  templateUrl: './card-recetas.component.html',
  styleUrls: ['./card-recetas.component.scss']
})
export class CardRecetasComponent implements OnInit {
  @Input() recetas!: Recetas[];

  constructor() { }


  hover = false;

  ngOnInit(): void { }



}
