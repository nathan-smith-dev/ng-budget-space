import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { Router, ActivatedRoute } from '@angular/router';
import { RoommateService } from '../../services/roommate.service';
import { Store } from '@ngrx/store';
import { getRoommateId } from 'src/app/store/router/selectors';
import { first, switchMap, tap } from 'rxjs/operators';
import { FetchRoommateData } from 'src/app/store/roommate';

@Component({
  selector: 'app-new-roommate-expense-view',
  templateUrl: './new-roommate-expense-view.component.html',
  styleUrls: ['./new-roommate-expense-view.component.scss']
})
export class NewRoommateExpenseViewComponent implements OnInit {
  transaction: Transaction = new Transaction(
    null,
    null,
    { id: null, name: null },
    new Date(),
    '',
    'Expense'
  );

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roommateService: RoommateService,
    private store: Store<any>
  ) {}

  ngOnInit() {}

  handleToggle() {
    this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
  }

  handleSubmitForm(transaction: Transaction) {
    this.store
      .select(getRoommateId)
      .pipe(
        switchMap(id =>
          this.roommateService.createRoommateExpense(transaction, id)
        )
      )
      .subscribe(res => {
        this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
        this.store.dispatch(new FetchRoommateData());
      });
  }
}
