import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { TransactionEffects } from './store/transactions.effects';
import { StoreModule } from '@ngrx/store';
import { transactionReducer } from './store/transactions.reducers';

@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    StoreModule.forFeature('transactions', transactionReducer),
    EffectsModule.forFeature([TransactionEffects])
  ]
})
export class TransactionsModule { }
