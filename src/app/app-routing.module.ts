import { HomeComponent } from './home/home/home.component';
import { IndiceComponent } from './aboutus/indice/indice.component';
import { CalendarioComponent } from './calendario/calendario/calendario.component';
import { Routes, RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { IndexregComponent } from './registro/indexreg/indexreg.component';
import { IndexprodComponent } from './infoproducto/indexprod/indexprod.component';
import { IndexrecetasComponent } from './recetas/indexrecetas/indexrecetas.component';
<<<<<<< HEAD
import { IndiceperfilComponent } from './perfil/indiceperfil/indiceperfil.component';
=======
import { IndexcreacionComponent } from './creacion-receta/indexcreacion/indexcreacion.component';
>>>>>>> e40220ac6d02b557748f699b8da2088f89b0407b

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
<<<<<<< HEAD
    path: "perfil",
    component: IndiceperfilComponent,
  }
=======
    path: 'creacionRecetas',
    component: IndexcreacionComponent,
  },
>>>>>>> e40220ac6d02b557748f699b8da2088f89b0407b
];
@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
