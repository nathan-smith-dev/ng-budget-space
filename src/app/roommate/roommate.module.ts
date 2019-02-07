import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoommatesViewComponent } from './containers/roommates-view/roommates-view.component';
import { RoommateDetailComponent } from './containers/roommate-detail/roommate-detail.component';
import { RoommateRoutingModule } from './roommate-routing.module';
import { CoreModule } from '../core/core.module';
import { RoommateExpenseViewComponent } from './containers/roommate-expense-view/roommate-expense-view.component';
import { TransactionsModule } from '../transactions/transactions.module';

@NgModule({
  declarations: [
    RoommatesViewComponent,
    RoommateDetailComponent,
    RoommateExpenseViewComponent
  ],
  imports: [CommonModule, RoommateRoutingModule, CoreModule, TransactionsModule]
})
export class RoommateModule {}
