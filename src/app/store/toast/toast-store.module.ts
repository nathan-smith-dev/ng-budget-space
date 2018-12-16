import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature('Toast', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class ToastStoreModule {}
