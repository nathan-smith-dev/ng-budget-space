import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Transaction } from 'src/app/transactions/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionTableService {
  onItemClicked = new Subject<Transaction>();

  constructor() { }
}
