import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexcategoriasEntradaComponent } from './indexcategorias-entrada/indexcategorias-entrada.component';
import { CardCategoriasComponent } from './card-categorias/card-categorias.component';
import { RouterModule } from '@angular/router';

import { UtilsModule } from '../utils/utils.module';


@NgModule({
  declarations: [
    IndexcategoriasEntradaComponent,
    CardCategoriasComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule
  ]
})
export class CategoriasEntradaModule { }
