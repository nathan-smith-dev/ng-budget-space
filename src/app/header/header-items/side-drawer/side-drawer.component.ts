import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss'],
  animations:[
    trigger('list1', [
      state('in', style({
        left: 0
      })),
      transition('void => *', [
        style({
          left: '-100%'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          left: '-100%'
        }))
      ]),
    ])
  ]

})
export class SideDrawerComponent implements OnInit {
  @Input() open: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
