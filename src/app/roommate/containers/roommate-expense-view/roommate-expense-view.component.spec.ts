import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommateExpenseViewComponent } from './roommate-expense-view.component';

describe('RoommateExpenseViewComponent', () => {
  let component: RoommateExpenseViewComponent;
  let fixture: ComponentFixture<RoommateExpenseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoommateExpenseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommateExpenseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
