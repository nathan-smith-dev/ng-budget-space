import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { TransactionsModule } from './transactions/transactions.module';
import { MonthReportModule } from './month-report/month-report.module';
import { AnnualReportModule } from './annual-report/annual-report.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule, 
    TransactionsModule,
    MonthReportModule, 
    AnnualReportModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
