import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { Recetas } from '../modelos/recetas.model';
import { serverUrl } from '../baseurl';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'recetas';


@Injectable({//indica que la clase puede necesitar dependencias
  providedIn: 'root'
})

export class RecetasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Recetas[]> {
    return this.http.get<Recetas[]>(baseUrl + "?expand=usuario,likes,totallikes,favoritos");//se configuran los expand en el modelo
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}` + "?expand=usuario,likes,favoritos");
  }


  crearReceta(id_user: number, titulo: string, comensales: number, tiempo: string, tipo: string, dificultad: string, ingredientes: string[], pasos: string[], id_prodp: number, imagen: File): Observable<any> {
    var fd = new FormData();
    fd.append('eventImage', imagen);
    fd.append('id_usuario', id_user + "");
    fd.append('titulo', titulo);
    fd.append('comensales', comensales + "");
    fd.append('tiempo', tiempo);
    fd.append('tipo', tipo);
    fd.append('dificultad', dificultad);
    fd.append('ingredientes', JSON.stringify(ingredientes));
    fd.append('pasos', JSON.stringify(pasos));
    fd.append('id_prodp', id_prodp + "");

    return this.http.post(baseUrl + "/crearreceta", fd)
  }

  actualizarReceta(id: number, titulo: string, comensales: number, tiempo: string, tipo: string, dificultad: string, ingredientes: string[], pasos: string[], id_prodp: number, imagen: File): Observable<any> {

    var fd = new FormData();
    fd.append('eventImage', imagen);
    fd.append('titulo', titulo);
    fd.append('comensales', comensales + "");
    fd.append('tiempo', tiempo);
    fd.append('tipo', tipo);
    fd.append('dificultad', dificultad);
    fd.append('ingredientes', JSON.stringify(ingredientes));
    fd.append('pasos', JSON.stringify(pasos));
    fd.append('id_prodp', id_prodp + "");

    return this.http.put(baseUrl + "/updatereceta?id=" + id, fd)
  }
  borrarReceta(id: number) {
    return this.http.delete(baseUrl + "/deletereceta?id=" + id);

  }
  getFav() {
    return this.http.get<Recetas[]>(baseUrl + "/getfav?expand=usuario,likes,favoritos");
  }

  getMias() {
    return this.http.get<Recetas[]>(baseUrl + "/getmias?expand=usuario,likes,favoritos");
  }


  getUltimaReceta(): Observable<any> {
    return this.http.get(baseUrl + "/ultimareceta");
  }

  getRecetaPopular(): Observable<any> {
    return this.http.get(baseUrl + "/popularreceta");
  }

}

