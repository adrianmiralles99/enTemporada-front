import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';
import { IndexregComponent } from './indexreg/indexreg.component';
import { DatosloginComponent } from './datoslogin/datoslogin.component';
import { BarranegraComponent } from './barranegra/barranegra.component';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';



@NgModule({
  declarations: [
    IndexregComponent, 
    BarranegraComponent,
    DatosloginComponent,
    DatospersonalesComponent
  ],
  imports: [
    CommonModule,
    UtilsModule
  ]
  ,exports:[
    IndexregComponent
  ]
})
export class RegistroModule { }
