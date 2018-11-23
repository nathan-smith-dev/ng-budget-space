import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthReportComponent } from './month-report/month-report.component';

const routes: Routes = [
  { path: 'month-report', component: MonthReportComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthReportRoutingModule { }
