import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../utils/utils.module';

import { IndexentradaindComponent } from './indexentradaind/indexentradaind.component';
import { CabeceraentradaComponent } from './cabeceraentrada/cabeceraentrada.component';
import { CuerpoentradaComponent } from './cuerpoentrada/cuerpoentrada.component';
import { SeccioncomentariosComponent } from './seccioncomentarios/seccioncomentarios.component';
import { BotonesabajoComponent } from './botonesabajo/botonesabajo.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReporteComponent } from '../utils/reporte/reporte.component';
@NgModule({
  declarations: [
    IndexentradaindComponent,
    CabeceraentradaComponent,
    CuerpoentradaComponent,
    SeccioncomentariosComponent,
    BotonesabajoComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule,
    MatDialogModule

  ],
  exports:[
    IndexentradaindComponent
  ],
  entryComponents: [ReporteComponent],

})
export class EntradaindividualModule { }
