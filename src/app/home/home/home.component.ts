import { Component, OnInit } from '@angular/core';
import { MenuFooterInt } from 'src/app/menufooter';
import { MenuFooter } from 'src/app/mock-menufooter';
import { Calendario } from 'src/app/modelos/calendario.model';
import { Productos } from 'src/app/modelos/productos.model';
import { AuthService } from 'src/app/servicios/auth.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';

import { UsuarioService } from 'src/app/servicios/usuario.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductosService],
})
export class HomeComponent implements OnInit {

  constructor(private productosService: ProductosService, private pruebaService: UsuarioService, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  productes?: Productos[];
  micard: MenuFooterInt = (MenuFooter.filter(element => element.ruta == "/"))[0];

  ngOnInit(): void {
    this.getProductes();
  }

  getProductes(): void {
    this.productosService.getActual()
      .subscribe({
        next: (data) => {
          this.productes = data;


        },
        error: (e) => console.error(e)
      });
  }


  login(): void {
    this.authService.login("Adrimigo", "1234").subscribe({
      next: data => {
        console.log(data);
        if (!data.error) {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);
        }
      }

    });
  }

  logout() {
    this.tokenStorage.signOut();
  }

}
