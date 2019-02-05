import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth-guard.service';
import { RoommateDetailComponent } from '../roommate/components/roommate-detail/roommate-detail.component';
import { RoommatesViewComponent } from './containers/roommates-view/roommates-view.component';

const routes: Routes = [
  {
    path: '',
    component: RoommatesViewComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: 'new',
      //   component: TODO
      // },
      {
        path: ':id',
        component: RoommateDetailComponent
        // children: [{ path: 'edit', component: TODO }]
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
