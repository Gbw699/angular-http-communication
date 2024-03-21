import {
  HttpContextToken,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export const CONTENT_TYPE = new HttpContextToken<string>(
  () => "application/json"
);

Injectable();
export class AddHeaderInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(`AddHeaderInterceptor - ${req.url}`);

    let jsonReq = req.clone({
      setHeaders: { "Content-Type": req.context.get(CONTENT_TYPE) },
    });

    return next.handle(jsonReq);
  }
}
