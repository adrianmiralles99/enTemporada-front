import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverUrl } from '../baseurl';

const baseurl = serverUrl + "user";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http: HttpClient) { }

  getContent(): Observable<any> {
    return this.http.get(baseurl, { responseType: 'text' });
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${baseurl}/${id}`);
  }


}