import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../servicios/token-storage.service';
@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
//CanActivate: Mira si el usuario puede acceder a una página determinada.
//HAY DISTINTOS TIPOS DE GUARDS, EL MÁS COMÚN ES EL CAN ACTIVATE
export class UsuariologueadoGuard implements CanActivate {
      constructor(private router:Router, private token:TokenStorageService){}
      canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):  boolean {
        let iduser = this.token.getId();
          if(!iduser){
            this.router.navigate(['']);
            return false;
          }
        // Si devolvemos TRUE si se permitirá el acceso.
        return true;
      }
    }
=======

export class UsuariologueadoGuard implements CanActivate {
  constructor(private router: Router, private token: TokenStorageService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    let iduser = this.token.getId();
    if (!iduser) {
      this.router.navigate(['']);
      return false;
    }
    // Si devolvemos TRUE si se permitirá el acceso.
    return true;
  }
}
>>>>>>> 19112f28b584dc2a8e95da68c16f19194a3b8ef4

