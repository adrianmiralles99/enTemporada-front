import { Relacionadas } from "../models/relacionadas.model";
export class Productos {
    id!: number;
    nombre?: string;
    imagen?: string;
    descripcion?: string;
    info_nut?: { e: string, pr: string, g: string, hc: string, cl: string, fb: string, s: string, h: string, pt: string, af: string };
    tipo?: string;
    color?: string;
    relacionadas?: Relacionadas[];
}
