import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoommateExpenseViewComponent } from './new-roommate-expense-view.component';

describe('NewRoommateExpenseViewComponent', () => {
  let component: NewRoommateExpenseViewComponent;
  let fixture: ComponentFixture<NewRoommateExpenseViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRoommateExpenseViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRoommateExpenseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
