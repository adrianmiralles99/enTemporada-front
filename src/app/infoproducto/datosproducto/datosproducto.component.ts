import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datosproducto',
  templateUrl: './datosproducto.component.html',
  styleUrls: ['./datosproducto.component.scss']
})
export class DatosproductoComponent implements OnInit {

  constructor() { }
  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

  ngOnInit(): void {
  }

}
