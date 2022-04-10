import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { ComentariosService } from 'src/app/servicios/comentarios.service';
import { Comentarios } from 'src/app/modelos/comentarios.model';
import { SubcomentariosService } from 'src/app/servicios/subcomentarios.service';
import { Subcomentarios } from 'src/app/modelos/subcomentarios.model';
import { LikesComentarioService } from 'src/app/servicios/likes-comentario.service';
import { LikesSubcomentarioService } from 'src/app/servicios/likes-subcomentario.service';
@Component({
  selector: 'app-seccioncomentarios',
  templateUrl: './seccioncomentarios.component.html',
  styleUrls: ['./seccioncomentarios.component.scss']
})
export class SeccioncomentariosComponent implements OnInit {
  id?: any;

  comentarios?: Comentarios[];
  subcomentarios?:Subcomentarios[];
  subcomentario?: Subcomentarios;
  subcomentariosmap = new Map();
  cantcommentsprinc?: string;
  hover = false;
  sesion!: boolean;
  clickedSub: Array<boolean> = [];
  clicked: Array<boolean> = [];
  constructor(private token: TokenStorageService,private comentariosService: ComentariosService, private subcomentariosService: SubcomentariosService, private likesComentario: LikesComentarioService, private likesSubcomentario:LikesSubcomentarioService) { }
  @Input() entradaid?: number;

  ngOnInit(): void {
    this.getComentarios();
  }

  asignarLikesComentarios(){
    //si estamos logueados
    if ((this.id = this.token.getId()) && this.entradaid) {
      this.sesion = true;
      this.comentarios!.forEach(element => {
        this.boolLike(element.id);
    });
    } else {
      this.sesion = false;
    }
  }
  asignarLikesSubcomentarios(){
   // if (this.sesion){
      this.subcomentarios?.forEach(element => {
        console.log(element);
        this.boolLikeSub(element.id);
      });
    //}
  }
  recorrerComentarios(){
      this.comentarios!.forEach(element => {
        if (element.subcomentarios?.length!>0){
          this.getSubcomentarios(element.id);
        }
      });
  }
  getComentarios(){
    this.comentariosService.getComentariosByIdEntrada(this.entradaid).subscribe({
      next: (data) => {
        this.comentarios = data;
        if (data.length == 1){
          this.cantcommentsprinc = data.length +" comentario principal disponible";
        }else{
          this.cantcommentsprinc =  data.length +" comentarios principales disponibles";

        }
        this.asignarLikesComentarios();
        this.recorrerComentarios();
      },
      error: (e) => console.error(e)
    });

  }
   getSubcomentarios(id_comentarioprinc:Number){
    this.subcomentariosService.getComentariosByIdComentarioPrincipal(id_comentarioprinc).subscribe({
      next: (data) => {
        if (data){
          this.subcomentarios = data;
          this.subcomentariosmap.set(id_comentarioprinc, data);
        }
        this.asignarLikesSubcomentarios();
      }

    });
  }
  getFechabonita(fecha: Date): string{
    let fechabien = fecha.toString();
    let fechacool = fechabien.replace(" ", ", ")
    return fechacool;
  }
  cambiaLike(id: number) {
    console.log(this.clicked);
    if (this.sesion == true) {
      if (this.clicked[id]) {
        this.clicked[id] = false;
        this.likesComentario.delete(id).subscribe({
          next: (data) => {
          }
        });
      }
      else {
        this.clicked[id] = true;
        //console.log(this.clicked);
        this.likesComentario.create(id).subscribe({
          next: (data) => {
          }
        });
      }
      window.location.reload();
    }
  }
  cambiaLikeSub(id:number){
    if (this.sesion == true) {
      console.log("olaaaa");

      if (this.clickedSub[id]) {
        console.log("tiene like");
       this.clickedSub[id] = false;
       console.log(this.clickedSub);
        this.likesSubcomentario.delete(id).subscribe({
          next: (data) => {
          }
        });
      }
      else {
        this.clickedSub[id] = true;
        console.log("no tiene like");
        console.log(this.clickedSub);

        this.likesSubcomentario.create(id).subscribe({
          next: (data) => {
            console.log(data);
          }
        });
      }
      window.location.reload();
    }
  }
  boolLike(id: number) {
    var aux = this.comentarios?.find(element => element.id == id)?.likes?.find(element => element.id_usuario == this.id);
    if (aux) {
      this.clicked[id] = true;
    }
    else {
      this.clicked[id] = false;
    }
  }
  boolLikeSub(id: number) {
    console.log("PRUEBA");
    var aux = this.subcomentarios?.find(element => element.id == id)?.likes?.find(element => element.id_usuario==this.id);
    console.log(aux);

    if (aux) {
      this.clickedSub[id] = true;
    }
    else {
      this.clickedSub[id] = false;
    }
    console.log(this.clickedSub);
  }
}
