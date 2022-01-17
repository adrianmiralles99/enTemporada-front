import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './prueba/prueba.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { UtilsModule } from '../utils/utils.module';
import { IndiceComponent } from './indice/indice.component';



@NgModule({
  declarations: [
    PruebaComponent,
    PresentacionComponent,
    IndiceComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ]
  , exports: [
    IndiceComponent
  ]
})
export class AboutusModule { }
