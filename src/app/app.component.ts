import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-budget-space';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: environment.firebase.apiKey, 
      authDomain: environment.firebase.authDomain
    });
  }
}
