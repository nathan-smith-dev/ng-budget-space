import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTableHeaderComponent } from './transaction-table-header.component';

describe('TransactionTableHeaderComponent', () => {
  let component: TransactionTableHeaderComponent;
  let fixture: ComponentFixture<TransactionTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
