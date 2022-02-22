import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';
import { IndexcreacionComponent } from './indexcreacion/indexcreacion.component';
import { DatoscreacionComponent } from './datoscreacion/datoscreacion.component';
import { FormsModule } from '@angular/forms'; //
import { RouterModule } from '@angular/router';
import { IndexedicionComponent } from './indexedicion/indexedicion.component';



@NgModule({
  declarations: [
    IndexcreacionComponent,
    DatoscreacionComponent,
    IndexedicionComponent,
  ],
  imports: [
    CommonModule,
    UtilsModule,
    FormsModule,
    RouterModule
  ]
})
export class CreacionRecetaModule { }
