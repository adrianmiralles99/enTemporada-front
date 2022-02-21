import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indexmisrecetas',
  templateUrl: './indexmisrecetas.component.html',
  styleUrls: ['./indexmisrecetas.component.scss']
})
export class IndexmisrecetasComponent implements OnInit {

  constructor() { }

  titulo?: string = "Mis recetas"

  ngOnInit(): void {
  }

}
