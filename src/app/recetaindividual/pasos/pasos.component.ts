import { Component, Input, OnInit } from '@angular/core';
import { RECETAS } from 'src/app/mock-recetas';
@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.scss']
})
export class PasosComponent implements OnInit {


  @Input() pasos?: string = ""
  mispasos: Array<Array<String>> = [[]];
  mitad: number = 0;
  constructor() { }


  ngOnInit(): void {
    // this.divideIngredientes();
  }

  // divideIngredientes() {
  //   if (this.pasos.length % 2 == 0) {
  //     this.mitad = this.pasos.length / 2
  //   }
  //   else {
  //     this.mitad = (this.pasos.length / 2) + 1;
  //   }
  //   console.log(this.pasos);

  // }
}
