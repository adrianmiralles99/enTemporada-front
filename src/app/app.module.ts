import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductesComponent } from './productes/productes.component';
import { BarraComponent } from './barra/barra.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductesComponent,
    BarraComponent,
    MenuFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
