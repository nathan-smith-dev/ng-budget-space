import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../store/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(fromAuth.getAuthState).pipe(
      take(1),
      switchMap(authState => {
        const clonedRequest = req.clone({
          headers: req.headers.set(
            'x-auth-token',
            authState.currentUser.authToken
          )
        });
        return next.handle(clonedRequest);
      })
    );
  }
}
