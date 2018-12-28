import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ''
})
export class MockAppHeader {}

@Component({
  selector: 'app-toast-message',
  template: ''
})
export class MockToastMessage {}

@Component({
  selector: 'app-loading-spinner',
  template: ''
})
export class MockLoadingSpinner {
  @Input()
  loading: boolean;
  @Input()
  open: boolean;
}
