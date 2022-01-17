import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { IndexComponent } from './index/index.component';
=======
import { PruebaComponent } from './prueba/prueba.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
>>>>>>> b3c569f4b7ba7baf1ce4c15a1c78306b5130cfca



@NgModule({
  declarations: [
  
<<<<<<< HEAD
    IndexComponent
=======
    PruebaComponent,
       PresentacionComponent
>>>>>>> b3c569f4b7ba7baf1ce4c15a1c78306b5130cfca
  ],
  imports: [
    CommonModule
  ]
  , exports: [
<<<<<<< HEAD
    IndexComponent
=======
    PruebaComponent,
    PresentacionComponent
>>>>>>> b3c569f4b7ba7baf1ce4c15a1c78306b5130cfca
  ]
})
export class AboutusModule { }
