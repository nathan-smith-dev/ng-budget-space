import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  { path: 'transactions', component: TransactionsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class TransactionsRoutingModule { }