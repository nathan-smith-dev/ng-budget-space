import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RoommateExpense } from 'src/app/shared/models/roomate-expense.model';
import {
  getTransactionId,
  getRoommateId
} from 'src/app/store/router/selectors';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { getRoommates, FetchRoommateData } from 'src/app/store/roommate';
import { Location } from '@angular/common';
import { RoommateService } from '../../services/roommate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roommate-expense-view',
  templateUrl: './roommate-expense-view.component.html',
  styleUrls: ['./roommate-expense-view.component.scss']
})
export class RoommateExpenseViewComponent implements OnInit {
  expense$: Observable<RoommateExpense>;

  constructor(
    private store: Store<any>,
    private location: Location,
    private roommateService: RoommateService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.expense$ = this.store.select(getTransactionId).pipe(
      withLatestFrom(this.store.select(getRoommateId)),
      switchMap(([transactionId, roommateId]) =>
        this.store.select(getRoommates).pipe(
          map(roommates => {
            return roommates[roommateId];
          }),
          map(roommate => roommate.expenses.find(e => e.id === transactionId))
        )
      )
    );
  }

  handleEdit(expense: RoommateExpense) {
    console.log('Handle edit', expense);
  }

  handleDelete(expense: RoommateExpense) {
    this.roommateService.deleteRoommateExpense(expense.id).subscribe(res => {
      this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
      this.store.dispatch(new FetchRoommateData());
    });
  }

  handleToggle(expense: RoommateExpense) {
    this.location.back();
  }
}
