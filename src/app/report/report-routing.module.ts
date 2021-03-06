import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MonthReportComponent } from './containers/month-report/month-report.component';
import { AnnualReportComponent } from './containers/annual-report/annual-report.component';

const routes: Routes = [
  {
    path: '',
    component: MonthReportComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule {}
