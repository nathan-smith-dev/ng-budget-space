import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss'],
})
export class TransactionFormComponent implements OnInit {
  @Input() title: string;
  @Input() open: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
