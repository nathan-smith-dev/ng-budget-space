import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentCategoryTableComponent } from './percent-category-table.component';

describe('PercentCategoryTableComponent', () => {
  let component: PercentCategoryTableComponent;
  let fixture: ComponentFixture<PercentCategoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentCategoryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
