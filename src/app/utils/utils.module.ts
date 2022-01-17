import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { FooterComponent } from './footer/footer.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';



@NgModule({
  declarations: [
    BarraComponent,
    FooterComponent,
    MenuFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BarraComponent,
    FooterComponent,
    MenuFooterComponent
  ]
})
export class UtilsModule { }
