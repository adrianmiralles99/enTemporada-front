import { Component, OnInit,Input } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';


@Component({
  selector: 'app-botoneditar',
  templateUrl: './botoneditar.component.html',
  styleUrls: ['./botoneditar.component.scss']
})
export class BotoneditarComponent implements OnInit {
  @Input() recetaid!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
