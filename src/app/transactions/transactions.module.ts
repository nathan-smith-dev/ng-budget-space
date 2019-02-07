import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { CoreModule } from '../core/core.module';
import { TransactionFormComponent } from './containers/transaction-form/transaction-form.component';
import { MonthYearSelectorComponent } from './containers/month-year-selector/month-year-selector.component';
import { TransactionDetailViewComponent } from './containers/transaction-detail-view/transaction-detail-view.component';
import { TransactionEditViewComponent } from './containers/transaction-edit-view/transaction-edit-view.component';
import { TransactionNewViewComponent } from './containers/transaction-new-view/transaction-new-view.component';

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionFormComponent,
    MonthYearSelectorComponent,
    TransactionDetailViewComponent,
    TransactionEditViewComponent,
    TransactionNewViewComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    CoreModule,
    ReactiveFormsModule
  ],
  exports: [MonthYearSelectorComponent, TransactionFormComponent]
})
export class TransactionsModule {}
