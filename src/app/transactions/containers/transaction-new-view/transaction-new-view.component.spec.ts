import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionNewViewComponent } from './transaction-new-view.component';

describe('TransactionNewViewComponent', () => {
  let component: TransactionNewViewComponent;
  let fixture: ComponentFixture<TransactionNewViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionNewViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionNewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
