import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('modalWrapper', [
      state('in', style({
      })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate(150)
      ]),
      transition('* => void', [
        animate(150, style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() open: boolean = false;
  @Output() modalToggled = new EventEmitter();
  
  faTimes = faTimes;

  constructor() { }

  ngOnInit() {
  }

  handleToggleModal() {
    this.modalToggled.emit();
  }

}
