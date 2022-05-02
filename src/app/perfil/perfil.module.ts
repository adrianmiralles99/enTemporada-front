import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { CommonModule } from '@angular/common';
import { IndiceperfilComponent } from './indiceperfil/indiceperfil.component';
import { DatosComponent } from './datos/datos.component';
import { InferiorComponent } from './inferior/inferior.component';
import { UtilsModule } from '../utils/utils.module';
import { RecetasComponent } from './recetas/recetas.component';
import { BotonnuevarecetaComponent } from './botonnuevareceta/botonnuevareceta.component';
import { IndicemodperfilComponent } from './indicemodperfil/indicemodperfil.component';
import { ModdatosComponent } from './moddatos/moddatos.component';

import { FormsModule } from '@angular/forms';
import { IndiceperfilentradasComponent } from './indiceperfilentradas/indiceperfilentradas.component';
import { InferiorEntComponent } from './inferior-ent/inferior-ent.component';
import { EntradasComponent } from './entradas/entradas.component';
import { BotonnuevaentradaComponent } from './botonnuevaentrada/botonnuevaentrada.component'; // <-- NgModel está aquí


@NgModule({
  declarations: [
    IndiceperfilComponent,
    DatosComponent,
    InferiorComponent,
    RecetasComponent,
    BotonnuevarecetaComponent,
    IndicemodperfilComponent,
    ModdatosComponent,
    IndiceperfilentradasComponent,
    InferiorEntComponent,
    EntradasComponent,
    BotonnuevaentradaComponent
  ],
  imports: [
    CommonModule
    ,UtilsModule,
    RouterModule,
    FormsModule,
    MatButtonToggleModule
  ],
  exports:[
    IndiceperfilComponent
  ]
})
export class PerfilModule { }
