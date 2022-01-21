import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-datosproducto',
  templateUrl: './datosproducto.component.html',
  styleUrls: ['./datosproducto.component.scss']
})
export class DatosproductoComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute) { }
  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  nombre = this.rutaActiva.snapshot.paramMap.get('idproducto');
  ngOnInit(): void {
  }

}
