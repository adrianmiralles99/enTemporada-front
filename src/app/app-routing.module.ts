import { HomeComponent } from './home/home/home.component';
import { IndexComponent} from './aboutus/index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'aboutus',
    component: IndexComponent,
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
