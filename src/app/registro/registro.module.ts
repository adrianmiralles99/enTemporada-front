import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';
import { IndexregComponent } from './indexreg/indexreg.component';
import { DatosloginComponent } from './datoslogin/datoslogin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    IndexregComponent,
    DatosloginComponent,
  ],
  imports: [
    CommonModule,
    UtilsModule,
    FormsModule,
    RouterModule
  ]
  , exports: [
    IndexregComponent,
    FormsModule
  ]
})
export class RegistroModule { }
