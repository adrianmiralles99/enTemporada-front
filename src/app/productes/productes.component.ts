import { Component, OnInit } from '@angular/core';
import { Articulo } from '../articulo';
import { ARTICULOS } from '../mock-articulos';


@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.scss']
})
export class ProductesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  articulos = ARTICULOS;

}
