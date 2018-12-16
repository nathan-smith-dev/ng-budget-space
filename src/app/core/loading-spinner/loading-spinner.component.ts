import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  animations: [
    trigger('spinnerWrapper', [
      state('in', style({})),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate(100)
      ]),
      transition('* => void', [
        animate(
          100,
          style({
            opacity: 0
          })
        )
      ])
    ])
  ]
})
export class LoadingSpinnerComponent implements OnInit {
  @Input()
  open: boolean = false;

  constructor() {}

  ngOnInit() {}
}
