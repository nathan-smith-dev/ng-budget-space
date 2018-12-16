import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { Store } from '@ngrx/store';
import * as fromToast from '../../../store/toast';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss'],
  animations: [
    trigger('dialog', [
      state(
        'in',
        style({
          transform: 'translateY(0)'
        })
      ),
      transition('void => *', [
        style({
          transform: 'translateY(10%)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(
          300,
          style({
            transform: 'translateY(10%)'
          })
        )
      ])
    ])
  ]
})
export class ToastMessageComponent implements OnInit {
  message$: Observable<string>;
  show$: Observable<boolean>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.show$ = this.store.select(fromToast.getToastOpen);
    this.message$ = this.store.select(fromToast.getToastMessage);
  }
}
