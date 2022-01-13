import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

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
<<<<<<< HEAD
    MenuFooterComponent
=======
    MenuFooterComponent,
    BarraComponent
>>>>>>> ebaea826a34e528c02487d93dd4e1877fb021c6e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
