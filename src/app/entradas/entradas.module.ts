import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexentradasComponent } from './indexentradas/indexentradas.component';
import { RouterModule } from '@angular/router';

import { UtilsModule } from '../utils/utils.module';
import { CardEntradasComponent } from './card-entradas/card-entradas.component';
import { FilterPipe } from '../pipes/filter.pipe';



@NgModule({
  declarations: [
    IndexentradasComponent,
    CardEntradasComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule,

  ],
  exports: [FilterPipe]
})
export class EntradasModule { }
