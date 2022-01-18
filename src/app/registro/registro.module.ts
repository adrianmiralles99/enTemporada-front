import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilsModule } from '../utils/utils.module';
import { IndexregComponent } from './indexreg/indexreg.component';



@NgModule({
  declarations: [IndexregComponent],
  imports: [
    CommonModule,
    UtilsModule
  ]
  ,exports:[
    IndexregComponent
  ]
})
export class RegistroModule { }
