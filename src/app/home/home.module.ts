import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductesComponent } from './productes/productes.component';
import { TituloInicioComponent } from './titulo-inicio/titulo-inicio.component';
import { HomeComponent } from './home/home.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [
    ProductesComponent,
    TituloInicioComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    UtilsModule,
    RouterModule
  ],
  exports:[
    HomeComponent
  ]

})
export class HomeModule { }
