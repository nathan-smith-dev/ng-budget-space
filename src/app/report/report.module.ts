import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { MonthReportComponent } from './containers/month-report/month-report.component';
// import { TransactionsModule } from '../transactions/transactions.module';
import { AnnualReportComponent } from './containers/annual-report/annual-report.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ChartModule } from 'angular2-chartjs';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { SharedModule } from '../shared/shared.module';
import { NetTableComponent } from './components/net-table/net-table.component';
import { PercentCategoryTableComponent } from './components/percent-category-table/percent-category-table.component';
import { CoreModule } from '../core/core.module';

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
    // TransactionsModule,
    ChartModule,
    SharedModule,
    CoreModule
  ]
})
export class ReportModule {}
