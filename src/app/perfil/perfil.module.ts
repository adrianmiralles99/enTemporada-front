import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { IndiceperfilComponent } from './indiceperfil/indiceperfil.component';
import { DatosComponent } from './datos/datos.component';
import { InferiorComponent } from './inferior/inferior.component';
import { UtilsModule } from '../utils/utils.module';
import { RecetasComponent } from './recetas/recetas.component';
import { BotonnuevarecetaComponent } from './botonnuevareceta/botonnuevareceta.component';
import { IndicemodperfilComponent } from './indicemodperfil/indicemodperfil.component';
import { ModdatosComponent } from './moddatos/moddatos.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel está aquí

@NgModule({
  declarations: [
    IndiceperfilComponent,
    DatosComponent,
    InferiorComponent,
    RecetasComponent,
    BotonnuevarecetaComponent,
    IndicemodperfilComponent,
    ModdatosComponent
  ],
  imports: [
    CommonModule
    ,UtilsModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    IndiceperfilComponent
  ]
})
export class PerfilModule { }
