import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductesComponent } from './productes/productes.component';
<<<<<<< HEAD
import { BarraComponent } from './barra/barra.component';
=======
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
>>>>>>> fd3fad06fb403e68181f39c729b6dc0372abe780

@NgModule({
  declarations: [
    AppComponent,
    ProductesComponent,
<<<<<<< HEAD
    BarraComponent
=======
    MenuFooterComponent
>>>>>>> fd3fad06fb403e68181f39c729b6dc0372abe780
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
