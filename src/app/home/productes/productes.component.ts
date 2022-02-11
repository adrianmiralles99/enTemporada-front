import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelos/productos.model';
import { Calendario } from 'src/app/modelos/calendario.model';
import { ProductosService } from 'src/app/servicios/productos.service';
@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.scss']
})


export class ProductesComponent implements OnInit {

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.getProductes();
    if (this.mesActualNumero == 12) {
      this.mesActualNumero = 1;
    }
  }


  productes: Productos[] = [];
  frutas: Productos[] = [];

  verduras: Productos[] = [];
  calendario!: Calendario[];

  pruebacalendario !: Calendario[];

  meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  mes = ["E", "F", "Mr", "Ab", "My", "Jn", "Jl", "Ag", "Sp", "O", "N", "D"];
  mesActual = this.meses[new Date().getMonth()];
  mesActualNumero = new Date().getMonth() + 1;


  getProductes(): void {
    this.productosService.getCalendario()
      .subscribe({
        next: (data) => {
          this.productes = data;
          this.frutas = this.productes.filter(element => element.tipo == "F");

          this.verduras = this.productes.filter(element => element.tipo == "V");
        },
        error: (e) => console.error(e)
      });

  }


  getTemporada(id: number): boolean {
    let esta = true;
    if (this.calendario) {
      this.pruebacalendario = this.calendario.filter(element => element.id_prod == id);
      this.pruebacalendario = this.pruebacalendario.filter(element => element.mes == this.mesActualNumero);
      if (this.pruebacalendario[0].estado == "N") {
        esta = false;
      }
    }
    return esta;
  }

  cambiaColor(id: number): void {
    var element = $("#" + id);
    if (element) {
      var articulo = this.productes.find(element => element.id == id);
      element.children().css("background-color", articulo?.color ?? "");
      element.find(".card-img-top").prop("src", "../../assets/IMG/Articulos/background/" + articulo?.imagen);
    }
  }

  quitaColor(id: number): void {
    var element = $("#" + id);
    var articulo = this.productes.find(element => element.id == id);

    if (element) {
      element.children().css("background-color", "");
      element.find(".card-img-top").prop("src", "../../assets/IMG/Articulos/basic/" + articulo?.imagen);
    }
  }

}
