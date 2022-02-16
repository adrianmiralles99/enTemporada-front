import { Component, OnInit, Input } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';
import { RecetasService } from 'src/app/servicios/recetas.service';
@Component({
  selector: 'app-indexedicion',
  templateUrl: './indexedicion.component.html',
  styleUrls: ['./indexedicion.component.scss']
})

export class IndexedicionComponent implements OnInit {


  constructor(private recetasservice: RecetasService) { }

  recetas!: Recetas[];

  ngOnInit(): void {
    this.getRecetas();
  }

  getRecetas() {
    this.recetasservice.getById(1).subscribe({
      next: (data) => {
        console.log(data);
        this.recetas = data;
      },
      error: (e) => console.error(e)
    });
  }

}
