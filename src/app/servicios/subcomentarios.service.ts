import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { Subcomentarios } from '../modelos/subcomentarios.model';
import { serverUrl } from '../baseurl';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'subcomentarios';
@Injectable({
  providedIn: 'root'
})
export class SubcomentariosService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Subcomentarios[]> {
    return this.http.get<Subcomentarios[]>(baseUrl+ "?expand=usuario,totallikes,likes");//se configuran los expand en el modelo
  }

  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}` + "?expand=usuario,totallikes,likes");
  }

  getComentariosByIdComentarioPrincipal(id_comentarioprinc: any): Observable<any> {
    return this.http.get(baseUrl + "/getsubcomentarios?idcomentarioprinc=" + id_comentarioprinc + "&expand=usuario,totallikes,likes");
  }
  crearSubComentario(id_comentarioprinc:number, texto:string):Observable<any>{
    console.log("dedede")
    var fd = new FormData();
    fd.append('id_comentarioprinc', id_comentarioprinc + "");
    fd.append('texto', texto);
    return this.http.post(baseUrl + "/crearsubcomentario", fd)
  }
  borrarSubComentario(id: number){
    var fd = new FormData();
    fd.append('estado', "I")
    return this.http.put(baseUrl+"/ocultarsubcomentario?id=" + id, fd);
  }

}
