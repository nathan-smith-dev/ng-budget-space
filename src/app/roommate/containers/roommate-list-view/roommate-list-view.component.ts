import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import {
  getRoommatesAsUsers,
  getRoommatesLoading
} from 'src/app/store/roommate';

@Component({
  selector: 'app-roommate-list-view',
  templateUrl: './roommate-list-view.component.html',
  styleUrls: ['./roommate-list-view.component.scss']
})
export class RoommateListViewComponent implements OnInit {
  roommates$: Observable<User[]>;
  roommatesLoading$: Observable<boolean>;

  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit() {
    this.roommates$ = this.store.select(getRoommatesAsUsers);
    this.roommatesLoading$ = this.store.select(getRoommatesLoading);
  }

  getNames(roommates: User[]) {
    return roommates.map(r => r.firstName);
  }

  handleRoomateClicked(roommate: User) {
    this.router.navigate([`/roommates/${roommate.id}`]);
  }
}
