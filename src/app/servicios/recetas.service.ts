import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recetas } from '../modelos/recetas.model';
import { serverUrl } from '../baseurl';

const baseUrl = serverUrl + 'recetas';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Recetas[]> {
    return this.http.get<Recetas[]>(baseUrl);
  }

  getCard(): Observable<Recetas[]> {
    return this.http.get<Recetas[]>(baseUrl + "?fields=id,nombre,color,imagen,tipo");
  }

  get(id: any): Observable<any> {
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

  findByTitle(title: any): Observable<Recetas[]> {
    return this.http.get<Recetas[]>(`${baseUrl}?title=${title}`);
  }
  
}
