import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { IndexloginComponent } from './indexlogin/indexlogin.component';
import { RecucontraComponent } from './recucontra/recucontra.component';
import { UtilsModule } from '../utils/utils.module';



@NgModule({
  declarations: [
    LoginComponent,
    IndexloginComponent,
    RecucontraComponent
  ],
  imports: [
    CommonModule,
    UtilsModule,
  ]
})
export class LoginModule { }
