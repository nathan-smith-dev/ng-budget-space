import * as moment from 'moment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Transaction } from '../transaction.model';
import { Store } from '@ngrx/store';
import * as fromApp from "../../store/app.reducers";
import * as fromTransactions from "../store/transactions.reducers";
import { Observable } from 'rxjs';
import { Category } from '../category.model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss'],
})
export class TransactionFormComponent implements OnInit {
  @Input() title: string;
  @Input() open: boolean = false;
  @Input() transaction: Transaction;
  @Output() modalToggled = new EventEmitter();
  @Output() formSubmitted = new EventEmitter();
  transactionForm: FormGroup;
  transactionState: Observable<fromTransactions.State>;
  userCategories: Category[];

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.initForm();
    this.transactionState = this.store.select('transactions');
    this.transactionState
      .subscribe((state: fromTransactions.State) => {
        this.userCategories = state.userCategories;
        if(!this.userCategories.map((cat: Category) => cat.category).includes(this.transaction.category)) {
          this.userCategories.push(new Category(this.transaction.categoryid, this.transaction.category));
        }
      });
  }

  private initForm() {
    this.transactionForm = new FormGroup({
      date: new FormControl(moment(this.transaction.date).format('YYYY-MM-DD'), [Validators.required]),
      amount: new FormControl(this.transaction.amount, [Validators.required]),
      type: new FormControl(this.transaction.type, [Validators.required]),
      category: new FormControl(this.transaction.categoryid, [Validators.required]),
      description: new FormControl(this.transaction.desc)
    })
  }

  handleToggleModal() {
    this.modalToggled.emit();
  }

  handleSubmitForm() {
    console.log(this.transactionForm);
    this.formSubmitted.emit();
  }

}
