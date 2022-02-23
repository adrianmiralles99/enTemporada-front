import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../utils/utils.module';
import { IndexrecetasComponent } from './indexrecetas/indexrecetas.component';
import { CardRecetasComponent } from './card-recetas/card-recetas.component';
import { IndexguardadasComponent } from './indexguardadas/indexguardadas.component';
import { IndexmisrecetasComponent } from './indexmisrecetas/indexmisrecetas.component';

@NgModule({
  declarations: [
    IndexrecetasComponent,
    CardRecetasComponent,
    IndexguardadasComponent,
    IndexmisrecetasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule
  ],
  exports: [
    IndexrecetasComponent
  ]
})
export class RecetasModule { }
