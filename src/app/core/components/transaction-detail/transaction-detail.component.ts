import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoommateExpense } from 'src/app/shared/models/roomate-expense.model';
import { Transaction } from 'src/app/shared/models/transaction.model';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {
  @Input()
  transaction: Transaction | RoommateExpense;
  @Input()
  title: string;
  @Input()
  canEdit: boolean;

  @Output()
  edit = new EventEmitter<Transaction | RoommateExpense>();
  @Output()
  delete = new EventEmitter<Transaction | RoommateExpense>();
  @Output()
  toggle = new EventEmitter<Transaction | RoommateExpense>();

  constructor() {}

  ngOnInit() {}

  handleEdit() {
    this.edit.emit(this.transaction);
  }

  handleDelete() {
    this.delete.emit(this.transaction);
  }

  handleToggleDetailModal() {
    this.toggle.emit(this.transaction);
  }
}
