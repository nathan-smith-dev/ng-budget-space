import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  handleToggle() {
    this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
  }

  handleSubmitForm(transaction: Transaction) {
    console.log('handleSubmitForm', transaction);
  }
}
