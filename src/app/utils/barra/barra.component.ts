import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../login/pop-up.component';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { NotificacionesService } from 'src/app/servicios/notificaciones.service';
import { Notificaciones } from 'src/app/modelos/notificaciones.model';
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
  imagen?: string;
  nickname?: string;
  notificaciones!: any;
  constructor(private router: Router, private uService: UsuarioService, private notificacionesService:NotificacionesService, public dialogRef: MatDialog, private token: TokenStorageService) { }

  openDialog() {
    this.dialogRef.open(PopUpComponent, {
      position: { top: "100px" },
      panelClass: 'custom-modalbox',
      backdropClass: 'fondo'
    });
  }

  getUser(): void {

    this.uService.getById().subscribe({
      next: (data) => {
        this.usuario = data;
        this.imagen = data.imagen;
        this.nickname = data.nick
      }
    })
  }

  logout() {
    this.token.signOut();
    if (this.router.url == "/") {
      window.location.reload();
    }
  }

  sesion!: boolean;

  ngOnInit(): void {
    if (this.id_user) {
      this.sesion = true;
      this.getUser();
      this.getNotificaciones();
    } else {
      this.sesion = false;
    }
  }

  getNotificaciones(){
    this.notificacionesService.getNotificaciones().subscribe({
      next: (data) => {
        //console.log(data);
        this.notificaciones = data;
        //console.log(this.notificaciones);
      },
      error: (e) => console.error(e)
    });
  }
  ocultarCajanotificaciones(){

    $(".cajanotificaciones").hide();
  }
  mostrarCajanotificaciones(){
    if ($(".cajanotificaciones").is(':visible')){
      $(".cajanotificaciones").hide();
    }else{
      $(".cajanotificaciones").show();
    }
  }
  borrarNoti(id:number){
    $(".not-"+id).hide();
    this.notificacionesService.borrarNotificacion(id).subscribe({
      next: (data) => {
      },
      error: (e) => console.error(e)
    });
  }

}
