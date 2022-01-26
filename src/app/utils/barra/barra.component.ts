import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss']
})
export class BarraComponent implements OnInit {
  @Input() oscura: boolean = false;

  constructor() { }

  sesion = true;
  ngOnInit(): void {
  }

}
