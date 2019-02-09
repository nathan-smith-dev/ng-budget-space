import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoommateDetailComponent } from './containers/roommate-detail/roommate-detail.component';
import { RoommateRoutingModule } from './roommate-routing.module';
import { CoreModule } from '../core/core.module';
import { RoommateExpenseViewComponent } from './containers/roommate-expense-view/roommate-expense-view.component';
import { TransactionsModule } from '../transactions/transactions.module';
import { RoommateGuard } from './guards/roommate-guard.service';
import { RoommateListViewComponent } from './containers/roommate-list-view/roommate-list-view.component';

@NgModule({
  declarations: [
    RoommateDetailComponent,
    RoommateExpenseViewComponent,
    RoommateListViewComponent
  ],
  imports: [
    CommonModule,
    RoommateRoutingModule,
    CoreModule,
    TransactionsModule
  ],
  providers: [RoommateGuard]
})
export class RoommateModule {}
