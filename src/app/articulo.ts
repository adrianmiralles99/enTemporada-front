import { ArrayType } from "@angular/compiler";

export interface Articulo {
  id: number;
  nombre: string;
  tipo: string;
  color: string,
  descripcion: string,
  infonut: Array<number>,
}
