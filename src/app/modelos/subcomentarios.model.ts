import { LikesSubcomentario } from "./likes-subcomentario.model";
import { Usuarios } from "./usuarios.model";
export class Subcomentarios {
  id!: number;
  id_usuario!: number;
  id_comentarioprinc?: number;
  texto?:string;
  estado?: string;
  fecha?: Date;
  likes?: LikesSubcomentario[];
  totallikes?: {total:number};
  usuario?: Usuarios;
}
