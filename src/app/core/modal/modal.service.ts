import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private open: boolean = false;

  toggleModal() {
    this.open = !this.open;
  }

  constructor() { }
}
