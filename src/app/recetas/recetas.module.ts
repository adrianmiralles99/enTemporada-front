import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecetasComponent } from './recetas/recetas.component';
import { PresentacionRecetasComponent } from './presentacion-recetas/presentacion-recetas.component';



@NgModule({
  declarations: [
    RecetasComponent,
    PresentacionRecetasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RecetasModule { }
