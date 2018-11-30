import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { MonthReportComponent } from './month-report/month-report.component';
import { TransactionsModule } from '../transactions/transactions.module';
import { AnnualReportComponent } from './annual-report/annual-report.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartModule } from 'angular2-chartjs';
import { BarChartComponent } from './bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    MonthReportComponent,
    AnnualReportComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    TransactionsModule,
    ChartModule
  ]
})
export class ReportModule { }
