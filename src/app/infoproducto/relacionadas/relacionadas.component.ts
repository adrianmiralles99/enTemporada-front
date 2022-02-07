import { Component, OnInit } from '@angular/core';
import { RECETAS } from '../../mock-recetas';

@Component({
  selector: 'app-relacionadas',
  templateUrl: './relacionadas.component.html',
  styleUrls: ['./relacionadas.component.scss']
})
export class RelacionadasComponent implements OnInit {
  
  recetas = RECETAS;

  constructor() { }

  ngOnInit(): void {
    this.recetas.splice(3, this.recetas.length);
  }

}
