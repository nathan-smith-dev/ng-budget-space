import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ModalService]
})
export class HomeComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  handleTest() {
    this.modalService.toggleModal();
  }

}
