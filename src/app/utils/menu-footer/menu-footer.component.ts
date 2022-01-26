import { Component, Input, OnInit } from '@angular/core';
import { MenuFooterInt } from 'src/app/menufooter';


@Component({
  selector: 'app-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.scss']
})
export class MenuFooterComponent implements OnInit {
  constructor() { }
  @Input() micard!: MenuFooterInt;
  destinoL: string = "";


  ngOnInit(): void {
    this.destinoL = this.micard.destinoL;
  }

}
