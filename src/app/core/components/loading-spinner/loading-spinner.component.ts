import { Component, OnInit, Input } from '@angular/core';
import { fadeInOut } from '../../../shared/animations/app.animations';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  animations: [fadeInOut]
})
export class LoadingSpinnerComponent implements OnInit {
  @Input()
  open: boolean = false;

  constructor() {}

  ngOnInit() {}
}
