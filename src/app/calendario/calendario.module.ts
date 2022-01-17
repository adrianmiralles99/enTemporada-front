import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentacionCalendarioComponent } from './presentacion-calendario/presentacion-calendario.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [
    PresentacionCalendarioComponent,
    CalendarioComponent
  ],
  imports: [
    CommonModule,
    UtilsModule

  ],
  exports: [
    PresentacionCalendarioComponent
  ]
})
export class CalendarioModule { }
