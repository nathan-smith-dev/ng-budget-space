import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Roommate } from 'src/app/shared/models/roommate.model';
import { Observable } from 'rxjs';
import { getRoommatesAsUsers } from '../../../store/roommate';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roommates-view',
  templateUrl: './roommates-view.component.html',
  styleUrls: ['./roommates-view.component.scss']
})
export class RoommatesViewComponent implements OnInit {
  roommates$: Observable<User[]>;
  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {
    this.roommates$ = this.store.select(getRoommatesAsUsers);
  }

  getNames(roommates: User[]) {
    return roommates.map(r => r.firstName);
  }

  handleRoomateClicked(roommate: User) {
    this.router.navigate([`/roommates/${roommate.id}`]);
  }
}
