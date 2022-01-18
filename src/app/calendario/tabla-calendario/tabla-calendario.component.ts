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
  d = new Date();
  mes = this.d.getMonth()+2;
  
  hoverF = [false];
  hoverV = [false];

  ngOnInit(): void {
    for (let i = 0; i < 12; i++) {
      this.hoverF[i] = false;
      this.hoverV[i] = false;
      
    }
  }

  cambiarColor(indice: number, color: string) {
    // document.getElementById(aux)?.style.backgroundColor = color;
  }
}
