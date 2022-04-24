import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { ComentariosService } from 'src/app/servicios/comentarios.service';
import { Comentarios } from 'src/app/modelos/comentarios.model';
import { SubcomentariosService } from 'src/app/servicios/subcomentarios.service';
import { Subcomentarios } from 'src/app/modelos/subcomentarios.model';
import { LikesComentarioService } from 'src/app/servicios/likes-comentario.service';
import { LikesSubcomentarioService } from 'src/app/servicios/likes-subcomentario.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';

import { ReporteComponent } from 'src/app/utils/reporte/reporte.component';
@Component({
  selector: 'app-seccioncomentarios',
  templateUrl: './seccioncomentarios.component.html',
  styleUrls: ['./seccioncomentarios.component.scss'],
  providers: [SubcomentariosService, MatDialogConfig],
})
export class SeccioncomentariosComponent implements OnInit {
  id?: any;

  comentarios?: Comentarios[];
  subcomentarios?: Subcomentarios[];
  subcomentario?: Subcomentarios;
  subcomentariosmap = new Map();
  cantcommentsprinc?: string;
  hover = false;
  sesion!: boolean;
  clickedSub: Array<boolean> = [];
  clicked: Array<boolean> = [];

  usuario!: Usuarios;
  imagen?: string;
  nickname?: string;

  textocomentarioprinc?: string = "";
  idcomentarioprincipal?: number;
  textosubcomentarioprinc?: string = "";
  error = new Map();

  constructor(
    public MatDialogConfig: MatDialogConfig,
    public dialogRef: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private userService: UsuarioService,
    private token: TokenStorageService,
    private comentariosService: ComentariosService,
    private subcomentariosService: SubcomentariosService,
    private likesComentario: LikesComentarioService,
    private likesSubcomentario: LikesSubcomentarioService
  ) {}
  @Input() entradaid?: number;
  @Input() idpropentrada?: number;
  ngOnInit(): void {
    this.getComentarios();
  }

  openDialog(
    userid: number,
    nicknameuser: string,
    idcomment: number,
    textocomment: string,
    tipo: string
  ) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      idusuarioreportado: userid,
      nicknameuser: nicknameuser,
      idcomment: idcomment,
      textocomment: textocomment,
      tipo: tipo,
    };
    dialogConfig.position = {
      top: '100px',
    };
    dialogConfig.backdropClass = 'fondo';
    dialogConfig.panelClass = 'custom-modalbox';
    if (this.sesion) {
      this.dialogRef.open(ReporteComponent, dialogConfig);
    } else {
      this.snackBar.open(
        'Para poder dar reportar un usuario debe iniciar sesión',
        'Aceptar',
        { panelClass: 'alertsad' }
      );
    }
  }

  getUser(): void {
    this.userService.getById().subscribe({
      next: (data) => {
        this.usuario = data;
        this.imagen = data.imagen;
        this.nickname = data.nick;
      },
    });
  }

  asignarLikesComentarios() {
    //si estamos logueados
    if ((this.id = this.token.getId()) && this.entradaid) {
      this.getUser();
      this.sesion = true;
      this.comentarios!.forEach((element) => {
        this.boolLike(element.id);
      });
    } else {
      this.sesion = false;
    }
  }
  asignarLikesSubcomentarios() {
    // if (this.sesion){
    this.subcomentarios?.forEach((element) => {
      console.log(element);
      this.boolLikeSub(element.id);
    });
    //}
  }
  recorrerComentarios() {
    this.comentarios!.forEach((element) => {
      if (element.subcomentarios?.length! > 0) {
        this.getSubcomentarios(element.id);
      }
    });
  }
  getComentarios() {
    this.comentariosService
      .getComentariosByIdEntrada(this.entradaid)
      .subscribe({
        next: (data) => {
          this.comentarios = data;
          if (data.length == 1) {
            this.cantcommentsprinc =
              data.length + ' comentario principal disponible';
          } else {
            this.cantcommentsprinc =
              data.length + ' comentarios principales disponibles';
          }
          this.asignarLikesComentarios();
          this.recorrerComentarios();
        },
        error: (e) => console.error(e),
      });
  }
  getSubcomentarios(id_comentarioprinc: Number) {
    this.subcomentariosService
      .getComentariosByIdComentarioPrincipal(id_comentarioprinc)
      .subscribe({
        next: (data) => {
          if (data) {
            this.subcomentarios = data;
            this.subcomentariosmap.set(id_comentarioprinc, data);
          }
          this.asignarLikesSubcomentarios();
        },
      });
  }
  getFechabonita(fecha: Date): string {
    let fechabien = fecha.toString();
    let fechacool = fechabien.replace(' ', ', ');
    return fechacool;
  }
  cambiaLike(id: number) {
    if (this.sesion == true) {
      if (this.clicked[id]) {
        this.clicked[id] = false;
        this.likesComentario.delete(id).subscribe({
          next: (data) => {},
        });
      } else {
        this.clicked[id] = true;
        //console.log(this.clicked);
        this.likesComentario.create(id).subscribe({
          next: (data) => {},
        });
      }
      window.location.reload();
    } else {
      let miSnackBar = this.snackBar.open(
        'Para poder dar like debe iniciar sesión',
        'Aceptar',
        { panelClass: 'alertsad' }
      );
      miSnackBar.onAction().subscribe(() => {});
    }
  }
  cambiaLikeSub(id: number) {
    if (this.sesion == true) {
      if (this.clickedSub[id]) {
        this.clickedSub[id] = false;
        this.likesSubcomentario.delete(id).subscribe({
          next: (data) => {},
        });
      } else {
        this.clickedSub[id] = true;
        this.likesSubcomentario.create(id).subscribe({
          next: (data) => {
            console.log(data);
          },
        });
      }
      window.location.reload();
    } else {
      let miSnackBar = this.snackBar.open(
        'Para poder dar like debe iniciar sesión',
        'Aceptar',
        { panelClass: 'alertsad' }
      );
      miSnackBar.onAction().subscribe(() => {});
    }
  }
  boolLike(id: number) {
    var aux = this.comentarios
      ?.find((element) => element.id == id)
      ?.likes?.find((element) => element.id_usuario == this.id);
    if (aux) {
      this.clicked[id] = true;
    } else {
      this.clicked[id] = false;
    }
  }
  boolLikeSub(id: number) {
    var aux = this.subcomentarios
      ?.find((element) => element.id == id)
      ?.likes?.find((element) => element.id_usuario == this.id);

    if (aux) {
      this.clickedSub[id] = true;
    } else {
      this.clickedSub[id] = false;
    }
    console.log(this.clickedSub);
  }

  publicarComentarioPrincipal() {
    this.comprobarErroresComentario();
    if (this.error.size == 0) {
      this.comentariosService
        .crearComentario(this.entradaid!, this.textocomentarioprinc!)
        .subscribe({
          next: (data) => {
            if (!data.error) {
              let miSnackBar = this.snackBar.open(
                'Comentario publicado correctamente',
                'Aceptar',
                { panelClass: 'alertcool' }
              );
              miSnackBar.onAction().subscribe(() => {
                this.reloadCurrentRoute();
              });
            }
          },
        });
    }
  }
  publicarSubComentario() {
    this.comprobarErroresSubcomentario();
    if (this.error.size == 0) {
      this.subcomentariosService
        .crearSubComentario(
          this.idcomentarioprincipal!,
          this.textosubcomentarioprinc!
        )
        .subscribe({
          next: (data) => {
            if (!data.error) {
              let miSnackBar = this.snackBar.open(
                'Subcomentario publicado correctamente',
                'Aceptar',
                { panelClass: 'alertcool' }
              );
              miSnackBar.onAction().subscribe(() => {
                this.reloadCurrentRoute();
              });
            }
          },
        });
    }
  }

  comprobarErroresComentario() {
    this.error = new Map();
    if (!this.textocomentarioprinc) {
      this.error.set('comentario', 'El comentario está vacio');
    } else if (this.textocomentarioprinc?.length! > 280) {
      this.error.set(
        'comentario',
        'El comentario no puede contener más de 280 caracteres'
      );
    }
  }
  comprobarErroresSubcomentario() {
    this.error = new Map();
    if (!this.textosubcomentarioprinc) {
      this.error.set('subcomentario', 'El subcomentario está vacio');
    } else if (this.textosubcomentarioprinc?.length! > 280) {
      this.error.set(
        'subcomentario',
        'El subcomentario no puede contener más de 280 caracteres'
      );
    }
  }
  visibilizarBloque(id_comentarioprinc: number) {
    if (this.sesion) {
      $('.subcomentarioasubir').hide();
      $('#plantillasubcomment-' + id_comentarioprinc).show();
      this.idcomentarioprincipal = id_comentarioprinc;
    } else {
      let miSnackBar = this.snackBar.open(
        'Para poder responder comentarios debe iniciar sesión',
        'Aceptar',
        { panelClass: 'alertsad' }
      );
      miSnackBar.onAction().subscribe(() => {});
    }
  }
  reloadCurrentRoute() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  BorrarComentario(id_usuariocomentario: number, comentarioid: number) {
    //Si el usuario es propietario de la entrada o es propietario del comentario
    //entonces puede "borrarlo", realmente lo pone en invisible.
    if (this.sesion) {
      if (
        this.usuario.id == this.idpropentrada ||
        this.usuario.id == id_usuariocomentario
      ) {
        console.log('borrando comentario');
        this.comentariosService.borrarComentario(comentarioid).subscribe({
          next: (data) => {
            this.reloadCurrentRoute();
          },
        });
      } else {
        let miSnackBar = this.snackBar.open(
          'Para poder borrar comentarios deben ser suyos o ser propietario de la entrada',
          'Aceptar',
          { panelClass: 'alertsad' }
        );
        miSnackBar.onAction().subscribe(() => {});
      }
    } else {
      let miSnackBar = this.snackBar.open(
        'Para poder optar a borrar comentarios debes iniciar sesión',
        'Aceptar',
        { panelClass: 'alertsad' }
      );
      miSnackBar.onAction().subscribe(() => {});
    }
  }
  BorrarSubComentario(id_usuariocomentario: number, subcomentarioid: number) {
    //Si el usuario es propietario de la entrada o es propietario del comentario
    //entonces puede "borrarlo", realmente lo pone en invisible.
    if (this.sesion) {
      if (
        this.usuario.id == this.idpropentrada ||
        this.usuario.id == id_usuariocomentario
      ) {
        console.log('borrando comentario');
        this.subcomentariosService
          .borrarSubComentario(subcomentarioid)
          .subscribe({
            next: (data) => {
              this.reloadCurrentRoute();
            },
          });
      } else {
        let miSnackBar = this.snackBar.open(
          'Para poder borrar subcomentarios deben ser suyos o ser propietario de la entrada',
          'Aceptar',
          { panelClass: 'alertsad' }
        );
        miSnackBar.onAction().subscribe(() => {});
      }
    } else {
      let miSnackBar = this.snackBar.open(
        'Para poder optar a borrar subcomentarios debes iniciar sesión',
        'Aceptar',
        { panelClass: 'alertsad' }
      );
      miSnackBar.onAction().subscribe(() => {});
    }
  }
}
