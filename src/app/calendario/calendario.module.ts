import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentacionCalendarioComponent } from './presentacion-calendario/presentacion-calendario.component';



@NgModule({
  declarations: [

    PresentacionCalendarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PresentacionCalendarioComponent
  ]
})
export class CalendarioModule { }
