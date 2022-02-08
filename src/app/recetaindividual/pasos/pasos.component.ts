import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { RECETAS } from 'src/app/mock-recetas';
@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.scss']
})
export class PasosComponent implements OnInit {

  @Input() pasos: string[] = [];
  mispasos: Array<Array<String>> = [[]];
  mitad: number = 0;
  constructor() { }


  ngOnInit(): void {
    // this.divideIngredientes();
  }
  

}
