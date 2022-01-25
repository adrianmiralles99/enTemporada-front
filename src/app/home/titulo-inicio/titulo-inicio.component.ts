import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-titulo-inicio',
  templateUrl: './titulo-inicio.component.html',
  styleUrls: ['./titulo-inicio.component.scss']
})
export class TituloInicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  bajar(){
    document.getElementById("productos")?.scrollIntoView({behavior: "smooth"})
  }
}
