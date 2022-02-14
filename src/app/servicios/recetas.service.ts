import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recetas } from '../modelos/recetas.model';
import { serverUrl } from '../baseurl';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'recetas/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
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

crearReceta(u_id: number, tipo: string, id_prodp: number, imagen: string, titulo: string, tiempo: string, dificultad: string, comensales: number, ingredientes: Array<String>,pasos:  Array<String>): Observable<any> {
  
  console.log("COSITA");
  
  return this.http.post(baseUrl + "crearreceta", {
      id_usuario: u_id,
      tipo: tipo,
      id_prodp: id_prodp,
      imagen: imagen,
      titulo: titulo,
      tiempo: tiempo,
      comensales: comensales,
      dificultad: dificultad,
      ingredientesSS: ingredientes,
      pasos: pasos,
    }, httpOptions);

  }
}

