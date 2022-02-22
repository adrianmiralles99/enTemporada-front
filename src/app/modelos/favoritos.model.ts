import { Recetas } from "./recetas.model";
export class Favoritos {
    id?: number;
    id_usuario?: number;
    id_receta?: number;
    recetas!: Recetas;
}
