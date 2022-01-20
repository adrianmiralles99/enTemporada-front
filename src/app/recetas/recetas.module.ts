import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PresentacionRecetasComponent } from './presentacion-recetas/presentacion-recetas.component';
import { UtilsModule } from '../utils/utils.module';
import { IndexrecetasComponent } from './indexrecetas/indexrecetas.component';


@NgModule({
  declarations: [
    PresentacionRecetasComponent,
    IndexrecetasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule
  ],
  exports: [
    PresentacionRecetasComponent,
    IndexrecetasComponent
  ]
})
export class RecetasModule { }
