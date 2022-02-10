import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelos/productos.model';
import { Calendario } from 'src/app/modelos/calendario.model';
import { ProductosService } from 'src/app/servicios/productos.service';
import { CalendarioService } from 'src/app/servicios/calendario.service';
@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.scss']
})


export class ProductesComponent implements OnInit {

  constructor(private productosService: ProductosService, private calendarioService: CalendarioService) { }

  ngOnInit(): void {
    this.getProductes();
    this.getCalendario();
  }


  productes: Productos[] = [];
  frutas: Productos[] = [];
  verduras: Productos[] = [];
  calendario!: Calendario[];


  meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  mes = ["E", "F", "Mr", "Ab", "My", "Jn", "Jl", "Ag", "Sp", "O", "N", "D"];
  mesActual = this.meses[new Date().getMonth()];



  getProductes(): void {
    this.productosService.getCard()
      .subscribe({
        next: (data) => {
          this.productes = data;
          this.frutas = this.productes.filter(element => element.tipo == "F");
          this.verduras = this.productes.filter(element => element.tipo == "V");

        },
        error: (e) => console.error(e)
      });

  }

  getCalendario() {
    this.calendarioService.getAll().subscribe({
      next: (data) => {
        this.calendario = data;

      }
    })
  }


  getMes(id: number): Calendario[] {
    if (this.calendario) {
      return this.calendario.filter(element => element.id_prod == id);
    }
    else {
      return [];
    }
  }


  cambiaColor(id: number): void {
    var element = $("#" + id);
    var tipo = "Frutas";
    if (element) {
      var articulo = this.productes.find(element => element.id == id);
      element.children().css("background-color", articulo?.color ?? "");
      if (articulo?.tipo == "V") {
        tipo = "Verduras"
      }

      element.find(".card-img-top").prop("src", "../../assets/IMG/" + tipo + "/background/" + articulo?.nombre + ".png");
    }
  }

  quitaColor(id: number): void {
    var element = $("#" + id);
    var articulo = this.productes.find(element => element.id == id);
    var tipo = "Frutas";

    if (element) {
      if (articulo?.tipo == "V") {
        tipo = "Verduras"
      }

      element.children().css("background-color", "");
      element.find(".card-img-top").prop("src", "../../assets/IMG/" + tipo + "/basic/" + articulo?.nombre + ".png");
    }
  }

}
