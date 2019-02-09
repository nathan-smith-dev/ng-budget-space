import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Roommate } from 'src/app/shared/models/roommate.model';
import { getRoommateId } from 'src/app/store/router/selectors';
import {
  getRoommates,
  getRoommatesLoading,
  getRoommateById
} from 'src/app/store/roommate';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { RoommateExpense } from 'src/app/shared/models/roomate-expense.model';

@Component({
  selector: 'app-roommate-detail',
  templateUrl: './roommate-detail.component.html',
  styleUrls: ['./roommate-detail.component.scss']
})
export class RoommateDetailComponent implements OnInit {
  roommate$: Observable<Roommate>;
  roommatesLoading$: Observable<boolean>;

  constructor(
    private store: Store<any>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.roommate$ = this.store
      .select(getRoommateId)
      .pipe(switchMap(id => this.store.select(getRoommateById, { id })));

    this.roommatesLoading$ = this.store.select(getRoommatesLoading);
  }

  handleItemClicked(roommateExpense: RoommateExpense) {
    this.router.navigate([`./expense/${roommateExpense.id}`], {
      relativeTo: this.activatedRoute
    });
  }
}
