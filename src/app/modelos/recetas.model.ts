export class Recetas {
    id!: number;
    id_usuario!: number;
    id_prodp!: number;
    estado?: string;
    imagen?: string;
    titulo?: string;
    tiempo?: string;
    comensales?: number;
    dificultad?: string;
    tipo?: string;
    pasos?: Array<string>;
    fecha?: Date;
    ingredientes?: Array<string>;
    nick?: string;
    usuario_img?: string;
}
