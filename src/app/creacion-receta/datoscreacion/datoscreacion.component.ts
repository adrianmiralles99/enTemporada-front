import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datoscreacion',
  templateUrl: './datoscreacion.component.html',
  styleUrls: ['./datoscreacion.component.scss']
})
export class DatoscreacionComponent implements OnInit {

  constructor() { }

  ingredientes = ["4 Manzanas", "300g de harina", "3 Peras", "4 vasos de agua", "4 maracatones", "Macarrones con queso"]

  ngOnInit(): void {

  }


}
