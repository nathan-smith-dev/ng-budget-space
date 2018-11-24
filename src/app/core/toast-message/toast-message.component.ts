import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss'],
  animations: [
    trigger('dialog', [
      state('in', style({
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          transform: 'translateY(10%)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateY(10%)'
        }))
      ])
    ])
  ]
})
export class ToastMessageComponent implements OnInit {
  @Input() message: string;
  @Input() show: boolean;

  constructor() { }

  ngOnInit() {
  }

}
