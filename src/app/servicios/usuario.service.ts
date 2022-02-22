import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverUrl } from '../baseurl';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
  getrecetasById(id: any): Observable<any> {
    return this.http.get(`${baseurl}/${id}` + "?fields=nick,imagen&expand=recetas");
  }
 

 modificarUsuario(id: number,nick:string,imagen:string,descripcion:string): Observable<any> {
    console.log(id);
    return this.http.put(baseurl + "/updateuser?id="+ id, {
      nick: nick,
      imagen: imagen,
      descripcion: descripcion, 
    
    }, httpOptions);

  }
}