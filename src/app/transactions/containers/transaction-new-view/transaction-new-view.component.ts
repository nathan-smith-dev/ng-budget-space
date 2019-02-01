import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-new-view',
  templateUrl: './transaction-new-view.component.html',
  styleUrls: ['./transaction-new-view.component.scss']
})
export class TransactionNewViewComponent implements OnInit {
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
    private transactionService: TransactionService
  ) {}

  ngOnInit() {}

  handleToggleNew() {
    this.router.navigate(['transactions']);
  }

  handleSubmitForm(transaction: Transaction) {
    this.transactionService.postTransaction(transaction);
  }
}
