
import { HomeComponent } from './home/home/home.component';
import { IndiceComponent } from './aboutus/indice/indice.component';
import { CalendarioComponent } from './calendario/calendario/calendario.component';
import { Routes, RouterModule } from '@angular/router';//importante
import { NgModule } from '@angular/core';
import { IndexregComponent } from './registro/indexreg/indexreg.component';
import { IndexprodComponent } from './infoproducto/indexprod/indexprod.component';
import { IndexrecetasComponent } from './recetas/indexrecetas/indexrecetas.component';
import { IndexcreacionComponent } from './creacion-receta/indexcreacion/indexcreacion.component';
import { IndiceperfilComponent } from './perfil/indiceperfil/indiceperfil.component';
import { IndexrecetaindComponent } from './recetaindividual/indexrecetaind/indexrecetaind.component'
import { IndexguardadasComponent } from './recetas/indexguardadas/indexguardadas.component';
import { IndexmisrecetasComponent } from './recetas/indexmisrecetas/indexmisrecetas.component';
import { IndicemodperfilComponent } from './perfil/indicemodperfil/indicemodperfil.component';
import { PaginaerrorComponent } from './error/paginaerror/paginaerror.component';
import { IndexedicionComponent } from './creacion-receta/indexedicion/indexedicion.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aboutus',
    component: IndiceComponent,
  },
  {
    path: 'calendario',
    component: CalendarioComponent,
  },
  {
    path: 'registro',
    component: IndexregComponent,
  },
  {
    path: 'infoproducto',
    component: IndexprodComponent,
  },
  {
    path: 'recetas',
    component: IndexrecetasComponent,
  },
  {
    path: 'recetas-guardadas',
    component: IndexguardadasComponent,
  },
  {
    path: 'recetas-misrecetas',
    component: IndexmisrecetasComponent,
  },
  {
    path: 'recetaindividual/:id',
    component: IndexrecetaindComponent,
  },
  /*probando cosas rutas dont worry be happy :)*/
  {
    path: 'infoproducto/:id',//el idproducto es el parametro. Usamos de los ":" por cada parámetro que se quiera definir.
    component: IndexprodComponent,
  },

  {
    path: 'creacionRecetas',
    component: IndexcreacionComponent,
  },
  {
    path: 'editarReceta/:id',
    component: IndexedicionComponent,
  },
  {
    path: 'perfil',
    component: IndiceperfilComponent,
  },
  {
    path: 'modperfil',
    component: IndicemodperfilComponent,
  },
  //si la ruta es equivocada salta el error 404
  {
    path: 'error404', component: PaginaerrorComponent
  },
  {
    path: '**', redirectTo: '/error404'
  },
];
@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
