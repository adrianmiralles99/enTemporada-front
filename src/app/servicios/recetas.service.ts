import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recetas } from '../modelos/recetas.model';
import { serverUrl } from '../baseurl';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'recetas';

@Injectable({
  providedIn: 'root'
})




export class RecetasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Recetas[]> {
    return this.http.get<Recetas[]>(baseUrl+"?expand=nick");
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`+"?expand=nick");
  }


crearReceta(u_id: number, tipo: string, id_prodp: number, imagen: string, titulo: string, tiempo: string, dificultad: string, comensales: number, ingredientes: Array<Array<String>>,pasos:  Array<String>): Observable<any> {
    return this.http.post(baseUrl + "crearReceta", {
      id_usuario: u_id,
      tipo: tipo,
      id_prodp: id_prodp,
      imagen: imagen,
      titulo: titulo,
      tiempo: tiempo,
      comensales: comensales,
      dificultad: dificultad,
      ingredientes: ingredientes,
      pasos: pasos,
    }, httpOptions);

  }
}
