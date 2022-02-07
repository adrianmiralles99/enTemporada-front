import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../modelos/usuarios.model';
import { serverUrl } from '../baseurl';

const baseUrl = serverUrl + 'usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }
}
