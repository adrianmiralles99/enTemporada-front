import { Component, OnInit } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';

import { RecetasService } from 'src/app/servicios/recetas.service';
@Component({
  selector: 'app-indexrecetas',
  templateUrl: './indexrecetas.component.html',
  styleUrls: ['./indexrecetas.component.scss']
})
export class IndexrecetasComponent implements OnInit {

  constructor(private recetasservice: RecetasService) { }

  recetas : Recetas[] = [];

  
  ngOnInit(): void {
    this.getRecetas();
    //this.getRecetaById();
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
  getRecetaById(){
    this.recetasservice.getById(1).subscribe({
      next: (data) => {
        this.recetas = data;
      },
      error: (e) => console.error(e)
    });
  }
  

}
