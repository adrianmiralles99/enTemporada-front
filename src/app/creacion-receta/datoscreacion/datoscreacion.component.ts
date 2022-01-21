import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datoscreacion',
  templateUrl: './datoscreacion.component.html',
  styleUrls: ['./datoscreacion.component.scss']
})
export class DatoscreacionComponent implements OnInit {

  constructor() { }

  // INGREDIENTES SE COGERÁ DE LA BASE DE DATOS, ESTA VARIABLE NO EXISTIRÁ
  ingredientes = ["4 Manzanas grandes", "2 huevos M", "250 ml. de leche entera", "250 g. de azúcar ", "120 g. de harina de trigo de todo uso", "1 plancha de masa quebrada",
    "50 g. de mermelada de melocotón o albaricoque", "1 cda. de agua", "Molde desmoldable 18cm"];

  ingredientes1 = [""];
  ingredientes2 = [""];

  ngOnInit(): void {
    if (this.ingredientes.length % 2 == 0) {
      this.ingredientes1 = this.ingredientes.splice(0, (this.ingredientes.length / 2));
    }
    else {
      this.ingredientes1 = this.ingredientes.splice(0, (this.ingredientes.length / 2) + 1);
    }

    this.ingredientes2 = this.ingredientes.splice(0, this.ingredientes.length);


  }


}
