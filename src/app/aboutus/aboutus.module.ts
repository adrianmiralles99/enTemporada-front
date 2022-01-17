import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from './prueba/prueba.component';



@NgModule({
  declarations: [
    PruebaComponent
  ],
  imports: [
    CommonModule
  ]
  ,exports:[
    PruebaComponent
  ]
})
export class AboutusModule { }
