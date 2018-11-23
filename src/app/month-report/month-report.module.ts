import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthReportComponent } from './month-report/month-report.component';
import { MonthReportRoutingModule } from './month-report-routing.module';

@NgModule({
  declarations: [MonthReportComponent],
  imports: [
    CommonModule,
    MonthReportRoutingModule
  ]
})
export class MonthReportModule { }
