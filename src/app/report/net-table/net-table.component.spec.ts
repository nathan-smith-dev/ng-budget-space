import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetTableComponent } from './net-table.component';

describe('NetTableComponent', () => {
  let component: NetTableComponent;
  let fixture: ComponentFixture<NetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
