import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

>>>>>>> d21174cda34f5452cc7c7ef7809158a09fc232a5
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductesComponent } from './productes/productes.component';
import { BarraComponent } from './barra/barra.component';
<<<<<<< HEAD
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
=======
<<<<<<< HEAD
=======
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
>>>>>>> d21174cda34f5452cc7c7ef7809158a09fc232a5
>>>>>>> 8374c1cbaacbc035472a5b0d77a483150536d30c

@NgModule({
  declarations: [
    AppComponent,
    ProductesComponent,
<<<<<<< HEAD
    BarraComponent,
    MenuFooterComponent
=======
<<<<<<< HEAD
    BarraComponent
=======
    BarraComponent,
    MenuFooterComponent
>>>>>>> d21174cda34f5452cc7c7ef7809158a09fc232a5
>>>>>>> 8374c1cbaacbc035472a5b0d77a483150536d30c
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
