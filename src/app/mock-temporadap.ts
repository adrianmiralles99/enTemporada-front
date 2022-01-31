export interface Temporada {
    id: number;
    nombre: string;
    tipo: string;
    estado: string;

}


export const Temporadap: Temporada[] = [
    {
        id: 1, nombre: 'Cereza', tipo: 'F', estado: "N"
    },
    {
        id: 2, nombre: 'Manzana', tipo: 'F', estado: "T"
    },
    {
        id: 3, nombre: 'Aguacate', tipo: 'V', estado: "N"
    },
    {
        id: 4, nombre: 'Berenjena', tipo: 'V', estado: "N"
    },
    {
        id: 5, nombre: 'Coliflor', tipo: 'V', estado: "T"
    },
    {
        id: 6, nombre: 'Albaricoque', tipo: 'F', estado: "N"
    },
    {
        id: 7, nombre: 'Ciruela', tipo: 'F', estado: "N"
    },
    {
        id: 8, nombre: 'Limon', tipo: 'F', estado: "T"
    },
    {
        id: 9, nombre: 'Mandarina', tipo: 'F', estado: "T"
    },


];