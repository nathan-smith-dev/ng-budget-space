import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTableItemComponent } from './transaction-table-item.component';

describe('TransactionTableItemComponent', () => {
  let component: TransactionTableItemComponent;
  let fixture: ComponentFixture<TransactionTableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTableItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
