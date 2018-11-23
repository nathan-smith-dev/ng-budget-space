import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnualReportComponent } from './annual-report/annual-report.component';
import { AnnualReportRoutingModule } from './annual-report-routing.module';

@NgModule({
  declarations: [AnnualReportComponent],
  imports: [
    CommonModule,
    AnnualReportRoutingModule
  ]
})
export class AnnualReportModule { }
