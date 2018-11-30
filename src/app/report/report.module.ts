import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { MonthReportComponent } from './month-report/month-report.component';
import { TransactionsModule } from '../transactions/transactions.module';
import { AnnualReportComponent } from './annual-report/annual-report.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartModule } from 'angular2-chartjs';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { SharedModule } from '../shared/shared.module';
import { NetTableComponent } from './net-table/net-table.component';
import { PercentCategoryTableComponent } from './percent-category-table/percent-category-table.component';


@NgModule({
  declarations: [
    MonthReportComponent,
    AnnualReportComponent,
    PieChartComponent,
    BarChartComponent,
    NetTableComponent,
    PercentCategoryTableComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    TransactionsModule,
    ChartModule,
    SharedModule
  ]
})
export class ReportModule { }
