import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';
import { FormsModule } from '@angular/forms'; //
import { RouterModule } from '@angular/router';
import { DatosentradaComponent } from './datosentrada/datosentrada.component';
import { IndexcreacionentradaComponent } from './indexcreacionentrada/indexcreacionentrada.component';

@NgModule({
  declarations: [
    DatosentradaComponent,
    IndexcreacionentradaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UtilsModule
  ]
})
export class CreacionEntradaModule { }
