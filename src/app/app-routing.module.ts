import { HomeComponent } from './home/home/home.component';
import { IndiceComponent } from './aboutus/indice/indice.component';
import { CalendarioComponent } from './calendario/calendario/calendario.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexregComponent } from './registro/indexreg/indexreg.component';

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
  }
];
@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
