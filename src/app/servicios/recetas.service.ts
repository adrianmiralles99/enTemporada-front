import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { Recetas } from '../modelos/recetas.model';
import { serverUrl } from '../baseurl';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'recetas';


@Injectable({//indica que la clase puede necesitar dependencias
  providedIn: 'root'
})




export class RecetasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Recetas[]> {
    return this.http.get<Recetas[]>(baseUrl + "?expand=nick");
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}` + "?expand=nick");
  }

  crearReceta(titulo: string, comensales: number, tiempo: string, tipo: string, dificultad: string, ingredientes: string[], pasos: string[], id_prodp: number, imagen: string): Observable<any> {
    console.log("creando");

    return this.http.post(baseUrl + "/crearreceta", {
      titulo: titulo,
      comensales: comensales,
      tiempo: tiempo,
      tipo: tipo,
      dificultad: dificultad,
      ingredientes: ingredientes,
      pasos: pasos,
      id_prodp: id_prodp,
      imagen: imagen,
      id_usuario: 2
    }, httpOptions);

  }


}

