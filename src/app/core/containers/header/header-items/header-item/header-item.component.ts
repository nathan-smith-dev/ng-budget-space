import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from '../../header.service';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements OnInit {
  @Input() routerLink: String;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
  }

  handleCloseDrawer() {
    this.headerService.setIsOpen(false);
  }
}
