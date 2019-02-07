import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoommatesViewComponent } from './containers/roommates-view/roommates-view.component';
import { RoommateDetailComponent } from './containers/roommate-detail/roommate-detail.component';
import { RoommateRoutingModule } from './roommate-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [RoommatesViewComponent, RoommateDetailComponent],
  imports: [CommonModule, RoommateRoutingModule, CoreModule]
})
export class RoommateModule {}
