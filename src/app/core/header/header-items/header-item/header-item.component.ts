import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../../../../store/app.reducers';
import { RouterReducerState } from '@ngrx/router-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements OnInit {
  @Input() routerLink: String;

  constructor() { }

  ngOnInit() {
  }
}
