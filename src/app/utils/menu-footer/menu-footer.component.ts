import { Component, Input, OnInit } from '@angular/core';
import { MenuFooterInt } from 'src/app/menufooter';
import { MenuFooter } from 'src/app/mock-menufooter';


@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.scss']
})
export class MenuFooterComponent implements OnInit {
  constructor() { }
  @Input() micard!: MenuFooterInt;


  ngOnInit(): void {
    if (!this.micard) {
      this.micard = (MenuFooter.filter(element => element.ruta == "/"))[0];
    }
  }

}
