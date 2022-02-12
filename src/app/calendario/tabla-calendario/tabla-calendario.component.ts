import { Component, Input, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelos/productos.model';
import { ProductosService } from 'src/app/servicios/productos.service';
@Component({
  selector: 'app-tabla-calendario',
  templateUrl: './tabla-calendario.component.html',
  styleUrls: ['./tabla-calendario.component.scss']
})
export class TablaCalendarioComponent implements OnInit {

  constructor() { }

  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  @Input() productes!: Productos[];
  frutas: Productos[] = [];
  verduras: Productos[] = [];
  help = new Date();
  mesActual = this.help.getMonth();
  mesact = this.meses[this.mesActual];
  messig = this.meses[this.mesActual + 1];




  ngOnInit(): void {
    if (this.mesActual == 12) {
      this.messig = this.meses[0];
    }
    this.frutas = this.productes.filter(element => element.tipo == "F");
    this.verduras = this.productes.filter(element => element.tipo == "V");
  }





  cambiaColor(id: number, letra: string) {
    var element = $("#" + letra + id);

    if (element) {
      var articulo = this.productes.find(element => element.id == id);



      element.children().css("background-color", articulo?.color ?? "");
      element.find(".miimg").prop("src", "../../assets/IMG/Articulos/background/" + articulo?.imagen);
      element.find(".T").prop("src", "../../../assets/IMG/iconos/simbolos en temporada/en TemporadaW.png");
      element.find(".F").prop("src", "../../../assets/IMG/iconos/simbolos en temporada/finalW.png");
      element.find(".I").prop("src", "../../../assets/IMG/iconos/simbolos en temporada/inicioW.png");
    }
  }


  quitaColor(id: number, letra: string) {
    var element = $("#" + letra + id);

    if (element) {
      var articulo = this.productes.find(element => element.id == id);

      element.children().css("background-color", "");
      element.find(".miimg").prop("src", "../../assets/IMG/Articulos/basic/" + articulo?.imagen);
      element.find(".T").prop("src", "../../../assets/IMG/iconos/simbolos en temporada/en Temporada.png");
      element.find(".F").prop("src", "../../../assets/IMG/iconos/simbolos en temporada/final.png");
      element.find(".I").prop("src", "../../../assets/IMG/iconos/simbolos en temporada/inicio.png");
    }
  }

}
