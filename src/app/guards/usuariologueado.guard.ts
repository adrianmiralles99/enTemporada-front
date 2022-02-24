import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from '../servicios/token-storage.service';
@Injectable({
  providedIn: 'root'
})

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

