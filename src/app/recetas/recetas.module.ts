import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetasComponent } from './recetas/recetas.component';
import { PresentacionRecetasComponent } from './presentacion-recetas/presentacion-recetas.component';



@NgModule({
  declarations: [
    RecetasComponent,
    PresentacionRecetasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecetasModule { }
