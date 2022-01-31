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
  messig = this.meses[this.mesActual + 1];






  ngOnInit(): void {
  }

  cambiaColor(id: number, letra: string) {
    var element = $("#" + letra + id);
    if (element) {
      var articulo = this.productes.find(element => element.id == id);

      element.children().css("background-color", articulo?.color ?? "");
      element.find(".miimg").prop("src", "../../assets/IMG/Frutas/background/" + articulo?.nombre + ".png");
    }
  }


  quitaColor(id: number, letra: string) {
    var element = $("#" + letra + id);
    if (element) {
      var articulo = this.productes.find(element => element.id == id);

      element.children().css("background-color", "");
      element.find(".miimg").prop("src", "../../assets/IMG/Frutas/basic/" + articulo?.nombre + ".png");
    }
  }

}
