import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PaginaerrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  
  ]
})
export class ErrorModule { }
