import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/transactions/transaction.model';

@Component({
  selector: 'app-transaction-table-item',
  templateUrl: './transaction-table-item.component.html',
  styleUrls: ['./transaction-table-item.component.scss']
})
export class TransactionTableItemComponent implements OnInit {
  @Input() transaction: Transaction;
  @Input() darker: boolean = false
  @Input() green: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
