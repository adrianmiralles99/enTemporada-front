import { Component, Input, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelos/productos.model';

@Component({
  selector: 'app-datosproducto',
  templateUrl: './datosproducto.component.html',
  styleUrls: ['./datosproducto.component.scss'],

})

export class DatosproductoComponent implements OnInit {
 
  @Input() articulo!: Productos;
  constructor() { }
  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  mesActual = new Date().getMonth();

  ngOnInit(): void { 
  }

}
