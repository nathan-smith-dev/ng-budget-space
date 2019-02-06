import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  items: string[];
  @Output()
  itemClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleOnClick(index: number) {
    this.itemClicked.emit(index);
  }
}
