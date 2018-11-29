import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MonthReportComponent } from './month-report/month-report.component';
import { AnnualReportComponent } from './annual-report/annual-report.component';

const routes: Routes = [
  { path: 'month-report', component: MonthReportComponent },
  { path: 'annual-report', component: AnnualReportComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReportRoutingModule { }
