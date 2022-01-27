import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from './barra/barra.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    BarraComponent,
    FooterComponent,
    MenuFooterComponent,
    PopUpComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports: [
    BarraComponent,
    FooterComponent,
    MenuFooterComponent,
  ]
})
export class UtilsModule { }
