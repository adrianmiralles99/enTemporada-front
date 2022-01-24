import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';
import { IndexcreacionComponent } from './indexcreacion/indexcreacion.component';
import { DatoscreacionComponent } from './datoscreacion/datoscreacion.component';
import { PasosComponent } from './pasos/pasos.component';



@NgModule({
  declarations: [
    IndexcreacionComponent,
    DatoscreacionComponent,
    PasosComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ]
})
export class CreacionRecetaModule { }
