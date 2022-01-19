import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { BarranegraComponent } from '../registro/barranegra/barranegra.component';



@NgModule({
  declarations: [
    BarraComponent,
    FooterComponent,
    MenuFooterComponent,
    BarranegraComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    BarraComponent,
    FooterComponent,
    MenuFooterComponent,
    BarranegraComponent

  ]
})
export class UtilsModule { }
