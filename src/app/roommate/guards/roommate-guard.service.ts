import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, first, switchMap, catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { getRoommatesLoaded } from 'src/app/store/roommate';

@Injectable()
export class RoommateGuard implements CanActivate {
  constructor(private store: Store<any>) {}

  canActivate() {
    return this.store.select(getRoommatesLoaded).pipe(
      filter(loaded => loaded),
      first(),
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
