import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Store } from '@ngrx/store';
import { getRoommateData } from '../../../shared/graphql/queries';
import { map } from 'rxjs/operators';
import { SetRoommateData } from '../actions';
import { Roommate } from 'src/app/shared/models/roommate.model';

@Injectable({
  providedIn: 'root'
})
export class RoommateEffectsService {
  constructor(private store: Store<any>, private apollo: Apollo) {}

  getRoommateData() {
    return this.apollo
      .query({
        query: getRoommateData(),
        fetchPolicy: 'network-only'
      })
      .pipe(
        map((value: any) => {
          return new SetRoommateData(value.data.roommates as Roommate[]);
        })
      );
  }
}
