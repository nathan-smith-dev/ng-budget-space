import { Component, OnInit, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-floating-action',
  templateUrl: './floating-action.component.html',
  styleUrls: ['./floating-action.component.scss']
})
export class FloatingActionComponent implements OnInit {
  @Input() color: string;
  
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
