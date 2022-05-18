import { Component, Input, OnInit } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { RecetasService } from 'src/app/servicios/recetas.service';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Entradas } from 'src/app/modelos/entradas.model';
import { EntradasService } from 'src/app/servicios/entradas.service';

@Component({
  selector: 'app-indiceperfil',
  templateUrl: './indiceperfil.component.html',
  styleUrls: ['./indiceperfil.component.scss'],
  providers: [UsuarioService, TokenStorageService]
})
export class IndiceperfilComponent implements OnInit {
  constructor(private usuariosService: UsuarioService, private recetasService: RecetasService, private entradasService:EntradasService,private token: TokenStorageService) { }

  usuario?: Usuarios;
  ultimareceta?: Recetas;
  ultimaentrada?: Entradas;

  recetapopular?: Recetas;
  entradapopular?:Entradas;

  id_usuario = this.token.getId();
  nombreuser?: string;
  infouser?: string;
  imagen?: string;
  exp_res = 0;
  nivel = 0;

  ngOnInit(): void {
    this.getUser();
    this.getUltimaReceta();
    this.getRecetaPopular();
    this.getEntradaPopular();
    this.getUltimaEntrada();

  }

  visualizarRecetas():void{
    $(".entradas").css("display","none");
    $(".entradas").children().hide();
       $(".recetas").children().show();
  }
  visualizarEntradas():void{
    $(".recetas").children().hide();
    $(".entradas").css("display","block");
    $(".entradas").children().show();
  }
  getUser(): void {
    this.usuariosService.getById().subscribe({
      next: (data) => {
        this.usuario = data;
        this.nombreuser = data.nick;
        this.infouser = data.descripcion;
        this.imagen = data.imagen;
        this.getLvl(data.exp);

      }
    })
  }
  getLvl(expe: number) {
    if(expe >= 0 && expe < 150){
      this.nivel = 1;
    }else if(expe >= 150 && expe <300){
      this.nivel = 2;
    }else if (expe >= 300 && expe <400){
      this.nivel = 3;
    }else if (expe >= 400 && expe < 475){
      this.nivel = 4;
    }else{
      this.nivel = 5;
    }
    this.exp_res = (expe * 100) / 500;
  }

  getUltimaReceta() {
    this.recetasService.getUltimaReceta().subscribe({
      next: (data) => {

        this.ultimareceta = data;
        if (!data) {
          this.ultimareceta = {
            id: 0,
            id_usuario: 0,
            imagen: "default.gif",
            titulo: "No encontrada",
            tiempo: "",
            usuario_img: "default.png",
            nick: "Nobody",
            dificultad: "",
          };
        }
      }
    })
  }
  getUltimaEntrada() {
    this.entradasService.getUltimaEntrada().subscribe({
      next: (data) => {

        this.ultimaentrada = data;
        if (!data) {
          this.ultimaentrada = {
            id: 0,
            id_usuario: 0,
            imagen: "default.gif",
            titulo: "No encontrada",
            usuario_img: "default.png",
            nick: "Nobody",
          };
        }
      }
    })
  }
  getEntradaPopular() {
    this.entradasService.getEntradaPopular().subscribe({
      next: (data) => {
        this.entradapopular = data;
        if (!data) {
          this.entradapopular = {
            id: 0,
            id_usuario: 0,
            imagen: "default.gif",
            titulo: "No encontrada",
            usuario_img: "default.png",
            nick: "Nobody",
          };
        }


      }
    })
  }
  getRecetaPopular() {
    this.recetasService.getRecetaPopular().subscribe({
      next: (data) => {
        this.recetapopular = data;
        if (!data) {
          this.recetapopular = {
            id: 0,
            id_usuario: 0,
            imagen: "default.gif",
            titulo: "No encontrada",
            tiempo: "",
            usuario_img: "default.png",
            nick: "Nobody",
            dificultad: "",
          };
        }


      }
    })
  }


}
