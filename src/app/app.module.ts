import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { RecetaindividualModule } from './recetaindividual/recetaindividual.module';
import { PerfilModule } from './perfil/perfil.module';
import { CreacionRecetaModule } from './creacion-receta/creacion-receta.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ErrorModule } from './error/error.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EntradasModule } from './entradas/entradas.module';
import { EntradaindividualModule } from './entradaindividual/entradaindividual.module';
import { CreacionEntradaModule } from './creacion-entrada/creacion-entrada.module';
import { FilterPipe } from './pipes/filter.pipe';
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
    RecetaindividualModule,
    CreacionRecetaModule,
    PerfilModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ErrorModule,
    MatSnackBarModule,
    EntradasModule,
    EntradaindividualModule,
    CreacionEntradaModule,



  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],

})
export class AppModule { }
