import { Component, OnInit, Input } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';
import { RecetasService } from 'src/app/servicios/recetas.service';

@Component({
  selector: 'app-indexguardadas',
  templateUrl: './indexguardadas.component.html',
  styleUrls: ['./indexguardadas.component.scss'],
  providers: [RecetasService]
})
export class IndexguardadasComponent implements OnInit {
  constructor(private recetas: RecetasService) { }
  titulo?: string = "Recetas guardadas"
  guardadas!: Recetas[]
  cantidad?: number;

  ngOnInit(): void {
    this.misRecetas();
  }
  misRecetas() {
    this.recetas.getFav().subscribe({
      next: (data) => {
        this.guardadas = data;
        this.cantidad = this.guardadas.length;
      },
      error: (e) => console.error(e)
    });
  }
}
