import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { serverUrl } from '../baseurl';
import { Likes } from '../modelos/likes.model';
import { TokenStorageService } from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'likes';


@Injectable({//indica que la clase puede necesitar dependencias
  providedIn: 'root'
})

export class LikesSevice {
  constructor(private http: HttpClient, private token: TokenStorageService) { }

  create(id_receta: any): Observable<any> {
    return this.http.post(baseUrl + "/createlike", {
      id_receta: id_receta,
    }, httpOptions);
  }

  delete(id_receta: any): Observable<any> {
    return this.http.delete(baseUrl + "/deletelike?id_receta=" + id_receta);
  }

  getAll(): Observable<Likes[]> {
    return this.http.get<Likes[]>(baseUrl);
  }
}