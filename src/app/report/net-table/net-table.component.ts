import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-net-table',
  templateUrl: './net-table.component.html',
  styleUrls: ['./net-table.component.scss']
})
export class NetTableComponent implements OnInit {
  @Input() income: number;
  @Input() expense: number;
  @Input() net: number;

  constructor() { }

  ngOnInit() {
  }

}
