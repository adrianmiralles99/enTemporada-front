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
    return this.http.get<Recetas[]>(baseUrl+"?expand=usuario,likes,favoritos");
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}` + "?expand=nick");
  }


  crearReceta(id_user: number, titulo: string, comensales: number, tiempo: string, tipo: string, dificultad: string, ingredientes: string[], pasos: string[], id_prodp: number, imagen: string, imagen64: any): Observable<any> {
    return this.http.post(baseUrl + "/crearreceta", {
      id_usuario: id_user,
      titulo: titulo,
      comensales: comensales,
      tiempo: tiempo,
      tipo: tipo,
      dificultad: dificultad,
      ingredientes: ingredientes,
      pasos: pasos,
      id_prodp: id_prodp,
      imagen: imagen,
    }, httpOptions);
  }

  actualizarReceta(id: number, titulo: string, comensales: number, tiempo: string, tipo: string, dificultad: string, ingredientes: string[], pasos: string[], id_prodp: number, imagen: string, imagen64: any): Observable<any> {

    return this.http.put(baseUrl + "/updatereceta?id=" + id,
      {
        titulo: titulo,
        comensales: comensales,
        tiempo: tiempo,
        tipo: tipo,
        dificultad: dificultad,
        ingredientes: ingredientes,
        pasos: pasos,
        id_prodp: id_prodp,
      }
      , httpOptions);
  }

  getFav() {
    return this.http.get<Recetas[]>(baseUrl + "/getfav?expand=usuario");
  }

  getMias() {
    return this.http.get<Recetas[]>(baseUrl + "/getmias?expand=usuario");
  }


  getUltimaReceta(): Observable<any> {
    return this.http.get(baseUrl + "/ultimareceta");
  }

  getRecetaPopular(): Observable<any> {
    return this.http.get(baseUrl + "/popularreceta");
  }

}

