import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  handleTest() {
    console.log('Handle Test');
    this.httpClient.get<any>('https://budget-space.com/api/transactions')
      .subscribe(result => {
        console.log(result);
      })
  }

}
