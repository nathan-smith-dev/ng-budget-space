import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {
  MockAppHeader,
  MockToastMessage,
  MockLoadingSpinner
} from './testing/mock-components';
import { Store } from '@ngrx/store';

describe('AppComponent', () => {
  let mockStore;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    mockStore = jasmine.createSpyObj(['dispatch']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MockAppHeader,
        MockToastMessage,
        MockLoadingSpinner
      ],
      providers: [{ provide: Store, useValue: mockStore }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
