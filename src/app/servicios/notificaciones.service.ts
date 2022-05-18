import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { Notificaciones } from '../modelos/notificaciones.model';
import { serverUrl } from '../baseurl';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'notificaciones';
@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(private http: HttpClient) {
  }

  getNotificaciones(){
    return this.http.get(baseUrl + "/getmias");
  }
  crearNotificacion(id_usuario:Number, asunto:String, tipo:String, texto:string): Observable<any>{
    var fd = new FormData();
    fd.append('texto', texto+"");

    return this.http.post(baseUrl + "/crearnotificacion?id=" + id_usuario + "&asunto="+asunto+"&tipo="+tipo, fd);
  }
  borrarNotificacion(idnoti: number) {
    return this.http.delete(baseUrl + "/deletenotificacion?id=" + idnoti);
  }

}
