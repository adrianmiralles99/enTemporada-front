import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { serverUrl } from '../baseurl';
import { LikesSubcomentario } from '../modelos/likes-subcomentario.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'likessubcomentario';
@Injectable({
  providedIn: 'root'
})
export class LikesSubcomentarioService {

  constructor(private http: HttpClient) { }
  create(id_subcomentario: any): Observable<any> {
    return this.http.post(baseUrl + "/createlike", {
      id_subcomentario: id_subcomentario,
    }, httpOptions);
  }

  delete(id_subcomentario: any): Observable<any> {
    return this.http.delete(baseUrl + "/deletelike?id_subcomentario=" + id_subcomentario);
  }

  getAll(): Observable<LikesSubcomentario[]> {
    return this.http.get<LikesSubcomentario[]>(baseUrl);
  }
}


