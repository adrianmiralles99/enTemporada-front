import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  recupassword = false;
  usuario?: Usuarios;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  nick: string = '';
  password: string = '';
  error = new Map();

  onSubmit(): void {
    this.error = new Map();

    if (!this.nick || this.nick.length == 0) {
      this.error.set('nick', 'El nick no puede estar vacio');
    }

    if (!this.password || this.password.length == 0) {
      this.error.set('password', 'La contraseña no puede estar vacia');
    }

    if (this.error.size == 0) {
      this.authService.login(this.nick, this.password).subscribe({
        next: (data) => {
          console.log(data.error);
          if (!data.error) {
            this.tokenStorage.saveToken(data.token);
            this.tokenStorage.saveUser(data);

            window.location.reload();
          } else {
            this.error.set('error', 'Usuario o contraseña incorrecta ');
          }
        },
      });
    }
  }
}
