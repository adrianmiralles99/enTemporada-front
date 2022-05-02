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
  crearEntrada(titulo: string, cuerpoentrada:string, id_categoria: number, imagen: File): Observable<any>{
    var fd = new FormData();
    fd.append('eventImage', imagen);
    fd.append('titulo', titulo);
    fd.append('texto', cuerpoentrada);
    fd.append('id_categoria', id_categoria + "");
    return this.http.post(baseUrl + "/crearentrada", fd)
  }
  actualizarEntrada(id: number,titulo: string, cuerpoentrada:string, id_categoria: number, imagen: File): Observable<any> {

    var fd = new FormData();
    fd.append('eventImage', imagen);
    fd.append('titulo', titulo);
    fd.append('texto', cuerpoentrada);
    fd.append('id_categoria', id_categoria + "");
    return this.http.put(baseUrl + "/updateentrada?id=" + id, fd)
  }

  borrarEntrada(id: number) {
    return this.http.delete(baseUrl + "/deleteentrada?id=" + id);
  }

  getUltimaEntrada(): Observable<any> {
    return this.http.get(baseUrl + "/ultimaentrada");
  }
  getEntradaPopular(): Observable<any> {
    return this.http.get(baseUrl + "/popularentrada");
  }
  getMias() {
    return this.http.get<Entradas[]>(baseUrl + "/getmias?expand=usuario,likes,favoritos");
  }
  getFav() {
    return this.http.get<Entradas[]>(baseUrl + "/getfav?expand=usuario,likes,favoritos");
  }


}
