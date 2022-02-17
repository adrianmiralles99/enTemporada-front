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


//  modificarUsuario(titulo: string, comensales: number, tiempo: string, tipo: string, dificultad: string, ingredientes: string[], pasos: string[], id_prodp: number, imagen: string): Observable<any> {
//     console.log("creando");

//     return this.http.post(serverUrl + "/crearreceta", {
//       titulo: titulo,
//       comensales: comensales,
//       tiempo: tiempo,
//       tipo: tipo,
//       dificultad: dificultad,
//       ingredientes: ingredientes,
//       pasos: pasos,
//       id_prodp: id_prodp,
//       imagen: imagen,
//       id_usuario: 2
//     }, httpOptions);

//   }
}