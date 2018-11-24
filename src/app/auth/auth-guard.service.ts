import { CanActivate } from "@angular/router/src/utils/preactivation";
import { Store } from "@ngrx/store";
import { take, map } from 'rxjs/operators';

import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    cannotNavigate = new Subject<void>();

    constructor(
        private store: Store<fromApp.AppState>,
    ) {}

    canActivate() {
        return this.store.select('auth')
            .pipe(take(1), 
                map((authState: fromAuth.State) => {
                    if(!authState.isAuthenticated) {
                        this.cannotNavigate.next();
                    }
                    return authState.isAuthenticated;
                }));
    }
}