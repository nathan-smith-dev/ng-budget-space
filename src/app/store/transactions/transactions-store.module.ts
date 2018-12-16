import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers, effects } from '../transactions';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    StoreModule.forFeature('Transactions', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class TransactionsStoreModule {}
