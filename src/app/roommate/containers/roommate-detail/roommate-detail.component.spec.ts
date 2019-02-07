import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommateDetailComponent } from './roommate-detail.component';

describe('RoommateDetailComponent', () => {
  let component: RoommateDetailComponent;
  let fixture: ComponentFixture<RoommateDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoommateDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
