import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenStorageService } from '../servicios/token-storage.service';
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';//esto tiene que estar si o sí así, es uno de los motivos por los cuales no funcionaba la api
// for Spring Boot back-end
@Injectable()

// AuthInterceptor “intercepta” la petición HTTP, la modifica (si el token existe) y entonces continua su camino
export class AuthInterceptor implements HttpInterceptor {
    constructor(private token: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {//retorna un observable
        let authReq = req;
        const token = this.token.getToken();

        if (token != null) {//si el toquen existe
            authReq = req.clone({
                headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)//modificamos la cabecera con con un header de tipo autorizacion y con el valor del bearer y del token
                // setHeaders: {
                //     Authorization: 'Bearer ' + token
                // }
            });
        }
        //pase lo que pase, sigue su camino
        return next.handle(authReq);
    }
}
export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
