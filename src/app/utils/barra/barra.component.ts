import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../login/pop-up.component';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss'],
  providers: [TokenStorageService, UsuarioService]
})
export class BarraComponent implements OnInit {
  @Input() color: string = "";
  id_user = this.token.getId();
  usuario!: Usuarios;
  constructor(private router: Router, private uService: UsuarioService, public dialogRef: MatDialog, private token: TokenStorageService) { }

  openDialog() {

    const dialog = this.dialogRef.open(PopUpComponent, {
      position: { top: "100px" },
      width: "40%",
      maxWidth: "1000px",
      panelClass: 'custom-modalbox',
      backdropClass: 'fondo'
    });

  }

  getUser(): void {

    this.uService.getById(this.id_user).subscribe({
      next: (data) => {
        console.log(data);

        this.usuario = data;


      }
    })
  }

  logout() {
    this.token.signOut();
    if (this.router.url == "/") {
      window.location.reload
    }
  }

  sesion!: boolean;
  ngOnInit(): void {

    if (this.id_user) {
      this.sesion = true;
      this.getUser();
    } else {
      this.sesion = false;
    }
  }

}
