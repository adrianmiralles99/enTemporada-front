import { HomeComponent } from './home/home/home.component';
import { IndiceComponent } from './aboutus/indice/indice.component';
import { CalendarioComponent } from './calendario/calendario/calendario.component';
import { Routes, RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { IndexregComponent } from './registro/indexreg/indexreg.component';
import { IndexprodComponent } from './infoproducto/indexprod/indexprod.component';
import { IndexrecetasComponent } from './recetas/indexrecetas/indexrecetas.component';
import { IndexrecetaindComponent } from './recetaindividual/indexrecetaind/indexrecetaind.component';
import { IndexcreacionComponent } from './creacion-receta/indexcreacion/indexcreacion.component';

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
    path: 'recetaindividual',
    component: IndexrecetaindComponent,
  },
  {
    path: 'creacionRecetas',
    component: IndexcreacionComponent,
  }
];
@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
