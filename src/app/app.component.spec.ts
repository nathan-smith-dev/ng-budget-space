import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {
  MockAppHeader,
  MockToastMessage,
  MockLoadingSpinner
} from './testing/mock-components';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserDataService } from './shared/services/user-data.service';

describe('AppComponent', () => {
  let mockStore;
  let mockFireAuthStub;
  let mockUserDataService;
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    mockStore = jasmine.createSpyObj(['dispatch', 'select']);
    mockFireAuthStub = {
      user: of({})
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MockAppHeader,
        MockToastMessage,
        MockLoadingSpinner
      ],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: AngularFireAuth, useValue: mockFireAuthStub },
        { provide: UserDataService, useValue: mockUserDataService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call initializeUser onInit', () => {
    spyOn(component, 'initializeUser');
    fixture.detectChanges();

    expect(component.initializeUser).toHaveBeenCalledWith({});
  });
});
