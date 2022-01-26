import { Component, OnInit } from '@angular/core';
import { PRODUCTES } from '../../mock-articulos';
@Component({
  selector: 'app-tabla-calendario',
  templateUrl: './tabla-calendario.component.html',
  styleUrls: ['./tabla-calendario.component.scss']
})
export class TablaCalendarioComponent implements OnInit {

  constructor() { }
  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  frutas = PRODUCTES.filter(element => element.tipo == "F");
  verduras = PRODUCTES.filter(element => element.tipo == "V");
  productes = PRODUCTES;
  help = new Date();
  mesActual = this.help.getMonth();
  mesact = this.meses[this.mesActual]; 

  



  ngOnInit(): void {
  }

  cambiaColor(id: number, letra: string) {
    var element = $("#"+ letra + id);
    if (element) {
      element.children().css("background-color", this.productes.find(element => element.id == id)?.color ?? "");
    }
  }


  quitaColor(id: number , letra: string) {
    var element = $("#"+ letra + id);
    if (element) {
      element.children().css("background-color", "");
    }
  }

}
