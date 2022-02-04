import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Articulo } from 'src/app/articulo';

@Component({
  selector: 'app-datosproducto',
  templateUrl: './datosproducto.component.html',
  styleUrls: ['./datosproducto.component.scss'],

})

export class DatosproductoComponent implements OnInit {
  constructor(private rutaActiva: ActivatedRoute) { }
  @Input() articulo!: Articulo;
  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  id = this.rutaActiva.snapshot.paramMap.get('id');
  help = new Date();
  mesActual = this.help.getMonth();
  
  ngOnInit(): void { }

}
