import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '../auth/effects';
import { reducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('Auth', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class AuthStoreModule {}
