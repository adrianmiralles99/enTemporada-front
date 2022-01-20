import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';
import { IndexcreacionComponent } from './indexcreacion/indexcreacion.component';
import { DatoscreacionComponent } from './datoscreacion/datoscreacion.component';



@NgModule({
  declarations: [
    IndexcreacionComponent,
    DatoscreacionComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ]
})
export class CreacionRecetaModule { }
