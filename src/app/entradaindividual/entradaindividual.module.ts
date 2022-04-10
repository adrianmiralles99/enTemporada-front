import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../utils/utils.module';

import { IndexentradaindComponent } from './indexentradaind/indexentradaind.component';
import { CabeceraentradaComponent } from './cabeceraentrada/cabeceraentrada.component';
import { CuerpoentradaComponent } from './cuerpoentrada/cuerpoentrada.component';
import { SeccioncomentariosComponent } from './seccioncomentarios/seccioncomentarios.component';



@NgModule({
  declarations: [
    IndexentradaindComponent,
    CabeceraentradaComponent,
    CuerpoentradaComponent,
    SeccioncomentariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule
  ],
  exports:[
    IndexentradaindComponent
  ]
})
export class EntradaindividualModule { }
