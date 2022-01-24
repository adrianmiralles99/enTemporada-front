import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PRODUCTES } from '../../mock-articulos';

@Component({
  selector: 'app-datosproducto',
  templateUrl: './datosproducto.component.html',
  styleUrls: ['./datosproducto.component.scss'],
  
})

export class DatosproductoComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute) { }
  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  id = this.rutaActiva.snapshot.paramMap.get('id');
  articulos = PRODUCTES.filter(element => element.id == (this.id ?? -1));
  
  ngOnInit(): void {
    console.log(this.articulos);

  }

}
