import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AuthGuard } from './auth/guards/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'transactions',
    loadChildren: './transactions/transactions.module#TransactionsModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'roommates',
    loadChildren: './roommate/roommate.module#RoommateModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
