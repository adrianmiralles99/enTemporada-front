import { HomeModule } from './home/home.module';
import { AboutusModule } from './aboutus/aboutus.module';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'home',
    component: HomeModule,
  },
  {
    path: 'aboutus',
    component: AboutusModule,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
