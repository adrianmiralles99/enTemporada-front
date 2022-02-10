import { Component, Input, OnInit } from '@angular/core';
import { Relacionadas } from 'src/app/modelos/relacionadas.model';

@Component({
  selector: 'app-relacionadas',
  templateUrl: './relacionadas.component.html',
  styleUrls: ['./relacionadas.component.scss']
})
export class RelacionadasComponent implements OnInit {

  @Input() recetas?: Relacionadas[];

  constructor() {
  }

  ngOnInit(): void {

  }

}
