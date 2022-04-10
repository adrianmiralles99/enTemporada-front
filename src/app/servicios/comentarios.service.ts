import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { Comentarios } from '../modelos/comentarios.model';
import { serverUrl } from '../baseurl';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'comentarios';
@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Comentarios[]> {
    return this.http.get<Comentarios[]>(baseUrl+ "?expand=usuario,totallikes,likes");//se configuran los expand en el modelo
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}` + "?expand=usuario,totallikes,likes");
  }

  getComentariosByIdEntrada(identrada: any):  Observable<Comentarios[]> {
    return this.http.get<Comentarios[]>(baseUrl + "/getcomentarios?identrada=" + identrada + "&expand=usuario,totallikes,likes,subcomentarios");

  }

}
