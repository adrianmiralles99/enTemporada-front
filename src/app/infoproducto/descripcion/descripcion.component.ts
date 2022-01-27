import { Component, OnInit } from '@angular/core';
import { PRODUCTES } from '../../mock-articulos';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute) { }
  id = this.rutaActiva.snapshot.paramMap.get('id');
  articulos = PRODUCTES.filter(element => element.id == (this.id ?? -1));
  ngOnInit(): void {
  }


}
