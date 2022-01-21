import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { UtilsModule } from '../utils/utils.module';
import { IndiceComponent } from './indice/indice.component';
import { MotivosComponent } from './motivos/motivos.component';
import { SobreComponent } from './sobre/sobre.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PresentacionComponent,
    IndiceComponent,
    MotivosComponent,
    SobreComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule
  ]
  , exports: [
    IndiceComponent
  ]
})
export class AboutusModule { }
