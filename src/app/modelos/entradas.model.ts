import { Usuarios } from "./usuarios.model";
import { Categorias } from "./categorias.model";
import { LikesEntrada } from "./likes-entrada.model";
import { FavoritosEntrada } from "./favoritos-entrada.model";
export class Entradas {
    id!: number;
    id_usuario!: number;
    id_categoria?: number;
    titulo!: string;
    fecha?: Date;
    estado?: string;
    texto?:string;
    imagen?:string;
    nick?: string;
    usuario_img?: string;
    usuario?: Usuarios;
    categoria?:Categorias;
    likes?: LikesEntrada[];
    favoritos?: FavoritosEntrada[];
    totallikes?: {total:number};
    totalcomentarios?: {total:number};

}
