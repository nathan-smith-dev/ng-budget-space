import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { MonthReportComponent } from './month-report/month-report.component';
import { TransactionsModule } from '../transactions/transactions.module';
import { AnnualReportComponent } from './annual-report/annual-report.component';

@NgModule({
  declarations: [
    MonthReportComponent,
    AnnualReportComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    TransactionsModule
  ]
})
export class ReportModule { }
