import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndiceperfilComponent } from './indiceperfil/indiceperfil.component';
import { DatosComponent } from './datos/datos.component';
import { InferiorComponent } from './inferior/inferior.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [
    IndiceperfilComponent,
    DatosComponent,
    InferiorComponent
  ],
  imports: [
    CommonModule
    ,UtilsModule
  ],
  exports:[
    IndiceperfilComponent
  ]
})
export class PerfilModule { }
