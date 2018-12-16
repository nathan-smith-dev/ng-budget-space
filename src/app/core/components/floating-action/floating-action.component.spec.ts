import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingActionComponent } from './floating-action.component';

describe('FloatingActionComponent', () => {
  let component: FloatingActionComponent;
  let fixture: ComponentFixture<FloatingActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
