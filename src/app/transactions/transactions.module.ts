import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { CoreModule } from '../core/core.module';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { MonthYearSelectorComponent } from './month-year-selector/month-year-selector.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionFormComponent,
    MonthYearSelectorComponent,
    TestComponent
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
