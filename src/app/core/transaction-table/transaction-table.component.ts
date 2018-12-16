import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { TransactionTableService } from './transaction-table.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit, OnDestroy {
  @Input() transactions: Transaction[];
  @Output() itemClicked = new EventEmitter();

  itemClickedSubscription: Subscription;

  constructor(private transactionTableService: TransactionTableService) { }

  ngOnInit() {
    this.itemClickedSubscription = this.transactionTableService.onItemClicked
      .subscribe((transaction: Transaction) => {
        this.itemClicked.emit(transaction);
      });
  }

  ngOnDestroy() {
    this.itemClickedSubscription.unsubscribe();
  }

}
