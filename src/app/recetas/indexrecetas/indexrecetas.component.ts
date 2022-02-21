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
  recetas!: Recetas[];
  titulo: string = "Recetas en Temporada";
  cantidad?: number;

  ngOnInit(): void {
    this.getRecetas();
  }

  getRecetas() {
    this.recetasservice.getAll().subscribe({
      next: (data) => {
        this.recetas = data;
        this.cantidad = this.recetas.length
      },
      error: (e) => console.error(e)
    });
  }
  getRecetaTipo(tipo:string){
    
  }

}
