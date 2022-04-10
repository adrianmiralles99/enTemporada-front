import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { serverUrl } from '../baseurl';
import { LikesComentario } from '../modelos/likes-comentario.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'likescomentario';
@Injectable({
  providedIn: 'root'
})
export class LikesComentarioService {

  constructor(private http: HttpClient) { }
  create(id_comentario: any): Observable<any> {
    return this.http.post(baseUrl + "/createlike", {
      id_comentario: id_comentario,
    }, httpOptions);
  }

  delete(id_comentario: any): Observable<any> {
    return this.http.delete(baseUrl + "/deletelike?id_comentario=" + id_comentario);
  }

  getAll(): Observable<LikesComentario[]> {
    return this.http.get<LikesComentario[]>(baseUrl);
  }
}
