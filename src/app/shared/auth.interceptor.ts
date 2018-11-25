import {  HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import * as fromApp from '../store/app.reducers';
import * as formAuth from '../auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store<fromApp.AppState>) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.store.select('auth')
            .pipe(take(1),
                switchMap((authState: formAuth.State) => {
                    const clonedRequest = req.clone({ headers: req.headers.set('x-auth-token', authState.authToken) });
                    return next.handle(clonedRequest);
                })
            )
    }
}