import { Component, Input, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { Recetas } from 'src/app/modelos/recetas.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  @Input() usuario!: Usuarios;
  @Input() ultimareceta?: Recetas;
  @Input() recetapopular?: Recetas;

  constructor() { }

  ngOnInit(): void {
  }




}
