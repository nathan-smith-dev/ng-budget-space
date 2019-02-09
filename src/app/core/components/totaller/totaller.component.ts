import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-totaller',
  templateUrl: './totaller.component.html',
  styleUrls: ['./totaller.component.scss']
})
export class TotallerComponent implements OnInit {
  @Input()
  positiveHeader: string;
  @Input()
  negativeHeader: string;
  @Input()
  totalHeader: string;
  @Input()
  positiveAmount: number;
  @Input()
  negativeAmount: number;
  @Input()
  totalAmount: number;

  constructor() {}

  ngOnInit() {}
}
