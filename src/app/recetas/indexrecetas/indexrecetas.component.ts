import { Component, OnInit } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';
import { RecetasService } from 'src/app/servicios/recetas.service';
@Component({
  selector: 'app-indexrecetas',
  templateUrl: './indexrecetas.component.html',
  styleUrls: ['./indexrecetas.component.scss'],
  providers: [RecetasService]
})
export class IndexrecetasComponent implements OnInit {


  constructor(private recetasservice: RecetasService) { }
  tipo?: string;
  recetas?: Recetas[];
  titulo: string = "Recetas en Temporada";
  cantidad?: number;
  sort?: string;
  buscando = false;

  ngOnInit(): void {
    this.getRecetas();
  }

  getRecetas() {
    this.buscando = false;
    this.recetasservice.getAll().subscribe({
      next: (data) => {
        this.buscando = true;
        this.recetas = data;
        this.cantidad = this.recetas.length
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  filtrar() {
    this.buscando = false;
    if (this.sort == "relevancia") {
      this.recetas?.sort((a, b) => a.totallikes!.total + b.totallikes!.total);
      this.cantidad = this.recetas?.length;
      this.buscando = true;
    }
    else if (this.sort == "fecha") {

      this.recetasservice.getByTipo(null, "a").subscribe({
        next: (data) => {
          this.buscando = true;
          this.recetas = data;
          this.cantidad = this.recetas?.length;
        }
      })
    }
  }

  filtrarTipo() {
    this.buscando = false;
    this.recetasservice.getByTipo(this.sort, null).subscribe({
      next: (data) => {
        this.recetas = data;
        this.cantidad = this.recetas?.length;
        this.buscando = true;
      }
    })
  }


}
