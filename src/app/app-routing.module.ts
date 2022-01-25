import { HomeComponent } from './home/home/home.component';
import { IndiceComponent } from './aboutus/indice/indice.component';
import { CalendarioComponent } from './calendario/calendario/calendario.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexregComponent } from './registro/indexreg/indexreg.component';
import { IndexprodComponent } from './infoproducto/indexprod/indexprod.component';
import { IndexrecetasComponent } from './recetas/indexrecetas/indexrecetas.component';
import { IndexcreacionComponent } from './creacion-receta/indexcreacion/indexcreacion.component';
import { IndiceperfilComponent } from './perfil/indiceperfil/indiceperfil.component';
import { IndexrecetaindComponent } from './recetaindividual/indexrecetaind/indexrecetaind.component'


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
    path: 'recetaindividual/:id',
    component: IndexrecetaindComponent,
  },
  /*probando cosas rutas dont worry be happy*/
  {
    path: 'infoproducto/:id',//el idproducto es el parametro. Usamos de los ":" por cada parámetro que se quiera definir.
    component: IndexprodComponent
  },

  {
    path: 'creacionRecetas',
    component: IndexcreacionComponent,
  },
  {
    path: 'perfil',
    component: IndiceperfilComponent,
  }
];
@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
