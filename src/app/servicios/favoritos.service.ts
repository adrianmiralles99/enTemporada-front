import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { serverUrl } from '../baseurl';
import { Favoritos } from '../modelos/favoritos.model';

const baseUrl = serverUrl + 'favoritos';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  constructor(private http: HttpClient) { }

  create(id_receta: any): Observable<any> {
    return this.http.post(baseUrl + "/createfavorito", {
      id_receta: id_receta,
    }, httpOptions);
  }

  delete(id_receta: any): Observable<any> {
    console.log(baseUrl + "/deletefavorito?id_receta=" + id_receta);

    return this.http.delete(baseUrl + "/deletefavorito?id_receta=" + id_receta);
  }

  getUserfav(): Observable<Favoritos[]> {
    return this.http.get<Favoritos[]>(baseUrl + "/getfavoritos" + "?expand=receta");
  }
}

