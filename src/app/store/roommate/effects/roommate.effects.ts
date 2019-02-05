import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { RoommateEffectsService } from './roommate.effects.service';
import { FETCH_ROOMMATE_DATA } from '../actions';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class RoommateEffects {
  constructor(
    private actions$: Actions,
    private roommateService: RoommateEffectsService
  ) {}

  @Effect()
  roommatesFetch = this.actions$
    .ofType(FETCH_ROOMMATE_DATA)
    .pipe(switchMap(() => this.roommateService.getRoommateData()));
}
