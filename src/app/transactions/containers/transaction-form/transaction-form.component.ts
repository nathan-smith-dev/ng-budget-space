import * as moment from 'moment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Transaction } from '../../../shared/models/transaction.model';
import { Store } from '@ngrx/store';
import * as fromTransactions from '../../../store/transactions';
import { Observable } from 'rxjs';
import { Category } from '../../../shared/models/category.model';
import { AppValidators } from '../../../shared/validators/app.validators';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {
  @Input() title: string;
  @Input() open: boolean = false;
  @Input() transaction: Transaction;
  @Input() disableType: boolean = false;
  @Output() modalToggled = new EventEmitter();
  @Output() formSubmitted = new EventEmitter();
  transactionForm: FormGroup;
  transactionState: Observable<any>;
  userCategories: Category[];

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.initForm();
    this.transactionState = this.store.select(
      fromTransactions.getTransactionState
    );
    this.transactionState.subscribe((state: any) => {
      this.userCategories = state.transactions.userCategories;
      if (
        !this.userCategories
          .map((cat: Category) => cat.name)
          .includes(this.transaction.category.name)
      ) {
        this.userCategories.push(
          new Category(
            this.transaction.category.id,
            this.transaction.category.name
          )
        );
      }
    });
  }

  private initForm() {
    this.transactionForm = new FormGroup({
      date: new FormControl(
        moment(this.transaction.date).format('YYYY-MM-DD'),
        [Validators.required]
      ),
      amount: new FormControl(this.transaction.amount, [
        Validators.required,
        AppValidators.postiveNumeric
      ]),
      type: new FormControl(
        { value: this.transaction.type, disabled: this.disableType },
        [Validators.required]
      ),
      category: new FormControl(this.transaction.category.id, [
        Validators.required
      ]),
      description: new FormControl(this.transaction.description)
    });
  }

  handleToggleModal() {
    this.modalToggled.emit();
  }

  handleSubmitForm() {
    const id = this.transaction.id;
    const amount = this.transactionForm.controls.amount.value;
    const date = moment(this.transactionForm.controls.date.value)
      .startOf('day')
      .toDate();
    const categoryid = this.transactionForm.controls.category.value;
    const description = this.transactionForm.controls.description.value;
    const type = this.transactionForm.controls.type.value;

    const transaction = new Transaction(
      id,
      amount,
      { id: categoryid, name: null },
      date,
      description,
      type
    );
    this.formSubmitted.emit(transaction);
  }
}
