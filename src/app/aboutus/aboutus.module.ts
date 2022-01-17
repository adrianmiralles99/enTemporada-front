import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './prueba/prueba.component';
import { PresentacionComponent } from './presentacion/presentacion.component';



@NgModule({
  declarations: [
  
    PruebaComponent,
       PresentacionComponent
  ],
  imports: [
    CommonModule
  ]
  , exports: [
    PruebaComponent,
    PresentacionComponent
  ]
})
export class AboutusModule { }
