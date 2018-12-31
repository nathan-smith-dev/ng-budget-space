import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions.component';
import { AuthGuard } from '../auth/guards/auth-guard.service';
import { TransactionDetailViewComponent } from './containers/transaction-detail-view/transaction-detail-view.component';
import { TransactionEditViewComponent } from './containers/transaction-edit-view/transaction-edit-view.component';
import { TransactionNewViewComponent } from './containers/transaction-new-view/transaction-new-view.component';
import { TransactionsGuard } from './guards/transaction-guard.service';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    canActivate: [AuthGuard, TransactionsGuard],
    children: [
      {
        path: 'new',
        component: TransactionNewViewComponent
      },
      {
        path: ':id',
        component: TransactionDetailViewComponent,
        children: [{ path: 'edit', component: TransactionEditViewComponent }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class TransactionsRoutingModule {}
