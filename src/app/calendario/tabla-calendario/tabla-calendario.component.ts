import { Component, OnInit } from '@angular/core';
import { FRUTAS } from '../../mock-articulos';
import { VERDURAS } from '../../mock-articulos';

@Component({
  selector: 'app-tabla-calendario',
  templateUrl: './tabla-calendario.component.html',
  styleUrls: ['./tabla-calendario.component.scss']
})
export class TablaCalendarioComponent implements OnInit {

  constructor() { }
  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  frutas = FRUTAS;
  verduras = VERDURAS;
  mes = 5;

  ngOnInit(): void {
  }

  mouseEnter() {
    console.log(this);
    
    // this.style.backgroundColor = "red";
  }
}
