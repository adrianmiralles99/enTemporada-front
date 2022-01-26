import { Component, OnInit } from '@angular/core';
import { MenuFooterInt } from 'src/app/menufooter';
import { MenuFooter } from 'src/app/mock-menufooter';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  constructor() { }
  micard: MenuFooterInt = (MenuFooter.filter(element => element.ruta == "/calendario"))[0];

  ngOnInit(): void { }

}
