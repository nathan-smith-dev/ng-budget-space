import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { TransactionTableService } from '../transaction-table.service';
import { RoommateExpense } from 'src/app/shared/models/roomate-expense.model';

@Component({
  selector: 'app-transaction-table-item',
  templateUrl: './transaction-table-item.component.html',
  styleUrls: ['./transaction-table-item.component.scss']
})
export class TransactionTableItemComponent implements OnInit {
  @Input() transaction: Transaction | RoommateExpense;
  @Input() darker: boolean = false;
  @Input() green: boolean = false;

  constructor(private transactionTableService: TransactionTableService) {}

  ngOnInit() {}

  handleTableItemClicked() {
    this.transactionTableService.onItemClicked.next(this.transaction);
  }
}
