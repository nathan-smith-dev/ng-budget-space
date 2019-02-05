import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from '../roommate';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forFeature('Roommate', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class RoommateStoreModule {}
