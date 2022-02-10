import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../modelos/productos.model';
import { serverUrl } from '../baseurl';

const baseUrl = serverUrl + 'producto';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Productos[]> {
    return this.http.get<Productos[]>(baseUrl);
  }

  getRelacionadas(id: any): Observable<Productos> {
    return this.http.get<Productos>(`${baseUrl}/${id}` + "?expand=relacionadas");
  }

  getCalendario(): Observable<Productos[]> {
    return this.http.get<Productos[]>(baseUrl + "?expand=calendario");
  }

  getCard(): Observable<Productos[]> {
    return this.http.get<Productos[]>(baseUrl + "?fields=id,nombre,color,imagen,tipo");
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}