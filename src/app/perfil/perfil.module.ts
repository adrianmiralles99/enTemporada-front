import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndiceperfilComponent } from './indiceperfil/indiceperfil.component';
import { DatosComponent } from './datos/datos.component';
import { InferiorComponent } from './inferior/inferior.component';
import { UtilsModule } from '../utils/utils.module';
import { RecetasComponent } from './recetas/recetas.component';
import { BotonnuevarecetaComponent } from './botonnuevareceta/botonnuevareceta.component';



@NgModule({
  declarations: [
    IndiceperfilComponent,
    DatosComponent,
    InferiorComponent,
    RecetasComponent,
    BotonnuevarecetaComponent
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
