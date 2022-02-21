import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from '../modelos/productos.model';
import { serverUrl } from '../baseurl';
import { Calendario } from '../modelos/calendario.model';

const baseUrl = serverUrl + 'producto';
const baseUrlActual = serverUrl + 'prodactuales';

@Injectable()

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Productos[]> {
    return this.http.get<Productos[]>(baseUrl);
  }

  getInfoProducto(id: any): Observable<Productos> {

    return this.http.get<Productos>(`${baseUrl}/${id}` + "?expand=relacionadas,calendario");
  }

  getCalendario(): Observable<Productos[]> {
    return this.http.get<Productos[]>(baseUrl + "?expand=calendario");
  }

  getActual(): Observable<Calendario[]> {
    var title = "Manzana";
    console.log(`${baseUrl}?nombre=${title}`);
    return this.http.get<Productos[]>(baseUrlActual + "?expand=calendario");
  }

  getPrueba(): Observable<Productos[]> {
    return this.http.get<Productos[]>(`${baseUrl}?nombre=Manzana`);
  }


  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {

    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}