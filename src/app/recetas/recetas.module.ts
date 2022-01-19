import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PresentacionRecetasComponent } from './presentacion-recetas/presentacion-recetas.component';
import { UtilsModule } from '../utils/utils.module';
import { RecetasComponent } from './recetas/recetas.component';



@NgModule({
  declarations: [
    PresentacionRecetasComponent,
    RecetasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule
  ],
  exports: [
    PresentacionRecetasComponent
  ]
})
export class RecetasModule { }
