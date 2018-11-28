import * as moment from 'moment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Transaction } from '../transaction.model';
import { Store } from '@ngrx/store';
import * as fromApp from "../../store/app.reducers";
import * as fromTransactions from "../store/transactions.reducers";
import { Observable } from 'rxjs';
import { Category } from '../category.model';
import { AppValidators } from 'src/app/validators/validators';

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
      amount: new FormControl(this.transaction.amount, [Validators.required, AppValidators.postiveNumeric]),
      type: new FormControl(this.transaction.type, [Validators.required]),
      category: new FormControl(this.transaction.categoryid, [Validators.required]),
      description: new FormControl(this.transaction.desc)
    })
  }

  handleToggleModal() {
    this.modalToggled.emit();
  }

  handleSubmitForm() {
    const id = this.transaction.id;
    const amount = this.transactionForm.controls.amount.value;
    const date = this.transactionForm.controls.date.value;
    const categoryid = this.transactionForm.controls.category.value;
    const desc = this.transactionForm.controls.description.value;
    const type = this.transactionForm.controls.type.value;

    const transaction = new Transaction(id, amount, null, categoryid, date, desc, type);
    this.formSubmitted.emit({ transaction, edit: id ? true : false });
  }

}
