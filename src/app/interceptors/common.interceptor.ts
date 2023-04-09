import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const API_KEY = 'Api123565656';
    const ROLE_KEY = 'ADMIN';

    let headerList = request.headers
      .append(
        'Authorization',
        `Bearer 54sdf564asdf4sad4f654asd56f56sad4f65sa4d5sa4df56as4df123as1df564sad1fas65df4asd1f56sad4f2ds1f564sdf213asd65f4asdfas6df13as1df56sad4fas1d32f1as5d6f13sad1f65as4df1asd35f1sad56f4sad1f85s4df31sdf6541sad56f1a2sdf4as56df13sa5d1f65asd4fa1s3df65as1df35as1df3a5s1df53asd135as1dfas1df`
      )
      .append(
        'token',
        '65sa4df65a4d6f54as6d5f4asd1f3sa1d65f4as1df65as1df561asdf561asd56f1sadf'
      );

    let cloned: any = request.clone({
      headers: headerList,
    });

    return next.handle(request.clone({ setHeaders: { API_KEY, ROLE_KEY,} }));
  }
}
