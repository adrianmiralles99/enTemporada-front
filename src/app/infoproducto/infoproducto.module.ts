import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosproductoComponent } from './datosproducto/datosproducto.component';
import { BarranegraComponent } from '../utils/barranegra/barranegra.component';
import { IndexprodComponent } from './indexprod/indexprod.component';
import { UtilsModule } from '../utils/utils.module';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { RelacionadasComponent } from './relacionadas/relacionadas.component';



@NgModule({
  declarations: [
    DatosproductoComponent,
    IndexprodComponent,
    DescripcionComponent,
    RelacionadasComponent,
  ],
  imports: [
    CommonModule,
    UtilsModule
  ]
})
export class InfoproductoModule { }
