import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth-guard.service';
import { RoommateDetailComponent } from '../roommate/containers/roommate-detail/roommate-detail.component';
import { RoommateExpenseViewComponent } from './containers/roommate-expense-view/roommate-expense-view.component';
import { RoommateGuard } from './guards/roommate-guard.service';
import { RoommateListViewComponent } from './containers/roommate-list-view/roommate-list-view.component';

const routes: Routes = [
  {
    path: '',
    component: RoommateListViewComponent,
    canActivate: [AuthGuard, RoommateGuard],
    children: [
      // {
      //   path: 'new',
      //   component: TODO
      // },
    ]
  },
  {
    path: ':id',
    component: RoommateDetailComponent,
    canActivate: [AuthGuard, RoommateGuard],
    children: [
      {
        path: 'expense',
        children: [
          {
            path: ':id',
            component: RoommateExpenseViewComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class RoommateRoutingModule {}
