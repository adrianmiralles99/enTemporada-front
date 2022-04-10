import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { Entradas } from '../modelos/entradas.model';
import { serverUrl } from '../baseurl';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'entradas';
@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Entradas[]> {
    return this.http.get<Entradas[]>(baseUrl+ "?expand=usuario,categoria,favoritos,totallikes,likes");//se configuran los expand en el modelo
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}` + "?expand=usuario,categoria,favoritos,totallikes,totalcomentarios,likes");

  }

  getfiltro(id_categoria: number, opcion: string): Observable<any> {
   // return this.http.get(baseUrl + "/bytipo?tipo=" + tipo + "&expand=usuario,likes,totallikes,favoritos");

    return this.http.get<Entradas[]>(baseUrl+ "/getfiltro?id_categoria=" + id_categoria+"&opcion="+opcion+"&expand=usuario,categoria,favoritos,totallikes,likes");//se configuran los expand en el modelo
  }
}
