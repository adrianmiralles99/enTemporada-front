import { Recetas } from "./recetas.model";
export class Usuarios {
    id!: number;
    nombre?: string;
    apellido?: string;
    nick?: string;
    correo?: string;
    password?: string;
    imagen?: string;
    descripcion?: string;
    localidad?: string;
    direccion?: string;
    tipo?: string;
    estado?: string;
    token?: string;
    exp!: number;
    id_ultima_receta?: number;
    recetas?:Recetas[];
    ultimareceta?:Recetas;
}
