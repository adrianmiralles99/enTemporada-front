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
  receta?: Recetas;
  arrayRec!: string[];
  pasos!: string[];

  getReceta(): void {
    this.recetasService.getById(this.id)
      .subscribe({
        next: (data) => {
          this.receta = data;
          this.arrayRec = this.receta!.ingredientes!.split('*|*');
          this.pasos = this.receta!.pasos!.split('*|*');

          console.log(this.receta);
        },
        error: (e) => console.error(e)
      })

  }

  // pasos = [
  //   "Cocemos la quinoa según la información del fabricante.",
  //   "Lavamos y troceamos las hojas de kale o de espinacas.",
  //   "Frotamos las hojas con unas gotas de limón, aceite de oliva extra virgen y sal.",
  //   "Introducimos los granos en un bol con agua y retiramos las pieles blancas que flotan con un colador.",
  //   "Lavamos las ramas de apio y las cortamos en rodajitas.",
  //   "Troceamos las frambuesas y los arándanos.",
  //   "En un frasco colocamos el zumo de limón, la mostaza, sal, pimienta y aceite de oliva extra virgen. Tapamos y agitamos hasta que se forme una vinagreta.",
  //   "Reservamos un par de cucharadas de granada, frutos rojos y almendras para después y mezclamos el resto de los ingredientes en un bol.",
  //   "Aliñamos con la vinagreta y servimos.",
  //   "Para terminar, adornamos con el resto de granada, frutos rojos y almendras.",
  // ];

  ngOnInit(): void {
    this.getReceta();
  }

}


