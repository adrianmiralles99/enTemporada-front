import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { Likes } from '../modelos/likes.model';
import { serverUrl } from '../baseurl';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'like';


@Injectable({//indica que la clase puede necesitar dependencias
  providedIn: 'root'
})

export class likesSevice{
  constructor(private http: HttpClient) { }
  create(id_user: any, id_receta: any): Observable<any> {
    return this.http.post(baseUrl + "/setlike", {
      id_usuario: id_user,
      id_receta: id_receta,
    }, httpOptions);
  }
}