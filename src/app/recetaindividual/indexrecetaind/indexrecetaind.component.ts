import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from 'src/app/servicios/recetas.service';
import { Recetas } from 'src/app/modelos/recetas.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-indexrecetaind',
  templateUrl: './indexrecetaind.component.html',
  styleUrls: ['./indexrecetaind.component.scss']
})
export class IndexrecetaindComponent implements OnInit {

  constructor(private token: TokenStorageService,private usservice: UsuarioService,private recetasService: RecetasService, private rutaActiva: ActivatedRoute) { }

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

        },
        error: (e) => console.error(e)
      })
  }

  ngOnInit(): void {
    this.getReceta();
    if(this.token.getId()){
      this.usservice.ultimareceta(this.receta?.id as number);
    }else{
      console.log("No va");
      
    }
  }

}


