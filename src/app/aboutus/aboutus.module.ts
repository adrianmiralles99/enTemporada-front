import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { UtilsModule } from '../utils/utils.module';
import { IndiceComponent } from './indice/indice.component';
import { MotivosComponent } from './motivos/motivos.component';



@NgModule({
  declarations: [
    PresentacionComponent,
    IndiceComponent,
    MotivosComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ]
  , exports: [
    IndiceComponent
  ]
})
export class AboutusModule { }
