import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Roommate } from 'src/app/shared/models/roommate.model';
import { getRoommateId } from 'src/app/store/router/selectors';
import { getRoommates } from 'src/app/store/roommate';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-roommate-detail',
  templateUrl: './roommate-detail.component.html',
  styleUrls: ['./roommate-detail.component.scss']
})
export class RoommateDetailComponent implements OnInit {
  roommate$: Observable<Roommate>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.roommate$ = this.store.select(getRoommateId).pipe(
      switchMap(id => {
        return this.store
          .select(getRoommates)
          .pipe(map(roommates => roommates.find(r => r.user.id === id)));
      })
    );
  }

  handleItemClicked(event: any) {
    console.log(event);
  }
}
