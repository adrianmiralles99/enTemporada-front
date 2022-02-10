import { Component, Input, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelos/productos.model';
import { Calendario } from 'src/app/modelos/calendario.model';

import { CalendarioService } from 'src/app/servicios/calendario.service';

@Component({
  selector: 'app-datosproducto',
  templateUrl: './datosproducto.component.html',
  styleUrls: ['./datosproducto.component.scss'],

})

export class DatosproductoComponent implements OnInit {

  @Input() articulo!: Productos;
  calendario!: Calendario[];

  constructor(private calendarioService: CalendarioService) { }
  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

  mesActual = new Date().getMonth();
  mesact = this.meses[this.mesActual];
  messig = this.meses[this.mesActual + 1];
  ngOnInit(): void {
    this.getCalendario();
    if (this.mesact == "Dic") {
      this.messig = this.meses[0];
    }
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

}
