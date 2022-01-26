export interface Receta {
    id: number;
    titulo: string;
    autor: string;
    img: string;
    comensales: number;
    duracion: string;
    tipo: string;
    dificultad: string;
    ingredientes: Array<String>;
}
