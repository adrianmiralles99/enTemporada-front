import { Entradas } from "./entradas.model";

export class FavoritosEntrada {
  id?: number;
  id_usuario?: number;
  id_entrada?: number;
  entradas!: Entradas;
}
