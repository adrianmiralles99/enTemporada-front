import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';
import { IndexregComponent } from './indexreg/indexreg.component';
import { DatosloginComponent } from './datoslogin/datoslogin.component';
import { BarranegraComponent } from './barranegra/barranegra.component';



@NgModule({
  declarations: [
    IndexregComponent, 
    BarranegraComponent,
    DatosloginComponent
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
