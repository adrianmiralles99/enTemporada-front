import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthService, private tokenStorage: TokenStorageService) {
  }
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
  nick: string = "";
  password: string = "";

  onSubmit(): void {
    this.authService.login(this.nick, this.password).subscribe({
      next: data => {
        console.log(data);

        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        // this.isLoginFailed = false;
        // this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
}

