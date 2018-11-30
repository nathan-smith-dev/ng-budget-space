import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CategorizedTransaction } from 'src/app/transactions/CategorizedTransaction.model';

@Component({
  selector: 'app-percent-category-table',
  templateUrl: './percent-category-table.component.html',
  styleUrls: ['./percent-category-table.component.scss']
})
export class PercentCategoryTableComponent implements OnInit {
  @Input() total: number;
  @Input() categorizedExpenses: CategorizedTransaction[];
  @Input() colors: string[];

  constructor() { }

  ngOnInit() {
  }

}
