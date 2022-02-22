import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { Recetas } from 'src/app/modelos/recetas.model';
import { RecetasService } from 'src/app/servicios/recetas.service';
@Component({
  selector: 'app-indexmisrecetas',
  templateUrl: './indexmisrecetas.component.html',
  styleUrls: ['./indexmisrecetas.component.scss']
})
export class IndexmisrecetasComponent implements OnInit {

  constructor(private token: TokenStorageService, private recetasService: RecetasService) { }

  titulo?: string = "Mis recetas"
  recetas?: Recetas[];
  cantidad?: number;

  ngOnInit(): void {
    this.GetrecetasById();
  }

  GetrecetasById() {
    this.recetasService.getMias().subscribe({
      next: (data) => {
        this.recetas = (data);
        this.cantidad = data.length;
      },
      error: (e) => console.error(e)
    });
  }

}
