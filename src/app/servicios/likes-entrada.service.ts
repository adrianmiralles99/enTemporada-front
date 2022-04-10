import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { serverUrl } from '../baseurl';
import { LikesEntrada } from '../modelos/likes-entrada.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'likesentrada';
@Injectable({
  providedIn: 'root'
})
export class LikesEntradaService {

  constructor(private http: HttpClient) { }
  create(id_entrada: any): Observable<any> {
    return this.http.post(baseUrl + "/createlike", {
      id_entrada: id_entrada,
    }, httpOptions);
  }

  delete(id_entrada: any): Observable<any> {
    return this.http.delete(baseUrl + "/deletelike?id_entrada=" + id_entrada);
  }

  getAll(): Observable<LikesEntrada[]> {
    return this.http.get<LikesEntrada[]>(baseUrl);
  }
}
