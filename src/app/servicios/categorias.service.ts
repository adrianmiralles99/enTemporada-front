import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { Categorias } from '../modelos/categorias.model';
import { serverUrl } from '../baseurl';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'categorias';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(baseUrl);//se configuran los expand en el modelo
  }

}
