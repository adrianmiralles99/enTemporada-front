import { Component, OnInit } from '@angular/core';
import { MenuFooterInt } from 'src/app/menufooter';
import { MenuFooter } from 'src/app/mock-menufooter';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.scss']
})
export class IndiceComponent implements OnInit {

  constructor() { }
  micard: MenuFooterInt = (MenuFooter.filter(element => element.ruta == "/aboutus"))[0];

  ngOnInit(): void {
  }

}
