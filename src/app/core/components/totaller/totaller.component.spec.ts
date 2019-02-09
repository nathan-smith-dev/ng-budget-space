import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotallerComponent } from './totaller.component';

describe('TotallerComponent', () => {
  let component: TotallerComponent;
  let fixture: ComponentFixture<TotallerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotallerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
