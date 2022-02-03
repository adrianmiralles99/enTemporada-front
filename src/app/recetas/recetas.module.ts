import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PresentacionRecetasComponent } from './presentacion-recetas/presentacion-recetas.component';
import { UtilsModule } from '../utils/utils.module';
import { IndexrecetasComponent } from './indexrecetas/indexrecetas.component';
import { CardRecetasComponent } from './card-recetas/card-recetas.component';
import { IndexguardadasComponent } from './indexguardadas/indexguardadas.component';
import { IndexmisrecetasComponent } from './indexmisrecetas/indexmisrecetas.component';
import { CardMisrecetasComponent } from './card-misrecetas/card-misrecetas.component';

@NgModule({
  declarations: [
    PresentacionRecetasComponent,
    IndexrecetasComponent,
    CardRecetasComponent,
    IndexguardadasComponent,
    IndexmisrecetasComponent,
    CardMisrecetasComponent,
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
