import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverUrl } from '../baseurl';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseurl = serverUrl + "user/";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(baseurl + "authenticate", {
      nick: username,
      password: password
    }, httpOptions);
  }

  register(nick: string, nombre: string, apellidos: string, correo: string, password: string, direccion: string, localidad: string): Observable<any> {
    return this.http.post(baseurl + "register", {
      nick: nick,
      nombre: nombre,
      apellidos: apellidos,
      correo: correo,
      password: password,
      direccion: direccion,
      localidad: localidad
    }, httpOptions);

  }
}