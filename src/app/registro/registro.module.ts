import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';
import { IndexregComponent } from './indexreg/indexreg.component';
import { DatosloginComponent } from './datoslogin/datoslogin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexregComponent,
    DatosloginComponent,
  ],
  imports: [
    CommonModule,
    UtilsModule,
    FormsModule
  ]
  , exports: [
    IndexregComponent,
    FormsModule
  ]
})
export class RegistroModule { }
