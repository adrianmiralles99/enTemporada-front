import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentacionCalendarioComponent } from './presentacion-calendario/presentacion-calendario.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { UtilsModule } from '../utils/utils.module';
import { TablaCalendarioComponent } from './tabla-calendario/tabla-calendario.component';



@NgModule({
  declarations: [
    PresentacionCalendarioComponent,
    CalendarioComponent,
    TablaCalendarioComponent
  ],
  imports: [
    CommonModule,
    UtilsModule

  ],
  exports: [
    PresentacionCalendarioComponent,
    TablaCalendarioComponent,
  ]
})
export class CalendarioModule { }
