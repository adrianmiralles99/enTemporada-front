import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { FooterComponent } from './footer/footer.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { ProductesComponent } from './productes/productes.component';
import { TituloInicioComponent } from './titulo-inicio/titulo-inicio.component';



@NgModule({
  declarations: [
    BarraComponent,
    FooterComponent,
    MenuFooterComponent,
    ProductesComponent,
    TituloInicioComponent,],
  imports: [
    CommonModule,
    
  ],
  exports:[
    BarraComponent,
    FooterComponent,
    MenuFooterComponent,
    ProductesComponent,
    TituloInicioComponent,
  ]

})
export class HomeModule { }
