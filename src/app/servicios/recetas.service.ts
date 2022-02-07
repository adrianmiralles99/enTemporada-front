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
  
  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }


}
