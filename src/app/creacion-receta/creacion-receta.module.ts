import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';
import { IndexcreacionComponent } from './indexcreacion/indexcreacion.component';
import { DatoscreacionComponent } from './datoscreacion/datoscreacion.component';
import { PasosComponent } from './pasos/pasos.component';
import { FormsModule } from '@angular/forms'; //



@NgModule({
  declarations: [
    IndexcreacionComponent,
    DatoscreacionComponent,
    PasosComponent,
  ],
  imports: [
    CommonModule,
    UtilsModule,
    FormsModule
  ]
})
export class CreacionRecetaModule { }
