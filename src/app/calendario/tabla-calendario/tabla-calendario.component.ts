import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelos/productos.model';
import { Calendario } from 'src/app/modelos/calendario.model';
import { ProductosService } from 'src/app/servicios/productos.service';
import { CalendarioService } from 'src/app/servicios/calendario.service';
@Component({
  selector: 'app-tabla-calendario',
  templateUrl: './tabla-calendario.component.html',
  styleUrls: ['./tabla-calendario.component.scss']
})
export class TablaCalendarioComponent implements OnInit {

  constructor(private productosService: ProductosService, private calendarioService: CalendarioService) { }
  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  calendario!: Calendario[];
  productes!: Productos[];
  frutas: Productos[] = [];
  verduras: Productos[] = [];
  help = new Date();
  mesActual = this.help.getMonth();
  mesact = this.meses[this.mesActual];
  messig = this.meses[this.mesActual + 1];

  ngOnInit(): void {
    this.getProductos();
    this.getCalendario();

  }


  getProductos() {
    this.productosService.getAll().subscribe({
      next: (data) => {
        this.productes = data;
        this.frutas = this.productes.filter(element => element.tipo == "F");
        this.verduras = this.productes.filter(element => element.tipo == "V");
      }
    })
  }

  getCalendario() {
    this.calendarioService.getAll().subscribe({
      next: (data) => {
        this.calendario = data;
        console.log(data);


      }
    })
  }


  getMes(id: number): Calendario[] {
    return this.calendario.filter(element => element.id == id);
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
