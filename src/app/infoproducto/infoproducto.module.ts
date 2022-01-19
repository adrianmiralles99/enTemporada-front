import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosproductoComponent } from './datosproducto/datosproducto.component';
import { BarranegraComponent } from '../utils/barranegra/barranegra.component';
import { IndexprodComponent } from './indexprod/indexprod.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [
    DatosproductoComponent,
    IndexprodComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ]
})
export class InfoproductoModule { }
