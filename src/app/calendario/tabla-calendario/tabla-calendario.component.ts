import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelos/productos.model';
import { Temporadaprod } from 'src/app/modelos/temporadaprod.model';
import { ProductosService } from 'src/app/servicios/productos.service';
import { TemporadaprodService } from 'src/app/servicios/temporadaprod.service';
@Component({
  selector: 'app-tabla-calendario',
  templateUrl: './tabla-calendario.component.html',
  styleUrls: ['./tabla-calendario.component.scss']
})
export class TablaCalendarioComponent implements OnInit {

  constructor(private productosService: ProductosService, private temporadaprod: TemporadaprodService) { }
  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  frutas: Temporadaprod[] = [];
  verduras: Temporadaprod[] = [];
  help = new Date();
  mesActual = this.help.getMonth();
  mesact = this.meses[this.mesActual];
  messig = this.meses[this.mesActual + 1];
  productes!: Temporadaprod[];

  ngOnInit(): void {
    this.getTemp();

  }
  
  

  

  getTemp(): void {
    this.temporadaprod.getAll()
      .subscribe({
        next: (data) => {
          this.productes = data;
          this.frutas = this.productes.filter(element => element.tipo == "F");
          this.verduras = this.productes.filter(element => element.tipo == "V"); 
          console.log(this.productes);
          console.log(this.frutas);
          
          
        },
        error: (e) => console.error(e)
      });

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
