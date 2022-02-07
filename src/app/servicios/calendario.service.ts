import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendario } from '../modelos/calendario.model';
import { serverUrl } from '../baseurl';

const baseUrl = serverUrl + 'temporadaprod';

@Injectable({
  providedIn: 'root'
})
export class CalendarioService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Calendario[]> {
    return this.http.get<Calendario[]>(baseUrl);
  }

  getConProductos(): Observable<Calendario[]> {
    return this.http.get<Calendario[]>(baseUrl + "?expand=prod");
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
