import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Temporadaprod } from '../modelos/temporadaprod.model';
import { serverUrl } from '../baseurl';
@Injectable({
  providedIn: 'root'
})

export class TemporadaprodService {
  baseUrl = serverUrl + "temporadaprod";
constructor(private http: HttpClient) { }

getAll(): Observable<Temporadaprod[]> {
  return this.http.get<Temporadaprod[]>(this.baseUrl);
}
}