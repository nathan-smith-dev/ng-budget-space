import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoommatesViewComponent } from './containers/roommates-view/roommates-view.component';
import { RoommateDetailComponent } from './components/roommate-detail/roommate-detail.component';
import { RoommateRoutingModule } from './roommate-routing.module';

@NgModule({
  declarations: [RoommatesViewComponent, RoommateDetailComponent],
  imports: [CommonModule, RoommateRoutingModule]
})
export class RoommateModule {}
