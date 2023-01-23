import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log("int", request)
    const newreq = request.clone({ url: "https://63183522ece2736550c35b92.mockapi.io/Auth", headers: request.headers.set('Auth', 'Marimuthu') });
    return next.handle(request);
    // return next.handle(newreq);
  }
}
