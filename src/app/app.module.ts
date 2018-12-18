import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ReportModule } from './report/report.module';
import { AuthStoreModule } from './store/auth/auth-store.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth/guards/auth-guard.service';
import { ToastStoreModule } from './store/toast/toast-store.module';
import { TransactionsStoreModule } from './store/transactions/transactions-store.module';
import { RouterStoreModule } from './store/router/router-store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    AuthModule,
    ReportModule,
    RouterStoreModule,
    AuthStoreModule,
    ToastStoreModule,
    TransactionsStoreModule,
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
