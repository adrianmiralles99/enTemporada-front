import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from 'src/app/servicios/recetas.service';
import { Recetas } from 'src/app/modelos/recetas.model';

@Component({
  selector: 'app-indexrecetaind',
  templateUrl: './indexrecetaind.component.html',
  styleUrls: ['./indexrecetaind.component.scss']
})
export class IndexrecetaindComponent implements OnInit {

  constructor(private recetasService: RecetasService, private rutaActiva: ActivatedRoute) { }

  id = this.rutaActiva.snapshot.paramMap.get('id');
  recetaid = Number(this.rutaActiva.snapshot.paramMap.get('id'));
  receta?: Recetas;
  ingredientes?: string[];
  pasos?: string[];
  getReceta(): void {
    this.recetasService.getById(this.id)
      .subscribe({
        next: (data) => {
          this.receta = data;
          this.ingredientes = this.receta?.ingredientes;
          this.pasos = this.receta?.pasos;
          console.log(data);

        },
        error: (e) => console.error(e)
      })
  }

  ngOnInit(): void {
    this.getReceta();
  }

}


