import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusModule } from './aboutus/aboutus.module';
import { HomeModule } from './home/home.module';
import { CalendarioModule } from './calendario/calendario.module';
import { RegistroModule } from './registro/registro.module';
import { InfoproductoModule } from './infoproducto/infoproducto.module';
import { RecetasModule } from './recetas/recetas.module';
<<<<<<< HEAD
import { RecetaindividualModule } from './recetaindividual/recetaindividual.module';
=======
<<<<<<< HEAD
import { PerfilModule } from './perfil/perfil.module';
=======
import { CreacionRecetaModule } from './creacion-receta/creacion-receta.module';
>>>>>>> e40220ac6d02b557748f699b8da2088f89b0407b
>>>>>>> d0245548e9e6c8ac6c64f10249591e7cd17ebd81

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AboutusModule,
    HomeModule,
    CalendarioModule,
    RegistroModule,
    InfoproductoModule,
    RecetasModule,
<<<<<<< HEAD
    RecetaindividualModule
=======
<<<<<<< HEAD
    PerfilModule
=======
    CreacionRecetaModule,
>>>>>>> e40220ac6d02b557748f699b8da2088f89b0407b
>>>>>>> d0245548e9e6c8ac6c64f10249591e7cd17ebd81
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
