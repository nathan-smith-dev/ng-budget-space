import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoommatesViewComponent } from './roommates-view.component';

describe('RoommatesViewComponent', () => {
  let component: RoommatesViewComponent;
  let fixture: ComponentFixture<RoommatesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoommatesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoommatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
