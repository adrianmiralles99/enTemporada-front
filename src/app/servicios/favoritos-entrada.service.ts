import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { serverUrl } from '../baseurl';
import { FavoritosEntrada } from '../modelos/favoritos-entrada.model';
const baseUrl = serverUrl + 'favoritosentrada';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FavoritosEntradaService {
  constructor(private http: HttpClient) { }

  create(id_entrada: any): Observable<any> {
    return this.http.post(baseUrl + "/createfavorito", {
      id_entrada: id_entrada,
    }, httpOptions);
  }

  delete(id_entrada: any): Observable<any> {
    console.log(baseUrl + "/deletefavorito?id_entrada=" + id_entrada);

    return this.http.delete(baseUrl + "/deletefavorito?id_entrada=" + id_entrada);
  }

  getUserfav(): Observable<FavoritosEntrada[]> {
    return this.http.get<FavoritosEntrada[]>(baseUrl + "/getfavoritos" + "?expand=entrada");
  }
}

