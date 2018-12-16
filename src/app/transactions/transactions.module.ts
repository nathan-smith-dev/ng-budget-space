import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './containers/transactions/transactions.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { CoreModule } from '../core/core.module';
import { TransactionFormComponent } from './containers/transaction-form/transaction-form.component';
import { MonthYearSelectorComponent } from './containers/month-year-selector/month-year-selector.component';

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionFormComponent,
    MonthYearSelectorComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  exports: [MonthYearSelectorComponent]
})
export class TransactionsModule {}
