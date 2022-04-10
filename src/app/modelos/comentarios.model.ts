import { LikesComentario } from "./likes-comentario.model";
import { Usuarios } from "./usuarios.model";
import { Subcomentarios } from "./subcomentarios.model";
export class Comentarios {
  id!: number;
  id_usuario!: number;
  id_entrada?: number;
  texto?:string;
  estado?: string;
  fecha?: Date;
  likes?: LikesComentario[];
  totallikes?: {total:number};
  totalsubcomentarios?: {total:number};
  usuario?: Usuarios;
  subcomentarios?: Subcomentarios [];

}
