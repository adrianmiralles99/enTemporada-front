import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductesComponent } from './productes/productes.component';
import { BarraComponent } from './barra/barra.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { TituloInicioComponent } from './titulo-inicio/titulo-inicio.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusModule } from './aboutus/aboutus.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductesComponent,
    BarraComponent,
    MenuFooterComponent,
    TituloInicioComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AboutusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
