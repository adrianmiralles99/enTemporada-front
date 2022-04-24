import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//conexión http
import { Observable } from 'rxjs';//sirve para manejar operaciones asincronas
import { Reporte } from '../modelos/reporte.model';
import { serverUrl } from '../baseurl';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = serverUrl + 'reportes';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  constructor(private http: HttpClient) { }
  crearReporte(idcomment:number,idusuarioreportado:number, motivo:string, tipo:string):Observable<any>{
    var fd = new FormData();
    fd.append('id_comentario', idcomment + "");
    fd.append('id_usuarioreportado', idusuarioreportado+"");
    fd.append('motivo', motivo);
    fd.append('tipo_comentario', tipo);

    return this.http.post(baseUrl + "/crearreporte", fd)
  }
}
