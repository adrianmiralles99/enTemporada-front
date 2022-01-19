import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { FooterComponent } from './footer/footer.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { BarranegraComponent } from './barranegra/barranegra.component';



@NgModule({
  declarations: [
    BarraComponent,
    FooterComponent,
    MenuFooterComponent,
    BarranegraComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BarraComponent,
    FooterComponent,
    MenuFooterComponent,
    BarranegraComponent

  ]
})
export class UtilsModule { }
