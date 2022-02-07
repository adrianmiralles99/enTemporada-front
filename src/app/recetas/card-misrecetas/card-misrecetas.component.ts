import { Component, OnInit, Input } from '@angular/core';
import { RECETAS } from '../../mock-recetas';

import { Recetas } from 'src/app/modelos/recetas.model';

import { RecetasService } from 'src/app/servicios/recetas.service';
@Component({
  selector: 'app-card-misrecetas',
  templateUrl: './card-misrecetas.component.html',
  styleUrls: ['./card-misrecetas.component.scss']
})
export class CardMisrecetasComponent implements OnInit {
  @Input()usuario:String="";
  
  constructor(private recetasservice: RecetasService) { }
  hover = false;
  recetas : Recetas[] = [];
  rutaimg = "";
  ngOnInit(): void {
  }
  getRecetas(){
    this.recetasservice.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.recetas = data;
      },
      error: (e) => console.error(e)
    });
  }
}
