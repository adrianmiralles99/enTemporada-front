import { Productos } from "./productos.model";
export class Calendario {
    id!: number;
    id_prod?: number;
    mes?: number;
    estado?: string;
    producto?: Productos[];
}
