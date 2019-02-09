import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommateListViewComponent } from './roommate-list-view.component';

describe('RoommateListViewComponent', () => {
  let component: RoommateListViewComponent;
  let fixture: ComponentFixture<RoommateListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoommateListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommateListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
