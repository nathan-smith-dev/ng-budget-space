import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-new-view',
  templateUrl: './transaction-new-view.component.html',
  styleUrls: ['./transaction-new-view.component.scss']
})
export class TransactionNewViewComponent implements OnInit {
  transaction: Transaction = new Transaction(
    null,
    null,
    null,
    null,
    new Date(),
    '',
    'Expense'
  );

  constructor(private router: Router) {}

  ngOnInit() {}

  handleToggleNew() {
    this.router.navigate(['transactions']);
  }
}
