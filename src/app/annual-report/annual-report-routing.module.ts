import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnualReportComponent } from './annual-report/annual-report.component';

const routes: Routes = [
  { path: 'annual-report', component: AnnualReportComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnualReportRoutingModule { }
