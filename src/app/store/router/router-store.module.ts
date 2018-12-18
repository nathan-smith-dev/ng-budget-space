import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [StoreModule.forRoot(reducers), EffectsModule.forRoot([])]
})
export class RouterStoreModule {}
