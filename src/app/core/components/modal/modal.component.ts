import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { fadeInOut } from '../../../shared/animations/app.animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fadeInOut]
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() open: boolean = false;
  @Output() modalToggled = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit() {}

  handleToggleModal() {
    this.modalToggled.emit();
  }
}
